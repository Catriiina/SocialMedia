import React from "react";
import {S} from "./Navbar_Styles"
import {NavLink} from "react-router-dom";

export const Navbar = () =>{
    return(
        <S.Nav className="nav">
            <div>
                <NavLink to="/profile" className={"link"}>Profile</NavLink>
            </div>
            <div>
                <a>My blog</a>
            </div>
            <div>
                <NavLink to="/messages" className={"link"}>Messages</NavLink>
            </div>
            <div>
                <a>Friends blogs</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </S.Nav>
    )
}