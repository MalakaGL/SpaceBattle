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
        context.clearRect(0,0,512,480);
        context.fillStyle = "#ff0000";

        document.getElementById("abc").innerText += "Bullet Draw called."+this.position.x;
        document.getElementById("abc").innerText += "Bullet move called."+this.position.y;
        var x = this.position.x;
        var y = this.position.y;
        var radius = 5;
        var anticlockwise = false;

        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2, anticlockwise);
        context.fill();
        context.closePath();
    };
}