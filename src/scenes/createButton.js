import {assets} from "../customPixi/assets";
import {group} from "../customPixi/Group";
import {makePointer} from "../customPixi/utils";
import {canvas} from "../index";
import {buttons, button} from "../customPixi/DisplayObject";
import {text} from "../customPixi/Text";

export class CreateButton {
    constructor(stage) {
        this.pointer = makePointer(canvas);

        let buttonFrames = [
            assets["up.png"],
            assets["over.png"],
            assets["down.png"],
        ];

        this.playButton = button(buttonFrames);
        this.playButton.interacrive = true;
        stage.putCenter(this.playButton);

        this.playButton.over = () => console.log("over");
        this.playButton.out = () => console.log("out");
        this.playButton.press = () => console.log("pressed");
        this.playButton.release = () => console.log("released");
        this.playButton.tap = () => console.log("tapped");

        this.stateMessage = text("", "18px puzzler", "black", 18, 12);
        this.actionMessage = text("", "18px puzzler", "black", 18, 36);

        this.scene = group(this.playButton, this.stateMessage, this.actionMessage);
        this.visible = true;
    }

    update(){
        if(buttons.length > 0) {
            canvas.style.cursor = "auto";

            buttons.forEach( button => {
                button.update(this.pointer, canvas);

                if(button.state === "over" || button.state === "down") {
                    if(button.parent !== undefined) {
                        canvas.style.cursor = "pointer"
                    }
                }
            });
        }

        this.stateMessage.content = `State: ${this.playButton.state}`;
        this.actionMessage.content = `Action: ${this.playButton.action}`;

        this.scene.visible = this.visible;
    }

}