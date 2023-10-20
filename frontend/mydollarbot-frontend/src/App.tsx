import './App.css'
import { useEffect, useState } from 'react';
import { getAllBudgetData, getAllCategories, getDummyData } from './api/index'
import { useParams } from 'react-router-dom';

import BudgetView from './components/BudgetView';
import BudgetUpdate from './components/BudgetUpdate';
import BudgetDelete from './components/BudgetDelete';
import AddSpendingRecord from './components/AddSpendingRecord';
import ManageCategories from './components/ManageCategories';

import { Tabs, Divider, Typography } from 'antd'; // Importing antd components
const { TabPane } = Tabs;

function App() {
  const [data, setData] = useState<any>(null);
  const [categories, setCategories] = useState<any>(null);
  const { user_id } = useParams<{ user_id: string }>();

  useEffect(() => {
    async function fetchData() {
      // const response = await getDummyData();
      // const response = await getAllBudgetData("6577837440");
      const data = await getAllBudgetData(user_id);
      setData(data);

      const categoryData = await getAllCategories();
      setCategories(categoryData);
    }
    fetchData();
  }, [user_id]);

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
              <BudgetView userId={user_id} />
            </TabPane>
            <TabPane tab="Budget Update" key="2">
              <BudgetUpdate userId={user_id}/>
            </TabPane>

            <TabPane tab="Budget Delete" key="3">
              <BudgetDelete userId={user_id}/>
            </TabPane>

            <TabPane tab="Add Spending Record" key="4">
              <AddSpendingRecord userId={user_id}/>
            </TabPane>

            <TabPane tab="Manage Categories" key="6">
              <ManageCategories userId={user_id}/>
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
