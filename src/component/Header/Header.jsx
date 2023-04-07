import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <nav>
           <Link to="/">Home</Link>
           <Link to="/Order">Order</Link>
           <Link to="/About">About</Link>
        </nav>
    );
};

export default Header;