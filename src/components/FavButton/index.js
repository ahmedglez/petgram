import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Button } from "./styles";

const FavButton = ({ liked, likes, onClick }) => {
  return (
    <Button onClick={onClick}>
      {liked === true ? (
        <AiFillHeart size="50px" />
      ) : (
        <AiOutlineHeart size="50px" />
      )}
      {likes} likes!
    </Button>
  );
};

export default FavButton;
