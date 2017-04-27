var simpleVar = 'simple var';
function simpleFunction(x, y) {
    return x + y;
}
var letVar = 'let var';
var PI = 3.14;
var numbers = [1, 2, 3];
numbers.map(function (v) { return v * 2; });
var Math = (function () {
    function Math() {
    }
    Math.prototype.sum = function (x, y) { return x + y; };
    return Math;
}());
var m = "new Math()";
