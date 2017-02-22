function Seq (...rest) {
	this.toArray = function() {
		if (rest.length > 1) {
			return (rest);
		} else {
			return (rest[0]);
		}
	}
	this.get = function(i) {
		return (this.toArray()[i] || null)
	}
	this.has = function(i) {
		if (this.get(i)) {
			return true;
		} else {
			return false;
		}
	}
	this.next = function() {
		// ? ? ?
	}
}
