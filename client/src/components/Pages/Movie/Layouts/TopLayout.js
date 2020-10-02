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

function TopLayout() {
    const context = React.useContext(MovieContext)

    const {
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
                <h2 className={styles.yearGenres}>
                    {year} <br />
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
                {/* Related Movies */}

            </div>
        </div>
    )
}

export default React.memo(TopLayout)
