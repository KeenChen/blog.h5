'use strict';

import {Config} from '../base';

console.log(`log.js: isDebug ${JSON.stringify(Config)}`);

const log = {
    echo() {
        if (Config.isDebug) {
            console.log(JSON.stringify(arguments[0]));
        }
    },

    i() {
        log.echo(arguments)
    },

    d() {
        log.echo(arguments);
    },

    w() {
        log.echo(arguments);
    },

    e() {
        log.echo(arguments);
    }
};


export default {
    i: log.i,
    d: log.d,
    w: log.w,
    e: log.e
};