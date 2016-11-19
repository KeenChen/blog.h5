<template lang='pug'>
    section(class='ns')
        //- nav header: author info
        div(class='ns-header' @click='onLogin')
            img(v-if='avatar' v-bind:src='avatar')
            span(class='grey-text ns-title')= 'xechoz\'s blog'
            
        //- nav link
        div(class='ns-link')
            router-link(class='ns-link-item blue-text text-darken-2' to='/' exact)= 'Home'
            router-link(v-show='isLogin' class='ns-link-item blue-text text-darken-2' to='/admin' exact)= 'Manager'

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

import {Store} from '../store';
import router from '../router';
import Event from '../common/events';

const NavSide =  {
    data() {
        return {
            avatar: Store.getters.user.avatar || '/assets/images/default_avatar.jpg',
            isLogin: Store.getters.isLogin || false
        }
    },

    created() {
        window.addEventListener(Event.user.LOGIN, this.onLoginEvent);
    },

    methods: {
        onLogin(event) {
            event.stopPropagation();
            
            if (!this.isLogin) {
                router.push({
                    name: 'account'
                });
            }
        },

        onLoginEvent(event) {

             this.isLogin = Store.getters.isLogin;
        }
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
        margin: 2em auto;

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