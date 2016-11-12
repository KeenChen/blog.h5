<template lang="pug">
    div(class='hp')
        //- todo: add tools to header
        main-header(class='hide hp-header')

        list-view(class='hp-list' v-bind:source='items')
        
        //- todo: what should be placed at footer?
        nav-footer(class='hp-footer')

    </div>

</template>

<script>
'use strict';

import {Vue, Vuex} from '../base';
import MainHeader from '../components/MainHeader.vue';
import NavFooter from '../components/NavFooter.vue';
import ListView from '../components/ListView.vue';
import api from '../api';

let items = [];
let isInit = false;

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
      if (!isInit) {
        this.init();
        isInit = true;
      }
  },

  methods: {
      init() {
          this.fetchData();
      },

      fetchData() {
          this.fetchPosts(0, 50);
      },

      fetchPosts(page, size) {
          console.log('fetchPosts');
          api.post.fetch(page, size).then((response) => {
              items = response['content'];
          }, (error) => {
              console.log('fetch post fail: ' + JSON.stringify(error));
          });
      }
  },

  computed: {
      
  }
};

export default HomePage;

</script>

<style lang="sass">

.hp {
    padding: 1em;

    .hp-header {

    }

    .hp-list {

    }

    .hp-footer {

    }
}

</style>