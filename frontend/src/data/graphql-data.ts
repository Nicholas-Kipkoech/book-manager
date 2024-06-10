import { gql } from "@apollo/client";

/**
 * A query for fetching data from graphQl API using apollo client
 */

export const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;
