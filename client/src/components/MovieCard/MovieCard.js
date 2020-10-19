/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 29 2020 22:34:52 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import styles from "./MovieCard.module.css";

function MovieCard(props) {
  const { movieData } = props;
  const { id, title, year, rating, genres, medium_cover_proxy } = movieData;

  // const ratingFloat = parseFloat(rating).toFixed(1);

  return (
    <div className={styles.movieCard}>
      {/* Card Top */}
      <div className={styles.movieCardTop}>
        <img
          src={medium_cover_proxy}
          alt={`cover for ${title}`}
          className={styles.movieCardCover}
        />

        {/* Hidden Movie Info */}
        <div className={styles.movieInfo}>
          <h2>
            <AiFillStar color="#5da93c" />
            <br />
            {rating} / 10
          </h2>
          <ul className={styles.genresList}>
            {genres && genres.slice(0, 4).map((gen, index) => (
              <li key={index}>{gen}</li>
            ))}
          </ul>
          <Link
            to={`/movie/${id}`}
            rel="noopener noreferrer"
            className={styles.buttonMovie}
          >
            more details
          </Link>
        </div>
      </div>

      {/* Card Bottom */}
      <div className={styles.movieCardBottom}>
        <div className={styles.left}>
          <p className={styles.title}>{title}</p>
          <p className={styles.year}>{year}</p>
        </div>
        {/* <div className={styles.right}>
                    <p className={styles.rating}>{ratingFloat}</p>
                </div> */}
      </div>
    </div>
  );
}

export default React.memo(MovieCard);
