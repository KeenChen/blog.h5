'use strict';

import Router from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AdminPage from '../pages/AdminPage.vue';
import PostDetail from '../pages/PostDetail.vue';

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/admin',
        component: AdminPage
    },
    {
        path: '/post/:id',
        component: PostDetail
    }
];

const instance = new Router({
    routes
});

export default instance;