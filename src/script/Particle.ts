declare var createjs: any;

export class Particle {
    private particle: any;
    private starting_y: Number;

    get Particle(): any {
        return this.particle;
    }

    get StartingY(): Number {
        return this.starting_y;
    }

    constructor(x : Number, y : Number) {
        this.particle = new createjs.Shape();
        this.particle.graphics.beginFill('lightblue').drawCircle(0, 0, 20);
        this.particle.x = x;
        this.particle.y = y;

        this.starting_y = y;
    }


}