import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Profile } from "./components/profile/Profile";
import { Messages } from "./components/messages/Messages";
import { RootStateType } from "./redux/state";

type AppProps = {
    state: RootStateType;
    dispatch: (action: any) => void ;
};

const App: React.FC<AppProps> = ({ state, dispatch }) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/profile"
                               element={<Profile
                                   postsData={state.profilePage.postsData}
                                   dispatch={dispatch}
                               />} />
                        <Route path="/messages/*"
                               element={<Messages
                                   messageData={state.messagePage.messageData}
                                   dialogsData={state.dialogsPage.dialogsData}
                               />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
