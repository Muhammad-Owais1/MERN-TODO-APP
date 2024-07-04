const getTime = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const times = {
        day: days[new Date().getDate()],
        month: months[new Date().getMonth()],
        year: new Date().getFullYear(),
        hour: new Date().getHours() % 12 || 12,
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
        ampm: new Date().getHours() >= 12 ? 'PM' : 'AM'
    }
    return times
}


export default getTime