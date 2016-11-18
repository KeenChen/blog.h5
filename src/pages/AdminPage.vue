<template lang='pug'>
    section(class='admin')
        toolbar(class='admin-toolbar' @toolEdit='onEdit' @toolReview='onReview' @toolPublish='onPublish')
        input(class='admin-title' v-model='post.title' v-bind:placeholder='hint.title')

        textarea(class='admin-content' v-model='post.content' v-bind:placeholder='hint.content')
</template>

<script>
'use strict';

import Vue from 'vue';
import ToolBar from '../components/ToolBar.vue';
import api from '../api';
import router from '../router';

let post = {};

let hint = {
    title: 'Title',
    content: 'How you feel today?'
};

export default {
    props: [],
    data() {
        return {
            post,
            hint
        }
    },
    methods: {
        onReview() {
            console.log('do onReview');
        },

        onPublish() {
            console.log('do onPublish: ' + JSON.stringify(post));
            
            api.post.save(post).then((response) => {
                console.log('save post success: ' + JSON.stringify(response));
                const id = response.content['_id'] || response.content['id'];

                if (!post.id) {
                    post['id'] = id; 
                }
            }, (error) => {
                console.log('save post fail: ' + JSON.stringify(error));
            });
        },

        onEdit() {
            console.log('do onEdit');
        }
    },

    components: {
        toolbar: ToolBar
    }
}
</script>

<style lang='sass'>
@import '../../assets/scss/base';

.admin {
    display: flex;
    flex-flow: column;
    height: 100%;

    .admin-title {

    }

    .admin-content {
    flex-grow: 1;

    }
}
</style>