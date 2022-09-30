import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Article, Img, ImgWrapper, A, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const PhotoCard = ({
  id,
  likes = 0,
  src = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
}) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        console.log('si')
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(ref.current)
  }, [ref])

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
