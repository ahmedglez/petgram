import React from "react";
import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;
export const useRegisterMutation = () => {
  const [registerMutation] = useMutation(REGISTER);
  const register = ({ input }) => {
    return registerMutation({ variables: { input } });
  };

  return { registerMutation, register };
};
