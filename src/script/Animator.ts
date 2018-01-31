declare var createjs: any;

export class Animator {

    public TweenTo(object : Object, _x: number, _y: number, time: number = 30000) : any {
        var tween : any = createjs.Tween.get(object).to({ x: _x, y: _y }, time, createjs.Ease.linear);

        return tween;
    }
    

}