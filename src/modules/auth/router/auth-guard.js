import { useStore } from "vuex";



export const validateAuth = async (to, from, next) => {
    const store = useStore();
    const { idToken, username, isAdmin } = store.state.auth;
    if (!idToken, !username) {
        next()
    } else if ( idToken && username && isAdmin ) {
        next({name: 'admin-users'})
    } else if ( idToken, username, !isAdmin) {
        next({name: 'users'});
    } else {
        next({name: 'login'})
    }
}

export const isAuthenticatedGuard = async (to, from, next) => {
    const store = useStore();
    const { idToken, username, isAdmin } = store.state.auth;

    if (idToken && username && isAdmin) {
        next()
    } else if ( idToken && username && !isAdmin) {
        next({name: 'users'});
    } else {
        next({name: 'login'})
    }
};


export const isAuthenticatedUser = async(to, from, next) => {
    const store = useStore();
    const { idToken, username, isAdmin } = store.state.auth;
    if (idToken, username, !isAdmin) {
        next()
    } else if ( idToken && username && isAdmin) {
        next()
    } else {
        next({name: 'login'});
    }
}