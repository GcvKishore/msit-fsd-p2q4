import React from "react";
import "./header.css";

const Header = () => {
    return(
    <div className="header">
            <div className="image">
                <a href="/">
            <img src="https://www.p2q4.org/static/media/img.584ab4c6ad46efccd0ad.png" alt="logo" height="40px"/>
                </a>
            </div>
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/videos">Videos</a>
            <a className="nav-link" href="/documents">Historical Documents</a>
            <a className="nav-link" href="/program">Program</a>
            <a className="nav-link" href="/register">Register</a>
            <hr/>
        </div>
    );
};
export default Header;