/**
 * Created by lahiru on 10/28/2014.
 */

function Bullet(x,y) {
    this.position = new Point(x,y);
}

Bullet.prototype = new SpaceObjects();