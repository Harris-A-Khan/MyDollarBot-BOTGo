import React, { useState } from 'react';
import { Form, Input, Button, Select, Typography } from 'antd';

const { Option } = Select;

/**
 * BudgetUpdate Component
 * 
 * This component provides functionality to update the allocated amount for a budget category.
 * It uses the Ant Design library for UI components.
 * Users can select a category from a dropdown, input a new allocated amount, and then submit the update.
 */
const BudgetUpdate: React.FC = () => {
  // State to track the selected category and its allocated amount
  const [category, setCategory] = useState<string>('');
  const [allocated, setAllocated] = useState<number>(0);

  // List of categories. Replace with categories fetched from API if needed.
  const categories = ['Food', 'Rent', 'Entertainment'];

  /**
   * Handles the submission of the form.
   * This function can be updated to handle the logic for updating the backend/API with the new allocated amount.
   */
  const handleSubmit = () => {
    // TODO: Handle the update logic here. Update the backend/API with the new allocated amount.
    console.log(`Updated ${category} with allocated amount: ${allocated}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography.Title level={4} style={{ color: 'red' }}>Update Budget by Category</Typography.Title>
      
      {/* Form to select a category and input a new allocated amount */}
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Category">
          <Select value={category} onChange={(value) => setCategory(value)}>
            {categories.map(cat => (
              <Option key={cat} value={cat}>
                {cat}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Allocated Amount">
          <Input
            type="number"
            value={allocated}
            onChange={(e) => setAllocated(Number(e.target.value))}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BudgetUpdate;
