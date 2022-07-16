namespace GardenSimulation {
    export class Sellerie extends Plant {
        static seedamount: number = 0;
        static price: number = 3;
        priceNeu: number; 
        
        images: HTMLImageElement[] = [Load.sellerieS, Load.sellerieM, Load.sellerieB];
        image: HTMLImageElement = this.images[0];
        type: string = "seed5";
        row: number = this.row;
        collum: number = this.collum;
        finalAge: number = 45;
        age1: number = 13;
        age2: number = 40;

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