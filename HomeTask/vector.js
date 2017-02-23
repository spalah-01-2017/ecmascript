// Напишите конструктор Vector, представляющий вектор в двумерном пространстве. 
// Он принимает параметры x и y (числа), которые хранятся в одноимённых свойствах.
// Дайте прототипу Vector два метода, plus и minus, 
// которые принимают другой вектор в качестве параметра и возвращают новый вектор,
// который хранит в x и y сумму или разность двух векторов (один this, второй – аргумент).
// Добавьте геттер length в прототип, подсчитывающий длину вектора – расстояние от (0, 0) до (x, y).

class Vector {
	constructor (x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}
}

Vector.prototype.plus = function (vec = new Vector ()) {
	return new Vector (this.x + vec.x, this.y + vec.y)
}

Vector.prototype.minus = function (vec = new Vector ()) {
	return new Vector (this.x - vec.x, this.y - vec.y)
}

Object.defineProperty(Vector.prototype, 'length', {
	get: function () {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
	}
})

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);
