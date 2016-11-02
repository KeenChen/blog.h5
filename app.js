'use strict';

import Vue from 'vue';
import App from './src/App.vue';
import router from './src/router';

Vue.component('todo-item', {
    template: '<li>{{ todo.text }}</li>',
    props: ['todo']
});

const todos = [
    {text: 'one'},
    {text: 'two'},
    {text: 'three'}
];

const app = new Vue({
    el: '#app',
    data: function() {
        return {
            showTitle: true,
            title: 'vue title',
            message: 'hello',
            todos: todos,
            router
        };
    },

    methods: {
        reverseMsg() {
            this.message = this.message.split('').reverse().join('');
        },
    },
    render: h => h(App)
});

console.log(App);