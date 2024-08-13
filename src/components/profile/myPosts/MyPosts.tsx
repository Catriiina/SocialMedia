import React, { useRef } from "react";
import { Post } from "./post/Post";
import { S } from "./MyPosts_Styles";
import { PostType } from "../../../redux/state";

type MyPostsProps = {
    postsData: PostType[];
    addPost: (postMessage: string) => void;
};

export const MyPosts: React.FC<MyPostsProps> = ({ postsData, addPost }) => {
    const postsElements = postsData.map(post =>
        <Post key={post.id} description={post.description} likesCount={post.likesCount} />
    );

    const newPostElement = useRef<HTMLTextAreaElement>(null);

    const handleAddPost = () => {
        if (newPostElement.current) {
            addPost(newPostElement.current.value);
            newPostElement.current.value = ''; // Очистить текстовое поле после добавления поста
        }
    };

    return (
        <S.Div>
            <textarea
                ref={newPostElement}
                placeholder="Введите текст нового поста"
            />
            <button onClick={handleAddPost}>Send</button>
            <div>My posts</div>
            {postsElements}
        </S.Div>
    );
};



// import React, {useRef} from "react";
// import {Post} from "./post/Post";
// import {S} from "./MyPosts_Styles"
// import {PostType} from "../../../redux/state";
// type MyPostsProps = {
//     postsData: PostType[];
//     addPost: () => void;
// }
// export const MyPosts: React.FC<MyPostsProps> = ({ postsData, addPost }) => {
//
//     const postsElements =
//         props.postsData.map(post =>
//             <Post description={post.description} likesCount={post.likesCount}/>);
//
//     const newPostElement = useRef<HTMLTextAreaElement>(null);
//
//     const addPost = () => {
//         alert(newPostElement.current?.value)
//     };
//
//     return (
//         <S.Div>
//
//             <textarea
//                 ref={newPostElement}
//                 placeholder="Введите текст нового поста"
//             />
//             <button
//                 onClick={addPost}
//             >send</button>
//             my posts
//             {postsElements}
//         </S.Div>
//     )
// }