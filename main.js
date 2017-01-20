///<reference path="Color.ts"/>
var ColorModule;
(function (ColorModule) {
    var red = new ColorModule.Color();
    red.name = 'red';
    red.code = 'ff1234';
    console.log(red.getColor());
})(ColorModule || (ColorModule = {}));
//# sourceMappingURL=main.js.map