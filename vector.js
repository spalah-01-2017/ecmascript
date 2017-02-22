/**
 * Created by Дмитрий on 22.02.2017.
 */
"use strict";

function Vector(x=0, y=0){
    this.x = x;
    this.y = y;
}

Vector.prototype = {
    __proto__: Vector.prototype,
    /* other methods here ... */

    plus: function ({x=0, y=0}) {
        return {
            'x': this.x + x,
            'y': this.y + y
        };
    },
    
    minus: function ({x=0, y=0}) {
        return {
            'x': this.x - x,
            'y': this.y - y
        };
    },

    get length() {
        return Math.sqrt(Math.pow((0 + this.x), 2) + Math.pow((0 + this.y), 2));
    }
};

console.log(new Vector());
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);


