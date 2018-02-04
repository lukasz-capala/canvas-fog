declare var createjs: any;

export class Canvas {
    private stage: any;
    private canvas: HTMLCanvasElement;

    get Stage(): any {
        return this.stage;
    }

    get CanvasObject() : HTMLCanvasElement {
        return this.canvas;
    }

    constructor(id: string) {
        this.stage = new createjs.Stage(id);
        this.canvas = <HTMLCanvasElement>document.getElementById(id);

        window.addEventListener('resize', (event: Event) => { this.Resize(event); });
        this.Resize();

        createjs.Ticker.framerate = 60;
        createjs.Ticker.addEventListener('tick', (event: Event) => { this.Tick(event); });
    }

    private Resize(event?: Event): void {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.stage.update();
    }

    private Tick(event : Event) : void {
        this.stage.update();
    }

}