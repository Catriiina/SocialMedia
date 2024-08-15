import React, { useRef } from "react";
import { Post } from "./post/Post";
import { S } from "./MyPosts_Styles";
import {ActionType, addPostActionType, PostType, updateNewPostTextActionType} from "../../../redux/state";

type MyPostsProps = {
    postsData: PostType[];
    dispatch: (action: ActionType) => void;
};

export const MyPosts: React.FC<MyPostsProps> = ({ postsData, dispatch }) => {
    const postsElements = postsData.map(post =>
        <Post key={post.id} description={post.description} likesCount={post.likesCount} />
    );

    const newPostElement = useRef<HTMLTextAreaElement>(null);

    let addPost = () => {
        dispatch(addPostActionType());
    };

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            dispatch(updateNewPostTextActionType(text));
        }
    };

    return (
        <S.Div>
            <textarea
                ref={newPostElement}
                onChange={onPostChange}
                placeholder="Введите текст нового поста"
            />
            <button onClick={addPost}>Send</button>
            <div>My posts</div>
            {postsElements}
        </S.Div>
    );
};
