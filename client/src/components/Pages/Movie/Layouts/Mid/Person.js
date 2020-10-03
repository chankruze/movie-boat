/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 03 2020 21:44:39 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import styles from './Person.module.css'

function Person(props) {
    const { data } = props
    const {
        name,
        character_name,
        url_small_image,
        imdb_code
    } = data

    return (
        <div className={styles.personWrapper}>
            {/* Image */}
            <img src={url_small_image} alt={name} />

            {/* Real Name as Character Name */}
            <p>
                <span className={styles.name}>{name}</span>
                as
                <span className={styles.charName}>{character_name}</span>
            </p>
        </div>
    )
}

export default Person
