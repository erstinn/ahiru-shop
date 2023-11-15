import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import {GlobalStyle} from "../styles/Theme.jsx";
import Settings from "./settings/Settings.jsx";

export const Layout = () => {
    return (
        <div>
            <GlobalStyle />
            <Navbar />
            <Outlet />
        </div>
    );
};

export const SettingsLayout = () => {
    return (
        <div>
            <GlobalStyle />
            <Settings />
        </div>
    );
};
