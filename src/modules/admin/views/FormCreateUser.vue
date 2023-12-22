<template >
    <div class="container create-users">
        <div class="flex flex-column gap-4 p-4 ">
            <div class="flex flex-column gap-2 ">
                <label for="username">Username</label>
                <InputText class="prueba" id="username" v-model="userForm.username" aria-describedby="username-help" />
            </div>
            <div class="flex flex-column gap-2  flex-grow-1">
                <label for="password">Password</label>
                <Password id="password" class="width-test" :feedback="false" toggleMask v-model="userForm.password"
                    aria-describedby="password-help" />
            </div>
            <div class="flex flex-column gap-2 ">
                <label for="name">Names</label>
                <InputText id="name" v-model="userForm.name" aria-describedby="name-help" />
            </div>
            <div class="flex flex-column gap-2 ">
                <label for="lastname">Last Name</label>
                <InputText id="lastname" v-model="userForm.lastName" aria-describedby="lastname-help" />
            </div>
            <div class="flex flex-column gap-2 ">
                <label for="email">Email</label>
                <InputText id="email" v-model="userForm.email" aria-describedby="email-help" />
            </div>
            <div class="flex flex-column gap-2">
                <label for="email">Identification</label>
                <!-- <InputNumber v-model="userForm.identificacion" class="p-invalid" mode="decimal" :minFractionDigits="2" /> -->
                <InputNumber :useGrouping="false" v-model="userForm.identification" />
            </div>

            <div class="flex align-items-center">
                <div class="flex align-items-center gap-2">
                    <Checkbox v-model="userForm.checkIsAdmin" inputId="admin" name="admin" value="admin" />
                    <label for="admin" class="ml-2"> Admin </label>
                    <Checkbox v-model="userForm.checkIsAdmin" inputId="admin" name="admin" value="user" />
                    <label for="admin" class="ml-2"> User </label>
                </div>
            </div>
        </div>
        <div class="btn-registrar pb-2">
            <Button :disabled="buttonCreate" @click="() => createUser()" label="Registrar" />
        </div>
        <Dialog v-model:visible="errorMessage" modal :style="{ width: '50rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <ul>
                <li v-for="(value, key) in messageFetch" :key="key">
                    {{ key }}: {{ value }}
                </li>
            </ul>
        </Dialog>
    </div>
</template>
<script>

import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import useAdmin from '@/modules/admin/composables/useAdmin'
import Checkbox from 'primevue/checkbox';
import Dialog from 'primevue/dialog';

import { ref } from 'vue';

export default {
    name: 'FromCreateUser',
    components: { Password, InputText, Button, InputNumber, Checkbox, Dialog },
    setup() {
        const {
            createUser,
            buttonCreate,
            userForm,
            errorMessage,
            messageFetch } = useAdmin()

        return {
            userForm,
            createUser,
            buttonCreate,
            errorMessage,
            messageFetch
        }
    }
}
</script>


<style scoped>
.create-users {
    width: auto;
    margin: 0 auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.btn-registrar {
    text-align: center;
}

:global(.p-password-input) {
    width: 100%;
}
</style>