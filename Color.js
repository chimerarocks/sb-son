var ColorModule;
(function (ColorModule) {
    var Color = (function () {
        function Color() {
        }
        Color.prototype.getColor = function () {
            return this.code;
        };
        return Color;
    }());
    ColorModule.Color = Color;
})(ColorModule || (ColorModule = {}));
//# sourceMappingURL=Color.js.map