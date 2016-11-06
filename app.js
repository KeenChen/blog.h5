'use strict';

import {Vue} from './src/base';
import App from './src/App.vue';
import router from './src/router';

const app = new Vue({
    router,
    el: '#app',
    render: h => h(App)
});