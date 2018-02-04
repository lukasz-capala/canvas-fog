declare var createjs: any;
declare var require: any;

require('../scss/main.scss');

import { Canvas } from "./Canvas";
import { Particle } from "./Particle";
import { Wind } from "./Wind";

class Main {
    main_canvas: Canvas;
    particles: Array<Particle>;
    wind: Wind;

    constructor(particles_count : number) {
        window.onload = () => {
            this.main_canvas = new Canvas('fog-canvas');
            this.particles = new Array<Particle>();

            this.main_canvas.Stage.enableMouseOver(100);

            for (let i = 0, j = 1; i < Math.ceil(particles_count/10); j++) {
                let particle = new Particle(50*j, 10*(i+1), 10);

                this.particles.push(particle);
                this.main_canvas.Stage.addChild(particle.Particle);
                
                if(j%10 === 0) {
                    j = 0;
                    i++;
                }
                    
             }
             
            this.wind = new Wind(this.particles, this.main_canvas);
        }
    }
}

var view: Main = new Main(100);