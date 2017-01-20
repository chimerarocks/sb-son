///<reference path="ICar"/>
var Car = (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    Car.prototype.getCar = function () {
        console.log(this.name, this.color, this.power);
    };
    return Car;
}());
///<reference path="Car"/>
var porsche = new Car("Porsche", "red", 55);
porsche.getCar();
