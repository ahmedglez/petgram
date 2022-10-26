import React, { Fragment } from 'react'
import { CategoriesList } from './components/CategoriesList'
import { GlobalStyles } from './styles/GlobalStyles'
import Logo from './components/Logo'
import Feed from './components/Feed'

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Logo />
      <CategoriesList />
      <Feed categoryId={2}/>
    </Fragment>
  )
}

export default App
