import React from "react";
import {Post} from "./post/Post";
import {S} from "./MyPosts_Styles"
import {PostType} from "../../../redux/state";

export const MyPosts: React.FC<{ postsData: PostType[] }> = (props) => {

    const postsElements =
        props.postsData.map(post =>
            <Post description={post.description} likesCount={post.likesCount}/>);

    // let newPostElement = React.createRef();
    //
    // const addPost = () => {
    //     let text = newPostElement.current.value;
    //     props.addPost(text);
    // }

    return (
        <S.Div>

            <input
                // type="text"
                // value={newPostText}
                // onChange={handleInputChange}
                // placeholder="Введите текст нового поста"
            />
            <button
                // onClick={AddPost}
            >send</button>
            my posts
            {postsElements}
        </S.Div>
    )
}