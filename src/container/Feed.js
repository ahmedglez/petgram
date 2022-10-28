import React from "react";
import FeedComponent from "../components/FeedComponent";
import { GET_PHOTOS } from "../hoc/withPhotos";
import { useQuery } from "@apollo/client";

const Feed = ({categoryId}) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId: categoryId },
  });

  return (
    <FeedComponent
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default Feed;
