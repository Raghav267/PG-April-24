import React from 'react'
import styles from './MovieDisplay.module.css'

const MovieDisplay = ({ img }) => {
    return (
        <div className={styles.divClass}>
            <img src={img} className={styles.imgClass} />

        </div>
    )
}

export default MovieDisplay
