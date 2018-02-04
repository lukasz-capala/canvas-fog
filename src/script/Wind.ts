import { Particle } from "./Particle";
import { Canvas } from "./Canvas";

export class Wind {
    particles: Array<Particle>;
    canvas: Canvas;
    old_x: number;
    old_y: number;

    constructor(particles: Array<Particle>, canvas: Canvas) {
        this.particles = particles;
        this.canvas = canvas;
        this.old_x = 0;
        this.old_y = 0;


        this.canvas.CanvasObject.addEventListener('mousemove', (event: MouseEvent) => {


                let current_x = event.clientX;
                let current_y = event.clientY;
                
                    Array.prototype.forEach.call(this.particles, (particle: Particle) => {
                        if(current_x >= particle.Particle.x-10
                            && current_x <= particle.Particle.x+particle.Particle.graphics.command.radius+10
                            && current_y >= particle.Particle.y-10
                            && current_y <= particle.Particle.y+particle.Particle.graphics.command.radius+10) {

                            particle.ForceXAmount = 10;
                            particle.ForceXSign = ((current_x - particle.Particle.x) > 0 ? 1 : -1);

                            particle.ForceYAmount = 10;
                            particle.ForceYSign = ((current_y - particle.Particle.y) > 0 ? 1 : -1);
                        
                                console.log(particle.ForceXSign);
                        }



                
                    });

                    this.old_x = event.clientX;
                    this.old_y = event.clientY;

        });
    }
}