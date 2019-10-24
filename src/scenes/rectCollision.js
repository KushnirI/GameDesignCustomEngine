import {text} from "../customPixi/Text";
import {hitTestRectangle} from "../customPixi/collision";
import {rectangle} from "../customPixi/Rectangle";
import {group} from "../customPixi/Group";
import {draggableSprites} from "../customPixi/DisplayObject";
import {makePointer} from "../customPixi/utils";
import {canvas} from "../index";

export class RectCollision {
    constructor(stage) {
        this.pointer = makePointer(canvas);

        this.blueBox = rectangle(64, 64,"blue");
        this.blueBox.draggable = true;
        stage.putCenter(this.blueBox, -70, 0);

        this.redBox = rectangle(64, 64, "red" );
        this.redBox.draggable = true;
        stage.putCenter(this.redBox, 70, 0);


        this.message = text("", "12px puzzler", "black", 8, 8);

        this.scene = group(this.blueBox, this.redBox, this.message);
        this.visible = true;
    }

    update(){
        this.pointer.updateDragAndDrop(draggableSprites);

        if(hitTestRectangle(this.blueBox, this.redBox)) {
            this.message.content = "Collision!"
        } else {
            this.message.content = "No collision..."
        }

        this.scene.visible = this.visible;
    }
}