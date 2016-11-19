'use strict';

import Router from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import Editor from '../pages/Editor.vue';
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
        component: Editor // TODO: change to Admin page
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
    },
    {
        name: 'editor',
        path: '/editor',
        component: Editor
    }
];

const instance = new Router({
    routes
});

export default instance;