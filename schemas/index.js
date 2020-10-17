/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 27 2020 11:48:28 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

// import schemas
const MovieType = require("./movieType");
const MoviesListType = require("./moviesListType");
const MovieTypeMin = require("./movieTypeMin");
const ParentalGuideListType = require("./parentalGuide");

// API URLs
const API_V2 = "https://yts.mx/api/v2/";
const LIST_MOVIES = "list_movies.json?";
const MOVIE_DETAILS =
  "movie_details.json?with_images=true&with_cast=true&movie_id=";
const RELATED_MOVIES = "movie_suggestions.json?movie_id=";
const PARENTAL_GUIDES = "movie_parental_guides.json?movie_id=";

// YTS Response Parser
const parseYTSRes = (res) => {
  const { status, status_message, data } = res.data;

  if (status !== "ok") {
    console.log(`status: ${status}`);
    console.log(`status message: ${status_message}`);
  }

  // console.log(data)
  return data;
};

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    // Latest Movies
    // limit: 50
    // quality: all
    // genre: all
    // rating: 0
    // year: 0
    // language: all
    // sort_by: date_added
    // order_by: desc
    latestMovies: {
      type: MoviesListType,
      args: {
        limit: { type: GraphQLInt },
        page: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(`${API_V2}/${LIST_MOVIES}&limit=${args.limit}&page=${args.page}`)
          .then((res) => parseYTSRes(res));
      },
    },
    // Movie Details
    // https://yts.mx/api/v2/movie_details.json?movie_id={id}&with_images=true&with_cast=true
    movie: {
      type: MovieType,
      args: {
        movie_id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(`${API_V2}${MOVIE_DETAILS}${args.movie_id}`)
          .then((res) => parseYTSRes(res).movie);
      },
    },
    // Related Movies
    // https://yts.mx/api/v2/movie_suggestions.json?movie_id=19991
    relatedMovies: {
      type: new GraphQLList(MovieTypeMin),
      args: {
        movie_id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(`${API_V2}${RELATED_MOVIES}${args.movie_id}`)
          .then((res) => parseYTSRes(res).movies);
      },
    },
    parentalGuides: {
      type: ParentalGuideListType,
      args: {
        movie_id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(`${API_V2}${PARENTAL_GUIDES}${args.movie_id}`)
          .then((res) => parseYTSRes(res));
      },
    },
    browse: {
      type: MoviesListType,
      args: {
        url: { type: GraphQLString },
      },
      resolve(parent, args) {
        return axios.get(args.url).then((res) => parseYTSRes(res));
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
