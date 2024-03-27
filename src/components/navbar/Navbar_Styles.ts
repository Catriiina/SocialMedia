import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: antiquewhite;
    color: black;
    padding: 10px;
    position: relative;

    &::before {
     content: '';
     position: absolute;
     width: 1px;
     height: 100%;
     background-color: black;
     top: 0;
     right: 0;
    }

    & > div {
      margin-bottom: 40px;
      position: relative;

    &::after {
     content: '';
     position: absolute;
     width: 100%;
     height: 1px;
     background-color: black;
     bottom: 0;
     left: 0;
    }
    }
    `;

export const S = {
    Nav
}