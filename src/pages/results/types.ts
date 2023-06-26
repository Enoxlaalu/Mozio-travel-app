export interface ICityData {
    name: string
    distance: number
}

export interface IDistances {
    cities: ICityData[]
    total: number
}

export interface IResults extends IDistances {
    passengers: string
    date: string
}
