import { useCallback, useState } from 'react'

export default () => {
    const [_, setError] = useState()
    return useCallback(
        (e: any) => {
            setError(() => {
                throw e
            })
        },
        [setError]
    )
}
