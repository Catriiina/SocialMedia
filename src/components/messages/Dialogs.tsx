import React from "react";
import {S} from "./Messages_Styles"
import {NavLink} from "react-router-dom";

const dialogsData = [
    {
        id: "1",
        name: "Katya"
    },
    {
        id: "2",
        name: "Lisa"
    }

]

type  DialogPropsType = {
    id: string
    name: string
}

export const Dialog = (props: DialogPropsType) => {
    return (
        <>
            <S.DialogsList className={"link"}>
                <NavLink to={"/messages/" + props.id} className={"link"}>{props.name}</NavLink>
            </S.DialogsList>
        </>
    )
}

export const dialogsElements =
    dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);

