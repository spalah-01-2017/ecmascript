
// Напишите конструктор Vector, представляющий вектор в двумерном пространстве.
// Он принимает параметры x и y (числа), которые хранятся в одноимённых свойствах.
//     Дайте прототипу Vector два метода, plus и minus, которые принимают
// другой вектор в качестве параметра и возвращают новый вектор,
// который хранит в x и y сумму или разность двух векторов (один this, второй – аргумент).
// Добавьте геттер length в прототип, подсчитывающий длину вектора – расстояние от (0, 0) до (x, y).
// Ваш код

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5


function Vector(x, y) {
    this.x = x;
    this.y = y;
};

// var Vector = {
// // (x, y)
//
//     // this.x = x,
//     // this.y = y,
//     get height()
//     {
//         return this.elements.length;
//     };
// set height(value)
// {
//     console.log("Игнорируем попытку задать высоту", value);
// };
// }


Vector.prototype.plus = function(obj) {
    var newX = obj.x + this.x;
    var neyY = obj.y + this.y;
    return 'Vector{x: '+newX+', y: '+neyY+'}';
};

Vector.prototype.minus = function(obj) {
    var newX = this.x - obj.x;
    var neyY = this.y - obj.y;
    return 'Vector{x: '+newX+', y: '+neyY+'}';
};
