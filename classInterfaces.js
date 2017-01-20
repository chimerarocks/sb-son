var MyText = (function () {
    function MyText(valueTxt) {
        this.valueTxt = valueTxt;
    }
    MyText.prototype.countTxt = function () {
        return this.valueTxt.length;
    };
    MyText.prototype.print = function (value) {
        console.log(value);
    };
    return MyText;
}());
var t = new MyText('textTest');
console.log(t.countTxt());
t.print('printtest');
var Car = (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    Car.prototype.getCar = function () {
        return this.name;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.getPower = function () {
        return this.power;
    };
    return Car;
}());
//# sourceMappingURL=classInterfaces.js.map