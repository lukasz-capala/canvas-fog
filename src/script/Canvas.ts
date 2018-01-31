declare var createjs: any;

export class Canvas {
    private stage: any;
    private canvas: HTMLCanvasElement;

    get Stage(): any {
        return this.stage;
    }

    constructor(id: string) {
        this.stage = new createjs.Stage(id);
        this.canvas = <HTMLCanvasElement>document.getElementById(id);

        window.addEventListener('resize', (event: Event) => { this.Resize(event); });
        this.Resize();
    }

    private Resize(event?: Event): void {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.stage.update();
    }
}