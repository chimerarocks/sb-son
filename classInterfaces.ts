interface ICountString {
    valueTxt:string;
    countTxt():number;
}

interface IPrintText {
    print(value:string):void;
}

class MyText implements ICountString, IPrintText {
    constructor(public valueTxt:string) {}
    countTxt():number {
        return this.valueTxt.length
    }
    print(value:string):void {
        console.log(value)
    }
}

var t = new MyText('textTest')

console.log(t.countTxt())
t.print('printtest')

interface ICarString {
    name:string;
    getCar():string;
}

interface ICarColor {
    color:string;
    getColor():string;
}

interface ICar extends ICarString, ICarColor{
    power:number;
    getPower():number;
}

class Car implements ICar {
    constructor(public name:string, public color:string, public power:number){}
    getCar() {
        return this.name
    }
    getColor() {
        return this.color
    }
    getPower() {
        return this.power
    }
}