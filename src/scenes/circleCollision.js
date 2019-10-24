import {text} from "../customPixi/Text";
import {hitTestCircle} from "../customPixi/collision";
import {group} from "../customPixi/Group";
import {draggableSprites} from "../customPixi/DisplayObject";
import {makePointer} from "../customPixi/utils";
import {canvas} from "../index";
import {circle} from "../customPixi/Circle";

export class CircleCollision {
    constructor(stage) {
        this.pointer = makePointer(canvas);

        this.blueBall = circle(64,"blue");
        this.blueBall.draggable = true;
        stage.putCenter(this.blueBall, -70, 0);

        this.redBall = circle(64,"red");
        this.redBall.draggable = true;
        stage.putCenter(this.redBall, 70, 0);

        this.message = text("", "12px puzzler", "black", 8, 8);

        this.scene = group(this.blueBall, this.redBall, this.message);
        this.visible = true;
    }

    update(){
        this.pointer.updateDragAndDrop(draggableSprites);

        if(hitTestCircle(this.blueBall, this.redBall)) {
            this.message.content = "Collision!"
        } else {
            this.message.content = "No collision..."
        }

        this.scene.visible = this.visible;
    }
}