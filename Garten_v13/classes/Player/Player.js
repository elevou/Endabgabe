var GardenSimulation;
(function (GardenSimulation) {
    var TASK;
    (function (TASK) {
        TASK[TASK["PLANTSEED1"] = 0] = "PLANTSEED1";
        TASK[TASK["PLANTSEED2"] = 1] = "PLANTSEED2";
        TASK[TASK["PLANTSEED3"] = 2] = "PLANTSEED3";
        TASK[TASK["PLANTSEED4"] = 3] = "PLANTSEED4";
        TASK[TASK["PLANTSEED5"] = 4] = "PLANTSEED5";
        TASK[TASK["HARVEST"] = 5] = "HARVEST";
        TASK[TASK["WATER"] = 6] = "WATER";
        TASK[TASK["FERTILIZE"] = 7] = "FERTILIZE";
        TASK[TASK["PESTICIDE"] = 8] = "PESTICIDE";
    })(TASK = GardenSimulation.TASK || (GardenSimulation.TASK = {}));
    var Player = /** @class */ (function () {
        function Player() {
        }
        // static pesticidesMenge: number = 20;
        // static duengerMenge: number = 20;
        Player.prototype.plant = function (_value) {
            if (_value == "seed1") {
                Player.task = TASK.PLANTSEED1;
                GardenSimulation.Karotte.seedamount--;
            }
            if (_value == "seed2") {
                Player.task = TASK.PLANTSEED2;
                GardenSimulation.Melone.seedamount--;
            }
            if (_value == "seed3") {
                Player.task = TASK.PLANTSEED3;
                GardenSimulation.Radish.seedamount--;
            }
            if (_value == "seed4") {
                Player.task = TASK.PLANTSEED4;
                GardenSimulation.Salat.seedamount--;
            }
            if (_value == "seed5") {
                Player.task = TASK.PLANTSEED5;
                GardenSimulation.Sellerie.seedamount--;
            }
        };
        Player.prototype.harvest = function () {
            Player.task = TASK.HARVEST;
        };
        Player.prototype.water = function () {
            Player.task = TASK.WATER;
        };
        Player.prototype.fertilize = function () {
            Player.task = TASK.FERTILIZE;
        };
        Player.prototype.pesticide = function () {
            Player.task = TASK.PESTICIDE;
        };
        Player.prototype.buy = function (_value) {
            if (_value == "buy1" && GardenSimulation.money >= GardenSimulation.Karotte.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Karotte.priceNeu;
                GardenSimulation.Karotte.seedamount++;
            }
            if (_value == "buy2" && GardenSimulation.money >= GardenSimulation.Melone.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Melone.priceNeu;
                GardenSimulation.Melone.seedamount++;
            }
            if (_value == "buy3" && GardenSimulation.money >= GardenSimulation.Radish.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Radish.priceNeu;
                GardenSimulation.Radish.seedamount++;
            }
            if (_value == "buy4" && GardenSimulation.money >= GardenSimulation.Salat.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Salat.priceNeu;
                GardenSimulation.Salat.seedamount++;
            }
            if (_value == "buy5" && GardenSimulation.money >= GardenSimulation.Sellerie.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Sellerie.priceNeu;
                GardenSimulation.Sellerie.seedamount++;
            }
            GardenSimulation.updateSeedAmount();
        };
        return Player;
    }());
    GardenSimulation.Player = Player;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Player.js.map