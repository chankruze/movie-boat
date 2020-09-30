/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 29 2020 22:34:52 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import styles from './MovieCard.module.css'

function MovieCard(props) {
    const { movieData } = props
    const {
        title,
        year,
        rating,
        genres,
        coverImage
    } = movieData

    return (
        <div className={styles.MovieCard}>
            {/* Card Top */}
            <div className={styles.MovieCardTop}>
                <img src={coverImage}
                    alt={`cover for ${title}`}
                    className={styles.MovieCardCover} />
            </div>

            {/* Card Bottom */}
            <div className={styles.MovieCardBottom}>
                <div className={styles.left}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.year}>{year}</p>
                </div>
                {/* <div className={styles.right}>
                    <p className={styles.rating}>{rating}</p>
                </div> */}
            </div>
        </div>
    )
}

export default MovieCard
