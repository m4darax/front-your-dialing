import { defineAsyncComponent } from 'vue';

export default {
    //path: '/user',
    name: 'user',
    component: () => import(/**/ '@/modules/users/layouts/UserLayout'),
    children: [
        {
            path: '',
            name: 'users',
            component: () =>  import('@/modules/users/components/TimeHours')
        }
    ]
}