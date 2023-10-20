import React, { useState } from 'react';
import { Form, Button, Select, Modal, Typography } from 'antd';

const { Option } = Select;
const { confirm } = Modal;

const BudgetDelete: React.FC = () => {
    const [category, setCategory] = useState<string | null>('');

    const categories = ['Food', 'Rent', 'Entertainment']; // Replace with categories from API if needed

    const handleDelete = () => {
        // Confirm before deletion
        confirm({
            title: 'Do you want to delete this category?',
            content: `Category: ${category}`,
            onOk() {
                // TODO: Handle the delete logic here. Update the backend/API to delete the category.
                console.log(`Deleted category: ${category}`);
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
