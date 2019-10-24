import {assets} from "../customPixi/assets";
import {stage} from "../customPixi/DisplayObject";
import {hitTestPoint, movingCircleCollision} from "../customPixi/collision";
import {group} from "../customPixi/Group";
import {grid, makePointer, randomInt, frames, contain, distance,angle} from "../customPixi/utils";
import {canvas} from "../index";
import {sprite} from "../customPixi/DisplayObject";
import {line} from "../customPixi/Line";


export class MovingCirclesCollision {
    constructor() {
        this.pointer = makePointer(canvas);

        this.marbles = grid(
            7, 7, 64, 64, true, 0, 0,
            () => {
                let marbleFrames = frames(
                    assets["src/img/marbles.png"],
                    [
                        [0, 0], [32, 0], [64, 0],
                        [0, 32], [32, 32], [64, 32],
                    ],
                    32, 32
                );

                let marble = sprite(marbleFrames);
                marble.gotoAndStop(randomInt(0,5));
                marble.circular = true;

                let sizes = [8, 12, 16, 20, 24, 28, 32];
                marble.diameter = sizes[randomInt(0, 6)];

                marble.vx = randomInt(-10, 10);
                marble.vy = randomInt(-10, 10);

                marble.frictionX = 0.99;
                marble.frictionY = 0.99;
                marble.mass = 0.75 + (marble.diameter / 32);

                return marble;
            }
        );

        this.sling = line("yellow", 4);
        this.sling.visible = false;

        this.capturedMarble = null;

        this.scene = group(this.marbles, this.sling);
        this.visible = true;
    }

    update(){

        if(this.capturedMarble !== null) {
            this.sling.visible = true;
            this.sling.ax = this.capturedMarble.centerX;
            this.sling.ay = this.capturedMarble.centerY;
            this.sling.bx = this.pointer.x;
            this.sling.by = this.pointer.y
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

        this.marbles.children.forEach( marble => {
            if(this.pointer.isDown && this.capturedMarble === null) {
                if(hitTestPoint(this.pointer, marble)) {
                    this.capturedMarble = marble;
                    this.capturedMarble.vx = 0;
                    this.capturedMarble.vy = 0;
                }
            }

            marble.vx *= marble.frictionX;
            marble.vy *= marble.frictionY;

            marble.x += marble.vx;
            marble.y += marble.vy;

            contain(marble, stage.localBounds, true);
        });

        for(let i = 0; i < this.marbles.children.length; i++) {
            let c1 = this.marbles.children[i];

            for(let j = i + 1; j < this.marbles.children.length; j++){
                let c2 = this.marbles.children[j];
                movingCircleCollision(c1, c2);
            }
        }

        this.scene.visible = this.visible;
    }
}