import React, { useState } from 'react';
import { Form, Input, Button, InputNumber, DatePicker, Select, Modal,Typography } from 'antd';

const { Option } = Select;
const { confirm } = Modal;

const AddRecurringSpending: React.FC = () => {
  const [form] = Form.useForm();

  const handleAdd = (values: any) => {
    // Confirm before adding
    confirm({
      title: 'Do you want to add this recurring spending record?',
      content: `Category: ${values.category}, Amount: ${values.amount}, Recurrence: ${values.recurrence}`,
      onOk() {
        // TODO: Handle the add logic here. Update the backend/API to add the recurring record.
        console.log(`Added recurring record:`, values);
        form.resetFields();  // Reset the form after adding
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography.Title level={4} style={{ color: 'red' }}>Add New Recurring Spending Record</Typography.Title>
      <Form layout="vertical" onFinish={handleAdd} form={form}>
        <Form.Item 
          label="Category" 
          name="category"
          rules={[{ required: true, message: 'Please input the category!' }]}
        >
          <Input placeholder="e.g., Food, Rent, Utilities" />
        </Form.Item>
        <Form.Item 
          label="Amount" 
          name="amount"
          rules={[{ required: true, message: 'Please input the amount!' }]}
        >
          <InputNumber style={{ width: '100%' }} placeholder="Enter amount" />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input placeholder="Description of spending" />
        </Form.Item>
        <Form.Item 
          label="Start Date" 
          name="startDate"
          rules={[{ required: true, message: 'Please select the start date!' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item 
          label="Recurrence" 
          name="recurrence"
          rules={[{ required: true, message: 'Please select the recurrence!' }]}
        >
          <Select placeholder="Select recurrence">
            <Option value="daily">Daily</Option>
            <Option value="weekly">Weekly</Option>
            <Option value="monthly">Monthly</Option>
            <Option value="annually">Annually</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Recurring Record
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddRecurringSpending;
