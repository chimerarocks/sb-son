var car = "Ferrari";
function getCar(value) {
    var car = value;
    return car;
}
console.log(getCar("Camaro")); //Camaro
console.log(car); //Ferrari
function testScope() {
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
console.log(testA()); //2
//
function f(value) {
    var a = 100;
    if (value) {
        var b = a + 1;
    }
    return b; //type script acusa erro, mas o javascript aceita porque let vai ser var
}
console.log(f(false)); //return Error
//
function g(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
console.log(g(false, 0)); //0
console.log(g(false, 10)); //10
console.log(g(true, 0)); //100
function h(condition, x) {
    if (condition) {
        var x_2 = 100;
    }
    return x;
}
console.log(h(true, 0)); //0
//# sourceMappingURL=vars.js.map