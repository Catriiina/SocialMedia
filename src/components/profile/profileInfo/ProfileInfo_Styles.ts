import styled from 'styled-components';

const Photo = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  margin-left: 20px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const S = {
    Photo,
    Info
}