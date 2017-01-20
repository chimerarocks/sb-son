///<reference path="IProduct.ts"/>
var App;
(function (App) {
    var Product = (function () {
        function Product(name, description, value) {
            this.name = name;
            this.description = description;
            this.value = value;
        }
        return Product;
    }());
    App.Product = Product;
})(App || (App = {}));
//# sourceMappingURL=Product.js.map