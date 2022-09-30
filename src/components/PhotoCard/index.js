import React, { Fragment, useRef, useState } from 'react'
import { IntersectionObserver } from '../../hooks/useInterceptionObserver'
import { Article, Img, ImgWrapper, A, Button } from './styles'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const PhotoCard = ({
  id,
  likes = 0,
  src = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
}) => {
  const [show, setShow] = useState(false)
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(id)
      return like
    } catch (e) {
      return false
    }
  })
  const ref = useRef(null)

  const setLocalStorage = (id, value) => {
    console.log('setLocalStorage', id, value)
    try {
      localStorage.setItem(id, value)
      setLiked(value)
    }
    catch (e) {
      console.log(e)
    }
  }

  IntersectionObserver(ref, () => setShow(true))

  return (
    <Article ref={ref}>
      {show && (
        <Fragment>
          <A href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='' />
            </ImgWrapper>
          </A>

          <Button onClick={() => setLocalStorage(id, !liked)}>
            {liked ? <AiFillHeart size='50px' /> : <AiOutlineHeart size='50px' />}
            {likes} likes!
          </Button>
        </Fragment>
      )}
    </Article>
  )
}

export { PhotoCard }
