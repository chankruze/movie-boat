/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 27 2020 18:52:18 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

const { GraphQLObjectType, GraphQLString } = require("graphql")

const CastType = new GraphQLObjectType({
    name: 'Cast',
    fields: () => ({
        name: { type: GraphQLString },
        character_name: { type: GraphQLString },
        url_small_image: { type: GraphQLString },
        imdb_code: { type: GraphQLString }
    })
})

module.exports = CastType
