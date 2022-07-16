namespace GardenSimulation {

    export enum TASK {
        PLANTSEED1,
        PLANTSEED2,
        PLANTSEED3,
        PLANTSEED4,
        PLANTSEED5,
        HARVEST,
        WATER,
        FERTILIZE,
        PESTICIDE
    }

    export class Player {
        
        static task: TASK;
        // static pesticidesMenge: number = 20;
        // static duengerMenge: number = 20;

        plant(_value: string): void {
            if (_value == "seed1") {
                Player.task = TASK.PLANTSEED1;
                Karotte.seedamount --;
            }
            if (_value == "seed2") {
                Player.task = TASK.PLANTSEED2;
                Melone.seedamount--;
            }
            if (_value == "seed3") {
                Player.task = TASK.PLANTSEED3;
                Radish.seedamount--;
            }
            if (_value == "seed4") {
                Player.task = TASK.PLANTSEED4;
                Salat.seedamount--;
            }
            if (_value == "seed5") {
                Player.task = TASK.PLANTSEED5;
                Sellerie.seedamount--;
            }
        }
        harvest(): void {
            Player.task = TASK.HARVEST;
        }
        water(): void {
            Player.task = TASK.WATER;
        }
        fertilize(): void {
            Player.task = TASK.FERTILIZE;
        }
        pesticide(): void {
            Player.task = TASK.PESTICIDE;
        }

        buy (_value: string): void {
            if (_value == "buy1" && money >= Karotte.priceNeu) {
                money = money - Karotte.priceNeu;
                Karotte.seedamount++;
            }
            if (_value == "buy2" && money >= Melone.priceNeu) {
                money = money - Melone.priceNeu;
                Melone.seedamount++;
            }
            if (_value == "buy3" && money >= Radish.priceNeu) {
                money = money - Radish.priceNeu;
                Radish.seedamount++;
            }
            if (_value == "buy4" && money >= Salat.priceNeu) {
                money = money - Salat.priceNeu;
                Salat.seedamount++;
            }
            if (_value == "buy5" && money >= Sellerie.priceNeu) {
                money = money - Sellerie.priceNeu;
                Sellerie.seedamount++;
            }
            updateSeedAmount();
        }

    }

}