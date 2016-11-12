<template lang='pug'>
    article(class='post')
        h4(class='post-title')= '{{post.title}}'
        section(class='post-content' v-html='post.content')
</template>

<script>
'use strict';

import api from '../api';

let post = {
    id: '',
    title: 'hello',
    content: '<h1>welcome</h1>'
};

export default {
    props: [],
    data() {
        return {
            post
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
                    post = response.content['content'];
                } else {
                    console.log('error: ' + JSON.stringify(response));
                }
            }, error => {
                console.log('error: ' + JSON.stringify(error));
            });
        }
    },

    components: {

    }
}
</script>

<style lang='sass'>
    .post {
        .post-title {

        }

        .post-content {

        }
    }
</style>