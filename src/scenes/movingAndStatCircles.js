import {stage} from "../customPixi/DisplayObject";
import {circleCollision, hitTestPoint} from "../customPixi/collision";
import {group} from "../customPixi/Group";
import {grid, makePointer, randomInt, contain, distance,angle} from "../customPixi/utils";
import {canvas} from "../index";
import {line} from "../customPixi/Line";
import {circle} from "../customPixi/Circle";


export class MovingAndStatCircles {
    constructor() {
        this.pointer = makePointer(canvas);

        this.ball = circle(18, "red", "black", 1, 96, 25);

        this.ball.vx = randomInt(5,15);
        this.ball.vy = randomInt(5,15);

        this.ball.gravity = 0.3;
        this.ball.frictionX = 1;
        this.ball.frictionY = 0;
        this.ball.mass = 1.3;

        this.pegs = grid(
            10,9,48,48, true, 0, 0,
            () => {
                let peg = circle(randomInt(8, 32));
                let colors = ["#FFABAB", "#FFDAAB", "#DDFFAB", "#ABE4FF", "#D9ABFF"];

                peg.fillStyle = colors[randomInt(0,4)];
                return peg;
            }
        );
        this.pegs.setPosition(16, 48);

        this.sling = line("yellow", 4);
        this.sling.visible = false;

        this.capturedMarble = null;

        this.scene = group(this.pegs, this.sling, this.ball);
        this.visible = true;
    }

    update(){

        this.ball.vy += this.ball.gravity;
        this.ball.vx *= this.ball.frictionX;

        this.ball.x += this.ball.vx;
        this.ball.y += this.ball.vy;

        let collision = contain(this.ball, stage.localBounds, true);
        if (collision === "bottom") {
            this.ball.frictionX = 0.96;
        } else {
            this.ball.frictionX = 1;
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

        this.pegs.children.forEach( peg => {
            circleCollision(this.ball, peg, true, true)
        });

        this.scene.visible = this.visible;
    }
}