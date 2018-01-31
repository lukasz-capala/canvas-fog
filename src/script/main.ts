declare var createjs: any;
declare var require: any;

require('../scss/main.scss');

import { Canvas } from "./Canvas";
import { Particle } from "./Particle";
import { Animator } from "./Animator";

class Main {
    main_canvas: Canvas;
    particles: Array<Particle>;
    particle_animator: Animator;

    test_y : number;
    temp_y : number;

    constructor(particles_count : Number) {
        window.onload = () => {
            this.main_canvas = new Canvas('fog-canvas');
            this.particles = new Array<Particle>();
            this.particle_animator = new Animator();
            this.test_y = 0;

            this.main_canvas.Stage.enableMouseOver();

            for (let i = 0; i < particles_count; i++) {
                let particle = new Particle(50, 150*(i+1));

                this.particles.push(particle);
                this.main_canvas.Stage.addChild(particle.Particle);
            //     let particle_tween = this.particle_animator.TweenTo(particle.Particle, window.innerWidth, particle.Particle.y);

            //     particle.Particle.addEventListener('click', () => {
            //         console.log('over');
            //         // this.particle_animator.TweenTo(particle.Particle, window.innerWidth, particle.Particle.y+50);
            //         particle_tween.paused = true;
            //         particle_tween = this.particle_animator.TweenTo(particle.Particle, window.innerWidth, particle.Particle.y - 475, particle_tween.duration-particle_tween.rawPosition);

            //     });

                particle.Particle.addEventListener('mouseout', (event: any) => {
                    this.test_y = event.stageY;
                    this.temp_y = particle.Particle.y;
                    console.log(event);
                    console.log(this.test_y);

                    console.log('test');
                });
             }
             
            createjs.Ticker.framerate = 60;
            createjs.Ticker.addEventListener('tick', (event: Event) => { this.Tick(event); });
            
        }
    }

    private Tick(event : Event) : void {
        Array.prototype.forEach.call(this.particles, (particle : Particle) => {
            particle.Particle.x += 1;

            if(this.temp_y > this.test_y && particle.Particle.y >= this.test_y)
                particle.Particle.y -= 12;
            else if(this.temp_y < this.test_y && particle.Particle.y <= this.test_y)
                particle.Particle.y += 12;

            if(particle.Particle.x > window.innerWidth) {
                particle.Particle.x = -2 * particle.Particle.graphics.command.radius;

            }
                
        });

        this.main_canvas.Stage.update();
    }
}

var view: Main = new Main(1);