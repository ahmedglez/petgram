/* eslint-disable camelcase */
import React from "react";
import { Anchor, Image, ImgSkeleton } from "./styles.js";

const Category = ({ cover, path, emoji }) => {
  return (
    <Anchor href={path}>
      {cover === undefined ? <ImgSkeleton /> : <Image src={cover} />}
      {emoji}
    </Anchor>
  );
};

export { Category };
