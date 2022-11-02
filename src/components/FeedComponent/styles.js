import styled from "styled-components";

export const PictureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  height: fit-content;
  padding: 0px 0;
  margin: 0;
  overflow-y: hidden;
  scroll-snap-type: y mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
  border: 1px solid #eaeaea;
  box-shadow: 0 10px 14px rgba(0, 1, 0, 0.1) inset;
  border-radius: 10px;
  row-gap: 20px;
`;

export const PictureSkeleton = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin: 0 auto;
  padding: 0px;
  width: 100%;
  min-height: 500px;
  height: auto;
  height: fit-content;
  margin-bottom: 25px;
  padding-bottom: 20px;
  background: #eaeaea;
  animation: skeleton 1s infinite;
  @keyframes skeleton {
    0% {
      background: #eaeaea;
    }
    50% {
      background: #d6d6d6;
    }
    100% {
      background: #eaeaea;
    }
  }
`;
