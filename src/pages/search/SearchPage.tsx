import { FieldValues, useFieldArray, useForm } from 'react-hook-form'
import styles from './styles.module.scss'
import Button from 'src/components/Button/Button'
import { createSearchParams, useNavigate } from 'react-router-dom'
import CitiesTimeline from 'src/pages/search/CitiesTimeline/CitiesTimeline'
import useGetSearchParams from 'src/hooks/useGetSearchParams'
import dayjs from 'dayjs'
import { ICities, IFormData } from 'src/pages/search/types'
import PassengersAndDate from 'src/pages/search/PassengersAndDate/PassengersAndDate'

const initialCities: ICities[] = [
    {
        id: '1',
        label: 'City of origin',
        value: null,
    },
    {
        id: '2',
        label: 'City of destination',
        value: null,
    },
]

const SearchPage = () => {
    const navigate = useNavigate()
    const searchParams = useGetSearchParams()
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IFormData>({
        defaultValues: searchParams
            ? {
                  passengers: Number(searchParams.passengers),
                  date: dayjs(searchParams.date),
                  cities: JSON.parse(decodeURIComponent(searchParams.cities)),
              }
            : { cities: initialCities, passengers: 0, date: dayjs() },
    })
    const cities = useFieldArray({
        control,
        name: 'cities',
    })

    const onSubmit = (data: FieldValues) => {
        const cities = encodeURIComponent(JSON.stringify(data.cities))

        navigate({
            pathname: '/results',
            search: `?${createSearchParams({
                ...data,
                cities,
                date: dayjs(data.date).format('MMM D, YYYY'),
            })}`,
        })
    }

    return (
        <div className={styles.searchFormPage}>
            <div className={styles.formSection}>
                <CitiesTimeline
                    control={control}
                    errors={errors}
                    cities={cities}
                />
                <PassengersAndDate
                    control={control}
                    error={errors.passengers?.message}
                />
            </div>
            <Button
                className={styles.submit}
                text="Submit"
                onClick={handleSubmit(onSubmit)}
            />
        </div>
    )
}

export default SearchPage
