<template>
    <div class="flex flex-column container">
        <div class="flex flex-column gap-4 p-4">
            <form>
                <div class="flex flex-column gap-2 pr-4 pl-4">
                <label for="username">Username</label>
                <InputText id="username" v-model="dataForm.username" aria-describedby="username-help" />
            </div>
            <div class="flex flex-column gap-2 pr-4 pt-2 pl-4 flex-grow-1">
                <label for="password">Password</label>
                <Password id="password" :feedback="true" toggleMask v-model="dataForm.password"
                    aria-describedby="password-help" autoComplete="current-password" />

            </div>
            </form>
            
        </div>
        <div class="flex justify-content-center">
            <Button @click="getLogin" label="Submit" class="mt-2" />
        </div>
        <Dialog v-model:visible="visible" modal header="Login" :style="{ width: '15rem' }" :breakpoints="{ '500px': '75vw', '575px': '90vw' }">
            <p>
                Credenciales Incorrectas
            </p>
        </Dialog>
        <br>
    </div>
</template>
<script>

import { apiDialing } from '@/api/apiDialing';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import {useAuth} from '@/modules/auth/composables/useAuth'
import Dialog from 'primevue/dialog';
import { ref } from 'vue';

export default {
    name: 'LoginComponent',
    components: { Button, InputText, Password, Dialog },
    setup() {

        const { dataForm, getLogin, visible } = useAuth()
        
        return {
            dataForm,
            getLogin,
            visible
        }
    }

}
</script>
<style scoped>
.container {
    height: auto;
    align-items: center;
    margin: 10px 0;
}
</style>