/**
 * Created by lahiru on 10/28/2014.
 */

var WIDTH = 1024;
var HEIGHT = 640;      // dimensions of the canvas object

function Point(x, y) {
    this.x = x;
    this.y = y;

    this.movePoint = function (speed, direction) {
        var X = this.x + speed * Math.sin(direction);
        var Y = this.y + speed * Math.cos(direction);

        if (X > WIDTH)
            this.x = WIDTH;
        else if (X < 0)
            this.x = 0;
        else
            this.x = X;
        if (Y > HEIGHT)
            this.y = HEIGHT;
        else if (Y < 0)
            this.y = 0;
        else
            this.y = Y;
    }

    this.getDistance = function (pos) {
        return Math.sqrt(Math.pow(this.x - pos.x, 2) + Math.pow(this.y - pos.y, 2));
    }
}