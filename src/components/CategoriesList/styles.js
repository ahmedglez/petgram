import styled from 'styled-components'

const CategoriesListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  height:300px;
`

const CategoriesListUl = styled.ul`
  display: flex;
  list-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0px;
`

const CategoriesListItem = styled.li`
  padding: 0 8px;
  
`

export { CategoriesListContainer, CategoriesListUl, CategoriesListItem }
