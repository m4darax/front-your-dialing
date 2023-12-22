import { apiDialing } from '@/api/apiDialing';
import store  from '@/store'



export const validateAuth = async (to, from, next) => {
    const resp = await store.dispatch('auth/validateToken')
    const { idToken, username, isAdmin } = store.state.auth;
    if (!idToken, !username) {
        next()
    } else if ( idToken && username && isAdmin && resp.ok ) {
        next({name: 'admin-users'})
    } else if ( idToken && username && !isAdmin && resp.ok) {
        next({name: 'users'});
    } else {
        next({name: 'login'})
    }
}

export const isAuthenticatedGuardAdmin =  async (to, from, next) => {
    const resp = await store.dispatch('auth/validateToken')
    const { idToken, username, isAdmin } = store.state.auth;
    if (idToken && username && isAdmin && resp.ok) {
        next()
    } else if ( idToken && username && !isAdmin) {
        next({name: 'users'});
    } else {
        next({name: 'login'})
    }
};


export const isAuthenticatedUser = async (to, from, next) => {
    const resp = await store.dispatch('auth/validateToken')
    const { idToken, username, isAdmin } = store.state.auth;
    if (idToken && username && !isAdmin && resp.ok ) {
        next()
    } else if ( idToken && username && isAdmin && resp.ok) {
        next()
    } else {
        next({name: 'login'});
    }
}