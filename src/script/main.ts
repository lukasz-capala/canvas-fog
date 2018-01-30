import { Canvas } from "./Canvas";

declare var createjs: any;

class Main {
    main_canvas: Canvas;

    constructor() {


        window.onload = () => {
            this.main_canvas = new Canvas('fog-canvas');
            console.log('worlds');
            console.log(this.main_canvas.Stage);
            console.log('sample');

            let circle : any = new createjs.Shape();
            circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
            circle.x = 100;
            circle.y = 100;


            this.main_canvas.Stage.addChild(circle);

            createjs.Ticker.addEventListener("tick", handleTick);
            let self = this;
            function handleTick(event: Event) {
                self.main_canvas.Stage.update();
            }


            circle.addEventListener('click', (event: any) => {
                console.log('yyy');
                event.target.color = 'Green';
                this.main_canvas.Stage.update();
            });
        }
    }
}

var view: Main = new Main();