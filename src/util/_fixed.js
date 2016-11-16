'use strict';

Array.prototype.clear = function() {
    this.length = 0;
}

Array.prototype.addAll = (items) => {
    this.push.apply(this, items);

    // vue.js 需要
    this.push(null);
    this.pop();
}