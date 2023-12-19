import { apiDialing } from "@/api/apiDialing"
import axios from "axios"

export const createUser = async ({commit}, userForm) => {

    try {
        const resp = await apiDialing.post('/user', userForm);
        return {ok: true, message: ''}
    } catch (error) {
        return {ok: false, message: error.response.data.errors}
    }
}

export const fetchEditUser = async ({commit}, userForm) => {

    try {
        const resp = await apiDialing.put('/edit-user', userForm);
        return {ok: true, message: ''}
    } catch (error) {
        return {ok: false, message: error.response.data.errors}
    }
}

export const fetchDeleteUser = async ({commit}, userForm) => {

    const data = {
        username: userForm.username
    }
    try {
        const resp = await apiDialing.delete('/delete-user', { data });
        return {ok: true, message: ''}
    } catch (error) {
        return {ok: false, message: error.response.data.errors}
    }
}