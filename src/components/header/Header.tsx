import React from 'react';
import logo from "../../logo.png";
import {S} from "./Header_Styles"

export const Header = () => {
    return (
        <S.Header className="header">
            <S.Wrapper>
                <img src={logo} className="App-logo" alt="logo" />
                <S.SearchInput type="text" className="search-input" placeholder="Поиск..." />
            </S.Wrapper>
        </S.Header>
    );
}
