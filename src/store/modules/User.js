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
        // uid: '',
        // name: '',
        // avatar: '',
        // accessToken: '',
        // _id: ''
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
            return (state.uid && state.uid.length > 0) || (state._id && state._id.length > 0);
        }
    },

    mutations: {
        signIn(state, payload) {
            console.log('save json: ' + JSON.stringify(payload));
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
            console.log('userInit: ' + JSON.stringify(state));

            const user = JSON.parse(localStorage.getItem('user'));

            console.log('user: ' + JSON.stringify(user));

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
        console.log('save user info to data base: ' + JSON.stringify(state));
        localStorage.setItem('user', JSON.stringify(state));
    },

    onLogout(state) {
        console.log('onLogout');
        localStorage.setItem('user', JSON.stringify(state));
    }
};

export default user;