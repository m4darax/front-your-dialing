export const saveFullTime = (state, timefull) => {
    state.timefull = timefull
}

export const saveFullTimeMoreSecond = (state) => {
    const dateString = state.timefull;
    const originalDate = new Date(dateString);
    
    // Aumentar 1 segundo
    originalDate.setSeconds(originalDate.getSeconds() + 1);

    state.timefull = originalDate
}

export const saveDialing = (state, dataDialing) => {
    state.dialing = dataDialing;
}
