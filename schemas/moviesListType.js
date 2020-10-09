/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 01 2020 13:32:46 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

const { GraphQLObjectType, GraphQLList, GraphQLInt } = require("graphql");
const MovieTypeMin = require("./movieTypeMin");

const MoviesListType = new GraphQLObjectType({
  name: "MoviesList",
  fields: () => ({
    movie_count: { type: GraphQLInt },
    limit: { type: GraphQLInt },
    page_number: { type: GraphQLInt },
    movies: { type: new GraphQLList(MovieTypeMin) },
  }),
});

module.exports = MoviesListType;
