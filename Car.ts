///<reference path="ICar"/>

class Car implements ICar {
    constructor(
        public name:string,
        public color:string,
        public power: number
    ){}

    getCar():void {
        console.log(this.name, this.color, this.power)
    }
}