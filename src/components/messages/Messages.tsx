
import React from "react";
import { S } from "./Messages_Styles";
import {Dialog} from "./Dialogs";
import {DialogType, MessageType} from "../../redux/state";

export const Messages: React.FC<{ messageData: MessageType[]; dialogsData: DialogType[] }> = (props) => {
    const messageElements = props.messageData.map(message => (
        <S.Message id={message.id}> {message.message} </S.Message>
    ));

    const dialogsElements =
        props.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    return (
        <S.Div>
            <div>
                {dialogsElements}
            </div>
            <div>
                {messageElements}
            </div>
        </S.Div>
    )
}