function Seq (...arr) {
	let counter = 0;
	if (arr.length === 1 && arr[0].length) arr = arr[0];
	arr.forEach((el, ind) => this[ind] = el);
}

Seq.prototype.get = function (arg) {
	return arg in this ? this[arg] : null;
}

Seq.prototype.has = function (arg) {
	return Object.keys(this).some(el => this[el] === arg);
}

Seq.prototype.next = function () {
	if (this[this.counter] === undefined) this.counter = 0; 
	return this[this.counter++];
}

Seq.prototype.toArray = function () {
	return Object.keys(this).map(el => this[el]);
}
