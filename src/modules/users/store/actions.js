import { apiDialing } from "@/api/apiDialing"
import { useStore } from "vuex"

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

export const consumeApiSaveRecord = async({commit, rootState}) => {
    const user = {
        username : rootState.auth.username,
        typeSave : "i"
    }   

    try {
        const resp = await apiDialing.post('/records-by-username', user)
        commit("saveDialing", resp.data.data.record)
        return {ok: true, message: ""}
    } catch (error) {
        return {ok: false, message: error}
    }

}

export const fetchSaveRecord =  async ({commit, rootState}) => {
    const user = {
        username : rootState.auth.username,
        typeSave : "i"
    } 
    try {
        await apiDialing.post('/save-record', user)
        return {ok: true, message: ""}
    } catch (error) {
        return {ok: false, message: error}
    }
    
}