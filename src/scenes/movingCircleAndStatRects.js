import {stage} from "../customPixi/DisplayObject";
import {circleRectangleCollision, hitTestPoint} from "../customPixi/collision";
import {group} from "../customPixi/Group";
import {grid, makePointer, randomInt, contain, distance,angle} from "../customPixi/utils";
import {canvas} from "../index";
import {line} from "../customPixi/Line";
import {circle} from "../customPixi/Circle";
import {rectangle} from "../customPixi/Rectangle";

export class MovingCircleAndStatRects {
    constructor() {
        this.pointer = makePointer(canvas);

        this.ball = circle(18, "red", "black", 1, 96, 25);

        this.ball.vx = randomInt(5,15);
        this.ball.vy = randomInt(5,15);

        this.ball.gravity = 0.3;
        this.ball.frictionX = 1;
        this.ball.frictionY = 0;
        this.ball.mass = 1.3;

        this.bricks = grid(
            6,5,80,80, true, 0, 0,
            () => {
                let peg = rectangle(randomInt(12, 48), randomInt(8, 32));
                let colors = ["#FFABAB", "#FFDAAB", "#DDFFAB", "#ABE4FF", "#D9ABFF"];

                peg.fillStyle = colors[randomInt(0,4)];
                return peg;
            }
        );
        this.bricks.setPosition(16, 48);

        this.sling = line("yellow", 4);
        this.sling.visible = false;

        this.capturedMarble = null;

        this.scene = group(this.bricks, this.sling, this.ball);
        this.visible = false;
    }

    update(){

        this.ball.vy += this.ball.gravity;
        this.ball.vx *= this.ball.frictionX;

        this.ball.x += this.ball.vx;
        this.ball.y += this.ball.vy * this.ball.frictionY;

        let collision = contain(this.ball, stage.localBounds, true);
        if (collision === "bottom" || collision === "top") {
            this.ball.frictionX = 0.7;
        } else {
            this.ball.frictionX = 1;
        }

        if(collision === "left" || collision === "right"){
            this.ball.frictionY = 0.7;
        } else  {
            this.ball.frictionY = 1;
        }

        if(this.capturedMarble !== null) {
            this.sling.visible = true;
            this.sling.ax = this.capturedMarble.centerX;
            this.sling.ay = this.capturedMarble.centerY;
            this.sling.bx = this.pointer.x;
            this.sling.by = this.pointer.y
        }

        if(this.pointer.isDown && this.capturedMarble === null) {
            if(hitTestPoint(this.pointer, this.ball)) {
                this.capturedMarble = this.ball;
                this.capturedMarble.vx = 0;
                this.capturedMarble.vy = 0;
            }
        }

        if(this.pointer.isUp) {
            this.sling.visible = false;

            if(this.capturedMarble !== null) {
                this.sling.length = distance(this.capturedMarble, this.pointer);
                this.sling.angle = angle(this.pointer, this.capturedMarble);

                let speed = 5;
                this.capturedMarble.vx = Math.cos(this.sling.angle) * this.sling.length / speed;
                this.capturedMarble.vy = Math.sin(this.sling.angle) * this.sling.length / speed;

                this.capturedMarble = null;
            }
        }

        this.bricks.children.forEach(brick => {
            circleRectangleCollision(this.ball, brick, true, true);
        });

        if(this.visible){
            if(!this.scene.visible){
                console.info(`push on the red circle then move mouse aside and release, to make it move`)
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }
}