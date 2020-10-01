/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 01 2020 20:15:08 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import styles from './TopLayout.module.css'

function TopLayout() {
    return (
        <div className={styles.topWrapper}>
            <div className={styles.left}>
                {/* <img src={} alt={`{movie name} medium cover`} /> */}
            </div>
            <div className={styles.middle}>

            </div>
            <div className={styles.right}>

            </div>
        </div>
    )
}

export default React.memo(TopLayout)
