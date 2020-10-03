/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 03 2020 01:24:51 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { FaDownload, FaMagnet } from 'react-icons/fa'
import { trackers } from '../../../../../utils'

import styles from './Torrent.module.css'

// https://yts.mx/assets/images/website/2160p-quality.svg

function Torrent(props) {
    const { torrent, title } = props
    const {
        url,
        hash,
        quality,
        size,
        availableIn
    } = torrent

    const encReduceTrackers = (accumulator, currentUrl) => accumulator + `&tr=${encodeURIComponent(currentUrl)}`
    const magnetURI = `magnet:?xt=urn:btih:${hash}&dn=${encodeURIComponent(title)}&tr=${trackers.reduce(encReduceTrackers)}`

    const bg = `https://yts.mx/assets/images/website/${quality}-quality.svg`

    return (
        <div className={styles.dlWrapper}>
            {/* Reolution bg logo */}
            <div className={styles.resBg}
                style={{
                    background: `url(${bg}) no-repeat center bottom`,
                }}>
            </div>

            {/* Quality type */}
            <p className={styles.pText}>
                {
                    `${availableIn.split('.')[1]}`
                }
            </p>

            {/* File size */}
            <p className={styles.pText}>{size}</p>

            {/* Torrent button */}
            <a className={`${styles.dlBtn}`}
                href={url} target='_blank' rel='noopener noreferrer'>
                <FaDownload />download
            </a>

            {/* Magnet button */}
            <a className={`${styles.dlBtn} ${styles.magnet}`}
                href={magnetURI} target='_blank' rel='noopener noreferrer'>
                <img src="https://yts.mx/assets/images/website/magnet.svg" alt="" srcset="" />
                Magnet
            </a>
        </div>
    )
}

export default Torrent
