import './App.css'
import { useEffect, useState } from 'react';
import { getData } from './api/index'

import BudgetView from './BudgetView';
import BudgetUpdate from './BudgetUpdate';
import BudgetDelete from './BudgetDelete';
import AddSpendingRecord from './AddSpendingRecord';
import AddRecurringSpending from './AddRecurringSpending';
import ManageCategories from './ManageCategories';

import { Tabs, Table, Card, Divider, Typography } from 'antd'; // Importing antd components
const { TabPane } = Tabs;

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await getData();
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  // Columns for the budget table
  const budgetColumns = [
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Allocated',
      dataIndex: 'allocated',
    },
    {
      title: 'Spent',
      dataIndex: 'spent',
    },
    {
      title: 'Remaining',
      dataIndex: 'remaining',
    }
  ];

  // Columns for the spendings table
  const spendingsColumns = [
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Date',
      dataIndex: 'date',
    }
  ];

  return (
    <>
      {data ? (
        <>
          <Divider />
          <Typography.Title level={2}>TrackMyDollar-BOTGo</Typography.Title>

          <Tabs defaultActiveKey="1">
            <TabPane tab="Budget View" key="1">
              <BudgetView />
            </TabPane>

            <TabPane tab="Budget Update" key="2">
              <BudgetUpdate />
            </TabPane>

            <TabPane tab="Budget Delete" key="3">
              <BudgetDelete />
            </TabPane>

            <TabPane tab="Add Spending Record" key="4">
              <AddSpendingRecord />
            </TabPane>

            <TabPane tab="Add Recurring Spending Record" key="5">
              <AddRecurringSpending />
            </TabPane>

            <TabPane tab="Manage Categories" key="6">
              <ManageCategories />
            </TabPane>
          </Tabs>

          <Divider />

        </>
      ) : (
        <p>loading...</p>
      )}
    </>
  )
}

export default App;
