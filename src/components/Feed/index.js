import React from "react";
import { PhotoCard } from "../PhotoCard";
import { PictureContainer, PictureSkeleton } from "./styles";
import { useQuery, gql } from "@apollo/client";

const withPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const Feed = ({ categoryId }) => {
  const { loading, error, data } = useQuery(withPhotos, {
    variables: { categoryId: categoryId },
  });

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

export default Feed;
