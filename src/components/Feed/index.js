import React from "react";
import { PhotoCard } from "../PhotoCard";
import { PictureContainer } from "./styles";
import { useQuery, gql } from "@apollo/client";

const withPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const Feed = () => {
  const { loading, error, data } = useQuery(withPhotos);

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return (
      <h1>Loading</h1>
    );
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
