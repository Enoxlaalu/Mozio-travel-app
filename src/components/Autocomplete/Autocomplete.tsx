import { debounce } from '@mui/material'
import MuiAutocomplete from '@mui/material/Autocomplete'
import React, { SyntheticEvent, useState } from 'react'
import Input from 'src/components/Input/Input'
import ClearIcon from '@mui/icons-material/Clear'
import styles from './styles.module.scss'
import Icon from 'src/components/Icon/Icon'

interface IAutocomplete<T> {
    id: string
    label: string
    fetchData: (v: string) => Promise<T | [] | null>
    onChange: (v: T | null) => void
    value: T
    error?: string
    testId?: string
}

const Autocomplete = <T,>({
    id,
    label,
    onChange,
    fetchData,
    value,
    error,
    testId,
}: IAutocomplete<T>) => {
    const [open, setOpen] = useState(false)
    const [options, setOptions] = useState<T | [] | null>([])
    const [loading, setLoading] = React.useState(false)

    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)

    const onInputChange = debounce(
        async (_e: SyntheticEvent, newInputValue: string) => {
            setLoading(true)
            setOptions([])

            const data = await fetchData(newInputValue)

            setLoading(false)
            setOptions(data)
        },
        500
    )

    const handleChange = (_e: SyntheticEvent, newValue: string | null) => {
        onChange(newValue as T)
    }

    const clearValue = () => onChange(null)

    return (
        <MuiAutocomplete
            data-testid={testId}
            disablePortal
            id={id}
            open={open}
            onOpen={onOpen}
            onClose={onClose}
            isOptionEqualToValue={(option, value) => option[0] === value[0]}
            getOptionLabel={(option) =>
                typeof option === 'string' ? option : option[0]
            }
            filterOptions={(x) => x}
            options={options as readonly string[]}
            noOptionsText="No options"
            onInputChange={onInputChange}
            onChange={handleChange}
            renderInput={(params) => {
                return (
                    <div
                        className={styles.inputWrapper}
                        ref={params.InputProps.ref}
                    >
                        <Input
                            id={id}
                            testId="autocompleteInput"
                            label={label}
                            params={params.inputProps}
                            error={error}
                        />
                        {value && (
                            <Icon
                                icon={ClearIcon}
                                className={styles.endIcon}
                                onClick={clearValue}
                            />
                        )}
                    </div>
                )
            }}
            value={value as string}
            loading={loading}
            slotProps={{
                paper: {
                    id: 'autocompletePaper',
                },
            }}
            ListboxProps={{
                id: 'autocompleteListbox',
            }}
        />
    )
}

export default Autocomplete
