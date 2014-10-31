/**
 * Created by lahiru on 10/28/2014.
 */
var context;                                // content of the canvas
var WIDTH = 1024;
var HEIGHT = 640;                           // dimensions of the canvas object
var intervalId = null;                     // interval at which the canvas refresh
var ship;
var comets = new Array();
var cometCount;
var score;

/*
 method to identify keys pressed.
 arg is an event "keysdown"
 output is invoking a method bound to the key pressed
 */
addEventListener("keydown", function (e) {
    switch (e.keyCode) {
        case 37:                        // left arrow
            ship.rotateLeft();
            break;
        case 39:                        // right arrow
            ship.rotateRight();
            break;
        case 38:                        // up arrow
            ship.speedUp();
            break;
        case 40:                        // down arrow
            ship.speedDown();
            break;
        case 32:                        // space bar
            ship.shoot();
            break;
    }
}, false);

var init = function () {
    ship = new SpaceShip();
    cometCount = 15;
    comets = Comet.generateComets(cometCount);
    score = 0;
    // get the canvas object
    var canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    // set canvas width and height to get fine resolution
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    draw();
    $(document).ready(function() {
        $("#button").click(function(){
            $(this).fadeOut(1),
                start()
        });
    });
};

var start = function(){
    // call draw function once per 10ms
    clearInterval(intervalId);
    intervalId = setInterval(draw, 10);
}

var draw = function () {
    if (cometCount === 0 || !ship.isAlive) {
        score = 0;
        clearInterval(intervalId);
        context.clearRect(0, 0, WIDTH, HEIGHT);
        init();
        $(document).ready(function() {
            $("#button").fadeIn(1000);
            $('strong').remove();
            $('#button').append("<strong>Battle Again</strong>");
        });
    }
    update();
    context.clearRect(0, 0, WIDTH, HEIGHT);
    ship.draw();

    for (var i = 0; i < ship.bulletCount; i++) {
        ship.bulletList[i].draw();
    }

    for (var i = 0; i < cometCount; i++) {
        comets[i].draw();
    }

    context.fillStyle = "rgb(250, 250, 250)";
    context.font = "24px Helvetica";
    context.textAlign = "left";
    context.textBaseline = "top";
    context.fillText("Score : " + score, 10, 0);
    context.fillText("Speed : " + this.ship.speed, 10, 24);
    context.fillText("Kills : " + (15 - cometCount), 10, 48);
};

var update = function () {
    ship.moveObject();
    // update bullets
    for (var i = 0; i < ship.bulletCount; i++) {
        ship.bulletList[i].moveObject();
    }

    // update comets
    for (var i = 0; i < cometCount; i++) {
        if (comets[i].isAlive) {
            if (comets[i].detectCollisions(ship.bulletList, ship.bulletCount)) {
                score += 10;
            }
            comets[i].moveObject();
        }
    }

    for (var i = 0; i < ship.bulletCount; i++) {
        if (!ship.bulletList[i].isAlive) {
            ship.bulletList.splice(i, 1);
            ship.bulletCount--;
        }
    }

    for (var i = 0; i < cometCount; i++) {
        if (!comets[i].isAlive) {
            comets.splice(i, 1);
            cometCount--;
        }
    }

    // check ship's collisions
    ship.detectCollisions(comets, cometCount);
};
