import { apiDialing } from "@/api/apiDialing"
import axios from "axios"

export const getTimeHour = async ({commit}, userForm) => {

    try {
        const resp = await apiDialing.get('/time')
        const date = new Date(resp.data.data.timefull)
        commit('saveFullTime', date)
        return {ok: true, message: error}
    } catch (error) {
        return {ok: false, message: error}
    }
}

export const saveFullTimeMoreSecond = async({commit}) => {
    commit('saveFullTimeMoreSecond')
}