import React from 'react';
import Header from '../Header/Header';
import { useState, useEffect } from 'react';
import SideBar from '../sideBar/sideBar';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

const AppContent = () => {
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

export default AppContent;
