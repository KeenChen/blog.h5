<template lang="pug">
    div(class='hp')
       main-header(class='hp-header')

       list-view(class='hp-list' v-bind:source='items')

       nav-footer(class='hp-footer')

    </div>

</template>

<script>
'use strict';

import {Vue, Vuex} from '../base';
import MainHeader from '../components/MainHeader.vue';
import NavFooter from '../components/NavFooter.vue';
import ListView from '../components/ListView.vue';

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

const HomePage = {
  data () {
    return {
      items
    }
  },
  components: {
      MainHeader,
      NavFooter,
      ListView
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
};

export default HomePage;

</script>

<style lang="sass">

.hp {
    border: 1px solid red;

    .hp-header {

    }

    .hp-list {

    }

    .hp-footer {

    }
}

</style>