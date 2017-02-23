function Vector (x, y) {
	this.x = x;
	this.y = y;
	return this;
}

Vector.protype.plus = function(vector) {
	this.x += vector.x;
	this.y += vector.y;
	return this;
}

Vector.protype.plus = function(vector) {
	this.x -= vector.x;
	this.y -= vector.y;
	return this;
}

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
	return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
}
});