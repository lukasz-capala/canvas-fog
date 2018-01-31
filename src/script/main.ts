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

    constructor(particles_count : Number) {
        window.onload = () => {
            this.main_canvas = new Canvas('fog-canvas');
            this.particles = new Array<Particle>();
            this.particle_animator = new Animator();

            

            for (let i = 0; i < particles_count; i++) {
                let particle = new Particle(50, 50*(i+1));

                this.particles.push(particle);
                this.main_canvas.Stage.addChild(particle.Particle);
                let particle_tween = this.particle_animator.TweenTo(particle.Particle, window.innerWidth, particle.Particle.y);

                particle.Particle.addEventListener('click', () => {
                    console.log('over');
                    // this.particle_animator.TweenTo(particle.Particle, window.innerWidth, particle.Particle.y+50);
                    particle_tween.paused = true;
                    particle_tween = this.particle_animator.TweenTo(particle.Particle, window.innerWidth, particle.Particle.y - 75, 30000-particle_tween.rawPosition);

                });
            }

            createjs.Ticker.addEventListener('tick', (event: Event) => { this.Tick(event); });
            
        }
    }

    private Tick(event : Event) : void {
        this.main_canvas.Stage.update();
    }
}

var view: Main = new Main(10);