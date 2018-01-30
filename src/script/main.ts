import { Canvas } from "./Canvas";

class Main {
    main_canvas: Canvas;

    constructor() {
        this.main_canvas = new Canvas('fog-canvas');

        window.onload = () => {
            console.log('worlds');
            console.log(this.main_canvas.Stage);
            console.log('sample');
        }
    }
}

var view: Main = new Main();