/**
 * Created by lahiru on 10/28/2014.
 */

function SpaceObjects() {
    this.position = new Point(250,250);
    this.speed = 5;
    this.direction = 0;
    this.isAlive = true;

    this.move = function()
    {
        this.position.movePoint(this.speed,this.direction);
        if(this.position.x > 512 || this.position.y > 480)
            this.destroy();
    };

    this.destroy = function()
    {
        this.isAlive = false;
    };

    this.draw = function(){

    };
}