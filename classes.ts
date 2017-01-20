class Car {
    constructor(
        public name:string,
        public color:string,
        public power:number
    ) {}

    printCar():void {
        console.log(this.name, this.color, this.power)
    }
}

var camaro = new Car('camaro', 'amarelo', 45)

camaro.printCar()

class Car2 {
    private _name:string;
    private _color:string;
    private _power:number;
    public static list: Array<string> = [];

    constructor(name: string, color:string, power:number) {
        this._name = name;
        this._color = color;
        this._power = power;
        Car2.list.push(name);
    }

    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }

    printCar():void {
        console.log(this._name, this._color, this._power)
    }
}

var ferrari = new Car2('ferrari', 'vermelha', 60)
var camaro2 = new Car2('camaro', 'amarelo', 45)

ferrari.printCar()

// ferrari._name = 'asdf'

console.log(Car2.list)

camaro.name = 'camaro2'
camaro.printCar()