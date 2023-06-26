import { debounce } from '@mui/material'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker'
import styles from './styles.module.scss'
import { Dayjs } from 'dayjs'
import React, { memo, useState } from 'react'
import Input from 'src/components/Input/Input'

interface IDatePicker {
    value: Dayjs
    onChange: (value: Dayjs) => void
}

const DatePicker: React.FC<IDatePicker> = memo(({ onChange, value }) => {
    const handleChange = debounce((value) => {
        onChange(value)
    }, 500)

    const [open, setIsOpen] = useState(false)

    const onOpen = () => setIsOpen(true)
    const onClose = () => setIsOpen(false)

    return (
        <div className={styles.datePicker}>
            <MuiDatePicker
                inputFormat="DD/MM/YYYY"
                onChange={handleChange}
                onClose={onClose}
                renderInput={({ inputRef, inputProps }) => {
                    return (
                        <Input
                            id="searchCitiesDatePicker"
                            params={{
                                ...inputProps,
                                ref: inputRef,
                                onClick: onOpen,
                            }}
                            label="Date"
                            className={styles.datePickerInput}
                        />
                    )
                }}
                disableOpenPicker
                open={open}
                PopperProps={{
                    placement: 'bottom-start',
                }}
                value={value}
                disablePast
            />
        </div>
    )
})

export default DatePicker
