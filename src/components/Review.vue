<template lang='pug'>
    p='review'
    div(v-html='post.content')
</template>

<script>
'use strict';

let post = {
    title: 'review',
    content: 'content'
};

export default {
    props: [],
    data() {
        return {
            post
        }
    },
    methods: {

    },

    components: {

    }
}
</script>

<style lang='sass'>
    
</style>