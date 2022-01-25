import { useEffect, useState } from 'react'

export const useCurrentTime = () => {
    const [{ hours, mins }, setTime] = useState({ hours: null, mins: null })

    const setCurrentTime = () => {
        const today = new Date()
        const currentHr = today.getHours()
        const currentMin = today.getMinutes()
        if (hours === currentHr && mins === currentMin) {
            return
        }
        return setTime({ hours: currentHr, mins: currentMin })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime()
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    if (!hours && !mins) {
        return null
    }

    return `${hours}:${mins < 10 ? `0${mins}` : mins}`
}
