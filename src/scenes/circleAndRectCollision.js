import {text} from "../customPixi/Text";
import {hitTestCircleRectangle} from "../customPixi/collision";
import {group} from "../customPixi/Group";
import {draggableSprites} from "../customPixi/DisplayObject";
import {makePointer} from "../customPixi/utils";
import {canvas} from "../index";
import {circle} from "../customPixi/Circle";
import {rectangle} from "../customPixi/Rectangle";

export class CircleAndRectCollision {
    constructor(stage) {
        this.pointer = makePointer(canvas);

        this.ball = circle(64,"red");
        this.ball.draggable = true;
        stage.putCenter(this.ball, -70, 0);

        this.box = rectangle(64, 64,"blue");
        this.box.draggable = true;
        stage.putCenter(this.box, 70, 0);

        this.message = text("", "12px puzzler", "black", 8, 8);

        this.scene = group(this.ball, this.box, this.message);
        this.visible = false;
    }

    update(){
        this.pointer.updateDragAndDrop(draggableSprites);

        let collision = hitTestCircleRectangle(this.ball, this.box);

        if(collision) {
            this.message.content = collision;
        } else {
            this.message.content = "No collision..."
        }

        if(this.visible){
            if(!this.scene.visible){
                console.info(`use mouse button to drag items and to check for collision between them`)
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }
}