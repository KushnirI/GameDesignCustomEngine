import {group} from "../customPixi/Group";
import {rotateSprite} from "../customPixi/utils";
import {circle} from "../customPixi/Circle";
import {rectangle} from "../customPixi/Rectangle";

export class RotateAroundSprite {
    constructor(stage) {
        this.box = rectangle(64, 64, "gray");
        stage.putCenter(this.box);

        this.ball = circle(64, "gray");
        this.box.putLeft(this.ball,-128);
        this.ball.angle = 0;

        this.scene = group(this.box, this.ball);
        this.visible = true;
    }

    update(){
        this.ball.angle += 0.05;
        rotateSprite(this.ball, this.box, 128, this.ball.angle);

        this.scene.visible = this.visible;
    }

}