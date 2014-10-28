/**
 * Created by lahiru on 10/28/2014.
 */

function SpaceObjects(pos, spd) {
    this.position = pos;
    this.speed = spd;
    this.direction = 0;
    this.isAlive = true;

    this.move = function()
    {
        this.position.add(spd);
    }

    this.destroy = function()
    {
        this.isAlive = false;
    }

    this.draw = function(context)
    {
        document.getElementById("abc").innerText = "Draw called.";
        context.fillStyle = "#ff0000";
        context.lineWidth = 3;

        var x = 50;
        var y = 50;
        var radius = 25;
        var anticlockwise = false;

        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2, anticlockwise);
        context.fill();
        context.closePath();
    }
}