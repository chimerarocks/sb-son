module App {
    export interface ICar {
        name:string
    }
    export class Car implements  ICar{
        name:string;
        color:string;
    }
}

module App {
    var mustang = new App.Car();
    console.log(mustang)
}
