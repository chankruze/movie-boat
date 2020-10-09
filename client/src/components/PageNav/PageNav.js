/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 01 2020 11:56:32 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import PageBlock from "./PageBlock";
import styles from "./PageNav.module.css";

function PageNav(props) {
  let pages = [];
  const { totalPages, currentPage, setPage } = props;

  // console.log("Debug: ", totalPages, currentPage)

  for (let index = 1; index <= totalPages; ++index) {
    pages.push(
      <PageBlock
        key={index}
        pageNo={index}
        active={currentPage === index}
        setPage={setPage}
      />
    );
  }

  return <div className={styles.pageNavWrapper}>{pages}</div>;
}

export default React.memo(PageNav);
