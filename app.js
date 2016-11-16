'use strict';

import Vue from 'vue';
import Base from './src/base';
import App from './src/App.vue';
import router from './src/router';
import store from './src/store';
import './src/util';

const app = new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
});