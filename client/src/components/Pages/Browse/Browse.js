/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 17 2020 13:53:14 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

// components
import React, { useState } from "react";
import FilterBlock from "./FilterBlock";
import MovieList from "./MovieList";
import { HashLoader } from "react-spinners";
// apollo client
import { useLazyQuery } from "@apollo/client";
import querries from "../../../graphql";
// css
import styles from "./Browse.module.css";
import loadingStyles from "../LoadingWrapper.module.css";
import { css } from "@emotion/core";
// others
import { filters } from "./filters";

const defaultParams = {
  query_term: 0,
  quality: "All",
  minimum_rating: 0,
  genre: "All",
  sort_by: "date_added",
  order_by: "desc",
  page: 1,
};

const loaderCss = css`
  margin: auto;
`;

function Browse() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(defaultParams.page);
  const [params, setParams] = useState(defaultParams);
  const [browseMovies, { loading, data }] = useLazyQuery(
    querries.GQL_BROWSE_MOVIES
  );

  // update query parameters
  const handleOptionChange = (param, val) => {
    setParams((oldParams) => ({
      ...oldParams,
      [param]: val,
    }));
  };

  const prepareUrl = (page, query, params) => {
    let urlComp = "";
    let data = "";
    for (const param in params) {
      if (params[param] !== defaultParams[param]) {
        data += `&${param}=${params[param]}`;
      }
    }

    if (page !== defaultParams.page) {
      data += `&page=${page}`;
    }

    if (query !== "") {
      urlComp += `?query_term=${query}${data.slice(1) !== "" ? data : ""}`;
    } else {
      urlComp += `${data.slice(1) !== "" ? `?${data.slice(1)}` : ""}`;
    }

    return `https://yts.mx/api/v2/list_movies.json${urlComp}`;
  };

  React.useEffect(() => {
    browseMovies({
      variables: { url: prepareUrl(page, query, params) },
    });
  }, [page]);

  return (
    <div className={styles.browse_root}>
      {/* Search Section */}
      <div className={styles.search_section}>
        {/* Search Bar */}
        <div className={styles.search_input_wrap}>
          <input
            className={styles.search_input}
            type="text"
            placeholder="Movie name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Filter Bar */}
        <div className={styles.filter_div}>
          {filters.map((filter, index) => (
            <FilterBlock
              key={index}
              filterData={filter}
              handleOptionChange={handleOptionChange}
            />
          ))}
        </div>
        {/* Search Button */}
        <div className={styles.search_btn_wrap}>
          <button
            className={styles.search_btn}
            onClick={() => {
              setPage(defaultParams.page);
              browseMovies({
                variables: { url: prepareUrl(page, query, params) },
              });
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Result Section */}
      <div className={styles.result_section}>
        {/* Total Movies Found Count */}
        {loading && (
          <div className={loadingStyles.loaderWrapper}>
            <HashLoader color="green" css={loaderCss} />
          </div>
        )}
        {/* Movie Grid */}
        {data && <MovieList movieData={data.browse} setPageParent={setPage} />}
      </div>
    </div>
  );
}

export default React.memo(Browse);
