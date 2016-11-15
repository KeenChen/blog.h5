'use strict';

import Router from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AdminPage from '../pages/AdminPage.vue';
import PostDetail from '../pages/PostDetail.vue';
import Account from '../pages/Account.vue';

const routes = [
    {
        name: 'index',
        path: '/',
        component: HomePage
    },
    {
        name: 'admin',
        path: '/admin',
        component: AdminPage
    },
    {
        name: 'post',
        path: '/post/:id',
        component: PostDetail
    },
    {
        name: 'account',
        path: '/account/:id?',
        component: Account
    }
];

const instance = new Router({
    routes
});

export default instance;