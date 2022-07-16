namespace GardenSimulation {
    export class Field {

        row: number;
        collum: number;
        color: string = "tan";
        isClear: boolean = true;
        plant: Plant;


        constructor(_row: number, _collum: number) {
            this.row = _row;
            this.collum = _collum;
        }

        isHit(_mX: number, _mY: number): void {
            if (_mX - 100 < this.row * 100 && _mX - 100 > this.row * 100 - 100 && _mY - 100 < this.collum * 100 && _mY - 100 > this.collum * 100 - 100) {
                switch (Player.task) {
                    case TASK.PLANTSEED1:
                        if (this.isClear == true && Karotte.seedamount >= 0) {
                            allPlants.push(new Karotte(this.row, this.collum));
                            this.plant = allPlants[allPlants.length - 1];
                            this.isClear = false;
                            updateSeedAmount();
                        }
                        break;
                    case TASK.PLANTSEED2:
                        if (this.isClear == true && Melone.seedamount >= 0) {
                            console.log("seed 2");
                            allPlants.push(new Melone(this.row, this.collum));
                            this.plant = allPlants[allPlants.length - 1];
                            this.isClear = false;
                            updateSeedAmount();
                        }
                        break;
                    case TASK.PLANTSEED3:
                        if (this.isClear == true && Radish.seedamount >= 0) {
                            console.log("seed 3");
                            allPlants.push(new Radish(this.row, this.collum));
                            this.plant = allPlants[allPlants.length - 1];
                            this.isClear = false;
                            updateSeedAmount();
                        }
                        break;
                    case TASK.PLANTSEED4:
                        if (this.isClear == true && Salat.seedamount >= 0) {
                            allPlants.push(new Salat(this.row, this.collum));
                            this.plant = allPlants[allPlants.length - 1];
                            this.isClear = false;
                            updateSeedAmount();
                        }
                        break;
                    case TASK.PLANTSEED5:
                        if (this.isClear == true && Sellerie.seedamount >= 0) {
                            allPlants.push(new Sellerie(this.row, this.collum));
                            this.plant = allPlants[allPlants.length - 1];
                            this.isClear = false;
                            updateSeedAmount();
                        }
                        break;
                    case TASK.HARVEST:
                        if (this.isClear == false) {
                            if (this.plant.age >= this.plant.age2 && this.plant.age <= this.plant.finalAge) {
                                
                                allPlants.splice(allPlants.findIndex((e) => e == this.plant), 1);
                                money = money + this.plant.verkaufPrice;
                                console.log(this.plant);
                                timer();
                                startTimerShop();
                            }
                        }
                        break;
                    case TASK.WATER:
                        if (this.isClear == false) {
                            console.log("water");
                            this.plant.plantWatering();
                        }
                        break;
                    case TASK.FERTILIZE:
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
                for (let plant of allPlants) {
                    plant.draw();
                }
            }
        }
        draw(): void {
            cr2.resetTransform();
            cr2.translate(this.row * 100, this.collum * 100);
            cr2.fillStyle = this.color;
            cr2.fillRect(5, 5, 95, 95);
        }
    }
}