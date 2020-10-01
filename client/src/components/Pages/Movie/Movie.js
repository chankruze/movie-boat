/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 01 2020 17:43:29 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { useQuery } from '@apollo/client'
import TopLayout from './Layouts/TopLayout'
import styles from './Movie.module.css'

import querries from '../../../graphql/'

function Movie(props) {
    const { movie_id } = props.match.params
    console.log(movie_id)
    const { loading, error, data } = useQuery(querries.GQL_MOVIE, { variables: { movie_id: parseInt(movie_id) } })

    if (loading) {
        return (
            <h4 className={styles.loader}>
                Fetching Movie Details...
            </h4>)
    }

    if (error) {
        console.log(error)
        return (
            <h2 className={styles.loader}>
                Error Fetching Movie ;(
            </h2>
        )
    }

    if (data && data.movie) {
        console.log(`Fetched details for "${data.movie.title}" at ${(new Date()).toLocaleTimeString().slice(0, 7)}`)
    }

    return (
        <div className={styles.moviePage}>
            {/* Top */}
            <TopLayout />
            {/* Middle */}
            {/* Bottom */}
        </div>
    )
}

export default React.memo(Movie)
