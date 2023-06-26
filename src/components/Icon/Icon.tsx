import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import React from 'react'
import styles from './styles.module.scss'

interface IIcon {
    className?: string
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string }
    onClick?: () => void
}

const Icon: React.FC<IIcon> = ({ className, icon, onClick }) => {
    const Element = icon

    return (
        <Element className={`${styles.icon} ${className}`} onClick={onClick} />
    )
}

export default Icon
