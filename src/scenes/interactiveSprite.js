import {group} from "../customPixi/Group";
import {makePointer, randomInt} from "../customPixi/utils";
import {canvas} from "../index";
import {circle} from "../customPixi/Circle";

export class InteractiveSprite {
    constructor(stage) {
        this.pointer = makePointer(canvas);

        this.ball = circle(128, "red", "blue", 16);
        stage.putCenter(this.ball);
        this.ball.interacrive = true;

        this.ball.press = () => {
            let colors = ["red", "blue", "yellow", "yellowGreen", "black", "orange"];

            this.ball.fillStyle = colors[randomInt(0, 5)];
            this.ball.strokeStyle = colors[randomInt(0, 5)];
        };

        this.scene = group(this.ball);
        this.visible = true;
    }

    update(){
        canvas.style.cursor = "auto";
        this.ball.update(this.pointer, canvas);
        if (this.ball.state === "over" || this.ball.state === "down") {
            if(this.ball.parent !== undefined) {
                canvas.style.cursor = "pointer";
            }
        }
        this.scene.visible = this.visible;
    }

}