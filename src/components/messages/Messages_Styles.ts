import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 2fr 10fr;
  padding: 10px;
 `

const DialogsList = styled.div`
  padding: 10px;
  border-radius: 5px; 
  margin-bottom: 5px; 
 `

const Message = styled.div`
  padding: 10px;
 `

export const S = {
    Div,
    DialogsList,
    Message
}