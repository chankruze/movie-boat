/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 01 2020 17:43:29 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { useQuery } from '@apollo/client'
import TopLayout from './Layouts/TopLayout'
import styles from './Movie.module.css'

import querries from '../../../graphql/'

// create a movie context to access data from children
export const MovieContext = React.createContext()

function Movie(props) {
    // grab the movie id
    const { movie_id } = props.match.params // string

    // GET movie details
    const { loading, error, data } = useQuery(querries.GQL_MOVIE, { variables: { movie_id: parseInt(movie_id) } })

    if (loading) {
        return (
            <h4 className={styles.loader}>
                Fetching Movie Details...
            </h4>)
    }

    if (error) {
        console.log(error)
        return (
            <h2 className={styles.loader}>
                Error Fetching Movie ;(
            </h2>
        )
    }

    if (data && data.movie) {
        console.log(`Fetched details for "${data.movie.title}" at ${(new Date()).toLocaleTimeString()}`)
    }

    return (
        <div className={styles.moviePage}>
            <MovieContext.Provider value={data.movie}>
                {/* Top */}
                <TopLayout />
                {/* Middle */}
                {/* Bottom */}
            </MovieContext.Provider>
        </div>
    )
}

export default React.memo(Movie)
