/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Sep 30 2020 01:48:48 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { useQuery } from '@apollo/client'
import querries from '../../../graphql'

// components
import PageNav from '../../PageNav/PageNav'
import MovieGrid from '../../MovieGrid/MovieGrid'

// CSS
import styles from './Home.module.css'

function Home() {
    const [limit, setLimit] = React.useState(48)
    const [page, setPage] = React.useState(1)

    const { loading, error, data } = useQuery(querries.GQL_LATEST_MOVIES, { variables: { limit, page } })

    if (loading) {
        return (
            <h4 className={styles.loader}>
                Fetching Latest Movies...
                <br/>
                Page {page}
            </h4>)
    }

    if (error) {
        console.log(error)
        return (
            <h2 className={styles.loader}>
                Error Fetching Latest Movies ;(
            </h2>
        )
    }

    if (data && data.movies) {
        console.log(`movies updated at ${(new Date()).toLocaleTimeString().slice(0, 7)}`)
    }

    return (
        <div className={styles.homePage}>
            {/* <h1>Latest</h1> */}
            <MovieGrid movies={data.latestMovies.movies} />

            {/* total_page_count = (movie_count / limit)
                page_number = current_page */}
            <PageNav totalPages={Math.floor(data.latestMovies.movie_count / data.latestMovies.limit)}
                currentPage={data.latestMovies.page_number}
                setPage={setPage} />
        </div>
    )
}

export default React.memo(Home)
