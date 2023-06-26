import Icon from 'src/components/Icon/Icon'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import styles from './styles.module.scss'
import React from 'react'

interface ITimelineIcon {
    lastIcon: boolean
}

const TimelineIcon: React.FC<ITimelineIcon> = ({ lastIcon }) => {
    return (
        <Icon
            icon={lastIcon ? LocationOnOutlinedIcon : PanoramaFishEyeIcon}
            className={`${styles.icon} ${lastIcon && styles.location}`}
        />
    )
}

export default TimelineIcon
