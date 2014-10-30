/**
 * Created by lahiru on 10/28/2014.
 */
var ROTATE_SPEED = 10;
var MAX_SPEED = 10;
var GUN_LEN = 25;

function SpaceShip() {
    this.bulletList = new Array();
    this.bulletCount = 0;
    this.radius = 15;

    this.draw = function () {
        if (!this.isAlive)
            return;
        context.fillStyle = "#ff0000";
        context.strokeStyle = "#ff0000"
        context.lineWidth = 5;
        context.lineCap = "round";

        var x = this.position.x;
        var y = this.position.y;
        var radius = this.radius;
        var anticlockwise = false;

        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2, anticlockwise);
        context.fill();
        context.moveTo(x, y);
        context.lineTo(x + Math.sin(this.direction) * GUN_LEN, y + Math.cos(this.direction) * GUN_LEN);
        context.stroke();
        context.closePath();
    };

    this.speedUp = function () {
        if (this.speed < MAX_SPEED) {
            this.speed++;
        }
    };

    this.speedDown = function () {
        if (this.speed > -10) {
            this.speed--;
        }
    };

    this.rotateLeft = function () {
        this.direction += (Math.PI / 360 * ROTATE_SPEED);
    };

    this.rotateRight = function () {
        this.direction -= (Math.PI / 360 * ROTATE_SPEED);
    };

    this.shoot = function () {
        this.bulletList[this.bulletCount++] = new Bullet(this.position.x + Math.sin(this.direction) * GUN_LEN,
            this.position.y + Math.cos(this.direction) * GUN_LEN, this.direction);
    };
}

SpaceShip.prototype = new SpaceObjects();