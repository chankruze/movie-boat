/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 01 2020 20:15:08 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
// context
import { MovieContext } from "../../Movie";
// components
import RatingTable2D from "./RatingTable2D";
import Modal from "react-modal";
// icons
import { HiDownload } from "react-icons/hi";
import { MdFileDownload, MdTimer, MdStarBorder } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";
// CSS
import styles from "./TopLayout.module.css";
import modalStyles from "../../../ModalCommon.module.css";
import dlModalStyles from "./DownloadModal.module.css";

// import RelatedMovieCard from '../../../../MovieCard/RelatedMovieCard'
import Torrent from "./Torrent";

Modal.setAppElement("#react-root");

function TopLayout(props) {
  const context = React.useContext(MovieContext);
  // const { relatedMovies } = props
  const [dlModalIsOpen, setDlModalIsOpen] = React.useState(false);

  const {
    title,
    year,
    genres,
    imdb_code,
    runtime,
    download_count,
    rating,
    like_count,
    medium_cover_proxy,
    torrents,
  } = context;

  const ratingTableData = [
    {
      key: <IoMdHeartEmpty />,
      val: like_count,
    },
    {
      key: <MdStarBorder />,
      val: rating,
    },
    {
      key: <MdFileDownload />,
      val: download_count,
    },
    {
      key: <MdTimer />,
      val: `${(runtime / 60) ^ 0}hr ` + (runtime % 60) + "min",
    },
  ];

  return (
    <div className={styles.topWrapper}>
      {/* Left */}
      <div className={styles.left}>
        {/* Cover Image */}
        <img
          className={styles.imgCover}
          src={medium_cover_proxy}
          alt={`{movie name} medium cover`}
        />

        {/* Download Button */}
        <button
          className={styles.btnDownload}
          onClick={() => setDlModalIsOpen(true)}
        >
          <HiDownload />
          Download
        </button>

        {/* Download Modal */}
        <Modal
          className={modalStyles.modal}
          overlayClassName={modalStyles.modalOverlay}
          isOpen={dlModalIsOpen}
          contentLabel="Download Modal"
        >
          {/* Close Button */}
          <span
            className={modalStyles.close}
            onClick={() => setDlModalIsOpen(false)}
          >
            <VscChromeClose />
          </span>

          {/* Torrents Wrapper */}
          <div className={dlModalStyles.torrentsWrapper}>
            {torrents.map((torrent, index) => (
              <Torrent key={index} torrent={torrent} title={title} />
            ))}
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
          {genres && genres.map((genre, index, genresRef) => (
            <span key={index}>
              {genre}
              {index < genresRef.length - 1 ? " / " : ""}
            </span>
          ))}
        </h2>

        {/* Available In */}
        <div className={styles.qualityWrapper}>
          Available in
          {torrents.map((torrent, index) => (
            <a
              key={index}
              href={torrent.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {torrent.availableIn}
            </a>
          ))}
        </div>

        {/* Subtitle */}
        <div className={styles.subtitleWrapper}>
          <a
            href={`https://yifysubtitles.org/movie-imdb/${imdb_code}`}
            target="_blank"
            rel="noopener noreferrer"
          >
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
      {/* Related Movies */}
      {/* <div className={styles.right}>
                <h2 className={styles.titleRelatedMovies}>Related Movies</h2>
                <div className={styles.relatedMoviesWrapper}>
                    {
                        relatedMovies.map((movieData, index) => <RelatedMovieCard key={index} movieData={movieData} />)
                    }
                </div>
            </div> */}
    </div>
  );
}

export default React.memo(TopLayout);
