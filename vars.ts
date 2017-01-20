var car:string = "Ferrari";

function getCar(value:string):string {
    var car = value;
    return car;
}

console.log(getCar("Camaro")); //Camaro
console.log(car); //Ferrari

function testScope(){
    return car;
}

console.log(testScope); //Ferrari

//

function testA() {
    var a = 1;
    a = 2;
    var b = testB();
    a = 3;
    return b;
    function testB() {
        return a;
    }
}

console.log(testA()) //2

//

function f(value:boolean) {
    let a = 100;
    if (value) {
        let b = a + 1;
    }
    return b; //type script acusa erro, mas o javascript aceita porque let vai ser var
}

console.log(f(false)) //return Error

//

function g(condition:boolean, x:number):number {
    if (condition) {
        let x = 100;
        return x;
    }
    return x;
}

console.log(g(false, 0)) //0
console.log(g(false, 10)) //10
console.log(g(true, 0)) //100

function h(condition:boolean, x:number):number {
    if (condition) {
        let x = 100;
    }
    return x;
}

console.log(h(true, 0)) //0