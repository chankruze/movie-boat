/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 03 2020 01:24:51 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import { FaDownload } from "react-icons/fa";
import { trackers } from "../../../../../utils";

import styles from "./Torrent.module.css";

function Torrent(props) {
  const { torrent, title } = props;
  const [bgUrl, setBgUrl] = React.useState("");

  const { url, hash, quality, size, availableIn } = torrent;

  // This is epic
  // import quality tv bg urls
  import(`../../../../../assets/svgs/${quality}-tv.svg`).then((res) =>
    setBgUrl(res.default)
  );

  // encode, add `&tr=` to each tracker url
  const encReduceTrackers = (accumulator, currentUrl) =>
    accumulator + `&tr=${encodeURIComponent(currentUrl)}`;
  // reduce trackers array to siblge string using above logic
  const magnetURI = `magnet:?xt=urn:btih:${hash}&dn=${encodeURIComponent(
    title
  )}&tr=${trackers.reduce(encReduceTrackers)}`;

  return (
    <div className={styles.dlWrapper}>
      {/* Reolution bg logo */}
      <div
        className={styles.resBg}
        style={{
          background: `url(${bgUrl}) no-repeat center bottom`,
        }}
      ></div>

      {/* Quality type */}
      <p className={styles.pText}>{`${availableIn.split(".")[1]}`}</p>

      {/* File size */}
      <p className={styles.pText}>{size}</p>

      {/* Torrent button */}
      <a
        className={`${styles.dlBtn}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDownload />
        download
      </a>

      {/* Magnet button */}
      <a
        className={`${styles.dlBtn} ${styles.magnet}`}
        href={magnetURI}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://yts.mx/assets/images/website/magnet.svg"
          alt=""
          srcset=""
        />
        Magnet
      </a>
    </div>
  );
}

export default Torrent;
