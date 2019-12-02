import {group} from "../customPixi/Group";
import {rotatePoint} from "../customPixi/utils";
import {line} from "../customPixi/Line";

export class RotateAroundPoint {
    constructor() {
        this.movingLine = line("black", 6, 84, 180, 360, 400);
        this.movingLine.angleA = 0;
        this.movingLine.angleB = 0;

        this.scene = group(this.movingLine);
        this.visible = true;
    }

    update(){
        this.movingLine.angleA += 0.03;
        let rotatingA = rotatePoint(84, 180, 45,45, this.movingLine.angleA);
        this.movingLine.ax = rotatingA.x;
        this.movingLine.ay = rotatingA.y;

        this.movingLine.angleB += 0.05;
        let rotatingB = rotatePoint(360, 400, 45,45, this.movingLine.angleB);
        this.movingLine.bx = rotatingB.x;
        this.movingLine.by = rotatingB.y;

        this.scene.visible = this.visible;
    }
}