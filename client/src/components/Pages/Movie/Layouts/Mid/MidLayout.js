/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 03 2020 20:18:11 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
// context
import { MovieContext } from '../../Movie'
// components
import Modal from 'react-modal'
// icons
import { VscChromeClose } from 'react-icons/vsc'
// CSS
import styles from './MidLayout.module.css'
import modalStyles from './TrailerModal.module.css'
import Person from './Person'

Modal.setAppElement('#react-root')

function MidLayout() {
    const context = React.useContext(MovieContext)
    const [trailerModalIsOpen, setTrailerModalIsOpen] = React.useState(false)
    const [parentalModalIsOpen, setParentalModalIsOpen] = React.useState(false)

    const {
        yt_trailer_code,
        description_full,
        medium_screenshot_image1, // 350x147
        medium_screenshot_image2,
        medium_screenshot_image3,
        large_screenshot_image1, // 1280x536
        large_screenshot_image2,
        large_screenshot_image3,
        date_uploaded,
        cast
    } = context

    const trailerURI = `https://www.youtube.com/embed/${yt_trailer_code}?autoplay=1`
    const uploadDate = new Date(date_uploaded)
    const uploadDateFull = `${uploadDate.toDateString()} at ${uploadDate.toLocaleTimeString()}`

    return (
        <div className={styles.midWrapper}>
            {/* Screenshots */}
            <div className={styles.screenshotsWrapper}>
                <img src={medium_screenshot_image1} alt="medium screenshot 1" />
                <img src={medium_screenshot_image2} alt="medium screenshot 2" />
                <img src={medium_screenshot_image3} alt="medium screenshot 3" />
            </div>
            {/* Trailer Modal */}
            <Modal className={modalStyles.dlModal}
                overlayClassName={modalStyles.dlModalOverlay}
                isOpen={trailerModalIsOpen}
                contentLabel="Download Modal">

                {/* Close Button */}
                <span className={modalStyles.close} onClick={() => setTrailerModalIsOpen(false)}>
                    <VscChromeClose />
                </span>

                {/* YT Trailer Frame */}
                <iframe className={styles.trailerFrame} src={trailerURI} frameborder="0" />
            </Modal>

            {/* Synopsis & Cast */}
            <div className={styles.infoWrapper}>
                {/* Description */}
                <div className={styles.descriptionWrapper}>
                    <h2>Synopsis</h2>
                    
                    {/* Description Full */}
                    <p>{description_full}</p>

                    {/* Parental Guide */}
                    <p className={styles.parentalGuide}
                        onClick={() => setParentalModalIsOpen(true)}>
                        Parental Guide
                    </p>
                    {/* Parental Guide Modal */}
                    <Modal className={modalStyles.dlModal}
                        overlayClassName={modalStyles.dlModalOverlay}
                        isOpen={parentalModalIsOpen}
                        contentLabel="Download Modal">

                        {/* Close Button */}
                        <span className={modalStyles.close} onClick={() => setParentalModalIsOpen(false)}>
                            <VscChromeClose />
                        </span>

                        {/* Parental Guide Container */}
                        <div></div>
                    </Modal>

                    <p className={styles.uploadDate}><g>Uploaded on:</g><br />{uploadDateFull}</p>
                </div>

                {/* Cast */}
                <div className={styles.castWrapper}>
                    <h2>Cast</h2>
                    {
                        cast ? cast.map((data) => <Person data={data} />) : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default MidLayout
