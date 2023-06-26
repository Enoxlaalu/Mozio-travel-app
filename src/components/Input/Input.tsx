import React from 'react'
import styles from './styles.module.scss'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'

interface IInput {
    id: string
    label: string
    params?: {
        [key: string]: any
    }
    className?: string
    error?: string
    testId?: string
}

const Input: React.FC<IInput> = ({
    id,
    label,
    params,
    className,
    error,
    testId,
}) => {
    return (
        <div
            data-testid="inputWrapper"
            className={`${styles.input} ${className} ${error && styles.error}`}
        >
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <input id={id} data-testid={testId} {...params} />
            <ErrorMessage>{error}</ErrorMessage>
        </div>
    )
}

export default Input
