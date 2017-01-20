var Car = (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    Car.prototype.printCar = function () {
        console.log(this.name, this.color, this.power);
    };
    return Car;
}());
var camaro = new Car('camaro', 'amarelo', 45);
camaro.printCar();
var Car2 = (function () {
    function Car2(name, color, power) {
        this._name = name;
        this._color = color;
        this._power = power;
        Car2.list.push(name);
    }
    Object.defineProperty(Car2.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Car2.prototype.printCar = function () {
        console.log(this._name, this._color, this._power);
    };
    Car2.list = [];
    return Car2;
}());
var ferrari = new Car2('ferrari', 'vermelha', 60);
var camaro2 = new Car2('camaro', 'amarelo', 45);
ferrari.printCar();
// ferrari._name = 'asdf'
console.log(Car2.list);
camaro.name = 'camaro2';
camaro.printCar();
//# sourceMappingURL=classes.js.map