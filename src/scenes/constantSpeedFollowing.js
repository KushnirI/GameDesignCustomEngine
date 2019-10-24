import {group} from "../customPixi/Group";
import {distance, followConstant, makePointer} from "../customPixi/utils";
import {canvas} from "../index";
import {circle} from "../customPixi/Circle";
import {line} from "../customPixi/Line";
import {text} from "../customPixi/Text";

export class ConstantSpeedFollowing {
    constructor(stage) {
        this.pointer = makePointer(canvas);

        this.message = text("", "12px puzzler", "black", 8, 8);
        this.c1 = circle(32, "gray");
        stage.putCenter(this.c1, -32, -32);

        this.c2 = circle(32, "gray");
        stage.putCenter(this.c2, 32, 32);

        this.connection = line("black", 2, this.c1.centerX, this.c1.centerY, this.c2.centerX, this.c2.centerY);


        this.scene = group(this.c1, this.c2, this.message, this.connection);
        this.visible = true;
    }

    update(){
        followConstant(this.c2, this.pointer, 3);

        this.connection.ax = this.c1.centerX;
        this.connection.ay = this.c1.centerY;
        this.connection.bx = this.c2.centerX;
        this.connection.by = this.c2.centerY;

        let distanceBetweenCircles = distance(this.c1, this.c2);

        this.message.content = `Distance :${Math.floor(distanceBetweenCircles)}`;

        this.scene.visible = this.visible;
    }
}

