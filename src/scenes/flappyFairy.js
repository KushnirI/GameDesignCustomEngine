import {particles, particleEffect, emitter} from "../customPixi/particles";
import {canvas} from "../index";
import {contain, makePointer, randomInt, tilingSprite, wait} from "../customPixi/utils";
import {group} from "../customPixi/Group";
import {sprite} from "../customPixi/DisplayObject";
import {assets} from "../customPixi/assets";
import {hitTestRectangle} from "../customPixi/collision";

export class FlappyFairy {
    constructor(stage) {

        this.pointer = makePointer(canvas);
        this.sky = tilingSprite(canvas.width, canvas.height, assets["sky.png"]);

        this.blocks = group();
        this.createPillars();
        this.fairy = this.createFairyFrames();

        this.dustFrames = [
            assets["pink.png"],
            assets["yellow.png"],
            assets["green.png"],
            assets["violet.png"]
        ];

        this.dust = this.createFairyDust(this.dustFrames);

        this.pointer.tap = () => {
            this.fairy.vy += 1.5;
        };

        this.scene = group(this.sky, this.blocks, this.fairy, this.dust);
        this.stage = stage;
        this.visible = true;
    }

    update(){
        if(particles.length > 0) {
            for(let i = particles.length - 1; i >= 0; i--) {
                particles[i].update();
            }
        }

        if(this.visible){
            if(!this.scene.visible){
                console.info(`use mouse button to make FlappyFairy fly up`)
            }
            this.scene.visible = true;
            this.play(this.stage)
        } else {
            this.scene.visible = false
        }
    }

    createPillars () {
        let gapSize = 4;
        let numberOfPillars = 15;
        for(let i = 0; i < numberOfPillars; i++) {
            let startGapNumber = randomInt(0,8 - gapSize);
            if(i > 0 && i % 5 === 0) {
                gapSize -= 1;
            }

            for(let j = 0; j < 8; j++) {
                if (j < startGapNumber || j > startGapNumber + gapSize - 1) {
                    let block = sprite(assets["greenBlock.png"]);
                    this.blocks.addChild(block);

                    block.x = (i * 384) + 512;
                    block.y = j * 64;
                }
            }

            if (i === numberOfPillars - 1) {
                this.finish = sprite(assets["finish.png"]);
                this.blocks.addChild(this.finish);
                this.finish.x = (i * 384) + 896;
                this.finish.y = 192;
            }
        }
    }

    createFairyFrames () {
        let fairlyFrames = [
            assets["0.png"],
            assets["1.png"],
            assets["2.png"]
        ];

        let fairy = sprite(fairlyFrames);
        fairy.fps = 24;
        fairy.setPosition(132, 32);
        fairy.vy = 0;
        fairy.oldVy = 0;

        return fairy;
    }

    createFairyDust(dustFrames) {
        return emitter(
            300,
            () => particleEffect(
                this.fairy.x + 8, this.fairy.y + this.fairy.halfHeight + 8,
                () => sprite(dustFrames),
                3, 0, true,
                2.4, 3.6,
                12,18,
                1,2,
                0.005, 0.01,
                0.005, 0.01,
                0.05, 0.1
            )
        );
    }

    play(stage){
        this.sky.tileX -= 1;

        if (this.finish.gx > 80) {
            this.blocks.x -= 2;
        }

        this.fairy.vy += -0.05;
        this.fairy.y -= this.fairy.vy;

        if(this.fairy.vy > this.fairy.oldVy){
            if(!this.fairy.playing) {
                this.fairy.play();
                if(this.fairy.visible && this.visible && !this.dust.playing) {
                    this.dust.play();
                }
            }
        }

        if(this.fairy.vy < 0 && this.fairy.oldVy > 0) {
            if (this.fairy.playing) {
                this.fairy.stop();
                this.fairy.show(0);
                if(this.dust.playing) {
                    this.dust.stop();
                }
            }
        }

        this.fairy.oldVy = this.fairy.vy;

        let fairyVsStage = contain(this.fairy, stage.localBounds);
        if (fairyVsStage === "bottom" || fairyVsStage === "top") {
            this.fairy.vy = 0;
        }

        let fairyVsBlock = this.blocks.children.some(block => {
            return hitTestRectangle(this.fairy, block, true) ;
        });

        if(fairyVsBlock && this.fairy.visible) {
            this.fairy.visible = false;

            particleEffect(
                this.fairy.centerX, this.fairy.centerY,
                () => sprite(this.dustFrames),
                20,
                0,
                false,
                0, 6.28,
                16, 32,
                1, 3
            );

            this.dust.stop();
            wait(3000).then(() => this.reset());
        }
    }

    reset() {
        this.fairy.visible = true;
        this.fairy.y = 32;
        if(this.visible){
            this.dust.play();
        }
        this.blocks.x = 0;
    }
}
