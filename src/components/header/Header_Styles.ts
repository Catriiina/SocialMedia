import styled from "styled-components";

const Header = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  position: relative;
  background-color: antiquewhite;
  color: white;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: black;
    bottom: 0;
    left: 0;
  }
`;

const SearchInput = styled.input`
  font-size: 16px;
  border: 1px solid black;
  background-color: antiquewhite;
  color: black;
  outline: none;
  border-radius: 4px;
`;

const Wrapper = styled.div`
display: flex;
   align-items: center;
`

export const S = {
   Header,
   SearchInput,
   Wrapper
}