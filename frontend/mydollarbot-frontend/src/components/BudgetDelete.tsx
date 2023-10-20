import React, { useState, useEffect } from 'react';
import { Form, Button, Select, Modal, Typography } from 'antd';
import { getAllCategories, updateCategoryBudget } from '../api';

const { Option } = Select;
const { confirm } = Modal;

const BudgetDelete: React.FC = () => {
    const [category, setCategory] = useState<string | null>('');
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        // Fetch the categories from API
        const fetchCategories = async () => {
            try {
                const response = await getAllCategories();
                setCategories(response);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleDelete = () => {
        // Confirm before deletion
        confirm({
            title: 'Do you want to delete this category?',
            content: `Category: ${category}`,
            async onOk() {
                try {
                    const response = await updateCategoryBudget("6577837440", category, "-1");
                    console.log(`Deleted category budget: ${category}`, response);
                } catch (error) {
                    console.error('Error deleting category budget:', error);
                }
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            <Typography.Title level={4} style={{ color: 'red' }}>Delete Budget by Category</Typography.Title>
            <Form layout="vertical" onFinish={handleDelete}>
                <Form.Item label="Category">
                    <Select
                        value={category}
                        onChange={(value) => setCategory(value)}
                        placeholder="Select a category to delete"
                    >
                        {categories.map((cat) => (
                            <Option key={cat} value={cat}>
                                {cat}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={!category}
                        style={{ backgroundColor: '#f5222d', borderColor: '#f5222d' }}
                    >
                        Delete
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default BudgetDelete;
