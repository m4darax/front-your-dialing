export const hourTime = ( state ) => {
    const date = new Date(state.timefull)

    return {
        hh:date.getHours(),
        mm:date.getMinutes(),
        ss: date.getSeconds(),
    }
}

export const dateTime = ( state ) => {
    const date = new Date(state.timefull)
    console.log(date);
    return {
        mm:date.getMonth() + 1,
        yy:date.getFullYear(),
        dd:date.getDate(),
    }
}

export const getDialing = ( state ) => {
    return state.dialing
}