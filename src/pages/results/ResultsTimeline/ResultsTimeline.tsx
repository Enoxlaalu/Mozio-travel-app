import {
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
} from '@mui/lab'
import { ICityData, IResults } from 'src/pages/results/types'
import styles from './styles.module.scss'
import TimelineIcon from 'src/components/TimelineIcon/TimelineIcon'

interface IResultsTimeline {
    results: IResults
}

const ResultsTimeline: React.FC<IResultsTimeline> = ({ results }) => {
    const { cities } = results

    const renderItem = ({ name, distance }: ICityData, index: number) => {
        return (
            <TimelineItem key={name} className={styles.timelineItem}>
                <TimelineOppositeContent
                    color="text.secondary"
                    className={styles.distance}
                >
                    {distance && (
                        <div className={styles.chip}>{distance} km</div>
                    )}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineIcon lastIcon={index === cities.length - 1} />
                    {distance && (
                        <TimelineConnector className={styles.connector}>
                            <div className={styles.dot} />
                            <div className={styles.dot} />
                            <div className={styles.dot} />
                        </TimelineConnector>
                    )}
                </TimelineSeparator>
                <TimelineContent className={styles.content}>
                    {name}
                </TimelineContent>
            </TimelineItem>
        )
    }

    return (
        <div className={styles.timeline}>
            {cities.map((el, index) => renderItem(el, index))}
        </div>
    )
}

export default ResultsTimeline
