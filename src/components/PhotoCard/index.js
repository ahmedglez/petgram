import React, { Fragment, useRef, useState } from "react";
import { useIntersectionObserver } from "../../hooks/useInterceptionObserver";
import { Article, Img, ImgWrapper, A, Button } from "./styles";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useLocalStorage, setLocalStorage } from "../../hooks/useLocalStorage";
import { useEffect } from "react";

const PhotoCard = ({
  id,
  likes = 0,
  src = "https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
}) => {
  const key = `like-${id}`;
  const [show, setShow] = useState(false);
  const [liked, setLiked] = useState(() => {
    const isLiked = window.localStorage.getItem(key);
    return isLiked ? JSON.parse(isLiked) : false;
  });
  const ref = useRef(null);

  useEffect(() => {
    if (show === true) {
      console.group(`Photo Card ${id}`);
      console.log("ID", id);
      console.log("LIKED", liked);
      console.log("KEY", key);
      console.log("LOCALSTORAGE", window.localStorage.getItem(key));
      console.log("SRC", src);
      console.log("LIKES", likes);
      console.groupEnd();
    }
  }, [show])

  const setLocalStorage = (id, value) => {
    console.log("setLocalStorage", id, value);
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
          <A href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="" />
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
