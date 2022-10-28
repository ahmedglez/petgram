import React from "react";
import { PhotoCard } from "../components/PhotoCard";
import { gql, useQuery } from "@apollo/client";
import { PictureSkeleton } from "../components/FeedComponent/styles";

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;


const renderProps = (loading, error, data) => {
  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <PictureSkeleton />;
  }
  return <PhotoCard {...data.photo} />;
};

const PhotoDetails = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id: id,
    },
  });
  renderProps(loading, error, data);
};

export default PhotoDetails;
