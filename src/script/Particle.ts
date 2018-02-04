declare var createjs: any;

import { Canvas } from "./Canvas";

export class Particle {
    private particle: any;
    private starting_y: number;

    private force_x: any;
    private force_y: any;

    private gravity_y: number;

    get Particle(): any {
        return this.particle;
    }

    get StartingY(): number {
        return this.starting_y;
    }

    get ForceXAmount() : number {
        return this.force_x.amount;
    }

    get ForceXSign() : number {
        return this.force_x.sign;
    }

    get ForceYAmount() : number {
        return this.force_y.amount;
    }

    get ForceYSign() : number {
        return this.force_y.sign;
    }

    set ForceXAmount(amount: number) {
        this.force_x.amount = amount;
    }

    set ForceXSign(sign: number) {
        this.force_x.sign = sign;
    }

    set ForceYAmount(amount: number) {
        this.force_y.amount = amount;
    }

    set ForceYSign(sign: number) {
        this.force_y.sign = sign;
    }

    set GravityY(gravity: number) {
        this.gravity_y = gravity;
    }

    constructor(x : number, y : number, radius : number) {
        this.particle = new createjs.Shape();
        this.particle.graphics.beginFill('lightblue').drawCircle(x, y, radius);
        this.particle.cache(x-radius, y-radius, 2*radius, 2*radius);

        this.starting_y = y;

        this.force_x = {sign: 1, amount: 0};
        this.force_y = {sign: 1, amount: 0};

        this.gravity_y = 0;
        createjs.Ticker.addEventListener('tick', (event: Event) => { this.WatchPosition(event); });
    }

    private WatchPosition(event: Event) : void {
        this.particle.x += 1 + this.force_x.amount * this.force_x.sign;

        if (this.force_x.sign === 1 && this.force_x.amount > 0
            || this.force_x.sign === -1 && this.force_x.amount < 0)
            this.force_x.amount --;
        else
            this.force_x.amount = 0;

        this.particle.y += Math.sin(this.particle.x / 10) * 1.5 
                + this.force_y.amount * this.force_y.sign * Math.abs(Math.sin(this.particle.x)) 
                + (this.gravity_y / 10) * Math.abs(Math.sin(this.particle.x));

        if (this.force_y.sign === 1 && this.force_y.amount > 0
            || this.force_y.sign === -1 && this.force_y.amount < 0)
            this.force_y.amount --;
        else
            this.force_y.amount = 0;

        if (this.particle.y > this.starting_y)
            this.gravity_y = -10;
        else if (this.particle.y < this.starting_y)
            this.gravity_y = 10;
        else
            this.gravity_y = 0; 

            
        if(this.particle.x > window.innerWidth) {
            this.particle.x = -2 * this.particle.graphics.command.radius;

        }
    }
}