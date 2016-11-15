'use strict';

import {Config} from '../base';

const base = Config.isDebug? 'http://localhost:3000': 'https://api.xechoz.xyz';

export default {
    user: base + '/users',
    post: base + '/articles',
    admin: base + '/admin',
    account: {
        index: base + '/account',
        login: base + '/account/login'
    }
}