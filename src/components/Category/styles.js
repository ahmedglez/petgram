import style from "styled-components";
import { Link } from "@reach/router";

const Anchor = style(Link)`
display: flex;
flex-direction: column;
text-decoration: none;
text-align: center;
width: 75px;
min-width: 75px;
min-height: 75px;
padding: 10px;

`;

const Image = style.img`
border: 5px solid pink;
border-radius: 50%;
box-shadow: 0px 10px 14px rgba(0,0,0,.2);
height: auto;
overflow: hidden;
object-fit: cover;
object-position: center;
height: 75px;
width: 75px;
`;

const ImgSkeleton = style.div`
border: 5px solid pink;
background-color: #eee;
border-radius: 50%;
height: 75px;
width: 75px;
animation: 1s ease-in-out 0s infinite normal none running loading;
@keyframes loading {
  0% {
    background-color: #eee;
  }
  50% {
    background-color: #ddd;
  }
  100% {
    background-color: white;
  }
}
`;

export { Anchor, Image, ImgSkeleton };
