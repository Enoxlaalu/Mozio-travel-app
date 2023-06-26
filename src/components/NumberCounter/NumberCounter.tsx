import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import React from 'react'
import styles from './styles.module.scss'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'

interface INumberCounter {
    value: number
    onChange: (value: number) => void
    label: string
    error?: string
}

const NumberCounter: React.FC<INumberCounter> = ({
    value = 0,
    onChange,
    label,
    error,
}) => {
    const increment = () => onChange(value + 1)
    const decrement = () => onChange(value - 1)

    return (
        <div data-component="numberCounter" className={styles.counter}>
            <p>{label}</p>
            <div className={`${styles.wrapper} ${error && styles.error}`}>
                <button
                    onClick={decrement}
                    className={value === 0 ? styles.disabled : ''}
                >
                    <RemoveIcon fontSize="small" />
                </button>
                <span>{value}</span>
                <button onClick={increment}>
                    <AddIcon />
                </button>
            </div>
            <ErrorMessage>{error}</ErrorMessage>
        </div>
    )
}

export default NumberCounter
