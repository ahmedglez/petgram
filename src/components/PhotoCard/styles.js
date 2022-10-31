import styled from "styled-components";
import { fadeIn } from "../../animations/ImgFadeIn";

const Article = styled.article`
  border-radius: 10px;
  margin: 0 auto;
  padding: 0px;
  width: 100%;
  min-width: 360px;
  max-width: 500px;
  height: auto;
`;

const A = styled.a`
  display: flex;
  width: 100%;
  text-decoration: none;
  color: #888;
`;

const ImgWrapper = styled.div`
  height: 0;
  display: block;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
  min-height: 280px;
  border-radius: 10px;
`;

const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  ${fadeIn()}
`;

const Span = styled.span`
  display: block;
  padding-left: 8px;
`;

const Svg = styled.svg`
  height: 32px;
  width: 32px;
  text-align: center;
  fill: #d8d8d8;
`;

const Path = styled.path``;

export { Article, Img, ImgWrapper, A, Span, Svg, Path };
