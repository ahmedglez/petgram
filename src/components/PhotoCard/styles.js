import styled from 'styled-components'
import { fadeIn } from '../../animations/ImgFadeIn'

const Article = styled.article`
  border-radius: 10px;
  margin: 0 auto;
  padding: 0px;
  width: 100%;
  min-height: 500px;
  height: auto;
  height: fit-content;
  margin-bottom: 25px;
  padding-bottom: 20px;
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
  min-height: 280px;
`

const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  ${fadeIn()}
`

const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
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
    font-size: 2em;
    color: pink;
  }
`;

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
