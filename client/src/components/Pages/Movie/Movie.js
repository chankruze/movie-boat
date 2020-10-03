/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 01 2020 17:43:29 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { useQuery } from '@apollo/client'
import TopLayout from './Layouts/Top/TopLayout'
import styles from './Movie.module.css'

import querries from '../../../graphql/'
import MidLayout from './Layouts/Mid/MidLayout'

// create a movie context to access data from children
export const MovieContext = React.createContext()

function Movie(props) {
    // grab the movie id
    const { movie_id } = props.match.params // string

    // GET movie details
    const { loading: movieLoading, error: movieError, data: movieData } = useQuery(querries.GQL_MOVIE, { variables: { movie_id: parseInt(movie_id) } })
    const { loading: relMovieLoading, error: relMovieError, data: relMovieData } = useQuery(querries.GQL_RELATED_MOVIES, { variables: { movie_id: parseInt(movie_id) } })

    if (movieLoading) {
        return (
            <h4 className={styles.loader}>
                Fetching Movie Details...
            </h4>)
    }

    if (relMovieLoading) {
        return (
            <h4 className={styles.loader}>
                Fetching Retaled Movies...
            </h4>)
    }

    if (movieError) {
        console.log(movieError)
        return (
            <h2 className={styles.loader}>
                Error Fetching Movie ;(
            </h2>
        )
    }

    if (relMovieError) {
        console.log(relMovieError)
        return (
            <h2 className={styles.loader}>
                Error Fetching Related Movies ;(
            </h2>
        )
    }

    if (movieData && movieData.movie) {
        console.log(`Fetched details for "${movieData.movie.title}" at ${(new Date()).toLocaleTimeString()}`)
    }

    if (relMovieData && relMovieData.relatedMovies) {
        console.log(`Fetched related movies for "${movieData.movie.title}" at ${(new Date()).toLocaleTimeString()}`)
    }

    document.title = `${movieData.movie.title} (${movieData.movie.year}) - MovieBoat`

    return (
        <div className={styles.moviePage}>
            <MovieContext.Provider value={movieData.movie}>
                {/* Top */}
                <TopLayout relatedMovies={relMovieData.relatedMovies} />
                {/* Middle */}
                <MidLayout />
                {/* Bottom */}
            </MovieContext.Provider>
        </div>
    )
}

export default React.memo(Movie)
