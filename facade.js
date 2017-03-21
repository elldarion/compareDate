function facade(){
	this.init();
	};

facade.prototype = Object.create(app.prototype);

facade.prototype.init = function(){

	alert(this.date('2017/22/02 10:10:21', 'ru'));
	};

window.addEventListener("DOMContentLoaded", function() {new facade});