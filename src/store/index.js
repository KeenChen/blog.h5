'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import post from './modules/Post';
import {Config} from '../base';
import types from './types';

const getters = {

};

const actions = {

};

const mutations = {

};


let modules = {
    post
};

export const Store = new Vuex.Store({
    modules,
    strict: Config.isDebug
});

export const Types = types;