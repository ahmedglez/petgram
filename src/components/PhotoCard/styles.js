import styled from 'styled-components'

const Article = styled.article`
  border: 1px solid #eaeaea;
  border-radius: 4px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin: 0 auto;
  max-width: 800px;
  padding: 0px;
  width: 100%;

`

const A = styled.a`
  display: flex;
  width: 100%;    
  text-decoration: none;
  color: #888;

`

const ImgWrapper = styled.div`
  height: 0;
  border-radius: 8px;
  display: block;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  &[aria-pressed="true"] {
    opacity: 0.5;
  }
  cursor: pointer;
  background: transparent;
  border: 0;
  color: #888;
  outline: 0;
  & svg {
    margin-right: 4px;
  }
`

const Span = styled.span`
  display: block;
  padding-left: 8px;
`

const Svg = styled.svg`
  height: 32px;
  width: 32px;
  text-align: center;
  fill: #d8d8d8;

`

const Path = styled.path``

export { Article, Img, ImgWrapper, A, Button, Span, Svg, Path }
