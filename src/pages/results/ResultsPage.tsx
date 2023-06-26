import { useEffect, useState } from 'react'
import ResultsSection from 'src/pages/results/ResultsSection/ResultsSection'
import styles from './styles.module.scss'
import Button from 'src/components/Button/Button'
import { createSearchParams, useNavigate } from 'react-router-dom'
import useGetSearchParams from 'src/hooks/useGetSearchParams'
import { IResults } from 'src/pages/results/types'
import ResultsTimeline from 'src/pages/results/ResultsTimeline/ResultsTimeline'
import { ICities } from 'src/pages/search/types'
import { calculateDistances } from 'src/pages/api'
import { CircularProgress } from '@mui/material'
import useAsyncError from 'src/hooks/useAsyncError'
import Spinner from 'src/components/Spinner/Spinner'

const ResultsPage = () => {
    const navigate = useNavigate()
    const searchParams = useGetSearchParams()!
    const [results, setResults] = useState<IResults | null>()
    const throwError = useAsyncError()

    useEffect(() => {
        const fetchData = async () => {
            const data = JSON.parse(
                decodeURIComponent(searchParams.cities)
            ).map((c: ICities) => c.value)

            try {
                const distances = await calculateDistances(data)

                setResults({
                    passengers: searchParams.passengers,
                    date: searchParams.date,
                    ...distances,
                })
            } catch (error) {
                throwError(error)
            }
        }

        fetchData()
    }, [])

    const goBack = () => {
        navigate({
            pathname: '/',
            search: `?${createSearchParams(searchParams)}`,
        })
    }

    return (
        <div className={styles.resultsPage}>
            {results ? (
                <>
                    <ResultsTimeline results={results} />
                    <ResultsSection data={results} />
                    <Button text="Back" onClick={goBack} />
                </>
            ) : (
                <Spinner />
            )}
        </div>
    )
}

export default ResultsPage
