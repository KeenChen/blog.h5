<template lang='pug'>
    section(class='admin')
        toolbar(v-bind:tags='this.post.tags' class='admin-toolbar' @edit='onEdit' @review='onPreview' @publish='onPublish' @updateTags='onUpdateTags')
        input(class='admin-title' v-model='post.title' v-bind:placeholder='hint.title')

        textarea(class='admin-content' v-model='post.content' v-bind:placeholder='hint.content')
</template>

<script>
'use strict';

import Vue from 'vue';
import ToolBar from '../components/ToolBar.vue';
import api from '../api';
import Router from '../router';

let hint = {
    title: '标题wakaka',
    content: '我今天有话说'
};

const Editor = Vue.component('Editor', {
    props: [],
    data() {
        return {
            post: {
                _id: '',
                title: '',
                content: '',
                author: '',
                tags: []
            },
            hint
        }
    },
    created() {
        console.log('this.$route.params: ' + JSON.stringify(this.$route.params));

        const post = this.$route.params['post'];
        console.log('post: ' + JSON.stringify(post));
        if (post) {
            this.post._id = post._id;
            this.post.title = post.title;
            this.post.content = post.content;
            this.post.author = post.author;
            this.post.createdAt = post.createdAt;
            this.post.updatedAt = post.updatedAt;

              
            post.tags.forEach(value => {
                this.post.tags.push(value);
            });

            post.comments.forEach(value => {
                this.post.comments.push(value);
            });
        }
    },

    methods: {
        onPreview(data) {
            console.log('do onPreview');

            Router.push({
                name: 'preview',
                params: {
                    id: this.post._id
                }
            });
        },

        onPublish(data) {
            console.log(`onPublish ${JSON.stringify(data)}`);
            console.log('do onPublish: ' + JSON.stringify(this.post));
            
            if (Array.isArray(data.tags)) {
                this.post.tags.length = 0;

                data.tags.forEach(value => {
                    this.post.tags.push(value);
                });
            }

            this.postData();
        },

        onEdit() {
            console.log('do onEdit');
        },

        onUpdateTags(tags) {
            this.post.tags.length = 0;

            tags.forEach(value => {
                this.post.tags.push(value);
            });

            this.postData();
        },

        postData() {
            api.post.save(this.post).then((response) => {
                            console.log('save post success: ' + JSON.stringify(response));
                            const id = response.content['_id'] || response.content['id'];

                            if (!this.post._id) {
                                this.post['_id'] = id; 
                            }
                        }, (error) => {
                            console.log('save post fail: ' + JSON.stringify(error));
                        });
        }
    },

    components: {
        toolbar: ToolBar
    }
});

export default Editor;

</script>

<style lang='sass'>
@import '../../statics/assets/scss/base';

.admin {
    display: flex;
    flex-flow: column;
    height: 100%;

    .admin-title {
        padding: 0.5em;
        border-bottom: solid 1px #f5f5f5;
        padding: .25em;
        box-sizing: border-box;
    }

    .admin-content {
        flex-grow: 1;
        padding: .5em .5em;
        border: 0px;
    }
}
</style>