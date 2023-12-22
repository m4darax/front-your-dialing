// export const myAction = ( state ) => {
//  return state
// }

export const saveToken = (state, token) => {
    state.token = token
}

export const saveUsername = (state, username) => {
    state.username = username
}

export const saveStatus = (state, status) => {
    state.status = status
}

export const loginUser = (state, { token, username }) => {
    if (token) {
        localStorage.setItem('idToken', token)
        state.idToken = token
    }

    if (username) {
        localStorage.setItem('username', username)
        state.username = username
    }
    state.status = 'authenticated'
    const claims = window.atob(token.split(".")[1])
    const tokenPayload = JSON.parse(claims)
    state.isAdmin = tokenPayload.isAdmin
    state.authorities = tokenPayload.authorities
}

export const logout = (state) => {
    localStorage.removeItem('idToken')
    state.idToken = ''
    localStorage.removeItem('username')
    state.username = ''
    state.status = 'not-authenticated'
}