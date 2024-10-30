import {createRouter, createWebHistory} from 'vue-router';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/get',
            name: 'get.index',
            component: import('./components/Get.vue')
        },
        {
            path: '/user/login',
            name: 'user.login',
            component: import('./components/Login.vue')
        },
        {
            path: '/user/registration',
            name: 'user.registration',
            component: import('./components/Registration.vue')
        }
    ]
});
