<template lang="">
    <div class="container">
        <div class="table-width">    
        <div class="card">
            <Toolbar class="mb-4">
                <template #start>
                    <!-- <Button label="New" icon="pi pi-plus" severity="success" class="mr-2" @click="openNew" /> -->
                    <!-- <Button label="Delete" icon="pi pi-trash" severity="danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" /> -->
                </template>

                <template #end>
                    <!-- <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block" /> -->
                    <!-- <Button label="Export" icon="pi pi-upload" severity="help" @click="exportCSV($event)"  /> -->
                </template>
            </Toolbar>

            <DataTable ref="dt" v-model:filters="filters" :value="user" stripedRows v-model:selection="selectedProducts" dataKey="idUsername" 
                :paginator="true" :rows="10" 
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
                <template #header>
                    <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                        <h4 class="m-0">Users</h4>
						<span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters['global'].value"  placeholder="Search..." />
                        </span>
					</div>
                </template>
                <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                <Column field="enabled" header="Status" sortable style="min-width:7rem">
                    <template #body="slotProps">
                        <Tag :value="getStatusValue(slotProps.data.enabled)" :severity="getStatusLabel(slotProps.data.enabled)" />
                    </template>
                </Column>
                <Column field="username" header="Username" sortable style="min-width:10rem"></Column>
                <Column field="name" header="Name" sortable style="min-width:10rem"></Column>
                <Column field="lastName" header="Last Name" sortable style="min-width:10rem"></Column>
                <Column field="email" header="Email" sortable style="min-width:13rem"></Column>
                <Column field="identification" header="Identification" sortable style="min-width:10rem"></Column>
                
                <Column :exportable="false" style="min-width:8rem">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" />
                        <Button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteProduct(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <Dialog v-model:visible="productDialog" :style="{width: '450px'}" header="Product Details" :modal="true" class="p-fluid">
            <div class="field">
                <label for="name">Estado del Usuario</label>
                <SelectButton  v-model.trim="product.enabled" :options="options" aria-labelledby="basic" />
            </div>
            <div class="field">
                <label for="name">Name</label>
                <InputText id="name" v-model.trim="product.name" required="true" autofocus :class="{'p-invalid': submitted && !product.name}" />
                <small class="p-error" v-if="submitted && !product.name">Name is required.</small>
            </div>
            <div class="field">
                <label for="">Last Name</label>
                <InputText id="lastname" v-model.trim="product.lastName" required="true" autofocus :class="{'p-invalid': submitted && !product.lastName}" />
                <small class="p-error" v-if="submitted && !product.lastName">Last Name is required.</small>
            </div>

            <div class="field">
                <label for="">Password</label>
                <Password id="lastname" v-model.trim="product.password" :feedback="false" toggleMask autofocus :class="{'p-invalid': submitted && !product.lastName}" />
            </div>

            <div class="field">
                <label for="">Email</label>
                <InputText id="email" v-model.trim="product.email" required="true" autofocus :class="{'p-invalid': submitted && !product.email}" />
                <small class="p-error" v-if="submitted && !product.email">Email is required</small>
            </div>  

            <div class="field">
                <label for="">Identification</label>
                <InputNumber id="identification" :useGrouping="false" v-model.trim="product.identification" required="true" autofocus :class="{'p-invalid': submitted && !product.identification}" />
                <small class="p-error" v-if="submitted && !product.identification">Identification is required</small>
            </div> 
            <div class="field">
                <label for="">Roles</label>
                <div class="flex align-items-center gap-2">
                    <Checkbox v-model="product.roles" inputId="admin" name="admin" value="admin" />
                    <label for="admin" class="ml-2"> Admin </label>
                    <Checkbox v-model="product.roles" inputId="admin" name="admin" value="user" />
                    <label for="admin" class="ml-2"> User </label>
                </div>
                
            </div>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" text @click="hideDialog"/>
                <Button label="Save" icon="pi pi-check" text @click="saveProduct" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete <b>{{product.name}}</b>?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteProductDialog = false"/>
                <Button label="Yes" icon="pi pi-check" text @click="deleteProduct" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductsDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete the selected products?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteProductsDialog = false"/>
                <Button label="Yes" icon="pi pi-check" text @click="deleteSelectedProducts" />
            </template>
        </Dialog>
        
        </div>
    </div>
</template>
<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { computed, onBeforeMount, onMounted, ref } from 'vue';
import { apiDialing } from '@/api/apiDialing';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Toolbar from 'primevue/toolbar';
import Dialog from 'primevue/dialog';
import useAdmin from '@/modules/admin/composables/useAdmin'
import Checkbox from 'primevue/checkbox';
import Password from 'primevue/password';
import Tag from 'primevue/tag';
import SelectButton from 'primevue/selectbutton';
import { FilterMatchMode } from 'primevue/api';

export default {
    name: 'TableUsers',
    components: { DataTable, Column, InputNumber, InputText, Toolbar, Dialog, Checkbox, Password, Tag, SelectButton },
    setup() {
        const user = ref([])
        const options = ref(['Activo', 'Inactivo']);

        const listUser = async () => {
            const resp = await apiDialing.get('/user')
            user.value = resp.data;
        }
        const { editUser, deleteUser } = useAdmin()

        onBeforeMount(async () => {
            await listUser()
        })

        const products = ref();
        const productDialog = ref(false);
        const deleteProductDialog = ref(false);
        const deleteProductsDialog = ref(false);
        const product = ref({});
        const selectedProducts = ref();

        const submitted = ref(false);

        // const openNew = () => {
        //     product.value = {};
        //     submitted.value = false;
        //     productDialog.value = true;
        // };
        const hideDialog = () => {
            productDialog.value = false;
            submitted.value = false;
        };
        const saveProduct = async () => {
            if (product.value.name.trim() && product.value.lastName.trim() && product.value.email.trim() && product.value.identification) {
                if (product.value.idUsername) {
                    product.value.enabled = product.value.enabled == 'Activo' ? true : false
                    await editUser(product.value)
                    listUser()
                }

                productDialog.value = false;
                product.value = {};
            }
        };
        const editProduct = (prod) => {
            product.value = { ...prod };
            product.value.roles = prod.roles.map(e => e.name.slice(5).toLowerCase())
            product.value.enabled = prod.enabled ? 'Activo' : 'Inactivo'
            productDialog.value = true;
        };
        const confirmDeleteProduct = (prod) => {
            product.value = prod;
            deleteProductDialog.value = true;
        };
        const deleteProduct = async () => {
            await deleteUser(product.value)
            deleteProductDialog.value = false;
            product.value = {};
            listUser()
        };

        const getStatusLabel = (status) => {
            switch (status) {
                case true:
                    return 'Activo';
                case false:
                    return 'Inactivo';
                default:
                    return null;
            }
        };

        const filters = ref(
            {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            }
        );
        const getStatusValue = (status) => {
            switch (status) {
                case true:
                    return 'Activo';
                case false:
                    return 'Inactivo';
                default:
                    return null;
            }
        };


        return {
            filters,
            user,
            editProduct,
            product,
            submitted,
            productDialog,
            selectedProducts,
            saveProduct,
            hideDialog,
            confirmDeleteProduct,
            deleteProductDialog,
            deleteProductsDialog,
            deleteProduct,
            getStatusLabel,
            getStatusValue,
            options
        }
    }
}
</script>
<style scoped>
.container {
    max-width: 100%;
}

.table-width {
    margin: 0 auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
</style>