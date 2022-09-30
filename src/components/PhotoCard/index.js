import React, { Fragment, useRef, useState } from 'react'
import { IntersectionObserver } from '../../hooks/useInterceptionObserver'
import { Article, Img, ImgWrapper, A, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const PhotoCard = ({
  id,
  likes = 0,
  src = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
}) => {
  const [show, setShow] = useState(false)
  const ref = useRef(null)

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

          <Button>
            <MdFavoriteBorder />
            {likes} likes!
          </Button>
        </Fragment>
      )}
    </Article>
  )
}

export { PhotoCard }
