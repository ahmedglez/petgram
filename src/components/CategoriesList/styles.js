import styled from 'styled-components'

const CategoriesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`

const CategoriesListUl = styled.ul`
  display: flex;
  list-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const CategoriesListItem = styled.li`
  padding: 0 8px;
  
`

export { CategoriesListContainer, CategoriesListUl, CategoriesListItem }
