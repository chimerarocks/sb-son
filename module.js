var App;
(function (App) {
    var Car = (function () {
        function Car() {
        }
        return Car;
    }());
    App.Car = Car;
})(App || (App = {}));
var App;
(function (App) {
    var mustang = new App.Car();
    console.log(mustang);
})(App || (App = {}));
//# sourceMappingURL=module.js.map