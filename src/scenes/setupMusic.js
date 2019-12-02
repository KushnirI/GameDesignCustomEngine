import {keyboard} from "../customPixi/utils";
import {text} from "../customPixi/Text";
import {group} from "../customPixi/Group";
import {makeSound} from "../customPixi/Sound";

export class SetupMusic {
    constructor() {

        this.music = makeSound("src/sounds/111.mp3", this.setupMusic.bind(this));

        this.msgA = text("a - start music", "16px puzzler", "black", 12, 12);
        this.msgB = text("b - pause music", "16px puzzler", "black", 12, 30);
        this.msgC = text("c - restart music", "16px puzzler", "black", 12, 48);
        this.msgD = text("d - start point changed", "16px puzzler", "black", 12, 66);
        this.msgE = text("e - restart music 2x speed", "16px puzzler", "black", 12, 84);
        this.scene = group(this.msgA, this.msgB, this.msgC, this.msgD, this.msgE);
        this.visible = false;
        this.music.playbackRate = 1;
    }

    update() {
        if(this.visible){
            if(!this.scene.visible){
                console.info(`use hints from the canvas`)
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
            this.music.pause();
        }
    }

    setupMusic() {
        this.music.loop = true;
        this.music.pan = -0.8;
        this.music.volume = 0.3;
        let a = keyboard(65),
            b = keyboard(66),
            c = keyboard(67),
            d = keyboard(68),
            e = keyboard(69);

        a.press = () => {
            if (!this.music.playing && this.visible) {
                this.music.playbackRate = 1;
                this.music.play();
            }
        };

        b.press = () => {
            if(this.visible){
                this.music.pause();
            }
        };

        c.press = () => {
            if(this.visible){
                this.music.playbackRate = 1;
                this.music.restart();
            }
        };

        d.press = () => {
            if(this.visible){
                this.music.playbackRate = 1;
                this.music.playFrom(13);
            }
        };

        e.press = () => {
            if(this.visible){
                this.music.playbackRate = 2;
                this.music.restart();
            }
        };
    }
}
