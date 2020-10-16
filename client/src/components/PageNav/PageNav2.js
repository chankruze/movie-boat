/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Oct 16 2020 21:27:27 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import styles from "./PageNav2.module.css";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";

const PageNav2 = (props) => {
  const { totalPages, currentPage, updatePage } = props;
  const [pageNum, setPageNum] = React.useState(currentPage);

  const updatePageNo = (e) => {
    setPageNum(
      e.target.value !== "" &&
        (e.target.value > totalPages || e.target.value <= 0)
        ? currentPage
        : e.target.value
    );
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      if (pageNum === "") {
        alert(
          `Page number can't be empty !\nEnter a number between 1 to ${totalPages}`
        );
        setPageNum(currentPage);
      } else {
        if (pageNum !== currentPage) {
          updatePage(parseInt(pageNum));
        }
      }
    }
  };

  React.useEffect(() => {
    setPageNum(currentPage);
  }, [currentPage]);

  return (
    <div className={styles.input_group}>
      {/* Left Arrow */}
      <ImArrowLeft
        className={styles.input_group_prefix}
        onClick={() =>
          updatePage(
            pageNum === currentPage ? parseInt(pageNum - 1) : parseInt(pageNum)
          )
        }
      />
      {/* Mid Input */}
      <div className={styles.input_group_area}>
        <input
          type="text"
          value={pageNum}
          placeholder={currentPage}
          maxLength={totalPages.toString().length}
          onChange={updatePageNo}
          onKeyPress={handleSubmit}
        />
        <span className={styles.divider}>of</span>
        <span className={styles.total}>{totalPages}</span>
      </div>
      {/* Right Arrow */}
      <ImArrowRight
        className={styles.input_group_postfix}
        onClick={() =>
          updatePage(
            pageNum === currentPage ? parseInt(pageNum + 1) : parseInt(pageNum)
          )
        }
      />
    </div>
  );
};

export default PageNav2;
