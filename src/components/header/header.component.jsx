import React from "react";
import { Link } from "react-router-dom";
import './header.styles.scss'

const Header = () => (
    <div className="header">
        <Link className="logo" to="/">LUZetta</Link>
        <div className="options">
            <Link className="option" to="/">HOME</Link>
            <Link className="option" to="/about">ABOUT</Link>
            <Link className="option" to="/signin">SIGN IN</Link>
            <Link className="option" to="/settings">SETTINGS</Link>
        </div>
    </div>
)


export default Header;