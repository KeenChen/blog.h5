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

const postDetail = Vue.component('PostDetail', {
    props: [],
    data() {
        return {
            post: {
                title: '',
                content: '',
                tags: []
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
            console.log('post id: ' + this.id);
            const self = this;
            api.post.fetchDetail(this.id).then(response => {
                if (response && response.code == 0) {
                    console.log('post detail: ' + JSON.stringify(response));
                    const content = response.content;
                    
                    self.post.title = content.title;
                    self.post.content = content.content;
                    self.post.tags = content.tags;
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
            console.log('markdown ' + Date.now());

            let markedContent = 'empty marked';

            if (this.post && this.post.content) {
                markedContent = marked(this.post.content);
            }

            return {
                content: markedContent
            }
        },

        // post()  {
        //     return {
        //         title: postDetail.post.title,
        //         content: postDetail.post.content,
        //         tags: postDetail.post.tags
        //     }
        // }
    }
});



export default postDetail;

</script>

<style lang='sass'>
    .post {
        margin-left: 8em;
        
        .post-title {

        }

        .post-content {

           code {
               
            }

            pre code {
            }
        }
    }
</style>