import React, { useState } from 'react';
import { Form, Button, Select, Modal, Typography } from 'antd';

const { Option } = Select;
const { confirm } = Modal;

/**
 * BudgetDelete Component
 * 
 * This component provides functionality to delete a budget category.
 * It uses the Ant Design library for UI components.
 * Users can select a category from a dropdown and then confirm the deletion.
 */
const BudgetDelete: React.FC = () => {
     // State to track the selected category for deletion
    const [category, setCategory] = useState<string | null>(null);
    // List of categories. Replace with categories fetched from API if needed.
    const categories = ['Food', 'Rent', 'Entertainment']; // Replace with categories from API if needed

    /**
     * Handles the deletion of the selected category.
     * Before deletion, a confirmation modal is shown to the user.
     */
    const handleDelete = () => {
        // Confirm before deletion
        confirm({
            title: 'Do you want to delete this category budget?',
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
      <Typography.Title level={4} style={{ color: 'red' }}>Delete Budget</Typography.Title>
            <Form layout="vertical" onFinish={handleDelete}>
                <Form.Item label="Select Category">
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
