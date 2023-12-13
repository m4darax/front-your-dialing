<template lang="">
    <div class="container">
        <div class="table-width">
            <DataTable :value="user" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
                <Column field="username" header="User"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="lastName" header="Last name"></Column>
                <Column field="email" header="Email"></Column>
                <Column field="active" header="Active"></Column>
        </DataTable>
        </div>
    </div>
</template>
<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { ref } from 'vue';
import { apiDialing } from '@/api/apiDialing';
import Paginator from 'primevue/paginator';


export default {
    name: 'TableUsers',
    components: { DataTable, Column },
    setup() {
        const user = ref([])
        
        const listUser = async () => {
            const resp = await apiDialing.get('/user' )
            user.value = resp.data
        }

        listUser()
       
        return {
            user
        }
    }
}
</script>
<style scoped>

.container {
    max-width: 100%;
}

.table-width{
    margin: 0 auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
</style>