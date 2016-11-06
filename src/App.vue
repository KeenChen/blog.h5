<template lang="pug">
    <div id="container" class="xz-main">
        <main-header></main-header>

        <list-view class="xz-list" :source='items'></list-view>

        <nav-footer></nav-footer>

        <nav-side class="nav-right"></nav-side>
    </div>

</template>

<script>
'use strict';

import {Vue, Router, Vuex} from './base';

import router from './router';
import MainHeader from './components/MainHeader.vue';
import NavFooter from './components/NavFooter.vue';
import ListView from './components/ListView.vue';
import NavSide from './components/NavSide.vue';

let items = [
    {
        title: 'one',
        content: 'one content',
        author: {
            name: 'xechoz',
            avatar: '',
            tech: [
                'android',
                'java'
            ]
        },
        tags: [
            'android',
            'java'
        ],
        cover: [
            '/assets/images/cover.jpeg'
        ],
        like: 12,
        updateAt: 1478353838494,
        isLike: true,
        isBookmarked: true
    },
    {
        title: 'two',
        content: 'two content',
        author: {
            name: 'xechoz',
            avatar: '',
            tech: [
                'android',
                'java'
            ]
        },
        tags: [
            'android',
            'java'
        ],
        cover: [
            '/assets/images/cover.jpeg'
        ],
        like: 123,
        updateAt: 1478353838494,
        isLike: false,
        isBookmarked: false
    }
];

const App = Vue.component('app', {
  data () {
    return {
      router,
      items
    }
  },
  components: {
      MainHeader,
      NavFooter,
      ListView,
      NavSide
  },
  
  created() {
      this.init();
  },

  methods: {
      init() {

      },

      fetchData() {

      },

      fetchPosts(page, size) {

      }
  }
});

export default App;

</script>

<style lang="sass">
   
    
    xz-main {
        main-header {}
        .xz-list {}
        nav-footer {}
        nav-side {}
    }
</style>