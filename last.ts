var cars = ["porsche", "camaro", "ferrari"];

for (var car in cars) {
    console.log(car)
}

for (var car of cars) {
    console.log(car)
}

var colors = new Array("red", "blue", "orange")

colors['title'] = "Colors";

console.log(colors)

for (var color in colors) {
    console.log(color)
}

for (var color of colors) {
    console.log(color)
}