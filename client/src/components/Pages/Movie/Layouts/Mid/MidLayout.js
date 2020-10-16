/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 03 2020 20:18:11 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
// context
import { MovieContext } from "../../Movie";

// CSS
import styles from "./MidLayout.module.css";
import Person from "./Person";
import ParentalGuide from "./ParentalGuide";
import TrailerModal from "./TrailerModal";

function MidLayout() {
  const context = React.useContext(MovieContext);
  const [trailerModalIsOpen, setTrailerModalIsOpen] = React.useState(false);
  const [parentalModalIsOpen, setParentalModalIsOpen] = React.useState(false);

  const {
    id,
    yt_trailer_code,
    description_full,
    medium_screenshot_image1, // 350x147
    medium_screenshot_image2,
    medium_screenshot_image3,
    // large_screenshot_image1, // 1280x536
    // large_screenshot_image2,
    // large_screenshot_image3,
    date_uploaded,
    cast,
  } = context;

  const uploadDate = new Date(date_uploaded);
  const uploadDateFull = `${uploadDate.toDateString()} at ${uploadDate.toLocaleTimeString()}`;
  const castPersons = cast
    ? cast.map((data, index) => <Person key={index} data={data} />)
    : null;

  return (
    <div className={styles.midWrapper}>
      <div className={styles.trailerMob}>
        <a className={styles.trailerMobLink} href={`https://www.youtube.com/watch?v=${yt_trailer_code}`}>Watch Trailer</a>
      </div>
      <div
        className={styles.trailer}
        onClick={() => setTrailerModalIsOpen(true)}
      >
        <img
          src={`https://img.youtube.com/vi/${yt_trailer_code}/mqdefault.jpg`}
          alt={`${yt_trailer_code} Thumbnail`}
        />
        <span className={styles.playWrapper}>
          {/* <FiPlay className={styles.playBtn}/> */}
          <span className={styles.playText}>watch</span>
        </span>
      </div>

      {/* Trailer Modal */}
      <TrailerModal
        ytTrailerCode={yt_trailer_code}
        modalIsOpen={trailerModalIsOpen}
        setModalIsOpen={setTrailerModalIsOpen}
      />

      {/* Screenshots */}
      <div className={styles.screenshotsWrapper}>
        <img src={medium_screenshot_image1} alt="medium screenshot 1" />
        <img src={medium_screenshot_image2} alt="medium screenshot 2" />
        <img src={medium_screenshot_image3} alt="medium screenshot 3" />
      </div>

      {/* Synopsis & Cast */}
      <div className={styles.infoWrapper}>
        {/* Description */}
        <div
          className={`${styles.descriptionWrapper} ${
            cast ? "" : styles.noCast
          }`}
        >
          <h2 className={styles.sectionTitle}>Synopsis</h2>

          {/* Description Full */}
          <p>{description_full}</p>

          {/* Parental Guide */}
          <p
            className={styles.parentalGuide}
            onClick={() => setParentalModalIsOpen(true)}
          >
            Parental Guide
          </p>
          {/* Parental Guide Modal */}
          <ParentalGuide
            movieId={id}
            modalIsOpen={parentalModalIsOpen}
            setModalIsOpen={setParentalModalIsOpen}
          />

          <p className={styles.uploadDate}>
            Uploaded on:
            <br />
            {uploadDateFull}
          </p>
        </div>

        {/* Cast */}
        {cast ? (
          <div className={styles.castWrapper}>
            <h2 className={styles.sectionTitle}>Cast</h2>
            {castPersons}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MidLayout;
