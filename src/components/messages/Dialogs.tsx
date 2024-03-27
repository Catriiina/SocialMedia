import React from "react";
import {S} from "./Messages_Styles"
import {NavLink} from "react-router-dom";
import {DialogType} from "../../index";


export const Dialog: React.FC<DialogType> = ({ id, name }) => {

    return (
        <>
            <S.DialogsList >
                <NavLink to={"/messages/" + id} className={"link"}>{name}</NavLink>
            </S.DialogsList>
        </>
    )
}


