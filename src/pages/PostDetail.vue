<template lang='pug'>
    article(class='post')
        h4(class='post-title')= '{{post.title}}'
        section(class='post-content' v-html='markdown.content')
</template>

<script>
'use strict';

import Vue from 'vue';
import marked from 'marked';
import api from '../api';

const postDetail = {
    post: {},
    props: [],
    data() {
        return {
            post: postDetail.post
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
            api.post.fetchDetail(this.id).then(response => {
                if (response && response.code == 0) {
                    console.log('post detail: ' + JSON.stringify(response));
                    const data = response.content;
                    postDetail.post.title = data.title;
                    console.log('data: ' + data);
                    postDetail.post.content = data.content;
                    postDetail.post.tags = data.tags;
                } else {
                    console.log('error: ' + JSON.stringify(response));
                }
            }, error => {
                console.log('error: ' + JSON.stringify(error));
            });
        }
    },

    computed: {
        markdown() {
            let markedContent = '';

            if (postDetail.post && postDetail.post.content) {
                markedContent = marked(postDetail.post.content);
            }

            return {
                content: markedContent
            }
        }
    }
};



export default Vue.component('PostDetail', postDetail);

</script>

<style lang='sass'>
    .post {
        .post-title {

        }

        .post-content {

        }
    }
</style>