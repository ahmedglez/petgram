/* eslint-disable camelcase */
import React from "react";
import { Link, Image, ImgSkeleton } from "./styles.js";

const Category = ({ cover, path='#', emoji }) => {
  return (
    <Link to={path}>
      {cover === undefined ? <ImgSkeleton /> : <Image src={cover} />}
      {emoji}
    </Link>
  );
};

export { Category };
