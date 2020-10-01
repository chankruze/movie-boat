/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 01 2020 12:34:27 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import styles from './MovieGrid.module.css'

function MovieGrid(props) {
    const movies = props.movies

    return (
        <div className={styles.movieList}>
            {/* JS to generate list */}
            {
                movies.map(movieData => <MovieCard key={movieData.id} movieData={movieData} />)
            }
        </div>
    )
}

export default MovieGrid
