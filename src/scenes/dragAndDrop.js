import {assets} from "../customPixi/assets";
import {group} from "../customPixi/Group";
import {draggableSprites} from "../customPixi/DisplayObject";
import {makePointer} from "../customPixi/utils";
import {canvas} from "../index";
import {sprite} from "../customPixi/DisplayObject";

export class DragAndDrop {
    constructor(stage) {
        this.pointer = makePointer(canvas);

        this.captain = sprite(assets["captain.png"]);
        stage.putCenter(this.captain, -64, -64);

        this.hulk = sprite(assets["hulk.png"]);
        stage.putCenter(this.hulk);

        this.ironMan = sprite(assets["ironMan.png"]);
        stage.putCenter(this.ironMan, 64, 64);

        this.addDraggable(this.captain, this.hulk, this.ironMan);
        this.scene = group(this.captain, this.hulk, this.ironMan);
        this.visible = true;
    }

    update(){
        this.pointer.updateDragAndDrop(draggableSprites);
        this.scene.visible = this.visible;
    }

    addDraggable(...sprites) {
        sprites.forEach(sprite => {
            sprite.draggable = true;
        })
    }
}