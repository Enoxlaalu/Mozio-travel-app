import React from 'react'
import styles from './styles.module.scss'

interface IErrorMessage {
    children: React.ReactNode
}

const ErrorMessage: React.FC<IErrorMessage> = React.memo(({ children }) => {
    return <p className={styles.errorText}>{children}</p>
})

export default ErrorMessage
