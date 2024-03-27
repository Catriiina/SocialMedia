import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Messages} from "./components/messages/Messages";
import {DialogsDataPropsType, MessageDataPropsType, PostsDataPropsType} from "./index";

function App(props: PostsDataPropsType & MessageDataPropsType & DialogsDataPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/profile" element={<Profile postsData={props.postsData}/>}/>
                        <Route path="/messages/*" element={<Messages messageData={props.messageData} dialogsData={props.dialogsData}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;