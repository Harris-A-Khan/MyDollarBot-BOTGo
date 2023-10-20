import React, { useEffect, useState } from 'react';
import { Table, Button, Input, Divider, Typography, Popconfirm } from 'antd';
import { getAllCategories } from '../api';

const dummyCategories = ['Food', 'Rent', 'Entertainment'];

function ManageCategories() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    async function fetchData() {
      const categoryData = await getAllCategories();
      setCategories(categoryData);
    }
    fetchData();
  }, []);

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  const handleDeleteCategory = (category: string) => {
    setCategories(categories.filter(cat => cat !== category));
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography.Title level={4} style={{ color: 'red' }}>Manage Categories</Typography.Title>

      <Input
        style={{ width: 200, marginRight: 10 }}
        placeholder="New Category"
        value={newCategory}
        onChange={e => setNewCategory(e.target.value)}
      />
      <Button onClick={handleAddCategory}>Add Category</Button>

      <Divider />

      <Table dataSource={categories.map(cat => ({ key: cat, name: cat }))} pagination={false}>
        <Table.Column title="Category" dataIndex="name" />
        <Table.Column
          title="Action"
          key="action"
          render={(text, record: { name: string }) => (
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDeleteCategory(record.name)}>
              <Button danger onClick={() => handleDeleteCategory(record.name)}>Delete</Button>

            </Popconfirm>
          )}
        />
      </Table>

      <Divider />
    </div>
  );
}

export default ManageCategories;
