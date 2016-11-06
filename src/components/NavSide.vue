<template lang='pug'>
    nav
        //- nav header: author info
        div(class='ns-header')
            i(class='fa fa-android')
            span= 'xechoz\'s blog'
            
        //- nav link
        div(class='ns-link')
            router-link(to='/')= 'Home'
            router-link(to='/admin')= 'Manager'

        //- contact info
        div(class='ns-contact')

        //- copy right
        div(class='ns-footer')
            span()= 'Develop by xechoz.zheng'
            span()= 'Power by Vue.js'

</template>

<script>
'use strict';

const NavSide =  {
    data() {
        return {

        }
    },
    methods: {

    },

    components: {

    }
};

export default NavSide;

</script>

<style lang='sass'>
    
</style>