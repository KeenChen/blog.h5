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

import Vue from 'vue';
import '../base';
import MainHeader from '../components/MainHeader.vue';
import NavFooter from '../components/NavFooter.vue';
import ListView from '../components/ListView.vue';
import api from '../api';

const HomePage = Vue.component('HomePage', {
  data () {
    return {
        items: []
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
          this.fetchData();
      },

      fetchData() {
          this.fetchPosts(0, 50);
      },

      fetchPosts(page, size) {
          console.log('fetchPosts');
          const self = this;
          api.post.fetch(page, size).then((response) => {
              console.log('response: ' + JSON.stringify(response['content']));
              const items = response['content'];

              if (items && items.length > 0) {
                self.items.length = 0;
                
                items.forEach(item => {
                    self.items.push(item);
                });

                console.log("self.items: " + JSON.stringify( self.items.length));
              }

          }, (error) => {
              console.log('fetch post fail: ' + JSON.stringify(error));
          });
      }
  },

  computed: {
      
  }
});

export default HomePage;

</script>

<style lang="sass">

.hp {
    padding: 2em 8em;

    .hp-header {

    }

    .hp-list {

    }

    .hp-footer {

    }
}

</style>