function Seq (arr = []) {
	let counter = 0;
	arr.forEach(function (el, ind) {
		this[ind] = el;
	}, this);
}

Seq.prototype.get = function (...arg) {
	if (typeof arg[0] === 'object') arg = arg[0];
	return arg.map(el => +el in this ? this[el] : null, this);
}

Seq.prototype.has = function (arg) {
	return Object.keys(this).some(el => this[el] === +arg, this)
}

Seq.prototype.next = function () {
	if (this[this.counter] === undefined) {
		this.counter = 0;
	} 
	return this[this.counter++];
}

Seq.prototype.toArray = function () {
	return Object.keys(this).map(el => this[el], this);
}

console.log(new Seq([1,2,3,4,5,6]).get('4'));
