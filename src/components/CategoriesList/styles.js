import styled from "styled-components";


const CategoriesListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 400px;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 185px;
  padding: 0px 0;
`;

const CategoriesListUl = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;
  align-items: center;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0px;
  gap: 0px;
  ${({ fixed }) =>
    fixed &&
    `
    position: fixed;
    top: -15px;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 380px;
    z-index: 1;
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    transform: scale(0.7);
    height: fit-content;
    `}
`;

const CategoriesListItem = styled.li`
  padding: 0 8px;
`;

export { CategoriesListContainer, CategoriesListUl, CategoriesListItem };
