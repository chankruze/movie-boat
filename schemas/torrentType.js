/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 27 2020 18:28:36 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

const { GraphQLInt, GraphQLString, GraphQLObjectType } = require('graphql')

// Torrent Type
const TorrentType = new GraphQLObjectType({
    name: 'Torrent',
    fields: () => ({
        url: { type: GraphQLString },
        hash: { type: GraphQLString },
        quality: { type: GraphQLString },
        type: { type: GraphQLString },
        seeds: { type: GraphQLString },
        peers: { type: GraphQLString },
        size: { type: GraphQLString },
        size_bytes: { type: GraphQLString },
        date_uploaded: { type: GraphQLString },
        date_uploaded_unix: { type: GraphQLString },
        availableIn: {
            type: GraphQLString,
            resolve(root, parent, args) {
                return `${root.quality}.${root.type === 'bluray' ? 'BluRay' : root.type === 'web' ? 'WEB' : root.type}`
            }
        }
    })
})

module.exports = TorrentType
