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
    addPost: (postMessage: string) => void;
};

function App({ state, addPost }: AppProps) {
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
                                   addPost={addPost}
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
}

export default App;


// import React, { useRef } from "react";
// import { Post } from "./post/Post";
// import { S } from "./MyPosts_Styles";
// import { PostType } from "../../../redux/state";
//
// type MyPostsProps = {
//     postsData: PostType[];
//     addPost: (postMessage: string) => void;
// };
//
// export const MyPosts: React.FC<MyPostsProps> = ({ postsData, addPost }) => {
//     const postsElements = postsData.map(post =>
//         <Post key={post.id} description={post.description} likesCount={post.likesCount} />
//     );
//
//     const newPostElement = useRef<HTMLTextAreaElement>(null);
//
//     const handleAddPost = () => {
//         if (newPostElement.current) {
//             addPost(newPostElement.current.value);
//             newPostElement.current.value = ''; // Очистить текстовое поле после добавления поста
//         }
//     };
//
//     return (
//         <S.Div>
//             <textarea
//                 ref={newPostElement}
//                 placeholder="Введите текст нового поста"
//             />
//             <button onClick={handleAddPost}>Send</button>
//             <div>My posts</div>
//             {postsElements}
//         </S.Div>
//     );
// };
//
//
// // import React from 'react';
// // import {BrowserRouter, Routes, Route} from "react-router-dom";
// // import './App.css';
// // import {Header} from "./components/header/Header";
// // import {Navbar} from "./components/navbar/Navbar";
// // import {Profile} from "./components/profile/Profile";
// // import {Messages} from "./components/messages/Messages";
// // import {RootStateType} from "./redux/state";
// //
// // function App(props: { state: RootStateType }) {
// //     return (
// //         <BrowserRouter>
// //             <div className="app-wrapper">
// //                 <Header/>
// //                 <Navbar/>
// //                 <div className="content">
// //                     <Routes>
// //                         <Route path="/profile"
// //                                element={<Profile
// //                                    postsData={props.state.profilePage.postsData}
// //                                    addPost={props.addPost}
// //                                />}/>
// //                         <Route path="/messages/*"
// //                                element={<Messages
// //                                    messageData={props.state.messagePage.messageData}
// //                                    dialogsData={props.state.dialogsPage.dialogsData}
// //                                />}/>
// //                     </Routes>
// //                 </div>
// //             </div>
// //         </BrowserRouter>
// //     );
// // }
// //
// // export default App;