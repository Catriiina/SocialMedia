import React from "react";
import { S } from "./ProfileInfo_Styles"

type  ProfileInfoPropsType = {
    src: string
    name: string
    description: string
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <>
            <div>
                <S.Photo src={props.src}/>
            </div>
            <S.Info >
                <h2>{props.name} </h2>
                <p>{props.description}</p>
            </S.Info>
        </>
    )
}