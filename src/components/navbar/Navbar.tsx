import React from "react";
import "./Navbar.css"

export const Navbar = () =>{
    return(
        <nav className="nav">
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>My blog</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>Friends blogs</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    )
}