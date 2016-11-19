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
        name: '',
        avatar: '',
        accessToken: '',
        _id: ''
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
            return state._id && state._id.length > 0;
        },

        user(state) {
            return {
                name: state.name,
                avatar: state.avatar,
                accessToken: state.accessToken,
                _id: state._id
            };
        }
    },

    mutations: {
        signIn(state, payload) {
            const json = payload.data;
            state._id = json['_id'];
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
        },

        userInit(state) {
            const user = JSON.parse(localStorage.getItem('user'));

            if (user) {
                state._id = user._id || user.uid;
                state.name = user.name;
                state.avatar = user.avatar;
                state.accessToken = user.accessToken;
            }
        }
    },

    actions: {

    },

    onSave(state) {
        localStorage.setItem('user', JSON.stringify(state));
    },

    onLogout(state) {
        console.log('onLogout');
        localStorage.setItem('user', JSON.stringify(state));
    }
};

export default user;