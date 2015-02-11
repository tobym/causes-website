
// "name" is a string
// "callback" is a function that 1 argument.
function makeAccount(name, callback) {
	console.log("..making account..");
	callback(name)
}

function sayHi(name) {
	console.log("hello there, " + name);
}

// var myCallback = function(name) {
// 	console.log("hello from myCallback to " + name);
// }

makeAccount("toby", sayHi);
//makeAccount("toby", myCallback);

$("ul").animate({
	"width": "70%"
}, 2000);