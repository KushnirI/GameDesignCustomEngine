import {assets} from "../customPixi/assets";
import {stage} from "../customPixi/DisplayObject";
import {sprite} from "../customPixi/DisplayObject";
import {text} from "../customPixi/Text";
import {hitTestRectangle} from "../customPixi/collision";
import {rectangle} from "../customPixi/Rectangle";
import {group} from "../customPixi/Group";
import {randomInt, contain, keyboard} from "../customPixi/utils";


export class TreasureHunter {
    constructor(stage){
        this.gameScene = this.createGameScene(stage);
        this.gameOverScene = this.createGameOverScene(stage);

        this.scene = group(this.gameScene, this.gameOverScene);

        this.visible = true;

        this.addPlayerMovement();

    }

    createGameScene() {
        this.dungeon = sprite(assets["dungeon.png"]);
        this.dungeon.setPosition(0, 0);

        this.exit = sprite(assets["door.png"]);
        this.exit.setPosition(32, 0);

        this.player = sprite(assets["explorer.png"]);
        this.player.setPosition(60, stage.halfHeight);

        this.treasure = sprite(assets["treasure.png"]);
        this.treasure.setPosition(stage.width - 60, stage.halfHeight);

        let gameScene = group(this.dungeon, this.exit, this.player, this.treasure);

        let numberOfEnemies = 6,
            spacing = 48,
            xOffset = 150,
            speed = 2,
            direction = 1;

        this.enemies = [];

        for(let i = 0; i < numberOfEnemies; i++) {
            let enemy = sprite(assets["blob.png"]);
            let x = spacing * i + xOffset;
            let y = randomInt(0, stage.height - enemy.height);

            enemy.x = x;
            enemy.y = y;

            enemy.vy = speed * direction;

            direction *= -1;

            this.enemies.push(enemy);
            gameScene.addChild(enemy);
        }

        let outerBar = rectangle(128, 8, "black"),
            innerBar = rectangle(128, 8, "red");

        this.healthBar = group(outerBar, innerBar);
        this.healthBar.inner = innerBar;

        this.healthBar.x = stage.width - 164;
        this.healthBar.y = 4;

        gameScene.addChild(this.healthBar);

        return gameScene;
    }

    createGameOverScene() {
        this.message = text("Game Over!", "64px Futura", "black", 20, 20);
        this.message.x = 120;
        this.message.y = stage.height / 2 - 64;

        let gameOverScene = group(this.message);
        gameOverScene.visible = false;

        return gameOverScene;
    }

    addPlayerMovement() {
        this.upArrow = keyboard(38);

        this.upArrow.press = () =>{
            this.player.vy = -3;
        };

        this.upArrow.release = () => {
            if(this.downArrow.isUp){
                this.player.vy = 0;
            }
        };

        this.downArrow = keyboard(40);

        this.downArrow.press = () =>{
            this.player.vy = 3;
        };

        this.downArrow.release = () => {
            if(this.upArrow.isUp){
                this.player.vy = 0;
            }
        };

        this.leftArrow = keyboard(37);

        this.leftArrow.press = () =>{
            this.player.vx = -3;
        };

        this.leftArrow.release = () => {
            if(this.rightArrow.isUp){
                this.player.vx = 0;
            }
        };

        this.rightArrow = keyboard(39);

        this.rightArrow.press = () =>{
            this.player.vx = 3;
        };

        this.rightArrow.release = () => {
            if(this.leftArrow.isUp){
                this.player.vx = 0;
            }
        };
    }

    update() {
        contain(this.player, {x:32, y: 16, width: stage.width - 32, height: stage.height - 32});

        this.playerHit = false;
        this.enemies.forEach( enemy => {
            enemy.x += enemy.vx;
            enemy.y += enemy.vy;

            let enemyHitsEdges = contain(enemy, {x:32, y: 16, width: stage.width - 32, height: stage.height - 32});

            if(enemyHitsEdges) {
                enemy.vy *= -1;
            }


            if(hitTestRectangle(this.player, enemy)) {
                this.playerHit = true;
            }

        });

        if(this.playerHit) {
            this.player.alpha = 0.5;
            this.healthBar.inner.width -= 1;
        } else {
            this.player.alpha = 1;
        }

        if( hitTestRectangle(this.player, this.treasure)) {
            this.treasure.x = this.player.x + 8;
            this.treasure.y = this.player.y + 8;
        }

        if(hitTestRectangle(this.treasure, this.exit)) {
            this.gameScene.visible = false;
            this.gameOverScene.visible = true;
            this.message.content = "You won!";
        }

        if(this.healthBar.inner.width < 0) {
            this.gameScene.visible = false;
            this.gameOverScene.visible = true;
            this.message.content = "You lost!";
        }

        this.player.x += this.player.vx;
        this.player.y += this.player.vy;

        this.scene.visible = this.visible;

    }

}
