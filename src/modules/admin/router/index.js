export default {
    //path: '/user',
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
        }
    ]
}