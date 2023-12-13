export default {

    name: 'auth',
    component: () => import('@/modules/auth/layouts/AuthLayout'),
    children: [
        {
            path: '',
            name: 'login',
            component: () => import('@/modules/auth/views/LoginView')
        },
        {
            path: 'register',
            name: 'register',
            component: () => import('@/modules/auth/views/RegisterView')
        }
    ]
}
