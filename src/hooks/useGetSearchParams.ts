import { useSearchParams } from 'react-router-dom'

export default () => {
    const [searchParams] = useSearchParams()

    return searchParams.size ? Object.fromEntries([...searchParams]) : undefined
}
