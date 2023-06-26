import React from 'react'
import styles from './styles.module.scss'

interface IModal {
    children: React.ReactNode
}

const Modal: React.FC<IModal> = ({ children }) => {
    return <div className={styles.modal}>{children}</div>
}

export default Modal
