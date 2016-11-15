<template lang='pug'>
    section(class='user')
        input(class='user-name' v-model='userName' placeholder='user name')
        input(class='user-password' v-model='password' placeholder='password' type='password')
        button(class='user-login' @click='login')='login'
        span(class='user-sign-up')='sign up'
        span(class='user-forget')='forget password?'

</template>

<script>
'use strict';

import api from '../api';
import router from '../router';

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

    onLoginSuccess(response) {
        console.log('login success: ' + response);
        router.push({
            name: 'index'
        });
    },

    onLoginFail(error) {
        console.log('login fail: ' + JSON.stringify(error));
    }
}

export default Account;

</script>

<style lang='sass'>
    .user {
        .user-name {

        }

        .user-password {

        }

        .user-login {

        }

        .user-sign-up {

        }

        .user-forget {

        }
    }
</style>