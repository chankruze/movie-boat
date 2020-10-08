/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 29 2020 14:00:07 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { Link } from 'react-router-dom'
import NavItems from './NavItems'
import logo from '../../assets/images/logo.png'

import styles from './Navbar.module.css'

const Navbar = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false)

    const handleNavbarToggle = () => {
        isMobileNavOpen ? closeMobileNavbar() : openMobileNavbar()
    }

    const openMobileNavbar = () => setIsMobileNavOpen(true)
    const closeMobileNavbar = () => setIsMobileNavOpen(false)

    return (
        <header className={`${styles.navbar} ${isMobileNavOpen ? styles.opened : ''}`}>
            {/* Container */}
            <nav className={`${styles.navbarContainer} ${styles.container}`}>
                {/* Brand */}
                <Link to='/' className={styles.homeLink}>
                    {/* Logo */}
                    <img src={logo} className={styles.navbarLogo} />
                    {/* Brand Name */}
                    <h1 className={styles.brandName}>MovieBoat</h1>
                </Link>

                {/* Hamburger */}
                <button className={styles.navbarToggle}
                    // close/open menu
                    onClick={handleNavbarToggle}
                    // handles screen reader accessibility
                    aria-label={isMobileNavOpen ? "Close navigation menu." : "Open navigation menu"}>
                    <span className={styles.iconBar}></span>
                    <span className={styles.iconBar}></span>
                    <span className={styles.iconBar}></span>
                </button>

                {/* Links Menu */}
                <div className={styles.navbarMenu}>
                    {/* Links List */}
                    <ul className={styles.navbarLinks} onClick={clickEvent => clickEvent.stopPropagation()}>
                        {
                            NavItems.map(({ title, path, hoverClass }) => (
                                <li key={title} className={styles.navbarItem}>
                                    <Link to={path} key={title}
                                        className={styles.navbarLink}
                                        activeClassName={styles.active}
                                        onClick={closeMobileNavbar}>
                                        {title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default React.memo(Navbar)
