'use strict';

import Vue from 'vue';
import url from './urls';

const http = Vue.http;

const apiUser = {
    
};

const apiPost = {
    fetchAll(param) {
       
    },

    fetch(page, size) {
        return new Promise((resolve, reject) => {
            http.get(url.post).then(response => {
                resolve(response.json());
            }, error => {
                reject(error);
            });
        });
    },

    update(param, data) {

    },

    fetchDetail(id) {
        return new Promise((resolve, reject) => {
            http.get(url.post + '/' + id).then(response => {
                let json = response.json();
                resolve(json);
            }, reject);
        });
    }
};


export default {
    user: apiUser,
    post: apiPost
}
