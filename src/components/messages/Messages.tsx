
import React from "react";
import { S } from "./Messages_Styles";
import { dialogsElements } from "./Dialogs";
import { MessageType } from "../../index";

export const Messages: React.FC<{ messageData: MessageType[] }> = (props) => {
    const messageElements = props.messageData.map(message => (
        <S.Message id={message.id}>{message.message}</S.Message>
    ));

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