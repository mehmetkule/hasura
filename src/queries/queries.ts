import { gql } from '@apollo/client';

export const checkEmailQueries = gql`
  query {
    users {
      email
    }
  }
`;
