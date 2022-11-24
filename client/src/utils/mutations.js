import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!) {
    addUser(username: $username, email: $email) {
      _id
      username
      email
    }
  }
`;
export const LOGIN = gql`
  mutation login($username: String!, $email: String!) {
    createMatchup(username: $username, email: $email) {
      _id
      username
      email
    }
  }
`;
export const ADD_FAVORITE = gql`
  mutation addFavorite($title: String!) {
    createMatchup(title: $title) {
      _id
      title
    }
  }
`;
export const REMOVE_FAVORITE = gql`
  mutation removeFavorite($title: String!) {
    createMatchup(title: $title) {
      _id
      title
    }
  }
`;