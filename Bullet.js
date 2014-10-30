/**
 * Created by lahiru on 10/28/2014.
 */
var WIDTH = 1024;
var HEIGHT = 640;      // dimensions of the canvas object
var BULLET_SIZE = 5;

function Bullet(x, y, dir) {
    this.position = new Point(x, y);
    this.speed = 10;
    this.direction = dir;
    this.radius = BULLET_SIZE;

    this.draw = function () {
        if (this.position.x >= WIDTH || this.position.y >= HEIGHT
            || this.position.x <= 0 || this.position.y <= 0)
            this.destroy();
        if (!this.isAlive)
            return;
        else {
            context.fillStyle = "#0000ff";

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

Bullet.prototype = new SpaceObjects();