/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 27 2020 11:48:28 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

const axios = require('axios')
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList } = require('graphql')


// import schemas
const MovieType = require('./movieType')
const MovieTypeMin = require('./movieTypeMin')
const API_V2 = 'https://yts.mx/api/v2/'
const LIST_MOVIES = 'list_movies.json?limit=50'
const MOVIE_DETAILS = 'movie_details.json?with_images=true&with_cast=true&movie_id='

// YTS Response Parser
const parseYTSRes = (res) => {
    const { status, status_message, data } = res.data

    if (status !== 'ok') {
        console.log(`status: ${status}`)
        console.log(`status message: ${status_message}`)
    }

    console.log(data)
    return data
}

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
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
        movies: {
            type: new GraphQLList(MovieTypeMin),
            resolve(parent, args) {
                return axios.get(`${API_V2}/${LIST_MOVIES}`)
                    .then(res => parseYTSRes(res).movies)
            }
        },
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
