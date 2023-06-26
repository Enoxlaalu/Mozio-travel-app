import React from 'react'
import styles from './styles.module.scss'

interface IButton {
    text: string
    type?: 'primary' | 'secondary'
    onClick: () => void
    className?: string
    disabled?: boolean
}

const Button: React.FC<IButton> = ({
    text,
    type = 'primary',
    onClick,
    className,
    disabled,
}) => {
    return (
        <button
            id="button"
            className={`${styles.button} ${styles[type]} ${className} ${
                disabled && styles.disabled
            }`}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
