import styled from 'styled-components'

export const PictureContainer = styled.div`
 display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px 0;
  margin: 0;
  overflow-y:scroll;
  scroll-behavior: smooth ;
  &::-webkit-scrollbar {
    display: none;
  }
  border: 1px solid #eaeaea;
  box-shadow: 0 10px 14px rgba(0, 1, 0, 0.1) inset;
  border-radius: 10px;
`
