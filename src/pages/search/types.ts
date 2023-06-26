import { Dayjs } from 'dayjs'
import { TCities } from 'src/types'

export interface IFormData {
    cities: ICities[]
    passengers: number
    date: Dayjs
}

export interface ICities {
    id: string
    label: string
    value?: TCities | null
}
