'use strict';

import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

const Http = VueResource;

const Base = {
    init() {
        Vue.use(Vuex);
        Vue.use(Router);
        Vue.use(VueResource);
    }
};

const Config = {
    Default: {
        PAGE_SIZE: 50
    }
};

Base.init();

export {
    Vue,
    Router,
    Vuex,
    Http,
    Config
}