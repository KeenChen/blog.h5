<template>
    <div id="app">
        <p>{{msg}}</p>
        <p>{{router}}</p>

        <NavFooter></NavFooter>
    </div>
    

</template>

<script>
'use strict';

import router from './router';
import NavFooter from './components/Footer.vue';

export default {
  name: 'xx',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      router
    }
  },
  components: {
      NavFooter
  }
}
</script>

<style lang="sass">
    p {
        border: 1px solid red;
    }
</style>
