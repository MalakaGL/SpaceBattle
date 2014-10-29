/**
 * Created by lahiru on 10/28/2014.
 */

function SpaceShip(){
    this.bulletList = new Array();
    this.bulletCount = 0;

    this.draw = function()
    {
        context.clearRect(0,0,512,480);
        context.fillStyle = "#ff0000";
        context.strokeStyle = "#ff0000"
        context.lineWidth = 5;
        context.lineCap = "round";

        //document.getElementById("abc").innerText += "Draw called."+this.position.x;
        var x = this.position.x;
        var y = this.position.y;
        var radius = 15;
        var anticlockwise = false;

        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2, anticlockwise);
        context.fill();
        context.moveTo(x,y);
        context.lineTo(x+Math.sin(this.direction)*25,y+Math.cos(this.direction)*25);
        context.stroke();
        context.closePath();
    };

    this.move = function()
    {
            this.position.movePoint(this.speed,this.direction);
    }

    this.rotateLeft = function()
    {
        this.direction += (Math.PI / 360 * 5);
    }

    this.rotateRight = function()
    {
        this.direction -= (Math.PI / 360 * 5);
    };

    this.shoot = function()
    {
        this.bulletList[this.bulletCount++] = new Bullet(this.position.x+Math.sin(this.direction)*25,
            this.position.y+Math.cos(this.direction)*25);
        document.getElementById("abc").innerText += "Shoot called." + this.bulletCount;
    };
}

SpaceShip.prototype = new SpaceObjects();