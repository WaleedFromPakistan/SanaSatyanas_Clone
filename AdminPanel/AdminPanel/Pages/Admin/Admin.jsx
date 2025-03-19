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
      </Routes>

    </div>
  );
}

export default Admin;