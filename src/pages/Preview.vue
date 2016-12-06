<template lang='pug'>
    PostDetail(:post-id='id')
</template>

<script>
'use strict';

import Vue from 'vue';
import PostDetail from './PostDetail.vue';

const preview = Vue.component('Preview', {
    data() {
        return {
            id: ''
        }
    },

    components: {
        PostDetail
    }
});

export default preview;

</script>

<style>
    
</style>