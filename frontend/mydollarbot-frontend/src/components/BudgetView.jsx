import React, { useState, useEffect } from 'react';
import { Table, Divider, Typography, Select } from 'antd';
import { getAllBudgetData, getAllCategories } from '../api';


function BudgetView({ userId }) {
  const [budgetData, setBudgetData] = useState([]);
  const [spendingsData, setSpendingsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllBudgetData(userId);
      const transformedBudgetData = Object.entries(response.budget.category).map(([key, value]) => ({
        category: key,
        allocated: parseFloat(value),
        spent: 0,
        remaining: parseFloat(value),
      }));
      
      const transformedSpendingsData = response.data.map(entry => {
        const [date, category, amount] = entry.split(",");
        return {
          date,
          category,
          amount: parseFloat(amount),
        };
      });

      transformedSpendingsData.forEach(spending => {
        const budgetItem = transformedBudgetData.find(item => item.category === spending.category);
        if (budgetItem) {
          budgetItem.spent += spending.amount;
          budgetItem.remaining = Math.max(budgetItem.allocated - budgetItem.spent, 0);
        }
      });

      const tempCategories = await getAllCategories();
      setCategories(tempCategories);
      setBudgetData(transformedBudgetData);
      setSpendingsData(transformedSpendingsData);
    };
    
    fetchData();
  }, [userId]);

  const filteredSpendings = selectedCategory
    ? spendingsData.filter(s => s.category === selectedCategory)
    : spendingsData;

  const totalAllocated = budgetData.reduce((acc, item) => acc + item.allocated, 0);
  const totalSpent = budgetData.reduce((acc, item) => acc + item.spent, 0);
  const totalRemaining = budgetData.reduce((acc, item) => acc + item.remaining, 0);

  return (
    
    <div style={{ padding: '20px' }}>
      <Typography.Title level={4} style={{ color: 'red' }}>Budget Data</Typography.Title>
      <Table dataSource={[...budgetData, { category: 'Total', allocated: totalAllocated, spent: totalSpent, remaining: totalRemaining }]} pagination={false} rowKey="category">
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
        onChange={value => setSelectedCategory(value)}
        allowClear
        onClear={() => setSelectedCategory(null)}
      >
        {categories.map(cat => (
          <Select.Option key={cat} value={cat}>
            {cat}
          </Select.Option>
        ))}
      </Select>
      <Table dataSource={filteredSpendings} pagination={false} rowKey="description">
        <Table.Column title="Category" dataIndex="category" />
        <Table.Column title="($) Amount" dataIndex="amount" />
        <Table.Column title="Date" dataIndex="date" />
      </Table>

      <Divider />
    </div>
  );
}

export default BudgetView;
