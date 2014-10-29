/**
 * Created by lahiru on 10/28/2014.
 */

var context;                            // content of the canvas
var WIDTH = 512, HEIGHT = 480;      // dimensions of the canvas object
var canvasMinX = 0, canvasMaxX;     // horizontal range of canvas/arena
var intervalId;                     // interval at which the canvas refresh
var ship;

/*
 method to identify keys pressed.
 arg is an event "keysdown"
 output is adding the key code of the pressed key to the keysDown array
 */
addEventListener("keydown", function (e) {

    switch(e.keyCode)
    {
        case 37:
            ship.rotateLeft();
            break;
        case 39:
            ship.rotateRight();
            break;
        case 38:
            ship.move();
            break;
        case 32:
            ship.shoot();
            break;
    }
}, false);

var init = function()
{
    ship = new SpaceShip();
    // get the canvas object
    var canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    // set canvas width and height to get fine resolution
    canvas.width = 512;
    canvas.height = 480;
    canvasMinX = canvas.offsetLeft;
    //canvasMaxX = canvasMinX + WIDTH;
    // call draw function once per 10ms
    document.getElementById("abc").innerHTML += "<p>Init called.</p>"+ ship.direction;
    intervalId = setInterval(draw, 10);

};

var draw = function()
{
    //document.getElementById("abc").innerText += "<p>Draw called.</p>"+ ship.toString();
    update();
    ship.draw();
};

var update = function()
{
    for(var i = 0; i < ship.bulletCount;i++)
    {
        ship.bulletList[i].move();
        ship.bulletList[i].draw();
    }
};