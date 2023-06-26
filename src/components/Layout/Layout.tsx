import React from 'react'
import styles from './styles.module.scss'
import Modal from 'src/components/Modal/Modal'

interface ILayout {
    children: React.ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
    return (
        <main className={styles.layout}>
            <Modal>{children}</Modal>
        </main>
    )
}

export default Layout
