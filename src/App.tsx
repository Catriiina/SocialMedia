import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Messages} from "./components/messages/Messages";
import {RootStateType } from "./redux/state";

function App(props: { state: RootStateType }) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/profile"
                               element={<Profile postsData={props.state.profilePage.postsData}/>}/>
                        <Route path="/messages/*"
                               element={<Messages
                                   messageData={props.state.messagePage.messageData}
                                   dialogsData={props.state.dialogsPage.dialogsData}
                               />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;