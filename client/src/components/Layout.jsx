import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import {GlobalStyle} from "../styles/Theme.jsx";

const Layout = () => {
    return (
        <div>
            <GlobalStyle />
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;
