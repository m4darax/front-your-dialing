export default {
    name: 'admin',
    component: () => import(/**/ '@/modules/admin/layouts/AdminLayout'),
    children: [
        {
            path: '',
            name: 'admin-users',
            component: () =>  import('@/modules/admin/views/FormCreateUser')
        },
        {
            path: '',
            name: 'admin-list-users',
            component: () =>  import('@/modules/admin/components/TableUsers')
        },
        {
            path: '',
            name: 'dialing-users',
            component: () =>  import('@/modules/users/components/TimeHours.vue')
        },
        {
            path: '',
            name: 'admin-records',
            component: () =>  import('@/modules/admin/views/DetailsRecords.vue')
        }
        
    ]
}