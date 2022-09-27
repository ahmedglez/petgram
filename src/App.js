import React from 'react'
import { CategoriesList } from './components/CategoriesList'
import { GlobalStyles } from './styles/GlobalStyles'
import Logo from './components/Logo'
import Feed from './components/Feed'

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Logo />
      <CategoriesList />
      <Feed />
    </React.Fragment>

  )
}

export default App
