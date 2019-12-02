import {group} from "./Group";
import {sprite} from "./DisplayObject";
import {rectangle} from "./Rectangle";

export function wait(duration = 0) {
    let timer = resolve => {
        setTimeout(resolve, duration);
    };
    let promise = new Promise(timer);
    return promise;
}

export function frame(source, x, y, width, height) {
    let obj = {};
    obj.image = source;
    obj.x = x;
    obj.y = y;
    obj.width= width;
    obj.height = height;

    return obj;
}

export function frames (source, arrayOfPositions, width, height) {
    let obj = {};
    obj.image = source;
    obj.data = arrayOfPositions;
    obj.width= width;
    obj.height = height;
    return obj;
}

export function remove(...spritesToRemove) {
    spritesToRemove.forEach( sprite => {
        sprite.parent.removeChild(sprite);
    });
}

export function randomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// export let collision = contain(sprite, bounds, bounce, callbackFunction);
export function contain(sprite, bounds, bounce = false, callback = undefined) {
    let x = bounds.x,
        y = bounds.y,
        width = bounds.width,
        height = bounds.height;

    let collision;
    if(sprite.x < x) {
        if(bounce){
            sprite.vx *= -1;
        }
        if(sprite.mass){
            sprite.vx /= sprite.mass
        }
        sprite.x = x;
        collision = "left";
    }

    if(sprite.y < y) {
        if(bounce){
            sprite.vy *= -1;
        }
        if(sprite.mass){
            sprite.vy /= sprite.mass
        }
        sprite.y = y;
        collision = "top";
    }

    if(sprite.x + sprite.width > width) {
        if(bounce){
            sprite.vx *= -1;
        }
        if(sprite.mass){
            sprite.vx /= sprite.mass
        }
        sprite.x = width - sprite.width;
        collision = "right";
    }

    if(sprite.y + sprite.height > width) {
        if(bounce){
            sprite.vy *= -1;
        }
        if(sprite.mass){
            sprite.vy /= sprite.mass
        }
        sprite.y = height - sprite.height;
        collision = "bottom";
    }

    if(collision && callback){
        callback(collision);
    }

    return collision;
}

export function capturePreviousPositions(stage) {
    stage.children.forEach( sprite => {
        setPreviousPosition(sprite);
    })
}

function setPreviousPosition(sprite) {
    sprite.previousX = sprite.x;
    sprite.previousY = sprite.y;

    if(sprite.children && sprite.children.length > 0) {
        sprite.children.forEach( child => {
            setPreviousPosition(child)
        })
    }
}

export function keyboard(keyCode){
    let key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;

    key.downHandler = function (event) {
        if(event.keyCode === key.code) {
            if(key.isUp && key.press){
                key.press()
            }
            key.isDown = true;
            key.isUp = false;
        }
        event.preventDefault();
    };

    key.upHandler = function (event) {
        if(event.keyCode === key.code) {
            if(key.isDown && key.release){
                key.release();
            }
            key.isDown = false;
            key.isUp = true;
        }
        event.preventDefault();
    };

    window.addEventListener("keydown", key.downHandler.bind(key), false);
    window.addEventListener("keyup", key.upHandler.bind(key), false);

    return key;
}

export function makePointer(element, scale = 1) {
    let pointer = {
        element: element,
        scale: scale,

        _x: 0,
        _y: 0,
        dragSprite: null,
        dragOffsetX: 0,
        dragOffsetY: 0,

        get x() {
            return this._x/this.scale;
        },

        get y() {
            return this._y/this.scale;
        },

        get centerX() {
            return this.x;
        },

        get centerY() {
            return this.y;
        },

        get position() {
            return {x: this.x, y: this.y};
        },

        isDown: false,
        isUp: true,
        tap: undefined,

        moveHandler(event) {
            let element = event.target;

            this._x = (event.pageX - element.offsetLeft);
            this._y = (event.pageY - element.offsetTop);

            event.preventDefault();
        },

        touchmoveHandler(event) {
            let element = event.target;

            this._x = (event.targetTouches[0].pageX - element.offsetLeft);
            this._y = (event.targetTouches[0].pageY - element.offsetTop);

            event.preventDefault();
        },

        downHandler(event) {
            this.isDown = true;
            this.isUp = false;
            this.tapped = false;

            this.downTime = Date.now();
            if(this.press){
                this.press();
            }
            event.preventDefault();
        },

        touchstartHandler(event) {
            let element = event.target;
            this._x = event.targetTouches[0].pageX - element.offsetLeft;
            this._y = event.targetTouches[0].pageY - element.offsetTop;

            this.isDown = true;
            this.isUp = false;
            this.tapped = false;

            this.downTime = Date.now();
            if(this.press){
                this.press();
            }

            event.preventDefault();

        },

        upHandler(event) {
            this.elapsedTime = Math.abs(this.downTime - Date.now());

            if(this.elapsedTime <= 200 && this.tapped === false) {
                this.tapped = true;
                if(this.tap) {
                    this.tap();
                }
            }

            this.isUp = true;
            this.isDown = false;

            if(this.release){
                this.release();
            }

            event.preventDefault();
        },

        touchendHandler(event) {
            this.elapsedTime = Math.abs(this.downTime - Date.now());

            if(this.elapsedTime <= 200 && this.tapped === false) {
                this.tapped = true;
                if(this.tap) {
                    this.tap();
                }
            }


            this.isUp = true;
            this.isDown = false;

            if(this.release){
                this.release();
            }

            event.preventDefault();
        },

        hitTestSprite(sprite) {
            let hit = false;

            if(!sprite.circular) {
                let left = sprite.gx,
                    right = sprite.gx + sprite.width,
                    top = sprite.gy,
                    bottom = sprite.gy + sprite.height;

                hit = this.x > left && this.x < right && this.y > top && this.y < bottom;
            } else {
                let vx = this.x - (sprite.gx + sprite.radius),
                    vy = this.y - (sprite.gy + sprite.radius),
                    distance = Math.sqrt(vx**2 + vy**2);

                hit = distance < sprite.radius;
            }

            return hit;
        },

        updateDragAndDrop(draggableSprites) {
            if(this.isDown) {
                if(this.dragSprite === null) {
                    for(let i = draggableSprites.length - 1; i > -1; i-- ) {
                        let sprite = draggableSprites[i];

                        if(sprite.visible === false ||!checkParentVisibility(sprite)) {
                            continue;
                        }

                        if(this.hitTestSprite(sprite) && sprite.draggable) {
                            this.dragOffsetX = this.x - sprite.gx;
                            this.dragOffsetY = this.y - sprite.gy;
                            this.dragSprite = sprite;

                            let children = sprite.parent.children;
                            children.splice(children.indexOf(sprite), 1);
                            children.push(sprite);

                            draggableSprites.splice(draggableSprites.indexOf(sprite), 1);
                            draggableSprites.push(sprite);

                            break;
                        }
                    }
                } else {
                    this.dragSprite.x = this.x - this.dragOffsetX;
                    this.dragSprite.y = this.y - this.dragOffsetY;
                }
            }

            if(this.isUp) {
                this.dragSprite = null;
            }

            draggableSprites.some(sprite => {
               if(
                   this.hitTestSprite(sprite) &&
                   sprite.draggable &&
                   sprite.visible &&
                   checkParentVisibility(sprite)
               ) {
                   this.element.style.cursor = "pointer";
                   return true;
               } else {
                   this.element.style.cursor = "auto";
                   return false;
               }
            });
        }
    };

    element.addEventListener("mousemove", pointer.moveHandler.bind(pointer), false);
    element.addEventListener("mousedown", pointer.downHandler.bind(pointer), false);

    window.addEventListener("mouseup", pointer.upHandler.bind(pointer), false);
    window.addEventListener("touchend", pointer.touchendHandler.bind(pointer), false);

    element.addEventListener("touchmove", pointer.touchmoveHandler.bind(pointer), false);
    element.addEventListener("touchstart", pointer.touchstartHandler.bind(pointer), false);

    element.style.touchAction = "none";

    return pointer;
}

export function distance(s1, s2) {
    let vx = s2.centerX - s1.centerX;
    let vy = s2.centerY - s1.centerY;

    return Math.sqrt(vx**2 + vy**2);
}

export function followEase(follower, leader, speed) {
    let vx = leader.centerX - follower.centerX;
    let vy = leader.centerY - follower.centerY;
    let distance = Math.sqrt(vx**2 + vy**2);

    if(distance >= 1) {
        follower.x += vx * speed;
        follower.y += vy * speed;
    }
}

export function followConstant(follower, leader, speed) {
    let vx = leader.centerX - follower.centerX;
    let vy = leader.centerY - follower.centerY;
    let distance = Math.sqrt(vx**2 + vy**2);

    if(distance >= speed) {
        follower.x += (vx / distance) * speed;
        follower.y += (vy / distance) * speed;
    }
}

export function angle(s1, s2) {
    return Math.atan2(s2.centerY - s1.centerY, s2.centerX - s1.centerX)
}

export function rotateSprite(rotatingSprite, centerSprite, distance, angle) {
    rotatingSprite.x = centerSprite.centerX - rotatingSprite.parent.x +
        + (distance * Math.cos(angle)) - rotatingSprite.halfWidth;

    rotatingSprite.y = centerSprite.centerY - rotatingSprite.parent.y +
        + (distance * Math.sin(angle)) - rotatingSprite.halfWidth;
}

export function rotatePoint(pointX, pointY, distanceX, distanceY, angle) {
    let point = {};
    point.x = pointX + Math.cos(angle) * distanceX;
    point.y = pointY + Math.sin(angle) * distanceY;
    return point
}

export function checkParentVisibility(sprite){
    let visible = true;
    let current = sprite;
    while(current.parent){
        if(current.parent.visible === true) {
            current = current.parent;
        } else {
            visible = false;
            break;
        }
    }

    return visible;
}

export function shoot(shooter, angle, offsetFromCenter, bulletSpeed, bulletArray, bulletSprite) {
    let bullet = bulletSprite();

    bullet.x = shooter.centerX - bullet.halfWidth + (offsetFromCenter * Math.cos(angle));
    bullet.y = shooter.centerY - bullet.halfHeight + (offsetFromCenter * Math.sin(angle));

    bullet.vx = Math.cos(angle) * bulletSpeed;
    bullet.vy = Math.sin(angle) * bulletSpeed;

    bulletArray.push(bullet);
}

export function outsideBounds(sprite, bounds, extra = undefined) {
    let x = bounds.x,
        y = bounds.y,
        width = bounds.width,
        height = bounds.height;

    let collision;

    if(sprite.x < x - sprite.width) {
        collision = "left";
    }

    if(sprite.y < y - sprite.width) {
        collision = "top";
    }

    if(sprite.x > width) {
        collision = "right";
    }

    if(sprite.y > height) {
        collision = "bottom";
    }

    if(collision && extra) {
        extra();
    }

    return collision;
}

export function grid(
    columns = 0, rows = 0, cellWidth = 32, cellHeight = 32,
    centerCell = false, xOffset = 0, yOffset = 0,
    makeSprite = undefined,
    extra = undefined
) {
    let container = group();
    let createGrid = () => {
        let length = columns * rows;

        for(let i = 0; i < length; i++) {
            let x = (i % columns) * cellWidth;
            let y = Math.floor(i / columns) * cellHeight;

            let sprite = makeSprite();

            container.addChild(sprite);

            if(!centerCell) {
                sprite.x = x + xOffset;
                sprite.y = y + yOffset;
            } else {
                sprite.x = x + (cellWidth / 2) - sprite.halfWidth + xOffset;
                sprite.y = y + (cellHeight / 2) - sprite.halfHeight + yOffset;
            }

            if(extra) {
                extra();
            }
        }
    };

    createGrid();

    return container;
}

export function tilingSprite(width, height, source, x = 0, y = 0) {

    let tileWidth, tileHeight;

    if(source.frame) {
        tileWidth = source.frame.w;
        tileHeight = source.frame.h;
    } else {
        tileWidth = source.width;
        tileHeight = source.height;
    }

    let columns, rows;

    if (width >= tileWidth) {
        columns = Math.round(width / tileWidth) + 1;
    } else {
        columns = 2;
    }

    if (height >= tileHeight) {
        rows = Math.round(height / tileHeight) + 1;
    } else {
        rows = 2;
    }


    let tileGrid = grid(
        columns, rows, tileWidth, tileHeight, false, 0, 0,
        () => {

            let tile = sprite(source);
            return tile;
        }
    );

    tileGrid._tileX = 0;
    tileGrid._tileY = 0;

    let container = rectangle(width, height, "none", "none");
    container.x = x;
    container.y = y;

    container.mask = true;
    container.addChild(tileGrid);

    Object.defineProperties(container, {
        tileX: {
            get() {
                return tileGrid._tileX;
            },
            set(value) {

                tileGrid.children.forEach(child => {

                    let difference = value - tileGrid._tileX;

                    child.x += difference;

                    if (child.x > (columns - 1) * tileWidth) {
                        child.x = 0 - tileWidth + difference;
                    }

                    if (child.x < 0 - tileWidth - difference) {
                        child.x = (columns - 1) * tileWidth;
                    }
                });

                tileGrid._tileX = value;
            },
            enumerable: true, configurable: true
        },
        tileY: {
            get() {
                return tileGrid._tileY;
            },

            set(value) {
                tileGrid.children.forEach(child => {
                    let difference = value - tileGrid._tileY;
                    child.y += difference;
                    if (child.y > (rows - 1) * tileHeight) child.y = 0 - tileHeight + difference;
                    if (child.y < 0 - tileHeight - difference) child.y = (rows - 1) * tileHeight;
                });
                tileGrid._tileY = value;
            },
            enumerable: true, configurable: true
        }
    });
    return container;
}