var test = true;
var id = 2;
//
var decimal = 5.5;
var hex = 0xf00d;
var bin = 10;
var oct = 484;
//
var name = 'Joao';
var car = "Gol";
var text = "\n    Name: " + name + "\n";
//
var fruits = ['joao'];
var fruits = ['joao'];
//
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); //0,1,2
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {})); //1,2,3
Color[1]; // Red
Color.Red; // 1
//
var list = 23;
list = "string";
//
function printNumber(num) {
    alert(num);
}
//# sourceMappingURL=main.js.map