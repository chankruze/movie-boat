/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Oct 02 2020 13:48:06 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import styles from './RatingTable2D.module.css'

function RatingTable2D(props) {
    const { tableData } = props
    
    return (
        <table>
            <tbody>
                {
                    tableData.map((data, index) =>
                        <tr key={index}>
                            <td className={styles.td}>{data.key}</td>
                            <td className={styles.td}>
                                <b>{data.val}</b>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default RatingTable2D
