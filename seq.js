/**
 * Created by Дмитрий on 22.02.2017.
 */
'use strict';

function Seq(...arr) {
    let list = [];
    let curent = 0;
    arr.forEach(function(el){
        list = list.concat(el);
    });
    return {
        get: function (num) {
            if (list[num] == undefined) return null;
            return list[num];
        },
        has: function (item) {
            return list.some(function(el){
                return el == item;
            })
        },
        next: function () {
            if (curent >= list.length) curent = 0;
            curent++;
            return list[curent-1];
        },
        toArray: function () {
            return list;
        }
    }

}


var s1 = new Seq(['a','b','c']);

console.log(s1.get(2)); // 'c'
console.log(s1.get(500)); // null
console.log(s1.next()); // 'a'
console.log(s1.next()); // 'b'
console.log(s1.next()); // 'c'
console.log(s1.next()); // 'a'


var s2 = new Seq(1,2,3,4,5,6,7,8);

console.log(s2.has(5)); // true
console.log(s2.has(0)); // false
console.log(s2.toArray()); // [1,2,3,4,5,6,7,8]