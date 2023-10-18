import React, { useState } from 'react';
import { Form, Input, Button, InputNumber, DatePicker, Modal } from 'antd';

const { confirm } = Modal;

const AddSpendingRecord: React.FC = () => {
  const [form] = Form.useForm();
  
  const handleAdd = (values: any) => {
    // Confirm before adding
    confirm({
      title: 'Do you want to add this spending record?',
      content: `Category: ${values.category}, Amount: ${values.amount}`,
      onOk() {
        // TODO: Handle the add logic here. Update the backend/API to add the record.
        console.log(`Added record:`, values);
        form.resetFields();  // Reset the form after adding
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add New Spending Record</h2>
      <Form layout="vertical" onFinish={handleAdd} form={form}>
        <Form.Item 
          label="Category" 
          name="category"
          rules={[{ required: true, message: 'Please input the category!' }]}
        >
          <Input placeholder="e.g., Food, Rent, Entertainment" />
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
          label="Date" 
          name="date"
          rules={[{ required: true, message: 'Please select the date!' }]}
        >
          <DatePicker style={{ width: '100%' }} />
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
