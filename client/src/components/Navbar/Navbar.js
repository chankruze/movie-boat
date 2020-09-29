/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 29 2020 14:00:07 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import styles from './Navbar.module.css'
import NavItems from './NavItems'
import { BiCameraMovie } from 'react-icons/bi'

function Navbar() {
    return (
        <div className={`${styles.navbar} ${styles.bgDark}`}>
            <div className={styles.brandWrapper}>
                {/* <img className={styles.logo}
                    src="https://avatars3.githubusercontent.com/u/41100705"
                    alt="Logo" /> */}
                <h1 className={styles.logo}>
                    <BiCameraMovie />
                </h1>
                <h1 className={styles.title}>
                    geekofia
                </h1>
            </div>
            <div className={styles.linksWrapper}>
                {
                    NavItems.map(({ title, path, hoverClass }) => <a href={path} className={`${hoverClass} ${styles.link}`}>{title}</a>)
                }
                {/* <FlatNavButton payload={payloadLogin} /> */}
            </div>
        </div>
    )
}

export default Navbar
