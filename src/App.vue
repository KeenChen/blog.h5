<template lang='pug'>
    div(class='app')
        div(class='app-content')
            router-view
        nav-side(class='app-nav')
</template>

<script>
'use strict';

import marked from 'marked';
import highlightJs from 'highlight.js';
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

        // if (isLogin) {
        //     router.push('/');
        // } else {
        //     router.push({
        //         name: 'account'
        //     });
        // }
    },

    methods: {
        init() {
            Store.commit('init');

            highlightJs.initHighlightingOnLoad();
            marked.setOptions({
                renderer: new marked.Renderer(),
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: false,
                smartLists: true,
                smartypants: false,

                highlight(code) {
                    console.log('highlight code: ' + code);
                    return highlightJs.highlightAuto(code).value;
                }
            });
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
@import '../node_modules/animate.css/animate';

.app {
    width: 100%;
    height: 100%;
}

.app-content {
    padding: 1em $nav-side-width 1em 1em;
    margin: auto 5%;
    height: 100%;
}

.app-nav {
    
}

@media only screen and (max-width: 720px) {
    .app-content {
        padding: 0;
        margin: 0;
    }

    .app-nav {
        display: none;
    }
}

</style>