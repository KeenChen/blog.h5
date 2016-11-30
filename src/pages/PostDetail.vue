<template lang='pug'>
    article(class='post')
        h4(class='post-title')= '{{post.title}}'
        section(class='post-content' v-html='markdown.content')
        span(v-show='isOwner' class='post-edit' @click='onEdit')
            i(class='fa fa-pencil')= ' Edit'
</template>

<script>
'use strict';

import Vue from 'vue';
import marked from 'marked';
import api from '../api';
import {Store} from '../store';
import router from '../router';

const postDetail = Vue.component('PostDetail', {
    props: [],
    data() {
        return {
            post: {
                _id: '',
                title: '',
                content: '',
                tags: [],
                author: '',
                comment: [],
                createdAt: '',
                updatedAt: ''
            }
        }
    },

    created() {
        this.init();
    },

    methods: {
        init() {
            this.id = this.$route.params['id'];

            this.fetchData();
        },

        fetchData() {
            const self = this;
            api.post.fetchDetail(this.id).then(response => {
                if (response && response.code == 0) {
                    const post = response.content;
                    self.post = post;
                } else {
                    console.log('error: ' + JSON.stringify(response));
                }
            }, error => {
                console.log('error: ' + JSON.stringify(error));
            });
        },

        onEdit(event) {
            event.stopPropagation();
            
            router.push({
                name: 'editor',
                params: {
                    'post': this.post
                }
            });
        }
    },

    computed: {
        markdown() {
            console.log('markdown ' + Date.now());

            let markedContent = '';

            if (this.post && this.post.content) {
                markedContent = marked(this.post.content);
            }

            return {
                content: markedContent
            }
        },

        isOwner() {
            console.log('Store.getters.isLogin: ' + JSON.stringify({
                'Store.getters.isLogin': Store.getters.isLogin,
                'this.post.author': this.post.author,
                'Store.getters.user._id': Store.getters.user._id
            }));

            return Store.getters.isLogin && this.post.author == Store.getters.user._id;
        }
    }
});



export default postDetail;

</script>

<style lang='sass'>
    .post {
        max-width: 56em;
        background: rgba(250, 250, 250, 0.53);
        margin: 0 auto;
        position: relative;
        right: 4em;

        .post-title {

        }

        .post-content {

           code {
               
            }

            pre code {
            }
        }

        .post-edit {
            position: absolute;
            top: 4em;
            right: 12em;

            i {
                font-size: 1.2em;
            }

            &:hover {
                cursor: pointer;
            }
        }
    }
</style>