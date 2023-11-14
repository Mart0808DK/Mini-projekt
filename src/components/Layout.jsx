import React, {useEffect, useState} from 'react';
import {Link, Outlet} from "react-router-dom";

function Layout() {

    return (
        <>
            <nav className="h-8 bg-transparent flex justify-between">
                <Link to="/">Home</Link>
                <Link to="/user">User</Link>
                <Link to="/create">Create</Link>
            </nav>
            <Outlet/>
        </>
    );
}

export default Layout;