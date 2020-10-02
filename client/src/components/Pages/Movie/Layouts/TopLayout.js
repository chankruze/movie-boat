/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 01 2020 20:15:08 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
// context
import { MovieContext } from '../Movie'
// components
import RatingTable2D from './RatingTable2D'
// icons
import { HiDownload } from 'react-icons/hi'
import { FaRegHeart } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
// CSS
import styles from './TopLayout.module.css'

import RelatedMovieCard from '../../../MovieCard/RelatedMovieCard'

function TopLayout(props) {
    const context = React.useContext(MovieContext)
    const { relatedMovies } = props

    const {
        id,
        title,
        year,
        genres,
        imdb_code,
        rating,
        like_count,
        medium_cover_image,
        availableIn
    } = context

    const ratingTableData = [
        {
            key: <FaRegHeart />,
            val: like_count
        },
        {
            key: <AiFillStar />,
            val: rating
        }
    ]

    return (
        <div className={styles.topWrapper}>
            {/* Left */}
            <div className={styles.left}>
                <img className={styles.imgCover}
                    src={medium_cover_image}
                    alt={`{movie name} medium cover`} />
                <button className={styles.btnDownload}>
                    <HiDownload />
                    Download
                </button>
            </div>

            {/* Middle */}
            <div className={styles.middle}>
                <h1 className={styles.title}>{title}</h1>
                <h2 className={styles.year}>{year}</h2>
                <h2 className={styles.genres}>
                    {
                        genres.map((genre, index, genresRef) =>
                            <span key={index}>{genre}{index < (genresRef.length - 1) ? ' / ' : ''}</span>
                        )
                    }
                </h2>
                <div className={styles.qualityWrapper}>
                    Available in {
                        availableIn.map(({ quality, url }, index) =>
                            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
                                {quality}
                            </a>
                        )
                    }
                </div>
                <div className={styles.subtitleWrapper}>
                    <a href={`https://yifysubtitles.org/movie-imdb/${imdb_code}`}
                        target="_blank" rel="noopener noreferrer">
                        <HiDownload />
                    download subtitles
                    </a>
                </div>
                <div className={styles.ratingWrapper}>
                    <RatingTable2D tableData={ratingTableData} />
                </div>
            </div>

            {/* Right */}
            <div className={styles.right}>
                <h2 className={styles.titleRelatedMovies}>Related Movies</h2>
                <div className={styles.relatedMoviesWrapper}>
                    {/* Related Movies */}
                    {
                        relatedMovies.map((movieData, index) => <RelatedMovieCard movieData={movieData} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default React.memo(TopLayout)
