import React from "react";
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Outlet } from "react-router-dom";

function Layout() {
    return(
        <>
        <Navbar />
        <Outlet />
        </>
    )
}

export default Layout