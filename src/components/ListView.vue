<template lang="pug">
    article(class='list-view')
        list-item(v-for="item in items" v-bind:item='item' class='list-item')
</template>

<script>
'use strict';

import Vue from 'vue';
import {Config} from '../base';
import ListItem from './ListItem.vue';

const ListView = Vue.component('list-view', {
    props: {
        source: {
            type: Array,
            required: true
        },
        pageSize: {
            type: Number,
            default: Config.Default.PAGE_SIZE
        },
        multiPage: {
            type: Boolean,
            default: true
        }
    },

    data() {
        return {
            items: this.source
        }
    },

    methods: {
        init() {
            this.events = ['itemClick', 'preLoadNext', 'afterLoadNext', 'loadAll'];
        },

        nextPage() {

        },

        prePage() {

        },

        isLast() {

        }
    },

    components: {
        ListItem
    }
});

export default ListView;

</script>

<style lang='sass'>
    .list-view {
        
        .list-item {

        }
    }
</style>