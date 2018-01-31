declare var createjs: any;

export class Particle {
    private particle: any;

    get Particle(): any {
        return this.particle;
    }

    constructor(x : Number, y : Number) {
        this.particle = new createjs.Shape();
        this.particle.graphics.beginFill('lightblue').drawCircle(0, 0, 20);
        this.particle.x = x;
        this.particle.y = y;
    }


}