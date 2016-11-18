'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import post from './modules/Post';
import user from './modules/User';
import {Config} from '../base';
import types from './types';

const getters = {

};

const actions = {

};

const mutations = {
    init() {
        Store.commit('userInit');
    }
};


let modules = {
    post,
    user
};

export const Store = new Vuex.Store({
    mutations,
    modules,
    strict: Config.isDebug
});

export const Types = types;