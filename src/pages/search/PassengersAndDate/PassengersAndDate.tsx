import DatePicker from 'src/components/DatePicker/DatePicker'
import dayjs from 'dayjs'
import { Control, Controller } from 'react-hook-form'
import NumberCounter from 'src/components/NumberCounter/NumberCounter'
import styles from './styles.module.scss'
import { IFormData } from 'src/pages/search/types'
import { memo } from 'react'

interface IPassengersAndDate {
    control: Control<IFormData>
    error: string | undefined
}

const PassengersAndDate: React.FC<IPassengersAndDate> = memo(
    ({ control, error }) => {
        return (
            <div className={styles.passengersAndDate}>
                <Controller
                    name="passengers"
                    control={control}
                    rules={{
                        min: {
                            value: 1,
                            message: 'Select passengers',
                        },
                    }}
                    defaultValue={0}
                    render={({ field }) => {
                        return (
                            <NumberCounter
                                value={field.value}
                                onChange={field.onChange}
                                label="Passengers"
                                error={error}
                            />
                        )
                    }}
                />
                <Controller
                    name="date"
                    control={control}
                    defaultValue={dayjs()}
                    render={({ field }) => {
                        return (
                            <DatePicker
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )
                    }}
                />
            </div>
        )
    }
)

export default PassengersAndDate
