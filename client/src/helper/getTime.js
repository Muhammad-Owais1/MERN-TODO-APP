const getTime = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const padZero = (num) => num.toString().padStart(2, '0')
    const times = {
        day: days[new Date().getDay()],
        date: padZero(new Date().getDate()),
        month: months[new Date().getMonth()],
        year: new Date().getFullYear(),
        hour: padZero(new Date().getHours() % 12 || 12),
        minute: padZero(new Date().getMinutes()),
        second: padZero(new Date().getSeconds()),
        ampm: new Date().getHours() >= 12 ? 'PM' : 'AM'
    }
    return times
}


export default getTime