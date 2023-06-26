import { CircularProgress } from '@mui/material'
import styles from './styles.module.scss'

const Spinner = () => {
    return <CircularProgress className={styles.spinner} />
}

export default Spinner
