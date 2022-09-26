import style from 'styled-components'

const Anchor = style.a`
display: flex;
flex-direction: column;
text-decoration: none;
text-align: center;
width: 75px;
`

const Image = style.img`
border: 1px solid #ddd;
border-radius: 50%;
box-shadow: 0px 10px 14px rgba(0,0,0,.2);
height: auto;
overflow: hidden;
object-fit: cover;
object-position: center;
height: 75px;
width: 75px;
`

export { Anchor, Image }
