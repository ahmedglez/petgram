import React from "react";
import { PhotoCard } from "../PhotoCard";
import { PictureContainer, PictureSkeleton } from "./styles";

const FeedComponent = ({ data, loading, error }) => {
  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
      <PictureSkeleton key={i} />
    ));
  }

  return (
    <PictureContainer>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </PictureContainer>
  );
};

export default FeedComponent;
