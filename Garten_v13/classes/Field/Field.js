var GardenSimulation;
(function (GardenSimulation) {
    var Field = /** @class */ (function () {
        function Field(_row, _collum) {
            this.color = "tan";
            this.isClear = true;
            this.row = _row;
            this.collum = _collum;
        }
        Field.prototype.isHit = function (_mX, _mY) {
            var _this = this;
            if (_mX - 100 < this.row * 100 && _mX - 100 > this.row * 100 - 100 && _mY - 100 < this.collum * 100 && _mY - 100 > this.collum * 100 - 100) {
                switch (GardenSimulation.Player.task) {
                    case GardenSimulation.TASK.PLANTSEED1:
                        if (this.isClear == true && GardenSimulation.Karotte.seedamount >= 0) {
                            GardenSimulation.allPlants.push(new GardenSimulation.Karotte(this.row, this.collum));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isClear = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    case GardenSimulation.TASK.PLANTSEED2:
                        if (this.isClear == true && GardenSimulation.Melone.seedamount >= 0) {
                            console.log("seed 2");
                            GardenSimulation.allPlants.push(new GardenSimulation.Melone(this.row, this.collum));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isClear = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    case GardenSimulation.TASK.PLANTSEED3:
                        if (this.isClear == true && GardenSimulation.Radish.seedamount >= 0) {
                            console.log("seed 3");
                            GardenSimulation.allPlants.push(new GardenSimulation.Radish(this.row, this.collum));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isClear = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    case GardenSimulation.TASK.PLANTSEED4:
                        if (this.isClear == true && GardenSimulation.Salat.seedamount >= 0) {
                            GardenSimulation.allPlants.push(new GardenSimulation.Salat(this.row, this.collum));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isClear = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    case GardenSimulation.TASK.PLANTSEED5:
                        if (this.isClear == true && GardenSimulation.Sellerie.seedamount >= 0) {
                            GardenSimulation.allPlants.push(new GardenSimulation.Sellerie(this.row, this.collum));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isClear = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    case GardenSimulation.TASK.HARVEST:
                        if (this.isClear == false) {
                            if (this.plant.age >= this.plant.age2 && this.plant.age <= this.plant.finalAge) {
                                GardenSimulation.allPlants.splice(GardenSimulation.allPlants.findIndex(function (e) { return e == _this.plant; }), 1);
                                GardenSimulation.money = GardenSimulation.money + this.plant.verkaufPrice;
                                console.log(this.plant);
                                GardenSimulation.timer();
                                GardenSimulation.startTimerShop();
                            }
                        }
                        break;
                    case GardenSimulation.TASK.WATER:
                        if (this.isClear == false) {
                            console.log("water");
                            this.plant.plantWatering();
                        }
                        break;
                    case GardenSimulation.TASK.FERTILIZE:
                        if (this.isClear == false) {
                            console.log("fertilize");
                            this.plant.plantDuengering();
                        }
                        break;
                    // case TASK.PESTICIDE:
                    //     if (this.isClear == false) {
                    //         console.log("pesticide");
                    //         this.plant.killBug();
                    //     }
                    //     break;
                }
                this.draw();
                for (var _i = 0, allPlants_1 = GardenSimulation.allPlants; _i < allPlants_1.length; _i++) {
                    var plant = allPlants_1[_i];
                    plant.draw();
                }
            }
        };
        Field.prototype.draw = function () {
            GardenSimulation.cr2.resetTransform();
            GardenSimulation.cr2.translate(this.row * 100, this.collum * 100);
            GardenSimulation.cr2.fillStyle = this.color;
            GardenSimulation.cr2.fillRect(5, 5, 95, 95);
        };
        return Field;
    }());
    GardenSimulation.Field = Field;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Field.js.map