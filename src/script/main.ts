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

    force_x: number;
    force_x_sign: number;
    force_y: number;
    force_y_sign: number;
    gravity_y: number;

    constructor(particles_count : Number) {
        window.onload = () => {
            this.main_canvas = new Canvas('fog-canvas');
            this.particles = new Array<Particle>();
            this.particle_animator = new Animator();

            this.force_x = 0;
            this.force_x_sign = 1;
            this.force_y = 0;
            this.force_y_sign = 1;

            this.gravity_y = 0;

            this.main_canvas.Stage.enableMouseOver(100);

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
                    this.force_x = (event.stageX - particle.Particle.x) / 5;
                    this.force_x_sign = (this.force_x > 0 ? 1 : -1);
                    this.force_y = (event.stageY - particle.Particle.y) / 5;
                    this.force_y_sign = (this.force_y > 0 ? 1 : -1);

                });
             }
             
            createjs.Ticker.framerate = 60;
            createjs.Ticker.addEventListener('tick', (event: Event) => { this.Tick(event); });
            
        }
    }

    private Tick(event : Event) : void {
        Array.prototype.forEach.call(this.particles, (particle: Particle) => {
            particle.Particle.x += 1 + this.force_x;

            if (this.force_x_sign === 1 && this.force_x > 0
                || this.force_x_sign === -1 && this.force_x < 0)
                this.force_x -= this.force_x_sign;
            else
                this.force_x = 0;

            particle.Particle.y += Math.sin(particle.Particle.x / 10) * 1.5 + this.force_y * Math.abs(Math.sin(particle.Particle.x)) + (this.gravity_y / 10) * Math.abs(Math.sin(particle.Particle.x));

            if (this.force_y_sign === 1 && this.force_y > 0
                || this.force_y_sign === -1 && this.force_y < 0)
                this.force_y -= this.force_y_sign;
            else
                this.force_y = 0;

            if (particle.Particle.y > particle.StartingY)
                this.gravity_y = -10;
            else if (particle.Particle.y < particle.StartingY)
                this.gravity_y = 10;
            else
                this.gravity_y = 0; 
                
            
            //if (this.temp_x > this.test_x && particle.Particle.x >= this.test_x)
            //    particle.Particle.x -= 15 / Math.log(particle.Particle.x);
            //else if (this.temp_x < this.test_x && particle.Particle.x <= this.test_x)
            //    particle.Particle.x += 15 / Math.log(particle.Particle.x);

            //if(this.temp_y > this.test_y && particle.Particle.y >= this.test_y)
            //    particle.Particle.y -= 15 / Math.log(particle.Particle.y);
            //else if (this.temp_y < this.test_y && particle.Particle.y <= this.test_y)
            //    particle.Particle.y += 15 / Math.log(particle.Particle.y);

            if(particle.Particle.x > window.innerWidth) {
                particle.Particle.x = -2 * particle.Particle.graphics.command.radius;

            }
                
        });

        this.main_canvas.Stage.update();
    }
}

var view: Main = new Main(2);