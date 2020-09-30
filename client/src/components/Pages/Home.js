/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Sep 30 2020 01:48:48 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import styles from './Home.module.css'

const movieDetails = {
    title: 'A Brilliant Young Mind',
    year: '2014',
    rating: 7.1,
    genres: [
        "Action",
        "Comedy",
        "Drama",
        "Romance"
    ],
    coverImage: 'https://yts.mx/assets/images/movies/a_brilliant_young_mind_2014/medium-cover.jpg'
}

function Home() {
    let movieArray = []

    for (let index = 0; index < 23; index++) {
        movieArray.push(movieDetails)
    }

    return (
        <div className={styles.homeWrapper}>
            {/* <h1>Latest</h1> */}
            <div className={styles.movieList}>
                {/* JS to generate list */}
                {
                    movieArray.map(movie => <MovieCard movieData={movie}/>)
                }
            </div>
            <div className={styles.pageList}>
                {/* JS to generate list */}
            </div>
        </div>
    )
}

export default Home
