/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 01 2020 02:08:16 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { gql } from '@apollo/client'

const GQL_LATEST_MOVIES = gql`
  query LatestMoviesQuerry($limit: Int!, $page: Int!) {
    latestMovies(limit: $limit, page: $page) {
      movie_count,
      limit,
      page_number,
      movies {
        id
        title
        year
        rating
        medium_cover_image
        genres
      }
    }
  }
`

export default Object.freeze({
  GQL_LATEST_MOVIES,
})