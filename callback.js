var _ = require("underscore");

function asyncFunc(callback){
	console.log(_.isFunction(callback));
	setTimeout(callback,1000);
}


var color = "blue";

/*
//1000ms後にgreenが表示
asyncFunc(function(){
	console.log("The color is " + color);
})
*/

/*
//期待通り
(function(color){
	asyncFunc(function(){
		console.log("The color is " + color);
	})
})(color)
*/

//blueが表示され、1000msストップ
/*
var f = function(color){
	console.log("The color is " + color);
};
*/

//期待通り

var f = function(color){
	return function(){
		console.log("The color is " + color);
	}
};

asyncFunc(f(color));

color = "green";
