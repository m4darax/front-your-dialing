<template lang="">
    <div class="card">
        <DataTable v-model:filters="filters" :value="customers"
                 paginator :rows="5" filterDisplay="menu"
                dataKey="id"  tableStyle="min-width: 50rem">
            <template #header>
                <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText v-model="filters['global'].value" placeholder="Global Search" />
                </span>
            </template>
            <Column field="username" header="Username" sortable style="width: 25%"></Column>
            <Column field="time" header="Fecha" sortable style="width: 25%"></Column>
            <Column field="incomeF" header="Ingreso" sortable style="width: 25%"></Column>
            <Column field="refreshmentsF" header="Salida de Refrigerio" sortable style="width: 25%"></Column>
            <Column field="returnRefreshmentsF" header="Retorno Refrigerio" sortable style="width: 25%"></Column>
            <Column field="outputF" header="Salida" sortable style="width: 25%"></Column>
            <template #empty> No users found. </template>
        </DataTable>
    </div>
</template>
<script>

import { ref, onMounted } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import DataTable from 'primevue/datatable';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import MultiSelect from 'primevue/multiselect';
import Column from 'primevue/column';
import Dropdown from 'primevue/dropdown';
import { useStore } from 'vuex';

export default {
    name: 'DatailRecords',
    components: { DataTable, Tag, InputText, MultiSelect, Column, Dropdown },
    setup() {
        const store = useStore();
        const customers = ref();
        const filters = ref(
            {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            }
        );

        onMounted(async () => {
            await store.dispatch('admin/fetchRecords')
            customers.value = store.state.admin.records;
        });


        return {
            customers,
            filters,
        }
    }

}
</script>
<style lang="">
    
</style>