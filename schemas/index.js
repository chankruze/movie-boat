/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 27 2020 11:48:28 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

const axios = require('axios')
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = require('graphql')


// import schemas
const MovieType = require('./movieType')
const API_V2 = 'https://yts.mx/api/v2/'
const MOVIE_DETAILS = 'movie_details.json?with_images=true&with_cast=true&movie_id='

// YTS Response Parser
const parseYTSRes = (res) => {
    const { status, status_message, data } = res.data

    if (status !== 'ok') {
        console.log(`status: ${status}`)
        console.log(`status message: ${status_message}`)
    }

    return data
}

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        // Movie Details
        // https://yts.mx/api/v2/movie_details.json?movie_id={id}&with_images=true&with_cast=true
        movie: {
            type: MovieType,
            args: {
                movie_id: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return axios.get(`${API_V2}${MOVIE_DETAILS}${args.movie_id}`)
                    .then(res => parseYTSRes(res).movie)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})