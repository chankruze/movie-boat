/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Oct 02 2020 12:36:03 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

const { GraphQLObjectType, GraphQLString } = require("graphql")

const AvailableInType = new GraphQLObjectType({
    name: 'AvailableIn',
    fields: () => ({
        quality: { type: GraphQLString },
        url: { type: GraphQLString },
    })
})

module.exports = AvailableInType
