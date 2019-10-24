export class DisplayObject {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;

        this.rotation = 0;
        this.alpha = 1;
        this.visible = true;
        this.scaleX = 1;
        this.scaleY = 1;
        this.pivotX = 0.5;
        this.pivotY = 0.5;

        this.vx = 0;
        this.vy = 0;

        this._layer = 0;
        this.parent = undefined;
        this.children = [];

        this.shadow = false;
        this.shadowColor = "rgba(100, 100, 100, 0.5)";
        this.shadowOffsetX = 3;
        this.shadowOffsetY = 3;
        this.shadowBlur = 3;

        this.blendMode = undefined;

        this.frames = [];
        this.loop = true;
        this._currentFrame = 0;
        this.playing = false;
        this._draggable = undefined;
        this._circular = false;
        this._interactive = true;


    }

    get gx() {
        if (this.parent) {
            return this.x + this.parent.gx;
        } else {
            return this.x;
        }
    }

    get gy() {
        if (this.parent) {
            return this.y + this.parent.gy;
        } else {
            return this.y;
        }
    }
    get layer() {
        return this._layer;
    }

    set layer(value) {
        this._layer  = value;
        if(this.parent) {
            this.parent.children.sort( (a, b) => a.layer - b.layer);
        }
    }

    addChild(sprite) {
        if(sprite.parent) {
            sprite.parent.removeChild(sprite)
        }
        sprite.parent = this;
        this.children.push(sprite);

    }

    removeChild (sprite) {
        if (sprite.parent === this) {
            this.children.splice(this.children.indexOf(sprite), 1);
        } else{
            throw new Error(`${sprite} is not a child of ${this}`);
        }
    }

    get halfWidth() {
        return this.width/2;
    }

    get halfHeight() {
        return this.height/2;
    }

    get centerX() {
        return this.x + this.halfWidth;
    }

    get centerY() {
        return this.y + this.halfHeight;
    }

    get position() {
        return {x: this.x, y: this.y};
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    get localBounds() {
        return {
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        };
    }

    get globalBounds() {
        return {
            x: this.gx,
            y: this.gy,
            width: this.gx + this.width,
            height: this.gy + this.height
        };
    }

    get empty() {
        return this.children.length === 0
    }

    putCenter(b, xOffset = 0, yOffset = 0) {
        let a = this;
        b.x = (a.x + a.halfWidth - b.halfWidth) + xOffset;
        b.y = (a.y + a.halfHeight - b.halfHeight) + yOffset;
    }

    putTop(b, xOffset = 0, yOffset = 0) {
        let a = this;
        b.x = (a.x + a.halfWidth - b.halfWidth) + xOffset;
        b.y = (a.y - b.height) + yOffset;
    }

    putRight(b, xOffset = 0, yOffset = 0) {
        let a = this;
        b.x = (a.x + a.width) + xOffset;
        b.y = (a.y + a.halfHeight - b.halfHeight) + yOffset;
    }

    putBottom(b, xOffset = 0, yOffset = 0) {
        let a = this;
        b.x = (a.x + a.halfWidth - b.halfWidth) + xOffset;
        b.y = (a.y + b.height) + yOffset;
    }

    putLeft(b, xOffset = 0, yOffset = 0) {
        let a = this;
        b.x = (a.x - b.width) + xOffset;
        b.y = (a.y + a.halfHeight - b.halfHeight) + yOffset;
    }

    swapChildren(child1, child2) {
        let index1 = this.children.indexOf(child1);
        let index2 = this.children.indexOf(child2);

        if(index1 !== -1 && index2 !== -1){
            child1.childIndex = child2;
            child2.childIndex = child1;

            this.children[index1] = child2;
            this.children[index2] = child1;
        } else {
            throw new Error(`Both objects must be a child of the caller ${this}`)
        }
    }

    add(...spritesToAdd){
        spritesToAdd.forEach( sprite => {
            this.addChild(sprite);
        })
    }

    remove(...spritesToRemove) {
        spritesToRemove.forEach( sprite => {
            this.removeChild(sprite);
        })
    }

    get currentFrame() {
        return this._currentFrame;
    }

    get circular() {
        return this._circular;
    }

    set circular(value) {
        if(value === true && this._circular === false) {
            Object.defineProperties(this, {
                diameter: {
                    get() {
                        return this.width;
                    },
                    set(value) {
                        this.width = value;
                        this.height = value;
                    },
                    enumerable: true,
                    configurable: true
                },
                radius : {
                    get() {
                        return this.halfWidth;
                    },

                    set(value) {
                        this.width = value * 2;
                        this.height = value * 2;
                    },
                    enumerable: true,
                    configurable: true
                }
            });

            this._circular = true;
        }

        if (value === false && this._circular === true) {
            delete this.diameter;
            delete this.radius;
            this._circular = false;
        }
    }

    get draggable() {
        return this._draggable;
    }

    set draggable(value) {
        if(value === true) {
            draggableSprites.push(this);
            this._draggable = true;
        }

        if(value === false) {
            draggableSprites.splice(draggableSprites.indexOf(this), 1);
        }
    }

    set interacrive(value) {
        if(value === true){
            makeInteractive(this);
            buttons.push(this);
            this._interactive = true;
        }
        if(value === false) {
            buttons.splice(buttons.indexOf(this), 1);
            this._interactive = false;
        }
    }
}

function makeInteractive(o) {
    o.press = o.press || undefined;
    o.release = o.release || undefined;
    o.over = o.over || undefined;
    o.out = o.out || undefined;
    o.tap = o.tap || undefined;

    o.state = "up";
    o.action = "";
    o.pressed = false;
    o.hoverOver = false;

    o.update = (pointer, canvas) => {
        let hit = pointer.hitTestSprite(o);

        if(pointer.isUp) {
            o.state = "up";

            if(o instanceof Button){
                o.gotoAndStop(0)
            }
        }

        if (hit) {
            o.state = "over";
            if(o.frames && o.frames.length === 3 && o instanceof Button) {
                o.gotoAndStop(1);
            }
            if(pointer.isDown){
                o.state = "down";
                if(o instanceof Button) {
                    if(o.frames.length === 3) {
                        o.gotoAndStop(2);
                    } else {
                        o.gotoAndStop(1);
                    }
                }
            }

        }

        if(o.state === "down") {
            if(!o.pressed) {
                if(o.press){
                    o.press()
                }
                o.pressed = true;
                o.action = "pressed";
            }
        }

        if(o.state === "over") {

            if(o.pressed) {
                if(o.release){
                    o.release();
                }
                o.pressed = false;
                o.action = "released";

                if(pointer.tapped && o.tap){
                    o.tap()
                }
            }

            if(!o.hoverOver) {
                if (o.over) {
                    o.over();
                }
                o.hoverOver = true;
            }
        }

        if(o.state === "up") {
            if(o.pressed) {
                if(o.release) {
                    o.release();
                }
                o.pressed = false;
                o.action = "released"
            }

            if(o.hoverOver) {
                if(o.out) {
                    o.out()
                }
                o.hoverOver = false;
            }
        }
    };
}

class Sprite extends DisplayObject {
    constructor( source, x, y) {
        super();
        Object.assign(this, {x, y});
        if(source instanceof Image) {
            this.createFromImage(source);
        } else if (source.frame) {
            this.createFromAtlas(source);

        } else if(source.image && !source.data) {
            this.createFromTileset(source);

        } else if(source.image && source.data) {
            this.createFromTilesetFrames(source);

        } else if (source instanceof Array){
            if(source[0] && source[0].source) {
                this.createFromAtlasFrames(source)

            } else if (source[0] instanceof Image){
                this.createFromImages(source);
            } else {
                throw new Error(`The image sources in ${source} are not recognized`);
            }

        } else {
            throw new Error(`The image source ${source} is not recognized`);
        }
    }

    createFromImage(source) {
        if(!(source instanceof Image)){
            throw new Error(`${source} is not an image object`);
        } else {
            this.source = source;
            this.sourceX = 0;
            this.sourceY = 0;
            this.width = source.width;
            this.height = source.height;
            this.sourceWidth = source.width;
            this.sourceHeight = source.height;
        }
    }

    createFromAtlas(source) {
        this.tilesetFrame = source;
        this.source = this.tilesetFrame.source;
        this.sourceX = this.tilesetFrame.frame.x;
        this.sourceY = this.tilesetFrame.frame.y;
        this.width = this.tilesetFrame.frame.w;
        this.height = this.tilesetFrame.frame.h;
        this.sourceWidth = this.tilesetFrame.frame.w;
        this.sourceHeight = this.tilesetFrame.frame.h;
    }

    createFromTileset(source) {
        if(!(source.image instanceof Image)){
            throw new Error(`${source.image} is not an image object`);
        } else {
            this.source = source.image;
            this.sourceX = source.x;
            this.sourceY = source.y;
            this.width = source.width;
            this.height = source.height;
            this.sourceWidth = source.width;
            this.sourceHeight = source.height;
        }
    }

    createFromTilesetFrames(source) {
        if(!(source.image instanceof Image)){
            throw new Error(`${source.image} is not an image object`);

        } else {
            this.source = source.image;
            this.frames = source.data;

            this.sourceX = this.frames[0][0];
            this.sourceY = this.frames[0][1];
            this.width = source.width;
            this.height = source.height;
            this.sourceWidth = source.width;
            this.sourceHeight = source.height;
        }
    }

    createFromAtlasFrames(source) {
        this.frames = source;
        this.source = source[0].source;
        this.sourceX = source[0].frame.x;
        this.sourceY = source[0].frame.y;
        this.width = source[0].frame.w;
        this.height = source[0].frame.h;
        this.sourceWidth = source[0].frame.w;
        this.sourceHeight = source[0].frame.h;
    }

    createFromImages(source) {
        this.frames = source;
        this.source = source[0];
        this.sourceX = 0;
        this.sourceY = 0;
        this.width = source[0].width;
        this.height = source[0].height;
        this.sourceWidth = source[0].width;
        this.sourceHeight = source[0].height;
    }

    gotoAndStop(frameNumber) {
        if(this.frames.length > 0 && frameNumber < this.frames.length){
            if(this.frames[0] instanceof Array) {
                this.sourceX = this.frames[frameNumber][0];
                this.sourceY = this.frames[frameNumber][1];
            } else if( this.frames[frameNumber].frame) {
                this.sourceX = this.frames[frameNumber].frame.x;
                this.sourceY = this.frames[frameNumber].frame.y;
                this.width = this.frames[frameNumber].frame.w;
                this.height = this.frames[frameNumber].frame.h;
                this.sourceWidth = this.frames[frameNumber].frame.w;
                this.sourceHeight = this.frames[frameNumber].frame.h;
            } else {
                this.source = this.frames[frameNumber];
                this.sourceX = 0;
                this.sourceY = 0;
                this.width = this.source.width;
                this.height = this.source.height;
                this.sourceWidth = this.source.width;
                this.sourceHeight = this.source.height;
            }
            this._currentFrame = frameNumber;
        } else {
            throw new Error(`Frame number ${frameNumber} does not exist`);
        }
    }

    render(ctx) {
        ctx.drawImage(
            this.source,
            this.sourceX, this.sourceY,
            this.sourceWidth, this.sourceHeight,
            -this.width * this.pivotX,
            -this.height * this.pivotY,
            this.width, this.height
        );
    }
}

export function sprite(source, x, y) {
    let sprite = new Sprite(source, x, y);
    stage.addChild(sprite);
    return sprite;
}

class Button extends Sprite{
    constructor(source, x = 0, y = 0) {
        super(source, x, y);
        this.interacrive = true;
    }
}

export function button(source, x, y) {
    let sprite = new Button(source, x, y);
    stage.addChild(sprite);
    return sprite;
}

export let stage = new DisplayObject();

export let buttons = [];
export let draggableSprites = [];
