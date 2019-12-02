import {keyboard} from "../customPixi/utils";
import {text} from "../customPixi/Text";
import {group} from "../customPixi/Group";

let actx = new AudioContext();
let xhr = new XMLHttpRequest();
let soundBuffer;
let volumeNode = actx.createGain();
let panNode = actx.createStereoPanner();

export class SoundsTest {
    constructor() {
        xhr.open("GET", "src/sounds/111.mp3", true);
        xhr.responseType = "arraybuffer";
        xhr.send();
        xhr.addEventListener("load", this.loadHandler.bind(this), false);

        this.button1 = keyboard(49);
        this.button1.press = this.keyDown.bind(this);
        this.visible = false;
        this.soundBuffer = soundBuffer;
        this.volumeNode = volumeNode;
        this.panNode = panNode;

        this.message = text("Hit 1 for sound test", "16px puzzler", "black", 12, 12);
        this.scene = group(this.message);

    }

    update() {
        this.scene.visible = this.visible
    }

    loadHandler() {
        actx.decodeAudioData(xhr.response,
            buffer => {
                this.soundBuffer = buffer;
            },
            error => {
                throw new Error("Audio could not be decoded: " + error);
            }
        );
    }

    keyDown() {
        if (this.soundBuffer && this.visible) {
            let soundNode = actx.createBufferSource();
            soundNode.buffer = this.soundBuffer;
            soundNode.connect(this.volumeNode);
            this.volumeNode.connect(this.panNode);
            this.panNode.connect(actx.destination);
            this.volumeNode.gain.value = 0.5;
            this.panNode.pan.value = -0.5;
            soundNode.loop = true;

            soundNode.start(actx.currentTime);
        }
    }

}



