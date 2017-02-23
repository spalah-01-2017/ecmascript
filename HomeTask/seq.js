function Seq (arr = []) {
	let counter = 0;
	arr.forEach(function (el, ind) {
		this[ind] = el;
	}, this);
}

Seq.prototype.get = function (...arg) {
	if (typeof arg[0] === 'object') arg = arg[0];
	return arg.map(function (el) {
		return el in this ? this[el] : null;
	}, this);
}

Seq.prototype.has = function (arg) {
	return Object.keys(this).some(function (el) {
		return this[el] === arg;
	}, this)
}

Seq.prototype.next = function () {
	if (this[this.counter] === undefined) {
		this.counter = 0;
		return this[this.counter++];
	} 
	return this[this.counter++];
}

Seq.prototype.toArray = function () {
	return Object.keys(this).map(function (el, ind) {
		return this[el];
	}, this)
}
