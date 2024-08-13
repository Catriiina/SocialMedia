import React from "react";
import {MyPosts} from "./myPosts/MyPosts";
import { S } from "./Profile_Styles"
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type ProfileProps = {
    postsData: PostType[]
    addPost: (postMessage: string) => void
}

export const Profile: React.FC<ProfileProps> = ({ postsData, addPost }) => {
    return(
        <>
            <S.ProfileContent>
                <ProfileInfo
                    src="https://images.prom.ua/2122417187_w640_h640_kartina-po-nomeram.jpg"
                    name='Name Surname'
                    description='information about me and my blog'
                />
                <MyPosts postsData={postsData} addPost={addPost}/>
            </S.ProfileContent>
        </>
    )
}
