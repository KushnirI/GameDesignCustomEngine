import {text} from "../customPixi/Text";
import {rectangleCollision} from "../customPixi/collision";
import {rectangle} from "../customPixi/Rectangle";
import {group} from "../customPixi/Group";
import {draggableSprites} from "../customPixi/DisplayObject";
import {makePointer} from "../customPixi/utils";
import {canvas} from "../index";

export class  RectanglePush{
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
        this.visible = false;
    }

    update(){
        this.pointer.updateDragAndDrop(draggableSprites);

        let collision = rectangleCollision(this.blueBox, this.redBox);
        if(collision) {
            this.message.content = `Collision ${collision}`
        } else {
            this.message.content = "No collision..."
        }

        if(this.visible){
            if(!this.scene.visible){
                console.info(`use mouse to drag the red box and push the blue one`)
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }
}