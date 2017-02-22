/**
 * Created by Дмитрий on 22.02.2017.
 */
"use strict";

function Vector() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    this.x = x;
    this.y = y;
}

Vector.prototype = {
    __proto__: Vector.prototype,
    /* other methods here ... */

    plus: function plus(_ref) {
        var _ref$x = _ref.x,
            x = _ref$x === undefined ? 0 : _ref$x,
            _ref$y = _ref.y,
            y = _ref$y === undefined ? 0 : _ref$y;

        return {
            'x': this.x + x,
            'y': this.y + y
        };
    },

    minus: function minus(_ref2) {
        var _ref2$x = _ref2.x,
            x = _ref2$x === undefined ? 0 : _ref2$x,
            _ref2$y = _ref2.y,
            y = _ref2$y === undefined ? 0 : _ref2$y;

        return {
            'x': this.x - x,
            'y': this.y - y
        };
    },

    get length() {
        return Math.sqrt(Math.pow(0 + this.x, 2) + Math.pow(0 + this.y, 2));
    }
};

console.log(new Vector());
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);
//# sourceMappingURL=vector.js.map