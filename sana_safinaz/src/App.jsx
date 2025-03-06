import Header from './Components/Header/Header';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './Components/sideBar/sideBar';
import Footer from './Components/Footer/Footer';
import Home from '../src/Pages/Home';
import DisplayPage from './Pages/DisplayPage';
import LoginSignup from './Pages/LoginSignup';
import Card from './Components/Card/Card';
import ScrollButton from './Components/ScrollButton/ScrollButton';
import ItemDetail from './Pages/ItemDetail';
import Main from './Components/Main/Main';
import Banner from '../src/assets/home-main-banner.webp';
import Product from '../src/assets/Product.json';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>

      <Header toggleSidebar={toggleSidebar} />
      {isSidebarOpen && (
        <SideBar
          state={isSidebarOpen}
          onClose={closeSidebar}
        />
      )}     
       <Main state={isSidebarOpen} />


      <Footer />

    </>
  );
}

export default App;
