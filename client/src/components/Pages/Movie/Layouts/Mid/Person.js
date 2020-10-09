/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 03 2020 21:44:39 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import styles from "./Person.module.css";

function Person(props) {
  const { data } = props;
  const [imgUrl, setImgUrl] = React.useState("");

  const { name, character_name, url_small_image, imdb_code } = data;

  React.useEffect(() => {
    if (url_small_image === null) {
      import("../../../../../assets/images/default_avatar.jpg").then((res) =>
        setImgUrl(res.default)
      );
    } else {
      setImgUrl(`https://img.${url_small_image.substr(8)}`);
    }
  }, []);

  return (
    <div className={styles.personWrapper}>
      {/* Image */}
      <img src={imgUrl} alt={name} />

      {/* Real Name as Character Name */}
      <p>
        <span className={styles.name}>{name}</span>
        as
        <span className={styles.charName}>{character_name}</span>
      </p>
    </div>
  );
}

export default Person;
