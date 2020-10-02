/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Oct 02 2020 15:54:42 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { Link } from 'react-router-dom'
import styles from './RelatedMovieCard.module.css'

function RelatedMovieCard(props) {
    const { movieData } = props

    const { id, title, medium_cover_proxy } = movieData

    return (
        <Link to={`/movie/${id}`}>
            <div className={styles.imgWrapper}>
                <img
                    className={styles.coverImg}
                    src={medium_cover_proxy}
                    alt={`Cover of ${title}`} />
            </div>
        </Link>
    )
}

export default RelatedMovieCard
