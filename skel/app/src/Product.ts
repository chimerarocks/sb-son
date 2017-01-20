///<reference path="IProduct.ts"/>

module App {
    export class Product implements IProduct {
        constructor(
            public name: string,
            public description: string,
            public value: number
        ){}
    }
}
