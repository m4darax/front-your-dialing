<template >
    <div class="container create-users">
        <div class="flex flex-column gap-4 p-4 ">
            <div class="flex flex-column gap-2 ">
                <label for="username">Username</label>
                <InputText class="prueba" id="username" v-model="userForm.username" aria-describedby="username-help" />
            </div>
            <div class="flex flex-column gap-2  flex-grow-1">
                <label for="password">Password</label>
                <Password id="password" class="width-test" :feedback="true" toggleMask v-model="userForm.password"
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
                <InputNumber :useGrouping="false" v-model="userForm.identificacion"   />
            </div>
        </div>
        <div class="btn-registrar pb-2">
            <Button @click="() => createUser(userForm)"  label="Registrar" />
        </div>
    </div>
</template>
<script>

import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import useUser from '@/modules/users/composables/useUsers'

import { ref } from 'vue';

export default {
    name: 'FromCreateUser',
    components: { Password, InputText, Button, InputNumber },
    setup() {
        const userForm = ref({
            username: '',
            password: '',
            name: '',
            email: '',
            lastName: '',
            identificacion: null
        })

        const { createUser } = useUser()
        
        return {
            userForm,
            createUser
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