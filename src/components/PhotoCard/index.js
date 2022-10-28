import React, { Fragment, useRef, useState } from "react";
import { useIntersectionObserver } from "../../hooks/useInterceptionObserver";
import { Article, Img, ImgWrapper, A } from "./styles";
import FavButton from "../FavButton";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import ToogleLikeMutation from "../../container/ToogleLikeMutation.jsx";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`;
  const [show, setShow] = useState(false);
  const [liked, setLiked] = useLocalStorage(key, false);
  const { mutation, mutationLoading, mutationError } = ToogleLikeMutation();

  const ref = useRef(null);

  const setLocalStorage = (value) => {
    try {
      localStorage.setItem(key, value);
      setLiked(value);
    } catch (e) {
      console.log("Error", e);
    }
  };

  const handleFavClick = () => {
    !liked &&
      mutation({
        variables: {
          input: { id },
        },
      });
    setLiked(!liked);
  };

  console.log("{ mutation, mutationLoading, mutationError }", {
    mutation,
    mutationLoading,
    mutationError,
  });

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

          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </Fragment>
      )}
    </Article>
  );
};

export { PhotoCard };
