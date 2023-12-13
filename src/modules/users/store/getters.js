export const hourTime = ( state ) => {
    const date = new Date(state.timefull)

    return {
        hh:date.getHours(),
        mm:date.getMinutes(),
        ss: date.getSeconds(),
    }
}