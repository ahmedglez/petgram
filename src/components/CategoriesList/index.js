/* eslint-disable camelcase */

import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'
import Loading_Pic from '../../assets/imgs/loadingBlack.png'
import {
  CategoriesListContainer,
  CategoriesListUl,
  CategoriesListItem
} from './styles'
import Item from 'antd/lib/list/Item'

const CategoriesList = () => {
  const [showFixed, setShowFixed] = useState(false)
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window
      .fetch("https://petgram-server-ahmed.vercel.app/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoading(false);
      });
  }, [])

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = document.body.scrollTop > 300
      setShowFixed(newShowFixed)
    }
    document.body.addEventListener('scroll', onScroll)
  }, [])

  const renderList = (fixed) => (
    <CategoriesListContainer fixed={fixed}>
      <CategoriesListUl>
        {loading === true
          ? categories.map((category) => (
            <Item key={category.id}>
              <Category cover={Loading_Pic} />
            </Item>
          ))
          : categories.map((category) => (
            <CategoriesListItem key={category.id}>
              <Category {...category} />
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
