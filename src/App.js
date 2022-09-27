import React from 'react'
import { CategoriesList } from './components/CategoriesList'
import { GlobalStyles } from './styles/GlobalStyles'
import { PhotoCard } from './components/PhotoCard'
import Logo from './components/Logo'

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Logo />
      <CategoriesList />
      <PhotoCard />
    </React.Fragment>

  )
}

export default App
