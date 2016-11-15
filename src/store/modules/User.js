'use strict';

/**
 * store user info
 * 
 * use:
 * 
 * user.commit('signIn');
 * user.commit('logout');
 */

const user = {
    state: {
        uid: '',
        name: '',
        avatar: '',
        accessToken: ''
    },

    getters: {
        json(state) {
            return {
                uid: state.uid,
                name: state.name,
                avatar: state.avatar
            }
        },

        isLogin(state) {
            return  state.uid && state.name && state.accessToken;
        }
    },

    mutations: {
        signIn(state, payload) {
            console.log('save json: ' + JSON.stringify(payload));
            const json = payload.data;
            state.uid = json['_id'];
            state.name = json.name;
            state.avatar = json.avatar;
            state.accessToken = json.accessToken;

            user.onSave(state);
        },

        logout(state) {
            state.uid = '';
            state.name = '';
            state.avatar = '';
            state.accessToken = '';

            this.onLogout(states);
        }
    },

    actions: {

    },

    onSave(state) {
        console.log('save user info to data base: ' + JSON.stringify(state));
        localStorage.setItem('user', JSON.stringify(state));
    },

    onLogout(state) {
        console.log('onLogout');
        localStorage.setItem('user', JSON.stringify(state));
    }
};

export default user;