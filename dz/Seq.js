function Seq(...rest){
	if(rest.length > 1)
		this.arr = rest;
	else
		this.arr = rest[0];
	
	this.i = -1;

	this.get = function(i){
		if(this.arr.indexOf(this.arr[i]) === -1)
			return null;
		else
			return this.arr[i];
	}

	this.has = function(el){
		if(this.arr.indexOf(el) === -1)
			return false;
		else
			return true;
	}

	this.next = function(){
		this.i++;
		if(this.arr.indexOf(this.arr[this.i]) === -1)
			this.i = 0;
		return this.arr[this.i];
	}

	this.toArray = function(){
		return this.arr;
	}
}