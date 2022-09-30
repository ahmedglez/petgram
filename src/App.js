import React, { useEffect, Fragment, useState } from 'react'
import { CategoriesList } from './components/CategoriesList'
import { GlobalStyles } from './styles/GlobalStyles'
import Logo from './components/Logo'
import Feed from './components/Feed'

const App = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    window
      .fetch('https://petgram-server-alexander.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => setCategories(response))
  }, [])

  return (
    <Fragment>
      <GlobalStyles />
      <Logo />
      <CategoriesList categories={categories} />
      <Feed />
    </Fragment>
  )
}

export default App
