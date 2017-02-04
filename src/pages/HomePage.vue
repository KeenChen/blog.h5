<template lang="pug">
    div(class='hp')
        //- todo: add tools to header
        main-header(class='hide hp-header')

        list-view(class='hp-list' v-bind:source='items')
        
        //- todo: what should be placed at footer?
        nav-footer(class='hp-footer hide')

    </div>

</template>

<script>
'use strict';

import Vue from 'vue';
import marked from 'marked';
import '../base';
import MainHeader from '../components/MainHeader.vue';
import NavFooter from '../components/NavFooter.vue';
import ListView from '../components/ListView.vue';
import api from '../api';
import Log from '../common/log.js';

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
          api.post.fetch(page, size, true).then((response) => {
              const items = response['content'];

              if (items && items.length > 0) {
                self.items.length = 0;
                
                items.forEach((item) => {
                    const marketContent = marked(item.content);

                    item.content = marketContent;

                    self.items.push(item);
                });

                // Array.prototype.push.apply(self.items, items);
        

                Log.d(`self.items ${JSON.stringify(self.items)}`);
              }

          }, (error) => {
              Log.d(`fetch post fail:  ${JSON.stringify(error)}`);
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
    .hp-header {

    }

    .hp-list {

    }

    .hp-footer {

    }
}

</style>