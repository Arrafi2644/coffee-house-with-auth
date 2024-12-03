import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './MainTemplate.css'


const MainTemplate = () => {
    return (
        <div className='font-rancho '>
            <Navbar></Navbar>
            <div >
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainTemplate;