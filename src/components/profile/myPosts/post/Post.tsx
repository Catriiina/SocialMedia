import React from "react";
import {S} from "../MyPosts_Styles"

export const Post = (props: { description: string, likesCount: number }) => {
    return (
        <S.StyledPost>
            {props.description}
            <div>
                like: {props.likesCount}
            </div>
        </S.StyledPost>
    )
}