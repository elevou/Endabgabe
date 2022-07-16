namespace GardenSimulation {
    export class Radish extends Plant {
        static seedamount: number = 0;
        static price: number = 2;
        static verkaufsprice: number = 10;
        priceNeu: number;
        

        images: HTMLImageElement[] = [Load.radishS, Load.radishM, Load.radishB];
        image: HTMLImageElement = this.images[0];
        type: string = "seed3";
        row: number = this.row;
        collum: number = this.collum;
        finalAge: number = 25;
        age1: number = 17;
        age2: number = 33;

        waterLevel1: number = 5;
        waterLevel2: number = 10;
        waterLevel3: number = 15;
        waterLevelMax: number = 20;

        duengerLevel1: number = 5;
        duengerLevel2: number = 10;
        duengerLevel3: number = 15;
        duengerLevelMax: number = 20;

        constructor(_row: number, _collum: number) {
            super(_row, _collum);
        }
    }

    
}