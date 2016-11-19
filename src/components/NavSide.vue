<template lang='pug'>
    section(class='ns')
        //- nav header: author info
        div(class='ns-header')
            img(v-if='avatar' v-bind:src='avatar')
            span(v-if='!avatar' class='ns-avatar')
                i(class='fa fa-android')
            span(class='grey-text ns-title')= 'xechoz\'s blog'
            
        //- nav link
        div(class='ns-link')
            router-link(class='ns-link-item blue-text text-darken-2' to='/' exact)= 'Home'
            router-link(class='ns-link-item blue-text text-darken-2' to='/admin' exact)= 'Manager'

        //- contact info
        div(class='ns-contact')

        //- copy right
        div(class='ns-footer')
            span(class='hide')= 'Develop by xechoz.zheng'
            span(class='ns-github')
                i(class='fa fa-github')
                a(href='https://github.com/xechoz/LearnVueJs/' target='_blank')= 'open source'
            span(class='ns-vue')
                a(href='https://vuejs.org/' target='_blank')= 'Power by Vue.js'

</template>

<script>
'use strict';

const NavSide =  {
    data() {
        return {
            avatar: '/assets/images/cover.jpeg'
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
@import '../../assets/scss/base';

@mixin link-active() {
    @extend .grey, .lighten-5 ;
    border-left: 1px solid #42A5F5;
};

@mixin link-hover() {
    @extend .grey, .lighten-5 ;
}

.ns {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.14);
    width: $nav-side-width;
    padding: 0.5em;

    .ns-header {
        text-align: center;
        padding-bottom: 1em;

        img {
            width: 4em;
            height: 4em;
            border-radius: 2em;
            margin-bottom: 1em;
        }

        .ns-title {

            
        }
    }

    .ns-link {
        .ns-link-item {
            display: block;
            padding: 1em;
            border: 1px solid transparent;

            &:hover {
                @include link-hover();
            }

            &.router-link-active {
                @include link-active();
            }
        }

        a {
            text-decoration: none;
            padding-left: .25em;
        }
        
        .router-link-active {

        }
    }

    .ns-footer {
        position: absolute;
        bottom: 0;
        padding-bottom: 1em;
        text-align: center;

        span {
            display: inline-block;
            font-size: 0.75em;
            padding: 1em 1em 0 1em;
            
            i {
                &::before {
                    padding-right: .5em;
                }

                &::after {
                    padding-left: .5em;
                }
            }

            a {
                @extend .grey-text;
            }
        }

        span.ns-vue {
            a {
                text-decoration: underline;
            }
        }
    }
}
</style>