/**
 * Created by lahiru on 10/28/2014.
 */

var WIDTH = 1024;
var HEIGHT = 640;      // dimensions of the canvas object

function Comet(x, y, s, p, sh) {
    this.position = new Point(x, y);
    this.speed = 1;
    this.direction = s;
    this.radius = 20;
    this.points = p;
    this.shape = sh;

    this.draw = function () {
        if (this.position.x >= WIDTH)
            this.direction += Math.PI / 2;
        else if (this.position.x <= 0)
            this.direction += Math.PI / 2;
        if (this.position.y >= HEIGHT)
            this.direction += Math.PI / 2;
        else if (this.position.y <= 0)
            this.direction += Math.PI / 2;

        if (!this.isAlive)
            return;
        else {
            var x = this.position.x;
            var y = this.position.y;
            var radius = this.radius;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(x+p[0].x,y-p[0].y);
            switch(this.shape)
            {
                case 0:
                    this.shape0(x, y);
                    break;
                case 1:
                    this.shape1(x, y);
                    break;
                case 2:
                    this.shape2(x, y);
            }
            context.fill();
            context.closePath();
            context.beginPath();
            context.stroke();
            context.closePath();
        }
    }

    this.shape0 = function(x,y)
    {
        context.fillStyle = "#123456";
        context.bezierCurveTo(x,y, x,y-this.radius,x-p[1].x,y-p[1].y);
        context.bezierCurveTo(x,y, x-this.radius,y,x-p[2].x,y+p[2].y);
        context.bezierCurveTo(x,y, x,y+this.radius,x+p[3].x,y+p[3].y);
        context.bezierCurveTo(x,y, x+this.radius,y,x+p[0].x,y-p[0].y);
    }

    this.shape1 = function(x, y)
    {
        context.fillStyle = "#654321";
        context.lineTo(x-p[1].x,y-p[1].y);
        context.lineTo(x-p[2].x,y+p[2].y);
        context.lineTo(x+p[3].x,y+p[3].y);
        context.lineTo(x+p[0].x,y-p[0].y);
    }

    this.shape2 = function(x, y)
    {
        context.fillStyle = "#456123";
        context.arcTo(x+p[0].x,y-p[0].y, x-p[1].x, y-p[1].y, 15);
        context.arcTo(x-p[1].x,y-p[1].y, x-p[2].x, y+p[2].y, 15);
        context.arcTo(x-p[2].x,y+p[2].y, x+p[3].x, y+p[3].y, 15);
        context.arcTo(x+p[3].x,y+p[3].y, x+p[0].x, y-p[0].y, 15);
    }
}

Comet.generateComets = function (count) {
    var temp = new Array();
    while (count-- > 0) {
        var X = Math.random() * (WIDTH - 1) + 1;
        var Y = Math.random() * (HEIGHT - 1) + 1;
        var s = Math.random() * 2 * Math.PI;
        var points = [
            new Point(Math.random() * 10 + 10, Math.random() * 10 + 10),
            new Point(Math.random() * 10 + 10, Math.random() * 10 + 10),
            new Point(Math.random() * 10 + 10, Math.random() * 10 + 10),
            new Point(Math.random() * 10 + 10, Math.random() * 10 + 10)
        ];
        var sh = Math.floor(Math.random() * 3);
        temp[count] = new Comet(X, Y, s, points, sh);
    }
    return temp;
}

Comet.prototype = new SpaceObjects();