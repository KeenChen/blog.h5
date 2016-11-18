<template lang='pug'>
    div(class='app')
        transition(name='fade' mode='out-in')
            router-view(class='app-content')
        nav-side(class='app-nav')
</template>

<script>
'use strict';

import NavSide from './components/NavSide.vue';
import {Store} from './store';
import router from './router';

const App = {
    props: [],
    data() {
        return {

        }
    },

    created() {
        this.init();

        const isLogin = Store.getters.isLogin;
        console.log('isLogin: ' + isLogin);

        if (isLogin) {
            router.push('/');
        } else {
            router.push({
                name: 'account'
            });
        }

    },

    methods: {
        init() {
            Store.commit('init');
        }
    },

    components: {
        NavSide
    },

    computed: {
    }
};

export default App;

</script>

<style lang='sass'>
@import '../assets/scss/base';

.app {
    width: 100%;
    height: 100%;
}

.app-content {
    margin-right: $nav-side-width;
    padding: 1em;
}

.app-nav {
    
}

</style>