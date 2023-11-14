import React from 'react';
import {Link, Outlet} from "react-router-dom";

function Layout() {

    return (
        <>
            <nav className="h-8 flex justify-between bg-slate-800">
                <Link to="/" className="hover:bg-slate-950">Home</Link>
                <Link to="/user">User</Link>
                <Link to="/create">Create</Link>
            </nav>
            <Outlet/>
        </>
    );
}

export default Layout;