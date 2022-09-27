import React from 'react'
import { Category } from '../Category'
import { CategoriesListContainer, CategoriesListUl, CategoriesListItem } from './styles'
import { categories } from '../../../api/db.json'

const CategoriesList = () => {
  return (
    <CategoriesListContainer>
      <CategoriesListUl>
        {categories.map((category) => (
          <CategoriesListItem key={category.id}>
            <Category {...category} />
          </CategoriesListItem>
        ))}
      </CategoriesListUl>
    </CategoriesListContainer>
  )
}

export { CategoriesList }
