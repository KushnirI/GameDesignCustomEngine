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
        this.visible = false;
    }

    update(){
        canvas.style.cursor = "auto";
        this.ball.update(this.pointer, canvas);
        if (this.ball.state === "over" || this.ball.state === "down") {
            if(this.ball.parent !== undefined) {
                canvas.style.cursor = "pointer";
            }
        }

        if(this.visible){
            if(!this.scene.visible){
                console.info(`hit the circle to change it`)
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }
}