import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const BudgetUpdate: React.FC = () => {
  const [category, setCategory] = useState<string>('');
  const [allocated, setAllocated] = useState<number>(0);

  const categories = ['Food', 'Rent', 'Entertainment']; // Replace with categories from API if needed

  const handleSubmit = () => {
    // TODO: Handle the update logic here. Update the backend/API with the new allocated amount.
    console.log(`Updated ${category} with allocated amount: ${allocated}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Update Budget by Category</h2>
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
