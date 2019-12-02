import {group} from "../customPixi/Group";
import {keyboard, outsideBounds, shoot} from "../customPixi/utils";
import {stage} from "../customPixi/DisplayObject";
import {text} from "../customPixi/Text";
import {rectangle} from "../customPixi/Rectangle";
import {line} from "../customPixi/Line";
import {circle} from "../customPixi/Circle";

export class Tank {
    constructor(stage) {
        this.tank = this.createTank();
        stage.putCenter(this.tank);

        this.bullets = [];
        this.message = text("Shoot the wall", "16px puzzler", "black", 12, 12);
        this.angleMessage = text("", "16px puzzler", "black", 12, 36);
        this.scene = group(this.tank, this.message, this.angleMessage, this.bullets);
        this.visible = false;
    }

    update(){
        this.bullets = this.bullets.filter( bullet => {
            bullet.x += bullet.vx;
            bullet.y += bullet.vy;

            let collision = outsideBounds(bullet, stage.localBounds);

            if(collision) {
                this.message.content = `Hit the ${collision}`;
                stage.remove(bullet);

                return false;
            }

            return true;
        });


        this.tank.rotation += this.tank.rotationSpeed;

        if(this.tank.moveForward) {
            this.tank.speed += 0.1;
        } else {
            this.tank.speed *= this.tank.friction;
        }
        this.tank.accelerationX = this.tank.speed * Math.cos(this.tank.rotation);
        this.tank.accelerationY = this.tank.speed * Math.sin(this.tank.rotation);

        this.tank.vx = this.tank.accelerationX;
        this.tank.vy = this.tank.accelerationY;

        this.tank.x += this.tank.vx;
        this.tank.y += this.tank.vy;

        this.angleMessage.content = `Angle: ${Math.floor(this.tank.rotation * 10)/10}`;

        if(this.visible){
            if(!this.scene.visible){
                console.info(`use keyboard arrows to move and "space" to shoot`)
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }

    createTank () {
        let box = rectangle(32,32, "gray", "black", 2);
        let turret = line("red", 4,0,0,32,0);
        turret.setPosition(16, 16);

        let tank = group(box, turret);

        tank.vx = 0;
        tank.vy = 0;
        tank.accelerationX = 0.05;
        tank.accelerationY = 0.05;

        tank.rotationSpeed = 0;
        tank.moveForward = false;
        tank.friction = 0.96;
        tank.speed = 0;

        let leftArrow = keyboard(37),
            rightArrow = keyboard(39),
            upArrow = keyboard(38),
            space = keyboard(32);

        leftArrow.press = () => {
            tank.rotationSpeed = -0.1;
        };
        leftArrow.release = () => {
            if(!rightArrow.isDown){
                tank.rotationSpeed = 0;
            }
        };

        rightArrow.press = () => {
            tank.rotationSpeed = 0.1;
        };
        rightArrow.release = () => {
            if(!leftArrow.isDown){
                tank.rotationSpeed = 0;
            }
        };

        upArrow.press = () => {
            tank.moveForward = true;
        };

        upArrow.release = () => {
            tank.moveForward = false;
        };

        space.press = () => {
            shoot(tank, tank.rotation, 32, 7, this.bullets, () => circle(8, "red"));
        };

        return tank;
    }

}