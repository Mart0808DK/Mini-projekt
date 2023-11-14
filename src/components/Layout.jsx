import React from 'react';
import {Link, Outlet} from "react-router-dom";

function Layout() {

    return (
        <>
            <nav className="h-16 flex gap-4 bg-slate-800 fixed w-full">
                <Link to="/" className="hover:bg-slate-950 p-4 transition-colors">Home</Link>
                <Link to="/user" className="hover:bg-slate-950 p-4 transition-colors">User</Link>
                <Link to="/create" className="hover:bg-slate-950 p-4 transition-colors">Create</Link>
            </nav>
            <Outlet/>
        </>
    );
}

export default Layout;