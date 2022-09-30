import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'
import {
  CategoriesListContainer,
  CategoriesListUl,
  CategoriesListItem
} from './styles'

const CategoriesList = ({ categories }) => {
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = document.body.scrollTop > 300
      setShowFixed(newShowFixed)
    }
    console.log('UseEffect')
    document.body.addEventListener('scroll', onScroll)
  }, [])

  const renderList = (fixed) => (
    <CategoriesListContainer fixed={fixed} className={fixed ? 'fixed' : ''}>
      <CategoriesListUl>
        {categories.map((category) => (
          <CategoriesListItem key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </CategoriesListItem>
        ))}
      </CategoriesListUl>
    </CategoriesListContainer>
  )

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}

export { CategoriesList }
