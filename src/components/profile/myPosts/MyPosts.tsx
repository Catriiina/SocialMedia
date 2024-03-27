import React from "react";
import {Post} from "./post/Post";
import {S} from "./MyPosts_Styles"
import {PostType} from "../../../index";

export const MyPosts: React.FC<{ postsData: PostType[] }> = (props) => {

    const postsElements =
        props.postsData.map(post =>
            <Post description={post.description} likesCount={post.likesCount}/>);

    return (
        <S.Div>
            <input
                // type="text"
                // value={newPostText}
                // onChange={handleInputChange}
                // placeholder="Введите текст нового поста"
            />
            <button
                // onClick={handleAddPost}
            >send</button>
            my posts
            {postsElements}
        </S.Div>
    )
}