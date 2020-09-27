/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 27 2020 11:44:16 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

const { GraphQLInt, GraphQLString,
    GraphQLFloat, GraphQLList,
    GraphQLObjectType } = require('graphql')

// Movie Type
const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLInt },
        url: { type: GraphQLString },
        imdb_code: { type: GraphQLString },
        title: { type: GraphQLString },
        title_english: { type: GraphQLString },
        title_long: { type: GraphQLString },
        slug: { type: GraphQLString },
        year: { type: GraphQLInt },
        rating: { type: GraphQLFloat },
        runtime: { type: GraphQLFloat },
        genres: { type: new GraphQLList(GraphQLString) },
        download_count: { type: GraphQLInt },
        like_count: { type: GraphQLInt },
        description_intro: { type: GraphQLString },
        description_full: { type: GraphQLString },
        yt_trailer_code: { type: GraphQLString },
        language: { type: GraphQLString },
        mpa_rating: { type: GraphQLString },
        background_image: { type: GraphQLString },
        background_image_original: { type: GraphQLString },
        small_cover_image: { type: GraphQLString },
        medium_cover_image: { type: GraphQLString },
        large_cover_image: { type: GraphQLString },
        medium_screenshot_image1: { type: GraphQLString },
        medium_screenshot_image2: { type: GraphQLString },
        medium_screenshot_image3: { type: GraphQLString },
        large_screenshot_image1: { type: GraphQLString },
        large_screenshot_image2: { type: GraphQLString },
        large_screenshot_image3: { type: GraphQLString },
        torrents: { type: new GraphQLList(TorrentType) },
        date_uploaded: { type: GraphQLString },
        date_uploaded_unix: { type: GraphQLInt }
    })
})

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
        size_bytes: { type: GraphQLInt },
        date_uploaded: { type: GraphQLString },
        date_uploaded_unix: { type: GraphQLInt }
    })
})

// Apollo Req
// {
//     movie(movie_id: 69) {
//         id
//         url
//         imdb_code
//         title
//         title_english
//         title_long
//         slug
//         year
//         rating
//         runtime
//         genres
//         download_count
//         like_count
//         description_intro
//         description_full
//         yt_trailer_code
//         language
//         mpa_rating
//         background_image
//         background_image_original
//         small_cover_image
//         medium_cover_image
//         large_cover_image
//         medium_screenshot_image1
//         medium_screenshot_image2
//         medium_screenshot_image3
//         large_screenshot_image1
//         large_screenshot_image2
//         large_screenshot_image3
//         date_uploaded
//         date_uploaded_unix
//         torrents {
//             url
//             hash
//             quality
//             type
//             seeds
//             peers
//             size
//             size_bytes
//             date_uploaded
//             date_uploaded_unix
//         }
//     }
// }

module.exports = MovieType
