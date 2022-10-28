import React from "react";
import { useMutation, gql } from "@apollo/client";

const MUTATION_LIKE_PHOTO = gql`
    mutation likeAnonymousPhoto($input: LikePhoto!) {
        likeAnonymousPhoto(input: $input) {
            id
            liked
            likes
        }
    }
`;

const ToogleLikeMutation = () => {
    const [mutation, { loading: mutationLoading, error: mutationError }] =
        useMutation(MUTATION_LIKE_PHOTO);
    return { mutation, mutationLoading, mutationError };
};

export default ToogleLikeMutation;
