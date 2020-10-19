/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Oct 18 2020 00:07:30 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import MovieCard from "../../MovieCard/MovieCard";
import PageNav2 from "../../PageNav/PageNav2";

import styles from "./MovieList.module.css";

function MovieList(props) {
  const { movieData, setPageParent } = props;
  const { movies, movie_count, limit, page_number } = movieData;

  return (
    <div className={styles.movieList}>
      {/* Movie Count */}
      <h1 className={movie_count === 0 ? styles.danger : styles.safe}>
        <span>{movie_count === 0 ? "No" : movie_count}</span> Movies Found{" "}
        {movie_count !== 0 ? "!" : ";("}
      </h1>
      {/* Page Nav */}
      {movie_count !== 0 ? (
        <PageNav2
          totalPages={Math.ceil(movie_count / limit)}
          currentPage={page_number}
          updatePage={setPageParent}
        />
      ) : (
        ""
      )}
      {/* JS to generate list */}
      <div className={styles.movie_section}>
        {movies &&
          movies.map((movieData) => (
            <MovieCard key={movieData.id} movieData={movieData} />
          ))}
      </div>
      {/* Page Nav */}
      {movie_count !== 0 ? (
        <PageNav2
          totalPages={Math.ceil(movie_count / limit)}
          currentPage={page_number}
          updatePage={setPageParent}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default MovieList;
