import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type PostType = {
    id: string,
    description: string,
    likesCount: number
}

export type PostsDataPropsType = {
    postsData: PostType[]
}

export const postsData: PostType[] =[
    {
        id: "1",
        description: 'First post',
        likesCount: 10
    },
    {
        id: "2",
        description: 'Second post',
        likesCount: 12
    }

]

export const messageData:MessageType[] = [
    {
        id: "1",
        message: 'hello!'
    },
    {
        id: "2",
        message: 'how are you?'
    }

]

export type  MessageType = {
    message: string
    id: string
}

export type MessageDataPropsType = {
    messageData: MessageType[]
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App postsData={postsData} messageData={messageData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
