// export const myAction = async ( { commit }) => {
// }
import { apiDialing } from "@/api/apiDialing"

export const getToken = async ( { commit }, dataForm) => {
    try {
        const resp = await apiDialing.post('/login', dataForm)
        const { token, username } = resp.data
        commit('loginUser', { token, username }) // O podemos usar commit('loginUser' clase 268 
        return {ok: true, message: ''}
    } catch (error) {
        return {ok: false, message: error}
    }
    
}

export const checkAuthStatus = async ( { commit }, { token, username }) => {
    commit('loginUser', { token, username })
}

export const logout = async ({commit}) => {
    commit('logout')
} 