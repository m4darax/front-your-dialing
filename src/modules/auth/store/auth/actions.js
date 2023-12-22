// export const myAction = async ( { commit }) => {
// }
import { apiDialing } from "@/api/apiDialing"
import { useRouter } from "vue-router"

export const getToken = async ({ commit }, dataForm) => {
    try {
        const resp = await apiDialing.post('/login', dataForm)
        const { token, username } = resp.data
        commit('loginUser', { token, username }) // O podemos usar commit('loginUser' clase 268 
        return { ok: true, message: '' }
    } catch (error) {
        return { ok: false, message: error }
    }

}

export const checkAuthStatus = async ({ commit }) => {
    const token = localStorage.getItem('idToken')
    const username = localStorage.getItem('username')
    if (!token || !username) {
        commit('logout')
        return { ok: false, message: "" }
    } else {
        commit('loginUser', { token, username })
        return { ok: false, message: "" }
    }
}

export const validateToken = async ({commit}) => {
    try {
        await apiDialing.get("/token")
        return { ok: true, message: "" }
    } catch (error) {
        commit('logout')
        return { ok: false, message: error }
    }
}

export const logout = ({ commit }) => {
    commit('logout')
} 
