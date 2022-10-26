import React, { Fragment, useRef, useState } from "react";
import { useIntersectionObserver } from "../../hooks/useInterceptionObserver";
import { Article, Img, ImgWrapper, A, Button } from "./styles";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useEffect } from "react";

const PhotoCard = ({ id, likes = 0, src, liked }) => {
  const key = `like-${id}`;
  const [show, setShow] = useState(false);
  
  const ref = useRef(null);

  const setLocalStorage = (id, value) => {
    try {
      localStorage.setItem(key, value);
      setLiked(value);
    } catch (e) {
      console.log(e);
    }
  };

  useIntersectionObserver(ref, () => setShow(true));

  return (
    <Article ref={ref}>
      {show && (
        <Fragment>
          <A href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </A>

          <Button onClick={() => setLocalStorage(id, !liked)}>
            {liked === true ? (
              <AiFillHeart size="50px" />
            ) : (
              <AiOutlineHeart size="50px" />
            )}
            {likes} likes!
          </Button>
        </Fragment>
      )}
    </Article>
  );
};

export { PhotoCard };
