/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 27 2020 18:44:08 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

const { GraphQLInt, GraphQLString, GraphQLObjectType, GraphQLList } = require('graphql')
const MovieType = require('./movieType')

// Torrent Type
const MovieTypeMin = new GraphQLObjectType({
    name: 'MovieTypeMinimum',
    fields: () => ({
        id: { type: GraphQLInt },
        medium_cover_image: { type: GraphQLString },
        title: { type: GraphQLString },
        year: { type: GraphQLInt },
        rating: { type: GraphQLString },
        genres: { type: new GraphQLList(GraphQLString) }
    })
})

module.exports = MovieTypeMin
