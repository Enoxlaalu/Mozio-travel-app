import cities from 'src/cities'
import { haversineDistance } from 'src/helpers/haversineDistance'
import { ICityData, IDistances } from 'src/pages/results/types'
import { TCities } from 'src/types'

const delay = (delay = 1000) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

export const searchCities = async (str: string): Promise<TCities | null> => {
    await delay()

    const value = str.toLowerCase()

    if (value === 'fail') {
        throw new Error()
    }

    return str ? cities.filter((el) => el[0].toLowerCase().includes(value)) : []
}

export const calculateDistances = async (
    cities: TCities
): Promise<IDistances> => {
    await delay()

    const results: IDistances = {
        cities: [],
        total: 0,
    }

    for (let i = 0; i < cities.length; i++) {
        const cityObj = {} as ICityData
        const [city, ...coords1] = cities[i]

        if (city === 'Dijon') {
            throw new Error()
        }

        if (cities[i + 1]) {
            const [_, ...coords2] = cities[i + 1]

            const distance =
                Math.round(haversineDistance(coords1, coords2) * 100) / 100
            cityObj.distance = distance
            results.total += distance
        }

        cityObj.name = city

        results.cities.push(cityObj)
    }

    return results
}
