/**
 * BudgetView Component
 * 
 * This component provides a view of the user's budget data and spendings.
 * It allows users to filter spendings by category and displays the budget data in tabular format.
 * It uses the Ant Design library for UI components.
 */

 import React, { useState } from 'react';
 import { Table, Card, Divider, Typography, Select } from 'antd';
 import { getBudgetData } from './api';
 
 // const mockData = {
 //   budget_data: [
 //     { category: 'Food', allocated: 500, spent: 300, remaining: 200 },
 //     { category: 'Rent', allocated: 1000, spent: 1000, remaining: 0 },
 //     { category: 'Entertainment', allocated: 100, spent: 50, remaining: 50 },
 //   ],
 //   spendings: [
 //     { category: 'Food', amount: 50, description: 'Dinner at ABC restaurant', date: '2023-10-01' },
 //     { category: 'Food', amount: 30, description: 'Groceries', date: '2023-10-02' },
 //     { category: 'Entertainment', amount: 50, description: 'Movie tickets', date: '2023-10-03' },
 //   ],
 //   categories: ['Food', 'Rent', 'Entertainment'],
 // };
 
 const data = getBudgetData();
 const mockData = {}
 
 function BudgetView() {
   console.log(data)
   // State to track the selected category for filtering spendings
   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
   // Filter spendings based on the selected category
   const filteredSpendings = selectedCategory
     ? mockData.spendings.filter(s => s.category === selectedCategory)
     : mockData.spendings;
 
   return (
     <div style={{ padding: '20px' }}>
       <Typography.Title level={4} style={{ color: 'red' }}>Budget Data</Typography.Title>
       <Table dataSource={mockData.budget_data} pagination={false} rowKey="category">
         <Table.Column title="Category" dataIndex="category" />
         <Table.Column title="Allocated" dataIndex="allocated" />
         <Table.Column title="Spent" dataIndex="spent" />
         <Table.Column title="Remaining" dataIndex="remaining" />
       </Table>
 
       <Divider />
 
       <Typography.Title level={4} style={{ color: 'red' }}>Spendings</Typography.Title>
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
       <Table dataSource={filteredSpendings} pagination={false} rowKey="description">
         <Table.Column title="Category" dataIndex="category" />
         <Table.Column title="Amount" dataIndex="amount" />
         <Table.Column title="Description" dataIndex="description" />
         <Table.Column title="Date" dataIndex="date" />
       </Table>
 
       <Divider />
     </div>
   );
 }
 
 export default BudgetView;
=======
import React, { useState } from 'react';
import { Table, Card, Divider, Typography, Select } from 'antd';

const mockData = {
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

function BudgetView() {
  // State to track the selected category for filtering spendings
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  // Filter spendings based on the selected category
  const filteredSpendings = selectedCategory
    ? mockData.spendings.filter(s => s.category === selectedCategory)
    : mockData.spendings;

  return (
    <div style={{ padding: '20px' }}>
      <Typography.Title level={4} style={{ color: 'red' }}>Budget Data</Typography.Title>
      <Table dataSource={mockData.budget_data} pagination={false} rowKey="category">
        <Table.Column title="Category" dataIndex="category" />
        <Table.Column title="Allocated" dataIndex="allocated" />
        <Table.Column title="Spent" dataIndex="spent" />
        <Table.Column title="Remaining" dataIndex="remaining" />
      </Table>

      <Divider />

      <Typography.Title level={4} style={{ color: 'red' }}>Spendings</Typography.Title>
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
      <Table dataSource={filteredSpendings} pagination={false} rowKey="description">
        <Table.Column title="Category" dataIndex="category" />
        <Table.Column title="Amount" dataIndex="amount" />
        <Table.Column title="Description" dataIndex="description" />
        <Table.Column title="Date" dataIndex="date" />
      </Table>

      <Divider />
    </div>
  );
}

export default BudgetView;
