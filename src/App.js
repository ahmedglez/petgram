import React, { Fragment } from 'react'
import { CategoriesList } from './components/CategoriesList'
import { GlobalStyles } from './styles/GlobalStyles'
import Logo from './components/Logo'
import Feed from './container/Feed'

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Logo />
      <CategoriesList />
      <Feed categoryId={3}/>
    </Fragment>
  )
}

export default App
