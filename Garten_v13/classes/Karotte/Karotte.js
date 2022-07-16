var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GardenSimulation;
(function (GardenSimulation) {
    var Karotte = /** @class */ (function (_super) {
        __extends(Karotte, _super);
        function Karotte(_row, _collum) {
            var _this = _super.call(this, _row, _collum) || this;
            _this.images = [GardenSimulation.Load.carotS, GardenSimulation.Load.carotM, GardenSimulation.Load.carotB];
            _this.image = _this.images[0];
            _this.type = "seed1";
            _this.row = _this.row;
            _this.collum = _this.collum;
            _this.finalAge = 25;
            _this.age1 = 5;
            _this.age2 = 20;
            _this.waterLevel1 = 5;
            _this.waterLevel2 = 10;
            _this.waterLevel3 = 15;
            _this.waterLevelMax = 20;
            _this.duengerLevel1 = 5;
            _this.duengerLevel2 = 10;
            _this.duengerLevel3 = 15;
            _this.duengerLevelMax = 20;
            return _this;
        }
        Karotte.price = 5;
        Karotte.seedamount = 0;
        Karotte.verkaufsprice = 10;
        return Karotte;
    }(GardenSimulation.Plant));
    GardenSimulation.Karotte = Karotte;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Karotte.js.map