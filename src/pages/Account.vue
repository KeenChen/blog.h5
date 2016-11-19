<template lang='pug'>
    section(class='user')
        input(class='user-name' v-model='userName' placeholder='user name')
        input(class='user-password' v-model='password' placeholder='password' type='password')
        button(class='user-login waves-effect waves-light btn light-blue' @click='login')='login'
        span(class='user-sign-up waves-effect waves-light btn light-blue')='sign up'
        span(class='user-forget light-blue-text')='forget password?'

</template>

<script>
'use strict';

import api from '../api';
import router from '../router';
import Events from '../common/events';

const Account = {
    props: [],
    data() {
        return {
            userName: '',
            password: ''
        }
    },
    methods: {
        login() {
            console.log('username: ' + this.userName);
            console.log('password: ' + this.password);
            api.user.login(this.userName, this.password).then(response => {
                Account.onLoginSuccess(response);
            }, error => {
                Account.onLoginFail(error);
            });
        }
    },

    components: {

    },

    onLoginSuccess(user) {
        console.log('login success: ' + user);
        router.push({
            name: 'index'
        });

        window.dispatchEvent(new CustomEvent(Events.user.LOGIN, {
            detail: JSON.stringify(user)
        }));
    },

    onLoginFail(error) {
        console.log('login fail: ' + JSON.stringify(error));
    }
}

export default Account;

</script>

<style lang='sass'>
    .user {
        width: 32em;
        margin: 0 auto;
        padding-right: 9em;

        .user-name {

        }

        .user-password {

        }

        .user-login {
            
        }

        .user-sign-up {
            margin-left: 2em;
        }

        input {
            padding-left: .5em;
        }

        input:-webkit-autofill {
            background-color: white !important;
            -webkit-box-shadow: 0 0 0px 1000px white inset !important;
        }

        .user-forget {
            display: inline-block;
            padding: 0em 1em 1em 0;
            margin-top: 2em;            
        }
    }

</style>