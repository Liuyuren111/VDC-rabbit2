export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/home/HomePage.vue'),
        // children: [
        //     {
        //         path: '/',
        //         name: 'home',
        //         component: () => import('@/pages/home/HomePage.vue'),
        //     }
        // ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/login/LoginPage.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/pages/register/RegisterPage.vue')
    }

]
