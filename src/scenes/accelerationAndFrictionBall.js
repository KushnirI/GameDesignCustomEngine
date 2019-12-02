import {group} from "../customPixi/Group";
import {canvas} from "../index";
import {circle} from "../customPixi/Circle";

export class AccelerationAndFrictionBall {
    constructor() {

        this.ball = circle(32,"gray", "black", 2, 160, 180);

        this.ball.vx = 0;
        this.ball.vy = 0;

        this.ball.accelerationX = 0.3;
        this.ball.accelerationY = -0.3;
        this.ball.frictionX = 1;
        this.ball.frictionY = 1;

        this.scene = group(this.ball);
        this.visible = true;
    }

    update(){
        this.ball.vx += this.ball.accelerationX;
        this.ball.vy += this.ball.accelerationY;

        this.ball.vx *= this.ball.frictionX;
        this.ball.vy *= this.ball.frictionY;

        this.ball.x += this.ball.vx;
        this.ball.y += this.ball.vy;

        if(this.ball.x < 0|| this.ball.x + this.ball.diameter > canvas.width) {

            this.ball.frictionX = 0.98;
            this.ball.frictionY = 0.98;

            this.ball.accelerationX = 0;
            this.ball.accelerationY = 0;

            this.ball.vx = -this.ball.vx;
        }

        if(this.ball.y < 0 || this.ball.y + this.ball.diameter > canvas.height) {

            this.ball.frictionX = 0.98;
            this.ball.frictionY = 0.98;

            this.ball.accelerationX = 0;
            this.ball.accelerationY = 0;

            this.ball.vy = -this.ball.vy;
        }

        this.scene.visible = this.visible;
    }
}