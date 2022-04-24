import React from 'react';
import './nav-sidebar-styles.css';

const NavSidebar = () => {

    return (
        <div className="nav-sidebar">
            <a href="/">Home</a>
            <a href="/posts-by-user">Get All Posts by User</a>
        </div>
    );
}

export default NavSidebar;