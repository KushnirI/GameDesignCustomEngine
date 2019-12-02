import {particles, particleEffect, emitter} from "../customPixi/particles";
import {canvas} from "../index";
import {frame, makePointer} from "../customPixi/utils";
import {group} from "../customPixi/Group";
import {sprite} from "../customPixi/DisplayObject";
import {assets} from "../customPixi/assets";

export class ParticleEmitter{
    constructor() {

        this.pointer = makePointer(canvas);

        this.particleStream = emitter(
            100,
            () => particleEffect(
                this.pointer.x, this.pointer.y,
                () => sprite(frame(assets["src/img/marbles.png"], 0, 64, 32, 32)),
                10,
                0.1,
                false,
                3.14, 6.28,
                16, 32,
                2, 5
            )
        );

        this.pointer.press = () => {
            if(this.scene.visible === true){
                this.particleStream.play();
            }
        };
        this.pointer.release = () => {
            if(this.scene.visible === true){
                this.particleStream.stop();
            }
        };

        this.scene = group(this.particleStream);
        this.visible = false;

    }

    update(){
        if(particles.length > 0) {
            for(let i = particles.length - 1; i >= 0; i--) {
                particles[i].update();
            }
        }

        if(this.visible){
            if(!this.scene.visible){
                console.info(`push mouse button inside the canvas`)
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }

}
