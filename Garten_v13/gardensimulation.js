var GardenSimulation;
(function (GardenSimulation) {
    window.addEventListener("load", hdlLoad);
    GardenSimulation.allFields = [];
    GardenSimulation.allPlants = [];
    GardenSimulation.player = new GardenSimulation.Player();
    GardenSimulation.time = 0;
    var gameField;
    var formValues;
    var moneyChange;
    function hdlLoad() {
        GardenSimulation.Load.loading();
        var assets = document.querySelector("#assets");
        assets.setAttribute("style", "display: none");
        gameField = document.querySelector("#gameField");
        gameField.style.visibility = ("hidden");
        var startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", buildField);
    }
    function buildField() {
        update();
        getFormSettings();
        createGameButtons();
        createGardenField();
        startTimer();
        startTimerShop();
        gameField.style.visibility = ("visible");
        var formData = document.querySelector("#settings");
        formData.setAttribute("style", "display:none");
    }
    function createGardenField() {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 10; j++) {
                GardenSimulation.allFields.push(new GardenSimulation.Field(j, i));
            }
        }
        for (var _i = 0, allFields_1 = GardenSimulation.allFields; _i < allFields_1.length; _i++) {
            var field = allFields_1[_i];
            field.draw();
        }
    }
    function createGameButtons() {
        GardenSimulation.canvas = document.querySelector("canvas");
        GardenSimulation.cr2 = GardenSimulation.canvas.getContext("2d");
        GardenSimulation.cr2.fillStyle = "red";
        GardenSimulation.cr2.fillRect(0, 0, 100, 100);
        GardenSimulation.canvas.height = 400;
        GardenSimulation.canvas.width = 4000;
        GardenSimulation.canvas.addEventListener("click", function (evt) { getMousePosition(evt); });
        var buyBtn1 = document.querySelector("#buyKarotten");
        var buyBtn2 = document.querySelector("#buyMelone");
        var buyBtn3 = document.querySelector("#buyRadieschen");
        var buyBtn4 = document.querySelector("#buySalat");
        var buyBtn5 = document.querySelector("#buySellerie");
        buyBtn1.addEventListener("click", function () { return GardenSimulation.player.buy(buyBtn1.value); });
        buyBtn2.addEventListener("click", function () { return GardenSimulation.player.buy(buyBtn2.value); });
        buyBtn3.addEventListener("click", function () { return GardenSimulation.player.buy(buyBtn3.value); });
        buyBtn4.addEventListener("click", function () { return GardenSimulation.player.buy(buyBtn4.value); });
        buyBtn5.addEventListener("click", function () { return GardenSimulation.player.buy(buyBtn5.value); });
        var seedButton1 = document.querySelector("#s1");
        var seedButton2 = document.querySelector("#s2");
        var seedButton3 = document.querySelector("#s3");
        var seedButton4 = document.querySelector("#s4");
        var seedButton5 = document.querySelector("#s5");
        var harvestButton = document.querySelector("#h");
        var waterButton = document.querySelector("#w");
        var fertilizeButton = document.querySelector("#f");
        var pesticideButton = document.querySelector("#p");
        seedButton1.addEventListener("click", function () { return GardenSimulation.player.plant(seedButton1.value); });
        seedButton2.addEventListener("click", function () { return GardenSimulation.player.plant(seedButton2.value); });
        seedButton3.addEventListener("click", function () { return GardenSimulation.player.plant(seedButton3.value); });
        seedButton4.addEventListener("click", function () { return GardenSimulation.player.plant(seedButton4.value); });
        seedButton5.addEventListener("click", function () { return GardenSimulation.player.plant(seedButton5.value); });
        harvestButton.addEventListener("click", GardenSimulation.player.harvest);
        waterButton.addEventListener("click", GardenSimulation.player.water);
        fertilizeButton.addEventListener("click", GardenSimulation.player.fertilize);
        pesticideButton.addEventListener("click", GardenSimulation.player.pesticide);
    }
    function getMousePosition(_evt) {
        var rect = GardenSimulation.canvas.getBoundingClientRect();
        GardenSimulation.mX = _evt.clientX - rect.left;
        GardenSimulation.mY = _evt.clientY - rect.top;
        for (var _i = 0, allFields_2 = GardenSimulation.allFields; _i < allFields_2.length; _i++) {
            var field = allFields_2[_i];
            field.isHit(GardenSimulation.mX, GardenSimulation.mY);
        }
    }
    function getFormSettings() {
        formValues = new FormData(document.forms[0]);
        GardenSimulation.money = Number(formValues.get("capital"));
        moneyChange = Number(formValues.get("schwankung"));
    }
    function startTimer() {
        setInterval(timer, 1000);
    }
    function timer() {
        GardenSimulation.time++;
        console.log(GardenSimulation.time);
        GardenSimulation.cr2.clearRect(0, 0, GardenSimulation.canvas.width, GardenSimulation.canvas.height);
        createGardenField();
        GardenSimulation.cr2.resetTransform();
        for (var _i = 0, allPlants_1 = GardenSimulation.allPlants; _i < allPlants_1.length; _i++) {
            var plant = allPlants_1[_i];
            plant.grow();
            plant.plantNeedsWater();
            plant.plantNeedsDuenger();
            plant.draw();
        }
        document.querySelector("#money").innerHTML = "Money: " + GardenSimulation.money + " €";
    }
    GardenSimulation.timer = timer;
    function startTimerShop() {
        setInterval(update, 3000);
    }
    GardenSimulation.startTimerShop = startTimerShop;
    function update() {
        GardenSimulation.Karotte.priceNeu = GardenSimulation.Karotte.price + (Math.floor(Math.random() * moneyChange));
        GardenSimulation.Melone.priceNeu = GardenSimulation.Melone.price + (Math.floor(Math.random() * moneyChange));
        GardenSimulation.Radish.priceNeu = GardenSimulation.Radish.price + (Math.floor(Math.random() * moneyChange));
        GardenSimulation.Salat.priceNeu = GardenSimulation.Salat.price + (Math.floor(Math.random() * moneyChange));
        GardenSimulation.Sellerie.priceNeu = GardenSimulation.Sellerie.price + (Math.floor(Math.random() * moneyChange));
        updatePrice();
    }
    function updatePrice() {
        document.querySelector("#karottePrice").innerHTML = GardenSimulation.Karotte.priceNeu.toString() + "€";
        document.querySelector("#melonePrice").innerHTML = GardenSimulation.Melone.priceNeu.toString() + "€";
        document.querySelector("#radischenPrice").innerHTML = GardenSimulation.Radish.priceNeu.toString() + "€";
        document.querySelector("#salatPrice").innerHTML = GardenSimulation.Salat.priceNeu.toString() + "€";
        document.querySelector("#selleriePrice").innerHTML = GardenSimulation.Sellerie.priceNeu.toString() + "€";
    }
    function updateSeedAmount() {
        document.querySelector("#karotteMenge").innerHTML = GardenSimulation.Karotte.seedamount.toString();
        document.querySelector("#meloneMenge").innerHTML = GardenSimulation.Melone.seedamount.toString();
        document.querySelector("#radieschenMenge").innerHTML = GardenSimulation.Radish.seedamount.toString();
        document.querySelector("#salatMenge").innerHTML = GardenSimulation.Salat.seedamount.toString();
        document.querySelector("#sellerieMenge").innerHTML = GardenSimulation.Sellerie.seedamount.toString();
    }
    GardenSimulation.updateSeedAmount = updateSeedAmount;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=gardensimulation.js.map