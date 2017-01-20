///<reference path="src/Product.ts"/>
var App;
(function (App) {
    var p = new App.Product("Book", "code book", 56.6);
    document.getElementById("app").innerHTML = "\n    <div>\n        <ul>\n            <li>" + p.name + " - " + p.description + " - $" + p.value + "</li>\n        </ul>\n    </div>\n    ";
})(App || (App = {}));
//# sourceMappingURL=app.js.map