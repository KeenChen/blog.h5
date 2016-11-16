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

const HomePage = {

  items: [],

  data () {
    return {
        items: HomePage.items
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
          api.post.fetch(page, size).then((response) => {
              console.log('response: ' + JSON.stringify(response['content']));
              const items = response['content'];

              if (items && items.length > 0) {
                  HomePage.items.length = 0;
                  
                //   items.forEach(item => {
                //       HomePage.items.push(item);
                //   })

                Array.prototype.push.apply(HomePage.items, items);
                
                HomePage.items.push(null);
                HomePage.items.pop();

                  console.log(" HomePage.items: " + JSON.stringify( HomePage.items.length));
              }

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