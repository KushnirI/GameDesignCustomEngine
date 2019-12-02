import {ScenesManager} from "./scenes/allScenes";

import {assets} from "./customPixi/assets";
import {makeCanvas} from "./customPixi/makeCanvas";
import {render} from "./customPixi/render";
import {stage} from "./customPixi/DisplayObject";
import {AccelerationAndFrictionBall} from "./scenes/accelerationAndFrictionBall";
import {BallWithGravity} from "./scenes/ballWithGravity";
import {ConstantSpeedFollowing} from "./scenes/constantSpeedFollowing";
import {RotateAroundSprite} from "./scenes/rotateAroundSprite";
import {RotateAroundPoint} from "./scenes/rotateAroundPoint";
import {Tank} from "./scenes/tank";
import {CreateButton} from "./scenes/createButton";
import {InteractiveSprite} from "./scenes/interactiveSprite";
import {DragAndDrop} from "./scenes/dragAndDrop";
import {TreasureHunter} from "./scenes/treasureHunter";
import {PointAndShapeCollision} from "./scenes/pointAndShapeCollision";
import {RectCollision} from "./scenes/rectCollision";
import {CircleCollision} from "./scenes/circleCollision";
import {CircleAndRectCollision} from "./scenes/circleAndRectCollision";
import {MovingCirclesCollision} from "./scenes/movingCirclesCollision";
import {MovingAndStatCircles} from "./scenes/movingAndStatCircles";
import {MovingCircleAndStatRects} from "./scenes/movingCircleAndStatRects";
import {RectanglePush} from "./scenes/rectanglePush";
import {ParticleEmitter} from "./scenes/particleEmitter";
import {FlappyFairy} from "./scenes/flappyFairy";
import {SetupMusic} from "./scenes/setupMusic";


export let {canvas, ctx} = makeCanvas(512, 512);

assets.load([
    "src/img/treasureHunter.json",
    "src/fonts/puzzler.otf",
    "src/img/marbles.png",
    "src/img/button.json",
    "src/fonts/puzzler.otf",
    "src/img/avengers.json",
    "src/img/flappyFairy.json"])
    .then(() => start());

const scenesConfig = [
    {label: "Acceleration and friction ball", id: "accelerationAndFrictionBall", constructor: AccelerationAndFrictionBall},
    {label: "Ball with gravity", id: "ballWithGravity", constructor: BallWithGravity},
    {label: "Constant speed following", id: "constantSpeedFollowing", constructor: ConstantSpeedFollowing},
    {label: "Rotate around a sprite", id: "rotateAroundSprite", constructor: RotateAroundSprite},
    {label: "Rotate around a point", id: "rotateAroundPoint", constructor: RotateAroundPoint},
    {label: "Create tank", id: "tank", constructor: Tank},
    {label: "Create button", id: "createButton", constructor: CreateButton},
    {label: "Interactive sprite", id: "interactiveSprite", constructor: InteractiveSprite},
    {label: "Drag and drop", id: "dragAndDrop", constructor: DragAndDrop},
    {label: "Treasure hunter", id: "treasureHunter", constructor: TreasureHunter},
    {label: "Collision between point and shape", id: "pointAndShapeCollision", constructor: PointAndShapeCollision},
    {label: "Collision between rectangles", id: "rectCollision", constructor: RectCollision},
    {label: "Rectangle push", id: "rectanglePush", constructor: RectanglePush},
    {label: "Collision between circles", id: "circleCollision", constructor: CircleCollision},
    {label: "Collision between circle and rect", id: "circleAndRectCollision", constructor: CircleAndRectCollision},
    {label: "Moving circles collision", id: "movingCirclesCollision", constructor: MovingCirclesCollision},
    {label: "Moving and stat circles collision", id: "movingAndStatCircles", constructor: MovingAndStatCircles},
    {label: "Moving and stat rectangles", id: "movingCircleAndStatRects", constructor: MovingCircleAndStatRects},
    {label: "Particle emitter", id: "particleEmitter", constructor: ParticleEmitter},
    {label: "Flappy fairy", id: "flappyFairy", constructor: FlappyFairy},
    {label: "Setup music", id: "setupMusic", constructor: SetupMusic}

];

//This `setup` function will run when the image has loaded
function start() {
    stage.width = canvas.width;
    stage.height = canvas.height;

    const scenesManager = new ScenesManager(stage, scenesConfig);
    const sceneSelector = document.getElementById("sceneSelect");

    sceneSelector.onchange = function (){
        const selectedScene = sceneSelector.value;

        scenesManager.hideAll();

        if(scenesManager[selectedScene]){
            scenesManager.showScene(selectedScene);
            state = scenesManager.getSceneUpdateFunc(selectedScene)
        } else {
            state = function state(){
                //stub, to be overridden
            }
        }
    };

    gameLoop();

    function state(){
        //stub, to be overridden
    }

    function gameLoop() {
        requestAnimationFrame(gameLoop);
        state();
        render(canvas, ctx)
    }

}
