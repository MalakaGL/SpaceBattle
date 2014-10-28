/**
 * Created by lahiru on 10/28/2014.
 */

function SpaceShip(){
    this.draw = function(context)
    {
        context.clearRect(0,0,512,480);
        context.fillStyle = "#ff0000";
        context.strokeStyle = "#ff0000"
        context.lineWidth = 5;

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
        if(38 in keysDown)
        {
            //document.getElementById("abc").innerText += "Draw called."+this.position.x;
            this.position.movePoint(this.speed,this.direction);
        }
        if ( 39 in keysDown )
        {
            this.direction += (Math.PI / 360 * 5);
        }
        if ( 37 in keysDown )
        {
            this.direction -= (Math.PI / 360 * 5);
        }
    };
}

SpaceShip.prototype = new SpaceObjects();