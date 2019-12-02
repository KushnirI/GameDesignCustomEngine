import {text} from "../customPixi/Text";
import {hitTestPoint} from "../customPixi/collision";
import {group} from "../customPixi/Group";
import {draggableSprites} from "../customPixi/DisplayObject";
import {makePointer} from "../customPixi/utils";
import {canvas} from "../index";
import {circle} from "../customPixi/Circle";
import {rectangle} from "../customPixi/Rectangle";

export class PointAndShapeCollision {
    constructor(stage) {
        this.pointer = makePointer(canvas);

        this.box = rectangle(64, 64,"blue");
        stage.putCenter(this.box, -70, 0);

        this.ball = circle(64,"red");
        stage.putCenter(this.ball, 70, 0);

        this.message = text("", "12px puzzler", "black", 8, 8);

        this.scene = group(this.box, this.ball, this.message);
        this.visible = false;
    }

    update(){
        this.pointer.updateDragAndDrop(draggableSprites);

        if(hitTestPoint(this.pointer.position, this.ball)) {
            this.message.content = "Ball!"
        } else if(hitTestPoint(this.pointer.position, this.box)) {
            this.message.content = "Box!"
        } else {
            this.message.content = "No collision..."
        }

        if(this.visible){
            if(!this.scene.visible){
                console.info(`use mouse arrow to check for collision between mouse and item`)
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }
}