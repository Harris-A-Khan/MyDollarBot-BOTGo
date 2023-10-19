import React, { useState } from 'react';
import { Form, Input, Button, InputNumber, DatePicker, Modal, Typography } from 'antd';

const { confirm } = Modal;

/**
 * AddSpendingRecord Component
 * 
 * This component provides functionality to add a new spending record.
 * It uses the Ant Design library for UI components.
 * Users can input details about the spending, such as category, amount, description, and date.
 * Before adding, a confirmation modal is shown to the user.
 */
const AddSpendingRecord: React.FC = () => {
  // Using Ant Design's useForm hook to manage form operations
  const [form] = Form.useForm();

  /**
   * Handles the submission of the form.
   * This function can be updated to handle the logic for adding the record to the backend/API.
   * Before adding, a confirmation modal is shown to the user.
   */
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
      <Typography.Title level={4} style={{ color: 'red' }}>Add New Spending Record</Typography.Title>
      
      {/* Form to input details about the spending */}
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
