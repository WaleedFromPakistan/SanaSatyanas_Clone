import React from 'react';
import './Admin.css';
import SideBar from '../../src/Compnents/SideBar/SideBar';
import { Routes , Route } from 'react-router-dom';
import AddProduct from '../../src/Compnents/AddProduct/AddProduct';
import ListAllProduct from '../../src/Compnents/ListAllProduct/ListAllProduct';
import Home from '../../src/Compnents/Home/Home';
import MoreInfo from '../../src/Compnents/MoreInfo/MoreInfo';
import AddClothing from '../../src/Compnents/AddProduct/AddClothing';
import ListAllClothing from '../../src/Compnents/ListAllProduct/ListAllClothing';
import MoreInfo_C from '../../src/Compnents/MoreInfo/MoreInfo_C';
import AddAccessoryCateogry from '../../src/Compnents/AddCategory/AddAccessoryCateogry';
import Orders from '../../src/Compnents/Orders/Orders';
import OrderStatus from '../../src/Compnents/Orders/OrderStatus';
const Admin = () => {
  return (
    <div className='Admin'>
      <SideBar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-Accessories-category' element={<AddAccessoryCateogry/>}/> 
        <Route path='/addAccessories' element={<AddProduct/>}/>
        <Route path='/all-Accessories' element={<ListAllProduct/>}/>
        <Route path='/all-accessories/more-info/:id' element={<MoreInfo/>}/>
        <Route path='/all-Clothings/more-info/:id' element={<MoreInfo_C/>}/>
        <Route path='/addClothing' element={<AddClothing/>}/>
        <Route path='/all-Clothings' element={<ListAllClothing/>}/>
        <Route path='/all-orders' element={<Orders/>}/>
        <Route path='/all-dispatch-orders' element={<OrderStatus status = "Dispatch"/>}/>
        <Route path='/all-pending-orders' element={<OrderStatus status = "Pending"/>}/>
      </Routes>

    </div>
  );
}

export default Admin;