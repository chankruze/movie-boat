/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 01 2020 12:45:22 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import styles from "./PageBlock.module.css";

function PageBlock(props) {
  const { pageNo, active, setPage } = props;

  return (
    <div
      className={`${styles.pageBlock} ${active ? styles.active : ""}`}
      onClick={() => setPage(pageNo)}
    >
      {pageNo}
    </div>
  );
}

export default React.memo(PageBlock);
