import axios from 'axios'
import { URL_BACKEND } from '@/env/env'

export const apiDialing = axios.create({
    baseURL: `${URL_BACKEND.path}`
})

apiDialing.interceptors.request.use( (config) => {

    // Verifica si la URL no contiene /time
    if (!config.url.includes('/time')) {
        // Aplica el encabezado de autorización solo para las solicitudes que no son /time
        config.headers = {
            Authorization: `Bearer ${localStorage.getItem('idToken')}`
        };
    }

    return config;
})