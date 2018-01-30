declare var createjs: any;

export class Canvas {
    private stage: any;

    get Stage(): any {
        return this.stage;
    }

    constructor(id: string) {
        this.stage = new createjs.Stage(id);
    }

}