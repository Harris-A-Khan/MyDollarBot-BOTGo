import React, { useState, useEffect } from 'react';
import { Form, Input, Button, InputNumber, DatePicker, Modal, Typography, Select } from 'antd';
import { getAllCategories, addRecord } from '../api';

const { Option } = Select;
const { confirm } = Modal;

const AddSpendingRecord = () => {
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch all categories and update state
    async function fetchCategories() {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    }

    fetchCategories();
  }, []);

  const handleAdd = (values) => {
    confirm({
      title: 'Do you want to add this spending record?',
      content: `Category: ${values.category}, Amount: ${values.amount}`,
      async onOk() {
        try {
          await addRecord("6577837440", values.date.format('DD-MMM-YYYY HH:mm'), values.category, values.amount);
          console.log('Added record:', values);
          form.resetFields();  // Reset the form after adding
        } catch (error) {
          console.error('Error adding record:', error);
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography.Title level={4} style={{ color: 'red' }}>Add New Spending Record</Typography.Title>

      <Form layout="vertical" onFinish={handleAdd} form={form}>
        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: 'Please select the category!' }]}
        >
          <Select placeholder="Select a category">
            {categories.map(category => (
              <Option key={category} value={category}>
                {category}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Amount"
          name="amount"
          rules={[{ required: true, message: 'Please input the amount!' }]}
        >
          <InputNumber style={{ width: '100%' }} placeholder="Enter amount" />
        </Form.Item>
        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: 'Please select the date!' }]}
        >
          <DatePicker format="DD-MMM-YYYY HH:mm" style={{ width: '100%' }} showTime />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Record
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddSpendingRecord;
