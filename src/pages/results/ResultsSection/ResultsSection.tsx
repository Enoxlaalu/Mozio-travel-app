import React from 'react'
import styles from './styles.module.scss'

interface IResultsSection {
    data: {
        total: number
        passengers: string
        date: string
    }
}

const ResultsSection: React.FC<IResultsSection> = ({ data }) => {
    const { total, passengers, date } = data

    return (
        <div data-component="resultsSection" className={styles.resultsSection}>
            <p>
                <b>{Number(total).toFixed(2)} km</b> is total distance
            </p>
            <p>
                <b>{passengers}</b> passengers
            </p>
            <p>
                <b>{date}</b>
            </p>
        </div>
    )
}

export default ResultsSection
