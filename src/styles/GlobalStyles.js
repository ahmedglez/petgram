import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;    
    background-color: #fefefe;
    height: 100vh;
    margin: 0 auto;
    max-width: 500px;
    color: #333;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    overflow-y: scroll;
    scroll-snap-type: y   mandatory;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  * {
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  overflow-x: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding-bottom: 10px;
  overflow-y: scroll;
  scroll-snap-type: y   mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
}
`
