import { useEffect, useState } from 'react'

const getCurrentTime = () => {
    const today = new Date()
    const hours = today.getHours()
    const mins = today.getMinutes()
    return {
        hours,
        mins,
    }
}

export const useCurrentTime = () => {
    const [{ hours, mins }, setTime] = useState({ hours: null, mins: null })

    useEffect(() => {
        const interval = setInterval(() => {
            const { hours, mins } = getCurrentTime()
            return setTime({ hours, mins })
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    if (!hours && !mins) {
        return null
    }

    return `${hours}:${mins < 10 ? `0${mins}` : mins}`
}
