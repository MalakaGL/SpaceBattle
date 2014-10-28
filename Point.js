/**
 * Created by lahiru on 10/28/2014.
 */

function Point(x, y){
    this.x = x;
    this.y = y;

    this.movePoint = function(speed, direction)
    {
        //document.getElementById("abc").innerText += "Draw called."+this.y +"  " + speed + "  " + direction  ;
        var X = this.x + speed * Math.sin(direction);
        var Y = this.y + speed * Math.cos(direction);

        if( X > 512 )
            this.x = 512;
        else if ( X < 0 )
            this.x = 0;
        else
            this.x = X;
        if ( Y > 480 )
            this.y = 480;
        else if ( Y < 0 )
            this.y = 0;
        else
            this.y = Y;
    }

//    this.check = function(speed, direction){
//        var X = this.x + speed * Math.sin(direction);
//        var Y = this.y + speed * Math.cos(direction);
//        if( X < 0 || X > 512 || Y < 0 || Y > 480)
//        {
//            document.getElementById("abc").innerText += "Draw called." + Y + " " + X +"            ";
//            return false;
//        }
//        return true;
//    }
}