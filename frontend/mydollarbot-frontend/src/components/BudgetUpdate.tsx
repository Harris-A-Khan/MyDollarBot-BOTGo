import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Typography} from 'antd';
import { getAllCategories, updateCategoryBudget } from '../api';

const { Option } = Select;

const BudgetUpdate: React.FC = () => {
  const [category, setCategory] = useState<string>('');
  const [allocated, setAllocated] = useState<number>(0);

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await updateCategoryBudget("6577837440", category, allocated.toString());
      console.log(response);
      // reset form 
      setCategory('');
      setAllocated(0);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography.Title level={4} style={{ color: 'red' }}>Update Budget by Category</Typography.Title>
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
