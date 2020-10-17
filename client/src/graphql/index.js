/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 01 2020 02:08:16 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { gql } from "@apollo/client";

const GQL_LATEST_MOVIES = gql`
  query LatestMoviesQuery($limit: Int!, $page: Int!) {
    latestMovies(limit: $limit, page: $page) {
      movie_count
      limit
      page_number
      movies {
        id
        title
        year
        rating
        medium_cover_proxy
        genres
      }
    }
  }
`;

const GQL_MOVIE = gql`
  query MovieQuery($movie_id: Int!) {
    movie(movie_id: $movie_id) {
      id
      url
      imdb_code
      title
      title_english
      title_long
      slug
      year
      rating
      runtime
      genres
      download_count
      like_count
      description_intro
      description_full
      yt_trailer_code
      language
      mpa_rating
      background_image
      background_image_original
      small_cover_image
      medium_cover_proxy
      large_cover_image
      medium_screenshot_image1
      medium_screenshot_image2
      medium_screenshot_image3
      large_screenshot_image1
      large_screenshot_image2
      large_screenshot_image3
      date_uploaded
      date_uploaded_unix
      torrents {
        url
        hash
        quality
        type
        seeds
        peers
        size
        size_bytes
        date_uploaded
        date_uploaded_unix
        availableIn
      }
      cast {
        name
        character_name
        url_small_image
        imdb_code
      }
    }
  }
`;

const GQL_RELATED_MOVIES = gql`
  query RelatedMoviesQuery($movie_id: Int!) {
    relatedMovies(movie_id: $movie_id) {
      id
      title
      medium_cover_proxy
    }
  }
`;

const GQL_PARENTAL_GUIDES = gql`
  query ParentalGuidesQuery($movie_id: Int!) {
    parentalGuides(movie_id: $movie_id) {
      parental_guide_count
      parental_guides {
        type
        parental_guide_text
      }
    }
  }
`;

const GQL_BROWSE_MOVIES = gql`
  query BrowseMoviesQuery($url: String) {
    browse(url: $url) {
      movie_count
      limit
      page_number
      movies {
        id
        title
        year
        rating
        medium_cover_proxy
        genres
      }
    }
  }
`;

export default Object.freeze({
  GQL_LATEST_MOVIES,
  GQL_MOVIE,
  GQL_RELATED_MOVIES,
  GQL_PARENTAL_GUIDES,
  GQL_BROWSE_MOVIES,
});
