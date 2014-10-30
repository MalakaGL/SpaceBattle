/**
 * Created by lahiru on 10/28/2014.
 */

var WIDTH = 1024;
var HEIGHT = 640;      // dimensions of the canvas object

function Comet(x, y, s) {
    this.position = new Point(x, y);
    this.speed = 1;
    this.direction = s;
    this.radius = 15;

    this.draw = function () {
        if (this.position.x >= WIDTH)
            this.direction += Math.PI / 2;
        else if (this.position.x <= 0)
            this.direction += Math.PI / 2;
        if (this.position.y >= HEIGHT)
            this.direction += Math.PI / 2;
        else if (this.position.y <= 0)
            this.direction += Math.PI / 2;

        if (!this.isAlive)
            return;
        else {
            context.fillStyle = "#00ff00";

            var x = this.position.x;
            var y = this.position.y;
            var radius = this.radius;
            var anticlockwise = false;

            context.beginPath();
            context.arc(x, y, radius, 0, Math.PI * 2, anticlockwise);
            context.fill();
            context.closePath();
        }
    }
}

Comet.generateComets = function (count) {
    var temp = new Array();
    while (count-- > 0) {
        var X = Math.random() * (WIDTH - 1) + 1;
        var Y = Math.random() * (HEIGHT - 1) + 1;
        var s = Math.random() * 2 * Math.PI;
        temp[count] = new Comet(X, Y, s);

    }
    return temp;
}

Comet.prototype = new SpaceObjects();