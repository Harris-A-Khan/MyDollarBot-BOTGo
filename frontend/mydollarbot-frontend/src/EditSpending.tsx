import React, { useState } from 'react';
import { Table, Input, Divider, Typography, Select, Button } from 'antd';

type Spending = {
  category: string;
  amount: number;
  description: string;
  date: string;
};

type BudgetData = {
  category: string;
  allocated: number;
  spent: number;
  remaining: number;
};

type MockDataType = {
  budget_data: BudgetData[];
  spendings: Spending[];
  categories: string[];
};

const mockData: MockDataType = {
  budget_data: [
    { category: 'Food', allocated: 500, spent: 300, remaining: 200 },
    { category: 'Rent', allocated: 1000, spent: 1000, remaining: 0 },
    { category: 'Entertainment', allocated: 100, spent: 50, remaining: 50 },
  ],
  spendings: [
    { category: 'Food', amount: 50, description: 'Dinner at ABC restaurant', date: '2023-10-01' },
    { category: 'Food', amount: 30, description: 'Groceries', date: '2023-10-02' },
    { category: 'Entertainment', amount: 50, description: 'Movie tickets', date: '2023-10-03' },
  ],
  categories: ['Food', 'Rent', 'Entertainment'],
};

function EditSpending() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSpending, setSelectedSpending] = useState<number | null>(null);
  const [editedDescription, setEditedDescription] = useState<string>('');
  const [editedAmount, setEditedAmount] = useState<number | string>('');

  const handleEditSpending = () => {
    if (selectedSpending !== null) {
      const spending = mockData.spendings[selectedSpending];
      spending.description = editedDescription || spending.description;
      spending.amount = Number(editedAmount) || spending.amount;
      setSelectedSpending(null);
      setEditedDescription('');
      setEditedAmount('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography.Title level={4} style={{ color: 'red' }}>Edit Spending</Typography.Title>

      <Select
        style={{ width: 200, marginBottom: 20 }}
        placeholder="Select a category"
        onChange={(value: string) => setSelectedCategory(value)}
        allowClear
        onClear={() => setSelectedCategory(null)}
      >
        {mockData.categories.map(cat => (
          <Select.Option key={cat} value={cat}>
            {cat}
          </Select.Option>
        ))}
      </Select>

      <Select
        style={{ width: 200, marginBottom: 20 }}
        placeholder="Select a spending"
        onChange={(value: number) => {
          const spending = mockData.spendings[value];
          setSelectedSpending(value);
          setEditedDescription(spending.description);
          setEditedAmount(spending.amount);
        }}
        value={selectedSpending !== null ? selectedSpending : undefined}
      >
        {mockData.spendings.map((spending, index) => (
          <Select.Option key={index} value={index}>
            {spending.description} - ${spending.amount}
          </Select.Option>
        ))}
      </Select>

      <Input
        style={{ width: 200, marginRight: 10 }}
        placeholder="Edit Description"
        value={editedDescription}
        onChange={e => setEditedDescription(e.target.value)}
      />
      <Input
        style={{ width: 200, marginRight: 10 }}
        placeholder="Edit Amount"
        value={editedAmount}
        onChange={e => setEditedAmount(e.target.value)}
      />
      <Button onClick={handleEditSpending}>Edit Spending</Button>

      <Divider />

      <Table dataSource={mockData.spendings} pagination={false} rowKey="description">
        <Table.Column title="Category" dataIndex="category" />
        <Table.Column title="Amount" dataIndex="amount" />
        <Table.Column title="Description" dataIndex="description" />
        <Table.Column title="Date" dataIndex="date" />
      </Table>

      <Divider />
    </div>
  );
}

export default EditSpending;
