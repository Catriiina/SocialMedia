import React from 'react';
import logo from "../../logo.png";
import "./Header.css"

export const Header = () => {
    return (
        <header className="header">
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <input type="text" className="search-input" placeholder="Поиск..." />
            </div>
        </header>
    );
}
