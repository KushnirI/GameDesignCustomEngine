import {DisplayObject, stage} from "./DisplayObject";

class Circle extends DisplayObject {
    constructor(
        diameter = 32,
        fillStyle = "gray",
        strokeStyle = "none",
        lineWidth = 0,
        x = 0,
        y = 0
    ){
        super();
        this.circular = true;
        Object.assign(this, {diameter, fillStyle, strokeStyle, lineWidth, x, y});

        this.mask = false;
    }

    render(ctx) {
        ctx.strokeStyle = this.strokeStyle;
        ctx.lineWidth = this.lineWidth;
        ctx.fillStyle = this.fillStyle;
        ctx.beginPath();

        ctx.arc(
            this.radius + ( -this.diameter * this.pivotX),
            this.radius + ( -this.diameter * this.pivotX),
            this.radius, 0, 2*Math.PI, false
        );
        if(this.strokeStyle !== "none"){
            ctx.stroke();
        }

        if(this.fillStyle !== "none"){
            ctx.fill();
        }

        if(this.mask && this.mask === true){
            ctx.clip()
        }
    }
}

export function circle(diameter, fillStyle, strokeStyle, lineWidth, x, y) {
    let sprite = new Circle(diameter, fillStyle, strokeStyle, lineWidth, x, y);
    stage.addChild(sprite);
    return sprite;
}