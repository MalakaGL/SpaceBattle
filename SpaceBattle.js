/**
 * Created by lahiru on 10/28/2014.
 */

var context;                            // content of the canvas
var WIDTH = 512, HEIGHT = 480;      // dimensions of the canvas object
var canvasMinX = 0, canvasMaxX;     // horizontal range of canvas/arena
var intervalId;                     // interval at which the canvas refresh
var keysDown = {};
var ship;

/*
 method to identify keys pressed.
 arg is an event "keysdown"
 output is adding the key code of the pressed key to the keysDown array
 */
addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

/*
 method to identify keys released
 arg is an event "keysup"
 output is deleting released key from keysDown array
 */
addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);

var init = function()
{
    ship = new SpaceShip(new Point(25,25), new Point(1,1));
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
    //document.getElementById("abc").innerText += "<p>Draw called.</p>"+ ship.direction;
    update();
    ship.draw(context);
};

var update = function()
{
    ship.move();
};