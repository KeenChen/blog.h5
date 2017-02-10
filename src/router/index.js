'use strict';

import Router from 'vue-router';
// import HomePage from '../pages/HomePage.vue';
// import Editor from '../pages/Editor.vue';
// import PostDetail from '../pages/PostDetail.vue';
// import Account from '../pages/Account.vue';
// import Preview from '../pages/Preview.vue';

const routes = [
    {
        name: 'index',
        path: '/',
        component: resolve => {
            require.ensure(['../pages/HomePage.vue'], () => {
                resolve(require('../pages/HomePage.vue'))
            }, 'index')
        }
    },
    {
        name: 'admin',
        path: '/admin',
        component: resolve => {
            require.ensure(['../pages/Account.vue'], () => {
                            resolve(require('../pages/Account.vue'))
                        }, 'account')
        } 
    },
    {
        name: 'post',
        path: '/post/:id',
        component: resolve => {
            require.ensure(['../pages/PostDetail.vue'], () => {
                            resolve(require('../pages/PostDetail.vue'))
                        }, 'post')
        }
    },
    {
        name: 'account',
        path: '/account/:id?',
        component: resolve => {
            require.ensure(['../pages/Account.vue'], () => {
                            resolve(require('../pages/Account.vue'))
                        }, 'account')
        } 
    },
    {
        name: 'editor',
        path: '/editor',
        component: resolve => {
            require.ensure(['../pages/Editor.vue'], () => {
                            resolve(require('../pages/Editor.vue'))
                        }, 'editor')
        } 
    }
    ,
    {
        name: 'preview',
        path: '/preview/:id',
        component: resolve => {
            require.ensure(['../pages/Preview.vue'], () => {
                            resolve(require('../pages/Preview.vue'))
                        }, 'editor')
        } 
    }
];

const instance = new Router({
    routes
});

export default instance;