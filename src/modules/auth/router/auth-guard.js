import { useStore } from "vuex";

export const  isAuthenticatedGuard = async (to, from, next) => {
    const store = useStore();
    const { idToken, username } = store.state.auth
    if (idToken, username ) {
        next()
    } else {
        next({name: 'admin-users'})
    }

}

export const validateAuth = async (to, from, next) => {
    const store = useStore();

    const { idToken, username } = store.state.auth
    console.log({to, from, next});
    if ( idToken, username) {
       next({name: 'admin-users'})
    } else {
        next()
    }
}

