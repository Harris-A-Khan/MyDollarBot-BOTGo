/**
 * ManageCategories Component
 * 
 * This component provides functionality to manage (add and delete) categories.
 * It uses the Ant Design library for UI components.
 */

 import React, { useState } from 'react';
 import { Table, Button, Input, Divider, Typography, Popconfirm } from 'antd';
 
 // Dummy data for categories
 const dummyCategories = ['Food', 'Rent', 'Entertainment'];
 
 function ManageCategories() {
   // State for the list of categories and the new category input
   const [categories, setCategories] = useState(dummyCategories);
   const [newCategory, setNewCategory] = useState('');
 
   /**
    * Adds a new category to the list if it doesn't already exist.
    */
   const handleAddCategory = () => {
     if (newCategory && !categories.includes(newCategory)) {
       setCategories([...categories, newCategory]);
       setNewCategory('');
     }
   };
 
   /**
    * Removes a category from the list.
    * @param {string} category - The name of the category to be deleted.
    */
   const handleDeleteCategory = (category: string) => {
     setCategories(categories.filter(cat => cat !== category));
   };
 
   return (
     <div style={{ padding: '20px' }}>
       <Typography.Title level={4} style={{ color: 'red' }}>Manage Categories</Typography.Title>
 
       {/* Input field for adding a new category */}
       <Input
         style={{ width: 200, marginRight: 10 }}
         placeholder="New Category"
         value={newCategory}
         onChange={e => setNewCategory(e.target.value)}
       />
       <Button onClick={handleAddCategory}>Add Category</Button>
 
       <Divider />
 
       {/* Table displaying the list of categories with an option to delete */}
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
 