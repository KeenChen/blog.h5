<template lang='pug'>
    section
        h4(class='item-title')= '{{item.title}}'
        p(class='item-content')= '{{item.content}}'
        div(class='item-tags')
            span(v-for="tag in item.tags")= '{{tag}}'
        
</template>

<script>
'use strict';

const ListItem = {
    props: ['item'],
    data() {
        return {
        }
    },
    methods: {

    },

    components: {
        
    }
};

export default ListItem;

</script>

<style lang='sass'>
    
</style>