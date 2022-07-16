namespace GardenSimulation {

window.addEventListener("load", hdlLoad);

export let canvas: HTMLCanvasElement;
export let cr2: CanvasRenderingContext2D;
export let allFields: Field[] = [];
export let allPlants: Plant[] = [];
export let player: Player = new Player();
export let mX: number;
export let mY: number;
export let time: number = 0;

let gameField: HTMLDivElement;

let formValues: FormData;
export let money: number;
let moneyChange: number;

function hdlLoad(): void {
    Load.loading();

    let assets: HTMLDivElement = document.querySelector("#assets");
    assets.setAttribute("style", "display: none");

    gameField = document.querySelector("#gameField");
    gameField.style.visibility = ("hidden");

    let startButton: HTMLButtonElement = document.querySelector("#startButton");
    startButton.addEventListener("click", buildField);
}

function buildField(): void {
    update();
    getFormSettings();
    createGameButtons();
    createGardenField(); 
    startTimer();
    startTimerShop();

    gameField.style.visibility = ("visible");

    let formData: HTMLDivElement = document.querySelector("#settings");
    formData.setAttribute("style", "display:none");
}

function createGardenField(): void {
    for (let i: number = 0; i < 4; i++) {
        for (let j: number = 0; j < 10; j++) {
            allFields.push(new Field(j, i));
        }
    }
    for (let field of allFields) {
        field.draw();
    }
}

function createGameButtons(): void {
    canvas = document.querySelector("canvas");
    cr2 = canvas.getContext("2d");
    cr2.fillStyle = "red";
    cr2.fillRect(0, 0, 100, 100);
    canvas.height = 400;
    canvas.width = 4000;
    canvas.addEventListener("click", (evt) => {getMousePosition(evt); });

    let buyBtn1: HTMLInputElement = document.querySelector("#buyKarotten");
    let buyBtn2: HTMLInputElement = document.querySelector("#buyMelone");
    let buyBtn3: HTMLInputElement = document.querySelector("#buyRadieschen");
    let buyBtn4: HTMLInputElement = document.querySelector("#buySalat");
    let buyBtn5: HTMLInputElement = document.querySelector("#buySellerie");

    buyBtn1.addEventListener("click", () => player.buy(buyBtn1.value) );
    buyBtn2.addEventListener("click", () => player.buy(buyBtn2.value) );
    buyBtn3.addEventListener("click", () => player.buy(buyBtn3.value) );
    buyBtn4.addEventListener("click", () => player.buy(buyBtn4.value) );
    buyBtn5.addEventListener("click", () => player.buy(buyBtn5.value) );


    let seedButton1: HTMLInputElement = document.querySelector("#s1");
    let seedButton2: HTMLInputElement = document.querySelector("#s2");
    let seedButton3: HTMLInputElement = document.querySelector("#s3");
    let seedButton4: HTMLInputElement = document.querySelector("#s4");
    let seedButton5: HTMLInputElement = document.querySelector("#s5");
    let harvestButton: HTMLInputElement = document.querySelector("#h");
    let waterButton: HTMLInputElement = document.querySelector("#w");
    let fertilizeButton: HTMLInputElement = document.querySelector("#f");
    let pesticideButton: HTMLInputElement = document.querySelector("#p");

    seedButton1.addEventListener("click", () => player.plant(seedButton1.value) );
    seedButton2.addEventListener("click", () => player.plant(seedButton2.value) );
    seedButton3.addEventListener("click", () => player.plant(seedButton3.value) );
    seedButton4.addEventListener("click", () => player.plant(seedButton4.value) );
    seedButton5.addEventListener("click", () => player.plant(seedButton5.value) );

    harvestButton.addEventListener("click", player.harvest);
    waterButton.addEventListener("click", player.water);
    fertilizeButton.addEventListener("click", player.fertilize);
    pesticideButton.addEventListener("click", player.pesticide);
}

function getMousePosition(_evt: MouseEvent): void {
    let rect: DOMRect = canvas.getBoundingClientRect();
    mX = _evt.clientX - rect.left;
    mY = _evt.clientY - rect.top;
    for (let field of allFields) {
        field.isHit(mX, mY);
    }
}

function getFormSettings(): void {
    formValues = new FormData(document.forms[0]);
    money = Number(formValues.get("capital"));
    moneyChange = Number(formValues.get("schwankung"));
}

function startTimer(): void {
    setInterval(timer, 1000);
}

export function timer(): void {
    time ++;
    console.log(time);
    cr2.clearRect(0, 0, canvas.width, canvas.height);
    createGardenField();
    cr2.resetTransform();
    for (let plant of allPlants) {  
        plant.grow();
        plant.plantNeedsWater(); 
        plant.plantNeedsDuenger();

        plant.draw();
                 
    }
    document.querySelector("#money").innerHTML = "Money: " + money + " €";
}

export function startTimerShop(): void {
    setInterval(update, 3000);
}

function update (): void {
    Karotte.priceNeu = Karotte.price + (Math.floor(Math.random() * moneyChange));
    Melone.priceNeu = Melone.price + (Math.floor(Math.random() * moneyChange));
    Radish.priceNeu = Radish.price + (Math.floor(Math.random() * moneyChange));
    Salat.priceNeu = Salat.price + (Math.floor(Math.random() * moneyChange));
    Sellerie.priceNeu = Sellerie.price + (Math.floor(Math.random() * moneyChange));

    updatePrice();
}

function updatePrice (): void {
    document.querySelector("#karottePrice").innerHTML = Karotte.priceNeu.toString() + "€";
    document.querySelector("#melonePrice").innerHTML = Melone.priceNeu.toString() + "€";
    document.querySelector("#radischenPrice").innerHTML = Radish.priceNeu.toString() + "€";
    document.querySelector("#salatPrice").innerHTML = Salat.priceNeu.toString() + "€";
    document.querySelector("#selleriePrice").innerHTML = Sellerie.priceNeu.toString() + "€";
}

export function updateSeedAmount(): void {
    document.querySelector("#karotteMenge").innerHTML = Karotte.seedamount.toString();
    document.querySelector("#meloneMenge").innerHTML = Melone.seedamount.toString();
    document.querySelector("#radieschenMenge").innerHTML = Radish.seedamount.toString();
    document.querySelector("#salatMenge").innerHTML = Salat.seedamount.toString();
    document.querySelector("#sellerieMenge").innerHTML = Sellerie.seedamount.toString();
}

}