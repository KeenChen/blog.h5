<template lang='pug'>
    div(class='app')
        router-view(class='app-content')
        nav-side(class='app-nav')
</template>

<script>
'use strict';

import NavSide from './components/NavSide.vue';

const App = {
    props: [],
    data() {
        return {

        }
    },
    methods: {

    },

    components: {
        NavSide
    }
};

export default App;

</script>

<style lang='sass'>
    #app {

        .app-content {

        }

        .app-nav {

        }
    }
    
</style>