import {
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
} from '@mui/lab'
import Autocomplete from 'src/components/Autocomplete/Autocomplete'
import styles from './styles.module.scss'
import {
    Control,
    Controller,
    FieldErrors,
    UseFieldArrayReturn,
} from 'react-hook-form'
import { searchCities } from 'src/pages/api'
import TimelineIcon from 'src/components/TimelineIcon/TimelineIcon'
import React, { memo } from 'react'
import PlusIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import Icon from 'src/components/Icon/Icon'
import { IFormData, ICities } from 'src/pages/search/types'
import { TCities } from 'src/types'
import useAsyncError from 'src/hooks/useAsyncError'

interface ICitiesTimeline {
    control: Control<IFormData>
    errors: FieldErrors<IFormData>
    cities: UseFieldArrayReturn<IFormData, 'cities', 'id'>
}

let counter = 3

const CitiesTimeline: React.FC<ICitiesTimeline> = memo(
    ({ control, errors, cities }) => {
        const throwError = useAsyncError()

        const { fields, append, remove } = cities

        const addDestination = () => {
            append({
                id: counter.toString(),
                label: 'City of destination',
                value: null,
            })
            counter++
        }

        const renderItem = ({ id, label }: ICities, index: number) => {
            const removeDestination = () => {
                remove(index)
            }

            return (
                <TimelineItem key={id} className={styles.timelineItem}>
                    <TimelineSeparator>
                        <TimelineIcon lastIcon={index === fields.length - 1} />
                        {index !== fields.length - 1 && (
                            <TimelineConnector className={styles.connector}>
                                {Array(5)
                                    .fill('')
                                    .map((_, index) => (
                                        <div
                                            key={index}
                                            className={styles.dot}
                                        />
                                    ))}
                            </TimelineConnector>
                        )}
                    </TimelineSeparator>
                    <TimelineContent className={styles.content}>
                        <div className={styles.row}>
                            <Controller
                                name={`cities.${index}.value`}
                                control={control}
                                rules={{
                                    required:
                                        'You must choose the city of origin',
                                }}
                                render={({ field }) => {
                                    const value = field.value as TCities

                                    const citiesErrors =
                                        errors?.cities?.[index]?.value?.message

                                    const fetchData = async (str: string) => {
                                        try {
                                            return await searchCities(str)
                                        } catch (error) {
                                            throwError(error)
                                            return null
                                        }
                                    }

                                    return (
                                        <Autocomplete<TCities>
                                            id={id}
                                            testId="cityAutocomplete"
                                            label={label}
                                            fetchData={fetchData}
                                            value={value}
                                            onChange={field.onChange}
                                            error={citiesErrors}
                                        />
                                    )
                                }}
                            />
                            <div>
                                {fields.length > 2 && index > 0 && (
                                    <Icon
                                        icon={CancelOutlinedIcon}
                                        onClick={removeDestination}
                                    />
                                )}
                            </div>
                        </div>
                        {index === fields.length - 1 && (
                            <div className={styles.addDestination}>
                                <Icon icon={PlusIcon} />
                                <p onClick={addDestination}>Add destination</p>
                            </div>
                        )}
                    </TimelineContent>
                </TimelineItem>
            )
        }

        return (
            <div className={styles.timeline}>
                {fields.map((el, index) => renderItem(el, index))}
            </div>
        )
    }
)

export default CitiesTimeline
