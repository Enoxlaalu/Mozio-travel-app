import Button from 'src/components/Button/Button'
import { createSearchParams, useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'
import useGetSearchParams from 'src/hooks/useGetSearchParams'

const ErrorBoundary = () => {
    const navigate = useNavigate()
    const searchParams = useGetSearchParams()

    const goBack = () => {
        navigate({
            pathname: '/',
            search: `?${createSearchParams(searchParams)}`,
        })
    }

    return (
        <div className={styles.errorBoundary}>
            <h3>Something went wrong, Please try again later</h3>
            <Button text="Back" onClick={goBack} />
        </div>
    )
}

export default ErrorBoundary
