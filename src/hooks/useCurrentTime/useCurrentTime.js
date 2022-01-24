export const useCurrentTime = () => {
    const today = new Date()
    const hours = today.getHours()
    const mins = today.getMinutes()

    return `${hours}:${mins < 10 ? `0${mins}`: mins}`
}