'use strict';

import Vue from 'vue';
import Actions from '../actions';
import Types from '../types';

const MUTATION = Actions.Post;
const Http = Vue.http;

const post = {
    state: {
        
    },

    mutations: {
        update(data) {
            // data contains the new POST JSON 
            console.log('post udpate: ' + JSON.stringify(data));
        },

        remove() {

        },

        likeIncrease() {
            console.log('like increase');
        },

        likeDecrease() {
            console.log('like decrease');
        }
    },

    actions: {
        [Types.Post.UPDATE]({commit}) {
            commit(MUTATION.UPATE); // 即时刷新
            
            
        },

        [Types.Post.LIKE]({commit}, payload) {
            //todo: update like info
            let isLike = payload.isLike;

            payload.isLike? commit('likeIncrease'): commit('likeDecrease');

            return new Promise((resolve, reject) => {
                const url = 'https://api.github.com/';
                // todo
                Http.get(url).then((response) => {
                    console.log(response);
                    resolve(response);
                }, (error) => {
                    console.log(error);
                    payload.isLike? commit('likeDecrease'): commit('likeIncrease');
                    reject(error);
                });
            });
        },

        [Types.Post.BOOKMARK]({commit}, payload) {
            let isBookmarked = payload.isBookmarked;
        }
    }
};

export default post;