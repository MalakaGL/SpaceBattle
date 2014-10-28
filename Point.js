/**
 * Created by lahiru on 10/28/2014.
 */

function Point(x, y){
    this.x = x;
    this.y = y;

    this.addPoint = function(otherPoint)
    {
        otherPoint = (typeof otherPoint !== "object") ? {} : otherPoint;
        this.x += otherPoint.x;
        this.y += otherPoint.y;
    }
}