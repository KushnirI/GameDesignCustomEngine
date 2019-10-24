import {group} from "../customPixi/Group";
import {contain, randomInt} from "../customPixi/utils";
import {circle} from "../customPixi/Circle";
import {stage} from "../customPixi/DisplayObject";

export class BallWithGravity {
    constructor() {

        this.ball = circle(32,"gray", "black", 2, 96, 128);
        this.ball.vx = randomInt(10, 20);
        this.ball.vy = -randomInt(10, 20);

        this.ball.gravity = 0.3;
        this.ball.frictionX = 1;
        this.ball.frictionY = 0;
        this.ball.mass = 1.3;

        this.scene = group(this.ball);
        this.visible = true;
    }

    update(){
        this.ball.vy += this.ball.gravity;
        this.ball.vx *= this.ball.frictionX;

        this.ball.x += this.ball.vx;
        this.ball.y += this.ball.vy;
        let collision = contain(this.ball, stage.localBounds, true);

        if(collision === "bottom") {
            this.ball.frictionX = 0.96;
        } else {
            this.ball.frictionX = 1;
        }

        this.scene.visible = this.visible;
    }

}