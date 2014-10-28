/**
 * Created by lahiru on 10/28/2014.
 */

function SpaceObjects(pos,spd) {
    pos = (typeof pos !== "Point") ? new Point(250,250) : pos;

    this.position;
    this.speed = spd;
    this.direction = 1;
    this.isAlive = true;

    this.move = function()
    {
        this.position = (typeof pos !== "Point") ? new Point(250,250) : this.position;
        this.position.addPoint(this.speed);
    }

    this.destroy = function()
    {
        this.isAlive = false;
    }

    this.draw = function(context)
    {
        context.fillStyle = "#ff0000";
        context.lineWidth = 3;

        //document.getElementById("abc").innerText += "Draw called."+this.position.x;
        var x = this.position.x;
        var y = this.position.y;
        var radius = 25;
        var anticlockwise = false;

        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2, anticlockwise);
        context.fill();
        context.closePath();
    }
}