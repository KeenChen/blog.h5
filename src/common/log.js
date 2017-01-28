'use strict';

const log = {
    echo() {
        console.log(JSON.stringify(arguments[0]));
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