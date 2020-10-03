/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 01 2020 20:15:08 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
// context
import { MovieContext } from '../../Movie'
// components
import RatingTable2D from './RatingTable2D'
import Modal from 'react-modal'
// icons
import { HiDownload } from 'react-icons/hi'
import { FaRegHeart } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { VscChromeClose } from 'react-icons/vsc'
// CSS
import styles from './TopLayout.module.css'
import modalStyles from './DownloadModal.module.css'

import RelatedMovieCard from '../../../../MovieCard/RelatedMovieCard'
import Torrent from './Torrent'

Modal.setAppElement('#react-root')

function TopLayout(props) {
    const context = React.useContext(MovieContext)
    const { relatedMovies } = props
    const [dlModalIsOpen, setDlModalIsOpen] = React.useState(false)

    const {
        id,
        title,
        year,
        genres,
        imdb_code,
        rating,
        like_count,
        medium_cover_proxy,
        torrents
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
                    src={medium_cover_proxy}
                    alt={`{movie name} medium cover`} />
                <button className={styles.btnDownload}
                    onClick={() => setDlModalIsOpen(true)}>
                    <HiDownload />
                    Download
                </button>

                {/* Download Modal */}
                <Modal className={modalStyles.dlModal}
                    overlayClassName={modalStyles.dlModalOverlay}
                    isOpen={dlModalIsOpen}
                    contentLabel="Download Modal">

                    {/* Close Button */}
                    <span className={modalStyles.close} onClick={() => setDlModalIsOpen(false)}><VscChromeClose /></span>

                    {/* Torrents Wrapper */}
                    <div className={modalStyles.torrentsWrapper}>
                        {
                            torrents.map((torrent, index) => <Torrent key={index} torrent={torrent} title={title}/>)
                        }
                    </div>
                </Modal>
            </div>

            {/* Middle */}
            <div className={styles.middle}>
                {/* Title */}
                <h1 className={styles.title}>{title}</h1>

                {/* Year */}
                <h2 className={styles.year}>{year}</h2>

                {/* Genres */}
                <h2 className={styles.genres}>
                    {
                        genres.map((genre, index, genresRef) =>
                            <span key={index}>{genre}{index < (genresRef.length - 1) ? ' / ' : ''}</span>
                        )
                    }
                </h2>

                {/* Available In */}
                <div className={styles.qualityWrapper}>
                    Available in
                    {
                        torrents.map((torrent, index) =>
                            <a key={index} href={torrent.url} target="_blank" rel="noopener noreferrer">
                                {torrent.availableIn}
                            </a>
                        )
                    }
                </div>

                {/* Subtitle */}
                <div className={styles.subtitleWrapper}>
                    <a href={`https://yifysubtitles.org/movie-imdb/${imdb_code}`}
                        target="_blank" rel="noopener noreferrer">
                        <HiDownload />
                    download subtitles
                    </a>
                </div>

                {/* Rating Table */}
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
                        relatedMovies.map((movieData, index) => <RelatedMovieCard key={index} movieData={movieData} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default React.memo(TopLayout)
