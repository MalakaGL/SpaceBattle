/**
 * Created by lahiru on 10/28/2014.
 */
var WIDTH = 1024;
var HEIGHT = 640;      // dimensions of the canvas object

function SpaceObjects() {
    this.position = new Point(WIDTH/2, HEIGHT/2);
    this.speed = 0;
    this.direction = 3.142;
    this.isAlive = true;
    this.radius = 0;

    this.moveObject = function () {
        this.position.movePoint(this.speed, this.direction);
    };

    this.destroy = function () {
        this.isAlive = false;
    };

    this.detectCollisions = function (objList, count) {
        if (!this.isAlive)
            return;
        for (var i = 0; i < count; i++) {
            var dist = this.position.getDistance(objList[i].position);
            if (objList[i].isAlive && dist < this.radius + objList[i].radius) {
                objList[i].destroy();
                this.destroy();
                return true;
            }
        }
    }
}