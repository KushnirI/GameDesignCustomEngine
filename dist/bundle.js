/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/customPixi/Circle.js":
/*!**********************************!*\
  !*** ./src/customPixi/Circle.js ***!
  \**********************************/
/*! exports provided: circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circle", function() { return circle; });
/* harmony import */ var _DisplayObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayObject */ "./src/customPixi/DisplayObject.js");


class Circle extends _DisplayObject__WEBPACK_IMPORTED_MODULE_0__["DisplayObject"] {
    constructor(diameter = 32, fillStyle = "gray", strokeStyle = "none", lineWidth = 0, x = 0, y = 0) {
        super();
        this.circular = true;
        Object.assign(this, { diameter, fillStyle, strokeStyle, lineWidth, x, y });

        this.mask = false;
    }

    render(ctx) {
        ctx.strokeStyle = this.strokeStyle;
        ctx.lineWidth = this.lineWidth;
        ctx.fillStyle = this.fillStyle;
        ctx.beginPath();

        ctx.arc(this.radius + -this.diameter * this.pivotX, this.radius + -this.diameter * this.pivotX, this.radius, 0, 2 * Math.PI, false);
        if (this.strokeStyle !== "none") {
            ctx.stroke();
        }

        if (this.fillStyle !== "none") {
            ctx.fill();
        }

        if (this.mask && this.mask === true) {
            ctx.clip();
        }
    }
}

function circle(diameter, fillStyle, strokeStyle, lineWidth, x, y) {
    let sprite = new Circle(diameter, fillStyle, strokeStyle, lineWidth, x, y);
    _DisplayObject__WEBPACK_IMPORTED_MODULE_0__["stage"].addChild(sprite);
    return sprite;
}

/***/ }),

/***/ "./src/customPixi/DisplayObject.js":
/*!*****************************************!*\
  !*** ./src/customPixi/DisplayObject.js ***!
  \*****************************************/
/*! exports provided: DisplayObject, addStatePlayer, sprite, button, stage, buttons, draggableSprites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayObject", function() { return DisplayObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStatePlayer", function() { return addStatePlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sprite", function() { return sprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "button", function() { return button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stage", function() { return stage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttons", function() { return buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draggableSprites", function() { return draggableSprites; });
class DisplayObject {
    constructor() {
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
        this._layer = value;
        if (this.parent) {
            this.parent.children.sort((a, b) => a.layer - b.layer);
        }
    }

    addChild(sprite) {
        if (sprite.parent) {
            sprite.parent.removeChild(sprite);
        }
        sprite.parent = this;
        this.children.push(sprite);
    }

    removeChild(sprite) {
        if (sprite.parent === this) {
            this.children.splice(this.children.indexOf(sprite), 1);
        } else {
            throw new Error(`${sprite} is not a child of ${this}`);
        }
    }

    get halfWidth() {
        return this.width / 2;
    }

    get halfHeight() {
        return this.height / 2;
    }

    get centerX() {
        return this.x + this.halfWidth;
    }

    get centerY() {
        return this.y + this.halfHeight;
    }

    get position() {
        return { x: this.x, y: this.y };
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
        return this.children.length === 0;
    }

    putCenter(b, xOffset = 0, yOffset = 0) {
        let a = this;
        b.x = a.x + a.halfWidth - b.halfWidth + xOffset;
        b.y = a.y + a.halfHeight - b.halfHeight + yOffset;
    }

    putTop(b, xOffset = 0, yOffset = 0) {
        let a = this;
        b.x = a.x + a.halfWidth - b.halfWidth + xOffset;
        b.y = a.y - b.height + yOffset;
    }

    putRight(b, xOffset = 0, yOffset = 0) {
        let a = this;
        b.x = a.x + a.width + xOffset;
        b.y = a.y + a.halfHeight - b.halfHeight + yOffset;
    }

    putBottom(b, xOffset = 0, yOffset = 0) {
        let a = this;
        b.x = a.x + a.halfWidth - b.halfWidth + xOffset;
        b.y = a.y + b.height + yOffset;
    }

    putLeft(b, xOffset = 0, yOffset = 0) {
        let a = this;
        b.x = a.x - b.width + xOffset;
        b.y = a.y + a.halfHeight - b.halfHeight + yOffset;
    }

    swapChildren(child1, child2) {
        let index1 = this.children.indexOf(child1);
        let index2 = this.children.indexOf(child2);

        if (index1 !== -1 && index2 !== -1) {
            child1.childIndex = child2;
            child2.childIndex = child1;

            this.children[index1] = child2;
            this.children[index2] = child1;
        } else {
            throw new Error(`Both objects must be a child of the caller ${this}`);
        }
    }

    add(...spritesToAdd) {
        spritesToAdd.forEach(sprite => {
            this.addChild(sprite);
        });
    }

    remove(...spritesToRemove) {
        spritesToRemove.forEach(sprite => {
            this.removeChild(sprite);
        });
    }

    get currentFrame() {
        return this._currentFrame;
    }

    get circular() {
        return this._circular;
    }

    set circular(value) {
        if (value === true && this._circular === false) {
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
                radius: {
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
        if (value === true) {
            draggableSprites.push(this);
            this._draggable = true;
        }

        if (value === false) {
            draggableSprites.splice(draggableSprites.indexOf(this), 1);
        }
    }

    set interacrive(value) {
        if (value === true) {
            makeInteractive(this);
            buttons.push(this);
            this._interactive = true;
        }
        if (value === false) {
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

        if (pointer.isUp) {
            o.state = "up";

            if (o instanceof Button) {
                o.gotoAndStop(0);
            }
        }

        if (hit) {
            o.state = "over";
            if (o.frames && o.frames.length === 3 && o instanceof Button) {
                o.gotoAndStop(1);
            }
            if (pointer.isDown) {
                o.state = "down";
                if (o instanceof Button) {
                    if (o.frames.length === 3) {
                        o.gotoAndStop(2);
                    } else {
                        o.gotoAndStop(1);
                    }
                }
            }
        }

        if (o.state === "down") {
            if (!o.pressed) {
                if (o.press) {
                    o.press();
                }
                o.pressed = true;
                o.action = "pressed";
            }
        }

        if (o.state === "over") {

            if (o.pressed) {
                if (o.release) {
                    o.release();
                }
                o.pressed = false;
                o.action = "released";

                if (pointer.tapped && o.tap) {
                    o.tap();
                }
            }

            if (!o.hoverOver) {
                if (o.over) {
                    o.over();
                }
                o.hoverOver = true;
            }
        }

        if (o.state === "up") {
            if (o.pressed) {
                if (o.release) {
                    o.release();
                }
                o.pressed = false;
                o.action = "released";
            }

            if (o.hoverOver) {
                if (o.out) {
                    o.out();
                }
                o.hoverOver = false;
            }
        }
    };
}

class Sprite extends DisplayObject {
    constructor(source, x, y) {
        super();
        Object.assign(this, { x, y });
        if (source instanceof Image) {
            this.createFromImage(source);
        } else if (source.frame) {
            this.createFromAtlas(source);
        } else if (source.image && !source.data) {
            this.createFromTileset(source);
        } else if (source.image && source.data) {
            this.createFromTilesetFrames(source);
        } else if (source instanceof Array) {
            if (source[0] && source[0].source) {
                this.createFromAtlasFrames(source);
            } else if (source[0] instanceof Image) {
                this.createFromImages(source);
            } else {
                throw new Error(`The image sources in ${source} are not recognized`);
            }
        } else {
            throw new Error(`The image source ${source} is not recognized`);
        }
    }

    createFromImage(source) {
        if (!(source instanceof Image)) {
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
        if (!(source.image instanceof Image)) {
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
        if (!(source.image instanceof Image)) {
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
        if (this.frames.length > 0 && frameNumber < this.frames.length) {
            if (this.frames[0] instanceof Array) {
                this.sourceX = this.frames[frameNumber][0];
                this.sourceY = this.frames[frameNumber][1];
            } else if (this.frames[frameNumber].frame) {
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
        ctx.drawImage(this.source, this.sourceX, this.sourceY, this.sourceWidth, this.sourceHeight, -this.width * this.pivotX, -this.height * this.pivotY, this.width, this.height);
    }
}

function addStatePlayer(sprite) {
    let frameCounter = 0,
        numberOfFrames = 0,
        startFrame = 0,
        endFrame = 0,
        timerInterval = undefined;
    function show(frameNumber) {
        reset();
        sprite.gotoAndStop(frameNumber);
    }
    function play() {
        playSequence([0, sprite.frames.length - 1]);
    }
    function stop() {
        reset();
        sprite.gotoAndStop(sprite.currentFrame);
    }
    function playSequence(sequenceArray) {
        reset();
        startFrame = sequenceArray[0];
        endFrame = sequenceArray[1];
        numberOfFrames = endFrame - startFrame;

        if (startFrame === 0) {
            numberOfFrames += 1;
            frameCounter += 1;
        }

        if (numberOfFrames === 1) {
            numberOfFrames = 2;
            frameCounter += 1;
        }

        if (!sprite.fps) sprite.fps = 12;
        let frameRate = 1000 / sprite.fps;
        sprite.gotoAndStop(startFrame);

        if (!sprite.playing) {
            timerInterval = setInterval(advanceFrame.bind(this), frameRate);
            sprite.playing = true;
        }
    }

    function advanceFrame() {
        if (frameCounter < numberOfFrames) {
            sprite.gotoAndStop(sprite.currentFrame + 1);
            frameCounter += 1;
        } else {
            if (sprite.loop) {
                sprite.gotoAndStop(startFrame);
                frameCounter = 1;
            }
        }
    }
    function reset() {

        if (timerInterval !== undefined && sprite.playing === true) {
            sprite.playing = false;
            frameCounter = 0;
            startFrame = 0;
            endFrame = 0;
            numberOfFrames = 0;
            clearInterval(timerInterval);
        }
    }
    sprite.show = show;
    sprite.play = play;
    sprite.stop = stop;
    sprite.playSequence = playSequence;
}

function sprite(source, x, y) {
    let sprite = new Sprite(source, x, y);
    if (sprite.frames.length > 0) addStatePlayer(sprite);
    stage.addChild(sprite);
    return sprite;
}

class Button extends Sprite {
    constructor(source, x = 0, y = 0) {
        super(source, x, y);
        this.interacrive = true;
    }
}

function button(source, x, y) {
    let sprite = new Button(source, x, y);
    stage.addChild(sprite);
    return sprite;
}

let stage = new DisplayObject();

let buttons = [];
let draggableSprites = [];

/***/ }),

/***/ "./src/customPixi/Group.js":
/*!*********************************!*\
  !*** ./src/customPixi/Group.js ***!
  \*********************************/
/*! exports provided: group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group", function() { return group; });
/* harmony import */ var _DisplayObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayObject */ "./src/customPixi/DisplayObject.js");


class Group extends _DisplayObject__WEBPACK_IMPORTED_MODULE_0__["DisplayObject"] {
    constructor(...spritesToGroup) {
        super();
        spritesToGroup.forEach(sprite => this.addChild(sprite));
    }

    addChild(sprite) {
        super.addChild(sprite);
        this.calculateSize();
    }

    removeChild(sprite) {
        if (sprite.parent === this) {
            this.children.splice(this.children.indexOf(sprite), 1);
            this.calculateSize();
        } else {
            throw new Error(`${sprite} is not a child of ${this}`);
        }
    }

    calculateSize() {
        if (this.children.length > 0) {
            this._newWidth = 0;
            this._newHeight = 0;

            this.children.forEach(child => {
                if (child.x + child.width > this._newWidth) {
                    this._newWidth = child.x + child.width;
                }

                if (child.y + child.height > this._newHeight) {
                    this._newHeight = child.y + child.height;
                }
            });
        }

        this.width = this._newWidth;
        this.height = this._newHeight;
    }
}

function group(...spritesToGroup) {
    let sprite = new Group(...spritesToGroup);
    _DisplayObject__WEBPACK_IMPORTED_MODULE_0__["stage"].addChild(sprite);
    return sprite;
}

/***/ }),

/***/ "./src/customPixi/Line.js":
/*!********************************!*\
  !*** ./src/customPixi/Line.js ***!
  \********************************/
/*! exports provided: line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "line", function() { return line; });
/* harmony import */ var _DisplayObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayObject */ "./src/customPixi/DisplayObject.js");


class Line extends _DisplayObject__WEBPACK_IMPORTED_MODULE_0__["DisplayObject"] {
    constructor(strokeStyle = "none", lineWidth = 0, ax = 0, ay = 0, bx = 32, by = 32) {
        super();
        Object.assign(this, { strokeStyle, lineWidth, ax, ay, bx, by });
        this.lineJoin = "round";
    }

    render(ctx) {
        ctx.strokeStyle = this.strokeStyle;
        ctx.lineWidth = this.lineWidth;
        ctx.lineJoin = this.lineJoin;
        ctx.beginPath();
        ctx.moveTo(this.ax, this.ay);
        ctx.lineTo(this.bx, this.by);
        if (this.strokeStyle !== "none") {
            ctx.stroke();
        }
    }
}

function line(strokeStyle, lineWidth, ax, ay, bx, by) {
    let sprite = new Line(strokeStyle, lineWidth, ax, ay, bx, by);
    _DisplayObject__WEBPACK_IMPORTED_MODULE_0__["stage"].addChild(sprite);
    return sprite;
}

/***/ }),

/***/ "./src/customPixi/Rectangle.js":
/*!*************************************!*\
  !*** ./src/customPixi/Rectangle.js ***!
  \*************************************/
/*! exports provided: rectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectangle", function() { return rectangle; });
/* harmony import */ var _DisplayObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayObject */ "./src/customPixi/DisplayObject.js");


class Rectangle extends _DisplayObject__WEBPACK_IMPORTED_MODULE_0__["DisplayObject"] {
    constructor(width = 32, height = 32, fillStyle = "gray", strokeStyle = "none", lineWidth = 0, x = 0, y = 0) {
        super();
        Object.assign(this, { width, height, fillStyle, strokeStyle, lineWidth, x, y });
        this.mask = false;
    }

    render(ctx) {
        ctx.strokeStyle = this.strokeStyle;
        ctx.lineWidth = this.lineWidth;
        ctx.fillStyle = this.fillStyle;
        ctx.beginPath();
        ctx.rect(-this.width * this.pivotX, -this.height * this.pivotY, this.width, this.height);
        if (this.strokeStyle !== "none") {
            ctx.stroke();
        }

        if (this.fillStyle !== "none") {
            ctx.fill();
        }

        if (this.mask && this.mask === true) {
            ctx.clip();
        }
    }
}

function rectangle(width, height, fillStyle, strokeStyle, lineWidth, x, y) {
    let sprite = new Rectangle(width, height, fillStyle, strokeStyle, lineWidth, x, y);
    _DisplayObject__WEBPACK_IMPORTED_MODULE_0__["stage"].addChild(sprite);

    return sprite;
}

/***/ }),

/***/ "./src/customPixi/Sound.js":
/*!*********************************!*\
  !*** ./src/customPixi/Sound.js ***!
  \*********************************/
/*! exports provided: makeSound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSound", function() { return makeSound; });
let actx = new AudioContext();

class Sound {
    constructor(source, loadHandler) {
        this.source = source;
        this.loadHandler = loadHandler;

        this.actx = actx;
        this.volumeNode = this.actx.createGain();
        this.panNode = this.actx.createStereoPanner();
        this.soundNode = null;
        this.buffer = null;
        this.loop = false;

        this.panValue = 0;
        this.volumeValue = 1;
        this.startTime = 0;
        this.startOffset = 0;
        this.playbackRate = 1;

        this.load();
    }

    load() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", this.source, true);
        xhr.responseType = "arraybuffer";
        xhr.addEventListener("load", () => {
            this.actx.decodeAudioData(xhr.response, buffer => {
                this.buffer = buffer;
                this.hasLoaded = true;

                if (this.loadHandler) {
                    this.loadHandler();
                }
            }, error => {
                throw new Error(`Audio could not be decoded ${error}`);
            });
        });
        xhr.send();
    }

    play() {
        this.startTime = this.actx.currentTime;
        this.soundNode = this.actx.createBufferSource();
        this.soundNode.buffer = this.buffer;
        this.soundNode.connect(this.volumeNode);
        this.volumeNode.connect(this.panNode);
        this.panNode.connect(this.actx.destination);
        this.soundNode.loop = this.loop;

        this.soundNode.playbackRate.value = this.playbackRate;
        this.soundNode.start(this.startTime, this.startOffset % this.buffer.duration);

        this.playing = true;
    }

    pause() {
        if (this.playing) {
            this.soundNode.stop(this.actx.currentTime);
            this.startOffset += this.actx.currentTime - this.startTime;
            this.playing = false;
        }
    }

    restart() {
        if (this.playing) {
            this.soundNode.stop(this.actx.currentTime);
        }
        this.startOffset = 0;
        this.play();
    }

    playFrom(value) {
        if (this.playing) {
            this.soundNode.stop(this.actx.currentTime);
        }
        this.startOffset = value;
        this.play();
    }

    get volume() {
        return this.volumeValue;
    }

    set volume(value) {
        this.volumeNode.gain.value = value;
        this.volumeValue = value;
    }

    get pan() {
        return this.panNode.pan.value;
    }
    set pan(value) {
        this.panNode.pan.value = value;
    }

}

function makeSound(source, loadHandler) {
    return new Sound(source, loadHandler);
}

/***/ }),

/***/ "./src/customPixi/Text.js":
/*!********************************!*\
  !*** ./src/customPixi/Text.js ***!
  \********************************/
/*! exports provided: text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony import */ var _DisplayObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayObject */ "./src/customPixi/DisplayObject.js");


class Text extends _DisplayObject__WEBPACK_IMPORTED_MODULE_0__["DisplayObject"] {
    constructor(content = "Hello", font = "12px sans-serif", fillStyle = "red", x = 0, y = 0) {
        super();
        Object.assign(this, { content, font, fillStyle, x, y });
        this.textBaseline = "top";
        this.strokeText = "none";
    }

    render(ctx) {
        ctx.font = this.font;
        ctx.strokeStyle = this.strokeStyle;
        ctx.lineWidth = this.lineWidth;
        ctx.fillStyle = this.fillStyle;

        if (this.width === 0) {
            this.width = ctx.measureText(this.content).width;
        }
        if (this.height === 0) {
            this.height = ctx.measureText("M").width;
        }

        ctx.translate(-this.width * this.pivotX, -this.height * this.pivotY);
        ctx.textBaseline = this.textBaseline;

        ctx.fillText(this.content, 0, 0);
        if (this.strokeText !== "none") {
            ctx.strokeText();
        }
    }
}

function text(content, font, fillStyle, x, y) {
    let sprite = new Text(content, font, fillStyle, x, y);
    _DisplayObject__WEBPACK_IMPORTED_MODULE_0__["stage"].addChild(sprite);
    return sprite;
}

/***/ }),

/***/ "./src/customPixi/assets.js":
/*!**********************************!*\
  !*** ./src/customPixi/assets.js ***!
  \**********************************/
/*! exports provided: assets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assets", function() { return assets; });
/* harmony import */ var _Sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sound */ "./src/customPixi/Sound.js");


let assets = {
    toLoad: 0,
    loaded: 0,

    imageExtensions: ["png", "jpg", "gif"],
    fontExtensions: ["ttf", "otf", "ttc", "woff"],
    jsonExtensions: ["json"],
    audioExtensions: ["mp3", "ogg", "wav", "webm"],

    load(sources) {
        return new Promise(resolve => {
            let loadHandler = () => {
                this.loaded += 1;
                console.log(this.loaded);

                if (this.toLoad === this.loaded) {
                    this.toLoad = 0;
                    this.loaded = 0;

                    console.log("Assets finish loading");

                    resolve();
                }
            };

            console.log("Loading assets...");

            this.toLoad = sources.length;

            sources.forEach(source => {
                let extension = source.split(".").pop();

                if (this.imageExtensions.indexOf(extension) !== -1) {
                    this.loadImage(source, loadHandler);
                } else if (this.fontExtensions.indexOf(extension) !== -1) {
                    this.loadFont(source, loadHandler);
                } else if (this.jsonExtensions.indexOf(extension) !== -1) {
                    this.loadJson(source, loadHandler);
                } else if (this.audioExtensions.indexOf(extension) !== -1) {
                    this.loadSound(source, loadHandler);
                } else {
                    console.log("FIle type not recognized: " + source);
                }
            });
        });
    },

    loadImage(source, loadHandler) {
        let image = new Image();
        image.addEventListener("load", loadHandler, false);

        this[source] = image;
        image.src = source;
    },

    loadFont(source, loadHandler) {
        let fontFamily = source.split("/").pop().split(".")[0];
        let newStyle = document.createElement("style");
        let fontFace = "@font-face {font-family: '" + fontFamily + "'; src: url('" + source + "');}";
        newStyle.appendChild(document.createTextNode(fontFace));
        document.head.appendChild(newStyle);

        loadHandler();
    },

    loadJson(source, loadHandler) {
        let xhr = new XMLHttpRequest();

        xhr.open("GET", source, true);
        xhr.responseType = "text";
        xhr.onload = event => {
            if (xhr.status === 200) {
                let file = JSON.parse(xhr.responseText);
                file.name = source;

                this[file.name] = file;
                if (file.frames) {
                    this.createTilesetFrames(file, source, loadHandler);
                } else {
                    loadHandler();
                }
            }
        };
        xhr.send();
    },

    createTilesetFrames(file, source, loadHandler) {
        let baseUrl = source.replace(/[^\/]*$/, "");

        let imageSource = baseUrl + file.meta.image;

        let imageLoadHandler = () => {
            this[imageSource] = image;

            Object.keys(file.frames).forEach(frame => {
                this[frame] = file.frames[frame];
                this[frame].source = image;
            });

            loadHandler();
        };
        let image = new Image();
        image.addEventListener("load", imageLoadHandler, false);
        image.src = imageSource;
    },

    loadSound(source, loadHandler) {
        let sound = Object(_Sound__WEBPACK_IMPORTED_MODULE_0__["makeSound"])(source, loadHandler);
        sound.name = source;
        this[sound.name] = sound;
    }
};

/***/ }),

/***/ "./src/customPixi/collision.js":
/*!*************************************!*\
  !*** ./src/customPixi/collision.js ***!
  \*************************************/
/*! exports provided: hitTestPoint, hitTestCircle, circleCollision, movingCircleCollision, multipleCircleCollision, hitTestRectangle, rectangleCollision, hitTestCircleRectangle, hitTestCirclePoint, circleRectangleCollision, circlePointCollision, hit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hitTestPoint", function() { return hitTestPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hitTestCircle", function() { return hitTestCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleCollision", function() { return circleCollision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movingCircleCollision", function() { return movingCircleCollision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multipleCircleCollision", function() { return multipleCircleCollision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hitTestRectangle", function() { return hitTestRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectangleCollision", function() { return rectangleCollision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hitTestCircleRectangle", function() { return hitTestCircleRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hitTestCirclePoint", function() { return hitTestCirclePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleRectangleCollision", function() { return circleRectangleCollision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circlePointCollision", function() { return circlePointCollision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hit", function() { return hit; });
function hitTestPoint(point, sprite) {
    let shape, left, right, top, bottom, vx, vy, magnitude, hit;

    if (sprite.radius) {
        shape = "circle";
    } else {
        shape = "rectangle";
    }

    if (shape === "rectangle") {
        left = sprite.x;
        right = sprite.x + sprite.width;
        top = sprite.y;
        bottom = sprite.y + sprite.height;

        hit = point.x > left && point.x < right && point.y > top && point.y < bottom;
    }

    if (shape === "circle") {
        vx = point.x - sprite.centerX;
        vy = point.y - sprite.centerY;
        magnitude = Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2));

        hit = magnitude < sprite.radius;
    }

    return hit;
}

function hitTestCircle(c1, c2, global = false) {
    let vx, vy, magnitude, combinedRadii, hit;

    if (global) {
        vx = c2.gx + c2.radius - (c1.gx + c1.radius);
        vy = c2.gy + c2.radius - (c1.gy + c1.radius);
    } else {
        vx = c2.centerX - c1.centerX;
        vy = c2.centerY - c1.centerY;
    }

    magnitude = Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2));
    combinedRadii = c1.radius + c2.radius;
    hit = magnitude < combinedRadii;

    return hit;
}

function circleCollision(c1, c2, bounce = false, global = false) {
    let magnitude,
        combinedRadii,
        overlap,
        vx,
        vy,
        dx,
        dy,
        s = {},
        hit = false;

    if (global) {
        vx = c2.gx + c2.radius - (c1.gx + c1.radius);
        vy = c2.gy + c2.radius - (c1.gy + c1.radius);
    } else {
        vx = c2.centerX - c1.centerX;
        vy = c2.centerY - c1.centerY;
    }
    magnitude = Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2));
    combinedRadii = c1.radius + c2.radius;

    if (magnitude < combinedRadii) {
        hit = true;
        overlap = combinedRadii - magnitude;
        let quantumPadding = 0.3;

        overlap += quantumPadding;
        dx = vx / magnitude;
        dy = vy / magnitude;

        c1.x -= overlap * dx;
        c1.y -= overlap * dy;

        if (bounce) {
            s.x = vy;
            s.y = -vx;

            bounceOffSurface(c1, s);
        }
    }

    return hit;
}

function movingCircleCollision(c1, c2, global = false) {
    let combinedRadii,
        overlap,
        xSide,
        ySide,
        s = {},
        p1A = {},
        p1B = {},
        p2A = {},
        p2B = {},
        hit = false;
    c1.mass = c1.mass || 1;
    c2.mass = c2.mass || 1;

    if (global) {
        s.vx = c2.gx + c2.radius - (c1.gx + c1.radius);
        s.vy = c2.gy + c2.radius - (c1.gy + c1.radius);
    } else {
        s.vx = c2.centerX - c1.centerX;
        s.vy = c2.centerY - c1.centerY;
    }

    s.magnitude = Math.sqrt(Math.pow(s.vx, 2) + Math.pow(s.vy, 2));

    combinedRadii = c1.radius + c2.radius;

    if (s.magnitude < combinedRadii) {
        hit = true;

        overlap = combinedRadii - s.magnitude;

        overlap += 0.3;

        s.dx = s.vx / s.magnitude;
        s.dy = s.vy / s.magnitude;

        s.vxHalf = Math.abs(s.dx * overlap / 2);
        s.vyHalf = Math.abs(s.dy * overlap / 2);

        c1.x > c2.x ? xSide = 1 : xSide = -1;
        c1.y > c2.y ? ySide = 1 : ySide = -1;

        c1.x = c1.x + s.vxHalf * xSide;
        c1.y = c1.y + s.vyHalf * ySide;

        c2.x = c2.x + s.vxHalf * -xSide;
        c2.y = c2.y + s.vyHalf * -ySide;

        s.lx = s.vy;
        s.ly = -s.vx;

        let dp1 = c1.vx * s.dx + c1.vy * s.dy;

        p1A.x = dp1 * s.dx;
        p1A.y = dp1 * s.dy;

        let dp2 = c1.vx * (s.lx / s.magnitude) + c1.vy * (s.ly / s.magnitude);

        p1B.x = dp2 * (s.lx / s.magnitude);
        p1B.y = dp2 * (s.ly / s.magnitude);

        let dp3 = c2.vx * s.dx + c2.vy * s.dy;

        p2A.x = dp3 * s.dx;
        p2A.y = dp3 * s.dy;

        let dp4 = c2.vx * (s.lx / s.magnitude) + c2.vy * (s.ly / s.magnitude);

        p2B.x = dp4 * (s.lx / s.magnitude);
        p2B.y = dp4 * (s.ly / s.magnitude);

        c1.bounce = {};
        c1.bounce.x = p1B.x + p2A.x;
        c1.bounce.y = p1B.y + p2A.y;

        c2.bounce = {};
        c2.bounce.x = p1A.x + p2B.x;
        c2.bounce.y = p1A.y + p2B.y;

        c1.vx = c1.bounce.x / c1.mass;
        c1.vy = c1.bounce.y / c1.mass;
        c2.vx = c2.bounce.x / c2.mass;
        c2.vy = c2.bounce.y / c2.mass;
    }
    return hit;
}

function multipleCircleCollision(arrayOfCircles, global = false) {
    for (let i = 0; i < arrayOfCircles.length; i++) {
        let c1 = arrayOfCircles[i];

        for (let j = i + 1; j < arrayOfCircles.length; j++) {
            let c2 = arrayOfCircles[j];

            movingCircleCollision(c1, c2, global);
        }
    }
}

function hitTestRectangle(r1, r2, global = false) {
    let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

    hit = false;

    if (global) {
        vx = r1.gx + r1.halfWidth - (r2.gx + r2.halfWidth);
        vy = r1.gy + r1.halfHeight - (r2.gy + r2.halfHeight);
    } else {
        vx = r1.centerX - r2.centerX;
        vy = r1.centerY - r2.centerY;
    }

    combinedHalfWidths = r1.halfWidth + r2.halfWidth;
    combinedHalfHeights = r1.halfHeight + r2.halfHeight;

    if (Math.abs(vx) < combinedHalfWidths && Math.abs(vy) < combinedHalfHeights) {
        hit = true;
    } else {
        hit = false;
    }

    return hit;
}

function rectangleCollision(r1, r2, bounce = false, global = true) {
    let collision, combinedHalfWidths, combinedHalfHeights, overlapX, overlapY, vx, vy;

    if (global) {
        vx = r1.gx + r1.halfWidth - (r2.gx + r2.halfWidth);
        vy = r1.gy + r1.halfHeight - (r2.gy + r2.halfHeight);
    } else {
        vx = r1.centerX - r2.centerX;
        vy = r1.centerY - r2.centerY;
    }

    combinedHalfWidths = r1.halfWidth + r2.halfWidth;
    combinedHalfHeights = r1.halfHeight + r2.halfHeight;

    if (Math.abs(vx) < combinedHalfWidths) {

        if (Math.abs(vy) < combinedHalfHeights) {

            overlapX = combinedHalfWidths - Math.abs(vx);
            overlapY = combinedHalfHeights - Math.abs(vy);

            if (overlapX >= overlapY) {
                if (vy > 0) {
                    collision = "top";
                    r1.y = r1.y + overlapY;
                } else {
                    collision = "bottom";
                    r1.y = r1.y - overlapY;
                }

                if (bounce) {
                    r1.vy *= -1;
                }
            } else {
                if (vx > 0) {
                    collision = "left";
                    r1.x = r1.x + overlapX;
                } else {
                    collision = "right";
                    r1.x = r1.x - overlapX;
                }

                if (bounce) {
                    r1.vx *= -1;
                }
            }
        }
    }
    return collision;
}

function hitTestCircleRectangle(c1, r1, global = false) {

    let region, collision, c1x, c1y, r1x, r1y;

    if (global) {
        c1x = c1.gx;
        c1y = c1.gy;
        r1x = r1.gx;
        r1y = r1.gy;
    } else {
        c1x = c1.x;
        c1y = c1.y;
        r1x = r1.x;
        r1y = r1.y;
    }

    if (c1y < r1y - r1.halfHeight) {
        if (c1x < r1x - 1 - r1.halfWidth) {
            region = "topLeft";
        } else if (c1x > r1x + 1 + r1.halfWidth) {
            region = "topRight";
        } else {
            region = "topMiddle";
        }
    } else if (c1y > r1y + r1.halfHeight) {

        if (c1x < r1x - 1 - r1.halfWidth) {
            region = "bottomLeft";
        } else if (c1x > r1x + 1 + r1.halfWidth) {
            region = "bottomRight";
        } else {
            region = "bottomMiddle";
        }
    } else {
        if (c1x < r1x - r1.halfWidth) {
            region = "leftMiddle";
        } else {
            region = "rightMiddle";
        }
    }

    if (region === "topMiddle" || region === "bottomMiddle" || region === "leftMiddle" || region === "rightMiddle") {
        collision = hitTestRectangle(c1, r1, global);
    } else {
        let point = {};

        switch (region) {
            case "topLeft":
                point.x = r1x;
                point.y = r1y;
                break;

            case "topRight":
                point.x = r1x + r1.width;
                point.y = r1y;
                break;

            case "bottomLeft":
                point.x = r1x;
                point.y = r1y + r1.height;
                break;

            case "bottomRight":
                point.x = r1x + r1.width;
                point.y = r1y + r1.height;
        }
        collision = hitTestCirclePoint(c1, point, global);
    }

    if (collision) {
        return region;
    } else {
        return collision;
    }
}

function hitTestCirclePoint(c1, point, global = false) {

    point.diameter = 1;
    point.radius = 0.5;
    point.centerX = point.x;
    point.centerY = point.y;
    point.gx = point.x;
    point.gy = point.y;
    return hitTestCircle(c1, point, global);
}

function circleRectangleCollision(c1, r1, bounce = false, global = false) {

    let region, collision, c1x, c1y, r1x, r1y;

    if (global) {
        c1x = c1.gx;
        c1y = c1.gy;
        r1x = r1.gx;
        r1y = r1.gy;
    } else {
        c1x = c1.x;
        c1y = c1.y;
        r1x = r1.x;
        r1y = r1.y;
    }

    if (c1y < r1y - r1.halfHeight) {
        if (c1x < r1x - 1 - r1.halfWidth) {
            region = "topLeft";
        } else if (c1x > r1x + 1 + r1.halfWidth) {
            region = "topRight";
        } else {
            region = "topMiddle";
        }
    } else if (c1y > r1y + r1.halfHeight) {
        if (c1x < r1x - 1 - r1.halfWidth) {
            region = "bottomLeft";
        } else if (c1x > r1x + 1 + r1.halfWidth) {
            region = "bottomRight";
        } else {
            region = "bottomMiddle";
        }
    } else {
        if (c1x < r1x - r1.halfWidth) {
            region = "leftMiddle";
        } else {
            region = "rightMiddle";
        }
    }

    if (region === "topMiddle" || region === "bottomMiddle" || region === "leftMiddle" || region === "rightMiddle") {
        collision = rectangleCollision(c1, r1, bounce, global);
    } else {
        let point = {};

        switch (region) {
            case "topLeft":
                point.x = r1x;
                point.y = r1y;
                break;

            case "topRight":
                point.x = r1x + r1.width;
                point.y = r1y;
                break;

            case "bottomLeft":
                point.x = r1x;
                point.y = r1y + r1.height;
                break;

            case "bottomRight":
                point.x = r1x + r1.width;
                point.y = r1y + r1.height;
        }

        collision = circlePointCollision(c1, point, bounce, global);
    }

    if (collision) {
        return region;
    } else {
        return collision;
    }
}

function circlePointCollision(c1, point, bounce = false, global = false) {
    point.diameter = 1;
    point.radius = 0.5;
    point.centerX = point.x;
    point.centerY = point.y;
    point.gx = point.x;
    point.gy = point.y;
    return circleCollision(c1, point, bounce, global);
}

function hit(a, b, react = false, bounce = false, global, extra = undefined) {
    let collision,
        aIsASprite = a.parent !== undefined,
        bIsASprite = b.parent !== undefined;

    if (aIsASprite && b instanceof Array || bIsASprite && a instanceof Array) {
        spriteVsArray();
    } else {
        collision = findCollisionType(a, b);
        if (collision && extra) extra(collision);
    }

    return collision;

    function findCollisionType(a, b) {
        let aIsASprite = a.parent !== undefined;
        let bIsASprite = b.parent !== undefined;

        if (aIsASprite && bIsASprite) {
            if (a.diameter && b.diameter) {
                return circleVsCircle(a, b);
            } else if (a.diameter && !b.diameter) {
                return circleVsRectangle(a, b);
            } else {
                return rectangleVsRectangle(a, b);
            }
        } else if (bIsASprite && !(a.x === undefined) && !(a.y === undefined)) {
            return hitTestPoint(a, b);
        } else {
            throw new Error(`I'm sorry, ${a} and ${b} cannot be use together in a collision test.'`);
        }
    }

    function spriteVsArray() {
        if (a instanceof Array) {
            let [a, b] = [b, a];
        }

        for (let i = b.length - 1; i >= 0; i--) {
            let sprite = b[i];
            collision = findCollisionType(a, sprite);
            if (collision && extra) extra(collision, sprite);
        }
    }

    function circleVsCircle(a, b) {
        if (!react) {
            return hitTestCircle(a, b);
        } else {
            if (a.vx + a.vy !== 0 && b.vx + b.vy !== 0) {
                return movingCircleCollision(a, b, global);
            } else {
                return circleCollision(a, b, bounce, global);
            }
        }
    }

    function rectangleVsRectangle(a, b) {
        if (!react) {
            return hitTestRectangle(a, b, global);
        } else {
            return rectangleCollision(a, b, bounce, global);
        }
    }

    function circleVsRectangle(a, b) {
        if (!react) {
            return hitTestCircleRectangle(a, b, global);
        } else {
            return circleRectangleCollision(a, b, bounce, global);
        }
    }
}

function bounceOffSurface(o, s) {
    let dp1,
        dp2,
        p1 = {},
        p2 = {},
        bounce = {},
        mass = o.mass || 1;

    //1. Calculate the collision surface's properties
    //Find the surface vector's left normal
    s.lx = s.y;
    s.ly = -s.x;

    //Find its magnitude
    s.magnitude = Math.sqrt(s.x * s.x + s.y * s.y);

    //Find its normalized values
    s.dx = s.x / s.magnitude;
    s.dy = s.y / s.magnitude;

    //2. Bounce the object (o) off the surface (s)

    //Find the dot product between the object and the surface
    dp1 = o.vx * s.dx + o.vy * s.dy;

    //Project the object's velocity onto the collision surface
    p1.vx = dp1 * s.dx;
    p1.vy = dp1 * s.dy;

    //Find the dot product of the object and the surface's left normal (s.lx and s.ly)
    dp2 = o.vx * (s.lx / s.magnitude) + o.vy * (s.ly / s.magnitude);

    //Project the object's velocity onto the surface's left normal
    p2.vx = dp2 * (s.lx / s.magnitude);
    p2.vy = dp2 * (s.ly / s.magnitude);

    //Reverse the projection on the surface's left normal
    p2.vx *= -1;
    p2.vy *= -1;

    //Add up the projections to create a new bounce vector
    bounce.x = p1.vx + p2.vx;
    bounce.y = p1.vy + p2.vy;

    //Assign the bounce vector to the object's velocity
    //with optional mass to dampen the effect
    o.vx = bounce.x / mass;
    o.vy = bounce.y / mass;
}

/***/ }),

/***/ "./src/customPixi/makeCanvas.js":
/*!**************************************!*\
  !*** ./src/customPixi/makeCanvas.js ***!
  \**************************************/
/*! exports provided: makeCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCanvas", function() { return makeCanvas; });
function makeCanvas(width = 256, height = 256, border = "1px dashed black", backgroundColor = "white") {
    let canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.border = border;
    canvas.style.backgroundColor = backgroundColor;
    document.body.appendChild(canvas);

    let ctx = canvas.getContext("2d");

    return { canvas, ctx };
}

/***/ }),

/***/ "./src/customPixi/particles.js":
/*!*************************************!*\
  !*** ./src/customPixi/particles.js ***!
  \*************************************/
/*! exports provided: particles, particleEffect, emitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "particles", function() { return particles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "particleEffect", function() { return particleEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emitter", function() { return emitter; });
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Circle */ "./src/customPixi/Circle.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/customPixi/utils.js");



let particles = [];

function particleEffect(x = 0, y = 0, spriteFunction = () => Object(_Circle__WEBPACK_IMPORTED_MODULE_0__["circle"])(10, "red"), numberOfParticles = 10, gravity = 0, randomSpacing = true, minAngle = 0, maxAngle = 6.28, minSize = 4, maxSize = 16, minSpeed = 0.1, maxSpeed = 1, minScaleSpeed = 0.01, maxScaleSpeed = 0.05, minAlphaSpeed = 0.02, maxAlphaSpeed = 0.02, minRotationSpeed = 0.01, maxRotationSpeed = 0.03) {

    let randomFloat = (min, max) => min + Math.random() * (max - min),
        randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    let angles = [];
    let angle;
    let spacing = (maxAngle - minAngle) / (numberOfParticles - 1);
    for (let i = 0; i < numberOfParticles; i++) {

        if (randomSpacing) {
            angle = randomFloat(minAngle, maxAngle);
            angles.push(angle);
        } else {
            if (angle === undefined) angle = minAngle;
            angles.push(angle);
            angle += spacing;
        }
    }
    angles.forEach(angle => makeParticle(angle));
    function makeParticle(angle) {
        let particle = spriteFunction();
        if (particle.frames.length > 0) {
            particle.gotoAndStop(randomInt(0, particle.frames.length - 1));
        }
        particle.x = x - particle.halfWidth;
        particle.y = y - particle.halfHeight;

        let size = randomInt(minSize, maxSize);
        particle.width = size;
        particle.height = size;

        particle.scaleSpeed = randomFloat(minScaleSpeed, maxScaleSpeed);
        particle.alphaSpeed = randomFloat(minAlphaSpeed, maxAlphaSpeed);
        particle.rotationSpeed = randomFloat(minRotationSpeed, maxRotationSpeed);

        let speed = randomFloat(minSpeed, maxSpeed);
        particle.vx = speed * Math.cos(angle);
        particle.vy = speed * Math.sin(angle);

        particle.update = () => {
            particle.vy += gravity;
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.scaleX - particle.scaleSpeed > 0) {
                particle.scaleX -= particle.scaleSpeed;
            }
            if (particle.scaleY - particle.scaleSpeed > 0) {
                particle.scaleY -= particle.scaleSpeed;
            }
            particle.rotation += particle.rotationSpeed;
            particle.alpha -= particle.alphaSpeed;

            if (particle.alpha <= 0) {
                Object(_utils__WEBPACK_IMPORTED_MODULE_1__["remove"])(particle);
                particles.splice(particles.indexOf(particle), 1);
            }
        };
        particles.push(particle);
    }
}

function emitter(interval, particleFunction) {
    let emitter = {},
        timerInterval = undefined;

    emitter.playing = false;

    function play() {
        if (!emitter.playing) {
            particleFunction();
            timerInterval = setInterval(emitParticle.bind(this), interval);
            emitter.playing = true;
        }
    }

    function stop() {
        if (emitter.playing) {
            clearInterval(timerInterval);
            emitter.playing = false;
        }
    }

    function emitParticle() {
        particleFunction();
    }

    emitter.play = play;
    emitter.stop = stop;
    return emitter;
}

/***/ }),

/***/ "./src/customPixi/render.js":
/*!**********************************!*\
  !*** ./src/customPixi/render.js ***!
  \**********************************/
/*! exports provided: render, renderWithInterpolation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderWithInterpolation", function() { return renderWithInterpolation; });
/* harmony import */ var _DisplayObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayObject */ "./src/customPixi/DisplayObject.js");


function render(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    _DisplayObject__WEBPACK_IMPORTED_MODULE_0__["stage"].children.forEach(sprite => {
        displaySprite(sprite);
    });

    function displaySprite(sprite) {
        if (sprite.visible && sprite.gx < canvas.width + sprite.width && sprite.gx + sprite.width >= -sprite.width && sprite.gy < canvas.height + sprite.height && sprite.gy + sprite.height >= -sprite.height) {
            ctx.save();

            ctx.translate(sprite.x + sprite.width * sprite.pivotX, sprite.y + sprite.height * sprite.pivotY);
            ctx.rotate(sprite.rotation);
            ctx.globalAlpha = sprite.alpha * sprite.parent.alpha;
            ctx.scale(sprite.scaleX, sprite.scaleY);

            if (sprite.shadow) {
                ctx.shadowColor = sprite.shadowColor;
                ctx.shadowOffsetX = sprite.shadowOffsetX;
                ctx.shadowOffsetY = sprite.shadowOffsetY;
                ctx.shadowBlur = sprite.shadowBlur;
            }

            if (sprite.blendMode) {
                ctx.globalCompositeOperation = sprite.blendMode;
            }

            if (sprite.render) {
                sprite.render(ctx);
            }

            if (sprite.children && sprite.children.length > 0) {
                ctx.translate(-sprite.width * sprite.pivotX, -sprite.height * sprite.pivotY);

                sprite.children.forEach(child => {
                    displaySprite(child);
                });
            }
            ctx.restore();
        }
    }
}

function renderWithInterpolation(canvas, ctx, lagOffset) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    _DisplayObject__WEBPACK_IMPORTED_MODULE_0__["stage"].children.forEach(sprite => {
        displaySprite(sprite);
    });

    function displaySprite(sprite) {
        if (sprite.visible && sprite.gx < canvas.width + sprite.width && sprite.gx + sprite.width >= -sprite.width && sprite.gy < canvas.height + sprite.height && sprite.gy + sprite.height >= -sprite.height) {
            ctx.save();

            if (sprite.previousX) {
                sprite.renderX = (sprite.x - sprite.previousX) * lagOffset + sprite.previousX;
            } else {
                sprite.renderX = sprite.x;
            }

            if (sprite.previousY) {
                sprite.renderY = (sprite.y - sprite.previousY) * lagOffset + sprite.previousY;
            } else {
                sprite.renderY = sprite.y;
            }

            ctx.translate(sprite.renderX + sprite.width * sprite.pivotX, sprite.renderY + sprite.height * sprite.pivotY);
            ctx.rotate(sprite.rotation);
            ctx.globalAlpha = sprite.alpha * sprite.parent.alpha;
            ctx.scale(sprite.scaleX, sprite.scaleY);

            if (sprite.shadow) {
                ctx.shadowColor = sprite.shadowColor;
                ctx.shadowOffsetX = sprite.shadowOffsetX;
                ctx.shadowOffsetY = sprite.shadowOffsetY;
                ctx.shadowBlur = sprite.shadowBlur;
            }

            if (sprite.blendMode) {
                ctx.globalCompositeOperation = sprite.blendMode;
            }

            if (sprite.render) {
                sprite.render(ctx);
            }

            if (sprite.children && sprite.children.length > 0) {
                ctx.translate(-sprite.width * sprite.pivotX, -sprite.height * sprite.pivotY);

                sprite.children.forEach(child => {
                    displaySprite(child);
                });
            }
            ctx.restore();
        }
    }
}

/***/ }),

/***/ "./src/customPixi/utils.js":
/*!*********************************!*\
  !*** ./src/customPixi/utils.js ***!
  \*********************************/
/*! exports provided: wait, frame, frames, remove, randomInt, contain, capturePreviousPositions, keyboard, makePointer, distance, followEase, followConstant, angle, rotateSprite, rotatePoint, checkParentVisibility, shoot, outsideBounds, grid, tilingSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wait", function() { return wait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frame", function() { return frame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frames", function() { return frames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return randomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contain", function() { return contain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capturePreviousPositions", function() { return capturePreviousPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyboard", function() { return keyboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePointer", function() { return makePointer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followEase", function() { return followEase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followConstant", function() { return followConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateSprite", function() { return rotateSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotatePoint", function() { return rotatePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkParentVisibility", function() { return checkParentVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shoot", function() { return shoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outsideBounds", function() { return outsideBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tilingSprite", function() { return tilingSprite; });
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Group */ "./src/customPixi/Group.js");
/* harmony import */ var _DisplayObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayObject */ "./src/customPixi/DisplayObject.js");
/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rectangle */ "./src/customPixi/Rectangle.js");




function wait(duration = 0) {
    let timer = resolve => {
        setTimeout(resolve, duration);
    };
    let promise = new Promise(timer);
    return promise;
}

function frame(source, x, y, width, height) {
    let obj = {};
    obj.image = source;
    obj.x = x;
    obj.y = y;
    obj.width = width;
    obj.height = height;

    return obj;
}

function frames(source, arrayOfPositions, width, height) {
    let obj = {};
    obj.image = source;
    obj.data = arrayOfPositions;
    obj.width = width;
    obj.height = height;
    return obj;
}

function remove(...spritesToRemove) {
    spritesToRemove.forEach(sprite => {
        sprite.parent.removeChild(sprite);
    });
}

function randomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// export let collision = contain(sprite, bounds, bounce, callbackFunction);
function contain(sprite, bounds, bounce = false, callback = undefined) {
    let x = bounds.x,
        y = bounds.y,
        width = bounds.width,
        height = bounds.height;

    let collision;
    if (sprite.x < x) {
        if (bounce) {
            sprite.vx *= -1;
        }
        if (sprite.mass) {
            sprite.vx /= sprite.mass;
        }
        sprite.x = x;
        collision = "left";
    }

    if (sprite.y < y) {
        if (bounce) {
            sprite.vy *= -1;
        }
        if (sprite.mass) {
            sprite.vy /= sprite.mass;
        }
        sprite.y = y;
        collision = "top";
    }

    if (sprite.x + sprite.width > width) {
        if (bounce) {
            sprite.vx *= -1;
        }
        if (sprite.mass) {
            sprite.vx /= sprite.mass;
        }
        sprite.x = width - sprite.width;
        collision = "right";
    }

    if (sprite.y + sprite.height > width) {
        if (bounce) {
            sprite.vy *= -1;
        }
        if (sprite.mass) {
            sprite.vy /= sprite.mass;
        }
        sprite.y = height - sprite.height;
        collision = "bottom";
    }

    if (collision && callback) {
        callback(collision);
    }

    return collision;
}

function capturePreviousPositions(stage) {
    stage.children.forEach(sprite => {
        setPreviousPosition(sprite);
    });
}

function setPreviousPosition(sprite) {
    sprite.previousX = sprite.x;
    sprite.previousY = sprite.y;

    if (sprite.children && sprite.children.length > 0) {
        sprite.children.forEach(child => {
            setPreviousPosition(child);
        });
    }
}

function keyboard(keyCode) {
    let key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;

    key.downHandler = function (event) {
        if (event.keyCode === key.code) {
            if (key.isUp && key.press) {
                key.press();
            }
            key.isDown = true;
            key.isUp = false;
        }
        event.preventDefault();
    };

    key.upHandler = function (event) {
        if (event.keyCode === key.code) {
            if (key.isDown && key.release) {
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

function makePointer(element, scale = 1) {
    let pointer = {
        element: element,
        scale: scale,

        _x: 0,
        _y: 0,
        dragSprite: null,
        dragOffsetX: 0,
        dragOffsetY: 0,

        get x() {
            return this._x / this.scale;
        },

        get y() {
            return this._y / this.scale;
        },

        get centerX() {
            return this.x;
        },

        get centerY() {
            return this.y;
        },

        get position() {
            return { x: this.x, y: this.y };
        },

        isDown: false,
        isUp: true,
        tap: undefined,

        moveHandler(event) {
            let element = event.target;

            this._x = event.pageX - element.offsetLeft;
            this._y = event.pageY - element.offsetTop;

            event.preventDefault();
        },

        touchmoveHandler(event) {
            let element = event.target;

            this._x = event.targetTouches[0].pageX - element.offsetLeft;
            this._y = event.targetTouches[0].pageY - element.offsetTop;

            event.preventDefault();
        },

        downHandler(event) {
            this.isDown = true;
            this.isUp = false;
            this.tapped = false;

            this.downTime = Date.now();
            if (this.press) {
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
            if (this.press) {
                this.press();
            }

            event.preventDefault();
        },

        upHandler(event) {
            this.elapsedTime = Math.abs(this.downTime - Date.now());

            if (this.elapsedTime <= 200 && this.tapped === false) {
                this.tapped = true;
                if (this.tap) {
                    this.tap();
                }
            }

            this.isUp = true;
            this.isDown = false;

            if (this.release) {
                this.release();
            }

            event.preventDefault();
        },

        touchendHandler(event) {
            this.elapsedTime = Math.abs(this.downTime - Date.now());

            if (this.elapsedTime <= 200 && this.tapped === false) {
                this.tapped = true;
                if (this.tap) {
                    this.tap();
                }
            }

            this.isUp = true;
            this.isDown = false;

            if (this.release) {
                this.release();
            }

            event.preventDefault();
        },

        hitTestSprite(sprite) {
            let hit = false;

            if (!sprite.circular) {
                let left = sprite.gx,
                    right = sprite.gx + sprite.width,
                    top = sprite.gy,
                    bottom = sprite.gy + sprite.height;

                hit = this.x > left && this.x < right && this.y > top && this.y < bottom;
            } else {
                let vx = this.x - (sprite.gx + sprite.radius),
                    vy = this.y - (sprite.gy + sprite.radius),
                    distance = Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2));

                hit = distance < sprite.radius;
            }

            return hit;
        },

        updateDragAndDrop(draggableSprites) {
            if (this.isDown) {
                if (this.dragSprite === null) {
                    for (let i = draggableSprites.length - 1; i > -1; i--) {
                        let sprite = draggableSprites[i];

                        if (sprite.visible === false || !checkParentVisibility(sprite)) {
                            continue;
                        }

                        if (this.hitTestSprite(sprite) && sprite.draggable) {
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

            if (this.isUp) {
                this.dragSprite = null;
            }

            draggableSprites.some(sprite => {
                if (this.hitTestSprite(sprite) && sprite.draggable && sprite.visible && checkParentVisibility(sprite)) {
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

function distance(s1, s2) {
    let vx = s2.centerX - s1.centerX;
    let vy = s2.centerY - s1.centerY;

    return Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2));
}

function followEase(follower, leader, speed) {
    let vx = leader.centerX - follower.centerX;
    let vy = leader.centerY - follower.centerY;
    let distance = Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2));

    if (distance >= 1) {
        follower.x += vx * speed;
        follower.y += vy * speed;
    }
}

function followConstant(follower, leader, speed) {
    let vx = leader.centerX - follower.centerX;
    let vy = leader.centerY - follower.centerY;
    let distance = Math.sqrt(Math.pow(vx, 2) + Math.pow(vy, 2));

    if (distance >= speed) {
        follower.x += vx / distance * speed;
        follower.y += vy / distance * speed;
    }
}

function angle(s1, s2) {
    return Math.atan2(s2.centerY - s1.centerY, s2.centerX - s1.centerX);
}

function rotateSprite(rotatingSprite, centerSprite, distance, angle) {
    rotatingSprite.x = centerSprite.centerX - rotatingSprite.parent.x + +(distance * Math.cos(angle)) - rotatingSprite.halfWidth;

    rotatingSprite.y = centerSprite.centerY - rotatingSprite.parent.y + +(distance * Math.sin(angle)) - rotatingSprite.halfWidth;
}

function rotatePoint(pointX, pointY, distanceX, distanceY, angle) {
    let point = {};
    point.x = pointX + Math.cos(angle) * distanceX;
    point.y = pointY + Math.sin(angle) * distanceY;
    return point;
}

function checkParentVisibility(sprite) {
    let visible = true;
    let current = sprite;
    while (current.parent) {
        if (current.parent.visible === true) {
            current = current.parent;
        } else {
            visible = false;
            break;
        }
    }

    return visible;
}

function shoot(shooter, angle, offsetFromCenter, bulletSpeed, bulletArray, bulletSprite) {
    let bullet = bulletSprite();

    bullet.x = shooter.centerX - bullet.halfWidth + offsetFromCenter * Math.cos(angle);
    bullet.y = shooter.centerY - bullet.halfHeight + offsetFromCenter * Math.sin(angle);

    bullet.vx = Math.cos(angle) * bulletSpeed;
    bullet.vy = Math.sin(angle) * bulletSpeed;

    bulletArray.push(bullet);
}

function outsideBounds(sprite, bounds, extra = undefined) {
    let x = bounds.x,
        y = bounds.y,
        width = bounds.width,
        height = bounds.height;

    let collision;

    if (sprite.x < x - sprite.width) {
        collision = "left";
    }

    if (sprite.y < y - sprite.width) {
        collision = "top";
    }

    if (sprite.x > width) {
        collision = "right";
    }

    if (sprite.y > height) {
        collision = "bottom";
    }

    if (collision && extra) {
        extra();
    }

    return collision;
}

function grid(columns = 0, rows = 0, cellWidth = 32, cellHeight = 32, centerCell = false, xOffset = 0, yOffset = 0, makeSprite = undefined, extra = undefined) {
    let container = Object(_Group__WEBPACK_IMPORTED_MODULE_0__["group"])();
    let createGrid = () => {
        let length = columns * rows;

        for (let i = 0; i < length; i++) {
            let x = i % columns * cellWidth;
            let y = Math.floor(i / columns) * cellHeight;

            let sprite = makeSprite();

            container.addChild(sprite);

            if (!centerCell) {
                sprite.x = x + xOffset;
                sprite.y = y + yOffset;
            } else {
                sprite.x = x + cellWidth / 2 - sprite.halfWidth + xOffset;
                sprite.y = y + cellHeight / 2 - sprite.halfHeight + yOffset;
            }

            if (extra) {
                extra();
            }
        }
    };

    createGrid();

    return container;
}

function tilingSprite(width, height, source, x = 0, y = 0) {

    let tileWidth, tileHeight;

    if (source.frame) {
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

    let tileGrid = grid(columns, rows, tileWidth, tileHeight, false, 0, 0, () => {

        let tile = Object(_DisplayObject__WEBPACK_IMPORTED_MODULE_1__["sprite"])(source);
        return tile;
    });

    tileGrid._tileX = 0;
    tileGrid._tileY = 0;

    let container = Object(_Rectangle__WEBPACK_IMPORTED_MODULE_2__["rectangle"])(width, height, "none", "none");
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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: canvas, ctx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ctx", function() { return ctx; });
/* harmony import */ var _scenes_allScenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes/allScenes */ "./src/scenes/allScenes.js");
/* harmony import */ var _customPixi_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customPixi/assets */ "./src/customPixi/assets.js");
/* harmony import */ var _customPixi_makeCanvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customPixi/makeCanvas */ "./src/customPixi/makeCanvas.js");
/* harmony import */ var _customPixi_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customPixi/render */ "./src/customPixi/render.js");
/* harmony import */ var _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customPixi/DisplayObject */ "./src/customPixi/DisplayObject.js");
/* harmony import */ var _scenes_accelerationAndFrictionBall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scenes/accelerationAndFrictionBall */ "./src/scenes/accelerationAndFrictionBall.js");
/* harmony import */ var _scenes_ballWithGravity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scenes/ballWithGravity */ "./src/scenes/ballWithGravity.js");
/* harmony import */ var _scenes_constantSpeedFollowing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scenes/constantSpeedFollowing */ "./src/scenes/constantSpeedFollowing.js");
/* harmony import */ var _scenes_rotateAroundSprite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scenes/rotateAroundSprite */ "./src/scenes/rotateAroundSprite.js");
/* harmony import */ var _scenes_rotateAroundPoint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scenes/rotateAroundPoint */ "./src/scenes/rotateAroundPoint.js");
/* harmony import */ var _scenes_tank__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scenes/tank */ "./src/scenes/tank.js");
/* harmony import */ var _scenes_createButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scenes/createButton */ "./src/scenes/createButton.js");
/* harmony import */ var _scenes_interactiveSprite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scenes/interactiveSprite */ "./src/scenes/interactiveSprite.js");
/* harmony import */ var _scenes_dragAndDrop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scenes/dragAndDrop */ "./src/scenes/dragAndDrop.js");
/* harmony import */ var _scenes_treasureHunter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scenes/treasureHunter */ "./src/scenes/treasureHunter.js");
/* harmony import */ var _scenes_pointAndShapeCollision__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./scenes/pointAndShapeCollision */ "./src/scenes/pointAndShapeCollision.js");
/* harmony import */ var _scenes_rectCollision__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./scenes/rectCollision */ "./src/scenes/rectCollision.js");
/* harmony import */ var _scenes_circleCollision__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./scenes/circleCollision */ "./src/scenes/circleCollision.js");
/* harmony import */ var _scenes_circleAndRectCollision__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./scenes/circleAndRectCollision */ "./src/scenes/circleAndRectCollision.js");
/* harmony import */ var _scenes_movingCirclesCollision__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./scenes/movingCirclesCollision */ "./src/scenes/movingCirclesCollision.js");
/* harmony import */ var _scenes_movingAndStatCircles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./scenes/movingAndStatCircles */ "./src/scenes/movingAndStatCircles.js");
/* harmony import */ var _scenes_movingCircleAndStatRects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./scenes/movingCircleAndStatRects */ "./src/scenes/movingCircleAndStatRects.js");
/* harmony import */ var _scenes_rectanglePush__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./scenes/rectanglePush */ "./src/scenes/rectanglePush.js");
/* harmony import */ var _scenes_particleEmitter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./scenes/particleEmitter */ "./src/scenes/particleEmitter.js");
/* harmony import */ var _scenes_flappyFairy__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./scenes/flappyFairy */ "./src/scenes/flappyFairy.js");
/* harmony import */ var _scenes_setupMusic__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./scenes/setupMusic */ "./src/scenes/setupMusic.js");




























let { canvas, ctx } = Object(_customPixi_makeCanvas__WEBPACK_IMPORTED_MODULE_2__["makeCanvas"])(512, 512);

_customPixi_assets__WEBPACK_IMPORTED_MODULE_1__["assets"].load(["src/img/treasureHunter.json", "src/fonts/puzzler.otf", "src/img/marbles.png", "src/img/button.json", "src/fonts/puzzler.otf", "src/img/avengers.json", "src/img/flappyFairy.json"]).then(() => start());

const scenesConfig = [{ label: "Acceleration and friction ball", id: "accelerationAndFrictionBall", constructor: _scenes_accelerationAndFrictionBall__WEBPACK_IMPORTED_MODULE_5__["AccelerationAndFrictionBall"] }, { label: "Ball with gravity", id: "ballWithGravity", constructor: _scenes_ballWithGravity__WEBPACK_IMPORTED_MODULE_6__["BallWithGravity"] }, { label: "Constant speed following", id: "constantSpeedFollowing", constructor: _scenes_constantSpeedFollowing__WEBPACK_IMPORTED_MODULE_7__["ConstantSpeedFollowing"] }, { label: "Rotate around a sprite", id: "rotateAroundSprite", constructor: _scenes_rotateAroundSprite__WEBPACK_IMPORTED_MODULE_8__["RotateAroundSprite"] }, { label: "Rotate around a point", id: "rotateAroundPoint", constructor: _scenes_rotateAroundPoint__WEBPACK_IMPORTED_MODULE_9__["RotateAroundPoint"] }, { label: "Create tank", id: "tank", constructor: _scenes_tank__WEBPACK_IMPORTED_MODULE_10__["Tank"] }, { label: "Create button", id: "createButton", constructor: _scenes_createButton__WEBPACK_IMPORTED_MODULE_11__["CreateButton"] }, { label: "Interactive sprite", id: "interactiveSprite", constructor: _scenes_interactiveSprite__WEBPACK_IMPORTED_MODULE_12__["InteractiveSprite"] }, { label: "Drag and drop", id: "dragAndDrop", constructor: _scenes_dragAndDrop__WEBPACK_IMPORTED_MODULE_13__["DragAndDrop"] }, { label: "Treasure hunter", id: "treasureHunter", constructor: _scenes_treasureHunter__WEBPACK_IMPORTED_MODULE_14__["TreasureHunter"] }, { label: "Collision between point and shape", id: "pointAndShapeCollision", constructor: _scenes_pointAndShapeCollision__WEBPACK_IMPORTED_MODULE_15__["PointAndShapeCollision"] }, { label: "Collision between rectangles", id: "rectCollision", constructor: _scenes_rectCollision__WEBPACK_IMPORTED_MODULE_16__["RectCollision"] }, { label: "Rectangle push", id: "rectanglePush", constructor: _scenes_rectanglePush__WEBPACK_IMPORTED_MODULE_22__["RectanglePush"] }, { label: "Collision between circles", id: "circleCollision", constructor: _scenes_circleCollision__WEBPACK_IMPORTED_MODULE_17__["CircleCollision"] }, { label: "Collision between circle and rect", id: "circleAndRectCollision", constructor: _scenes_circleAndRectCollision__WEBPACK_IMPORTED_MODULE_18__["CircleAndRectCollision"] }, { label: "Moving circles collision", id: "movingCirclesCollision", constructor: _scenes_movingCirclesCollision__WEBPACK_IMPORTED_MODULE_19__["MovingCirclesCollision"] }, { label: "Moving and stat circles collision", id: "movingAndStatCircles", constructor: _scenes_movingAndStatCircles__WEBPACK_IMPORTED_MODULE_20__["MovingAndStatCircles"] }, { label: "Moving and stat rectangles", id: "movingCircleAndStatRects", constructor: _scenes_movingCircleAndStatRects__WEBPACK_IMPORTED_MODULE_21__["MovingCircleAndStatRects"] }, { label: "Particle emitter", id: "particleEmitter", constructor: _scenes_particleEmitter__WEBPACK_IMPORTED_MODULE_23__["ParticleEmitter"] }, { label: "Flappy fairy", id: "flappyFairy", constructor: _scenes_flappyFairy__WEBPACK_IMPORTED_MODULE_24__["FlappyFairy"] }, { label: "Setup music", id: "setupMusic", constructor: _scenes_setupMusic__WEBPACK_IMPORTED_MODULE_25__["SetupMusic"] }];

//This `setup` function will run when the image has loaded
function start() {
    _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__["stage"].width = canvas.width;
    _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__["stage"].height = canvas.height;

    const scenesManager = new _scenes_allScenes__WEBPACK_IMPORTED_MODULE_0__["ScenesManager"](_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__["stage"], scenesConfig);
    const sceneSelector = document.getElementById("sceneSelect");

    sceneSelector.onchange = function () {
        const selectedScene = sceneSelector.value;

        scenesManager.hideAll();

        if (scenesManager[selectedScene]) {
            scenesManager.showScene(selectedScene);
            state = scenesManager.getSceneUpdateFunc(selectedScene);
        } else {
            state = function state() {
                //stub, to be overridden
            };
        }
    };

    gameLoop();

    function state() {
        //stub, to be overridden
    }

    function gameLoop() {
        requestAnimationFrame(gameLoop);
        state();
        Object(_customPixi_render__WEBPACK_IMPORTED_MODULE_3__["render"])(canvas, ctx);
    }
}

/***/ }),

/***/ "./src/scenes/accelerationAndFrictionBall.js":
/*!***************************************************!*\
  !*** ./src/scenes/accelerationAndFrictionBall.js ***!
  \***************************************************/
/*! exports provided: AccelerationAndFrictionBall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccelerationAndFrictionBall", function() { return AccelerationAndFrictionBall; });
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _customPixi_Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customPixi/Circle */ "./src/customPixi/Circle.js");




class AccelerationAndFrictionBall {
        constructor() {

                this.ball = Object(_customPixi_Circle__WEBPACK_IMPORTED_MODULE_2__["circle"])(32, "gray", "black", 2, 160, 180);

                this.ball.vx = 0;
                this.ball.vy = 0;

                this.ball.accelerationX = 0.3;
                this.ball.accelerationY = -0.3;
                this.ball.frictionX = 1;
                this.ball.frictionY = 1;

                this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_0__["group"])(this.ball);
                this.visible = true;
        }

        update() {
                this.ball.vx += this.ball.accelerationX;
                this.ball.vy += this.ball.accelerationY;

                this.ball.vx *= this.ball.frictionX;
                this.ball.vy *= this.ball.frictionY;

                this.ball.x += this.ball.vx;
                this.ball.y += this.ball.vy;

                if (this.ball.x < 0 || this.ball.x + this.ball.diameter > _index__WEBPACK_IMPORTED_MODULE_1__["canvas"].width) {

                        this.ball.frictionX = 0.98;
                        this.ball.frictionY = 0.98;

                        this.ball.accelerationX = 0;
                        this.ball.accelerationY = 0;

                        this.ball.vx = -this.ball.vx;
                }

                if (this.ball.y < 0 || this.ball.y + this.ball.diameter > _index__WEBPACK_IMPORTED_MODULE_1__["canvas"].height) {

                        this.ball.frictionX = 0.98;
                        this.ball.frictionY = 0.98;

                        this.ball.accelerationX = 0;
                        this.ball.accelerationY = 0;

                        this.ball.vy = -this.ball.vy;
                }

                this.scene.visible = this.visible;
        }
}

/***/ }),

/***/ "./src/scenes/allScenes.js":
/*!*********************************!*\
  !*** ./src/scenes/allScenes.js ***!
  \*********************************/
/*! exports provided: ScenesManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScenesManager", function() { return ScenesManager; });
class ScenesManager {
    constructor(stage, scenesConfigs) {
        const scenesSelector = document.getElementById("sceneSelect");

        this._allScenes = [];

        scenesConfigs.forEach(sceneConfig => {
            const scene = new sceneConfig.constructor(stage);

            this[sceneConfig.id] = scene;
            this._allScenes.push(scene);

            scenesSelector.innerHTML += `<option value=${sceneConfig.id}>${sceneConfig.label}</option>`;
        });

        this.hideAll();
    }

    hideAll() {
        this._allScenes.forEach(scene => {
            scene.visible = false;
            scene.update();
        });
    }

    showScene(sceneName) {
        this[sceneName].visible = true;
    }

    getSceneUpdateFunc(sceneName) {
        const scene = this[sceneName];

        return scene.update.bind(scene);
    }
}

/***/ }),

/***/ "./src/scenes/ballWithGravity.js":
/*!***************************************!*\
  !*** ./src/scenes/ballWithGravity.js ***!
  \***************************************/
/*! exports provided: BallWithGravity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BallWithGravity", function() { return BallWithGravity; });
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");
/* harmony import */ var _customPixi_Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customPixi/Circle */ "./src/customPixi/Circle.js");
/* harmony import */ var _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPixi/DisplayObject */ "./src/customPixi/DisplayObject.js");





class BallWithGravity {
    constructor() {

        this.ball = Object(_customPixi_Circle__WEBPACK_IMPORTED_MODULE_2__["circle"])(32, "gray", "black", 2, 96, 128);
        this.ball.vx = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["randomInt"])(10, 20);
        this.ball.vy = -Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["randomInt"])(10, 20);

        this.ball.gravity = 0.3;
        this.ball.frictionX = 1;
        this.ball.frictionY = 0;
        this.ball.mass = 1.3;

        this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_0__["group"])(this.ball);
        this.visible = true;
    }

    update() {
        this.ball.vy += this.ball.gravity;
        this.ball.vx *= this.ball.frictionX;

        this.ball.x += this.ball.vx;
        this.ball.y += this.ball.vy;
        let collision = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["contain"])(this.ball, _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_3__["stage"].localBounds, true);

        if (collision === "bottom") {
            this.ball.frictionX = 0.96;
        } else {
            this.ball.frictionX = 1;
        }

        this.scene.visible = this.visible;
    }

}

/***/ }),

/***/ "./src/scenes/circleAndRectCollision.js":
/*!**********************************************!*\
  !*** ./src/scenes/circleAndRectCollision.js ***!
  \**********************************************/
/*! exports provided: CircleAndRectCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleAndRectCollision", function() { return CircleAndRectCollision; });
/* harmony import */ var _customPixi_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/Text */ "./src/customPixi/Text.js");
/* harmony import */ var _customPixi_collision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customPixi/collision */ "./src/customPixi/collision.js");
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPixi/DisplayObject */ "./src/customPixi/DisplayObject.js");
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _customPixi_Circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customPixi/Circle */ "./src/customPixi/Circle.js");
/* harmony import */ var _customPixi_Rectangle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../customPixi/Rectangle */ "./src/customPixi/Rectangle.js");









class CircleAndRectCollision {
    constructor(stage) {
        this.pointer = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_4__["makePointer"])(_index__WEBPACK_IMPORTED_MODULE_5__["canvas"]);

        this.ball = Object(_customPixi_Circle__WEBPACK_IMPORTED_MODULE_6__["circle"])(64, "red");
        this.ball.draggable = true;
        stage.putCenter(this.ball, -70, 0);

        this.box = Object(_customPixi_Rectangle__WEBPACK_IMPORTED_MODULE_7__["rectangle"])(64, 64, "blue");
        this.box.draggable = true;
        stage.putCenter(this.box, 70, 0);

        this.message = Object(_customPixi_Text__WEBPACK_IMPORTED_MODULE_0__["text"])("", "12px puzzler", "black", 8, 8);

        this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_2__["group"])(this.ball, this.box, this.message);
        this.visible = false;
    }

    update() {
        this.pointer.updateDragAndDrop(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_3__["draggableSprites"]);

        let collision = Object(_customPixi_collision__WEBPACK_IMPORTED_MODULE_1__["hitTestCircleRectangle"])(this.ball, this.box);

        if (collision) {
            this.message.content = collision;
        } else {
            this.message.content = "No collision...";
        }

        if (this.visible) {
            if (!this.scene.visible) {
                console.info(`use mouse button to drag items and to check for collision between them`);
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }
}

/***/ }),

/***/ "./src/scenes/circleCollision.js":
/*!***************************************!*\
  !*** ./src/scenes/circleCollision.js ***!
  \***************************************/
/*! exports provided: CircleCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleCollision", function() { return CircleCollision; });
/* harmony import */ var _customPixi_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/Text */ "./src/customPixi/Text.js");
/* harmony import */ var _customPixi_collision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customPixi/collision */ "./src/customPixi/collision.js");
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPixi/DisplayObject */ "./src/customPixi/DisplayObject.js");
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _customPixi_Circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customPixi/Circle */ "./src/customPixi/Circle.js");








class CircleCollision {
    constructor(stage) {
        this.pointer = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_4__["makePointer"])(_index__WEBPACK_IMPORTED_MODULE_5__["canvas"]);

        this.blueBall = Object(_customPixi_Circle__WEBPACK_IMPORTED_MODULE_6__["circle"])(64, "blue");
        this.blueBall.draggable = true;
        stage.putCenter(this.blueBall, -70, 0);

        this.redBall = Object(_customPixi_Circle__WEBPACK_IMPORTED_MODULE_6__["circle"])(64, "red");
        this.redBall.draggable = true;
        stage.putCenter(this.redBall, 70, 0);

        this.message = Object(_customPixi_Text__WEBPACK_IMPORTED_MODULE_0__["text"])("", "12px puzzler", "black", 8, 8);

        this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_2__["group"])(this.blueBall, this.redBall, this.message);
        this.visible = false;
    }

    update() {
        this.pointer.updateDragAndDrop(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_3__["draggableSprites"]);

        if (Object(_customPixi_collision__WEBPACK_IMPORTED_MODULE_1__["hitTestCircle"])(this.blueBall, this.redBall)) {
            this.message.content = "Collision!";
        } else {
            this.message.content = "No collision...";
        }

        if (this.visible) {
            if (!this.scene.visible) {
                console.info(`use mouse button to drag items and to check for collision between them`);
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }
}

/***/ }),

/***/ "./src/scenes/constantSpeedFollowing.js":
/*!**********************************************!*\
  !*** ./src/scenes/constantSpeedFollowing.js ***!
  \**********************************************/
/*! exports provided: ConstantSpeedFollowing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantSpeedFollowing", function() { return ConstantSpeedFollowing; });
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _customPixi_Circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPixi/Circle */ "./src/customPixi/Circle.js");
/* harmony import */ var _customPixi_Line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customPixi/Line */ "./src/customPixi/Line.js");
/* harmony import */ var _customPixi_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customPixi/Text */ "./src/customPixi/Text.js");







class ConstantSpeedFollowing {
        constructor(stage) {
                this.pointer = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["makePointer"])(_index__WEBPACK_IMPORTED_MODULE_2__["canvas"]);

                this.message = Object(_customPixi_Text__WEBPACK_IMPORTED_MODULE_5__["text"])("", "12px puzzler", "black", 8, 8);
                this.c1 = Object(_customPixi_Circle__WEBPACK_IMPORTED_MODULE_3__["circle"])(32, "gray");
                stage.putCenter(this.c1, -32, -32);

                this.c2 = Object(_customPixi_Circle__WEBPACK_IMPORTED_MODULE_3__["circle"])(32, "gray");
                stage.putCenter(this.c2, 32, 32);

                this.connection = Object(_customPixi_Line__WEBPACK_IMPORTED_MODULE_4__["line"])("black", 2, this.c1.centerX, this.c1.centerY, this.c2.centerX, this.c2.centerY);

                this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_0__["group"])(this.c1, this.c2, this.message, this.connection);
                this.visible = false;
        }

        update() {
                Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["followConstant"])(this.c2, this.pointer, 3);

                this.connection.ax = this.c1.centerX;
                this.connection.ay = this.c1.centerY;
                this.connection.bx = this.c2.centerX;
                this.connection.by = this.c2.centerY;

                let distanceBetweenCircles = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["distance"])(this.c1, this.c2);

                this.message.content = `Distance :${Math.floor(distanceBetweenCircles)}`;

                if (this.visible) {
                        if (!this.scene.visible) {
                                console.info(`use mouse arrow to see constant speed following effect`);
                        }
                        this.scene.visible = true;
                } else {
                        this.scene.visible = false;
                }
        }
}

/***/ }),

/***/ "./src/scenes/createButton.js":
/*!************************************!*\
  !*** ./src/scenes/createButton.js ***!
  \************************************/
/*! exports provided: CreateButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateButton", function() { return CreateButton; });
/* harmony import */ var _customPixi_assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/assets */ "./src/customPixi/assets.js");
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customPixi/DisplayObject */ "./src/customPixi/DisplayObject.js");
/* harmony import */ var _customPixi_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customPixi/Text */ "./src/customPixi/Text.js");







class CreateButton {
    constructor(stage) {
        this.pointer = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_2__["makePointer"])(_index__WEBPACK_IMPORTED_MODULE_3__["canvas"]);

        let buttonFrames = [_customPixi_assets__WEBPACK_IMPORTED_MODULE_0__["assets"]["up.png"], _customPixi_assets__WEBPACK_IMPORTED_MODULE_0__["assets"]["over.png"], _customPixi_assets__WEBPACK_IMPORTED_MODULE_0__["assets"]["down.png"]];

        this.playButton = Object(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__["button"])(buttonFrames);
        this.playButton.interacrive = true;
        stage.putCenter(this.playButton);

        this.playButton.over = () => console.log("over");
        this.playButton.out = () => console.log("out");
        this.playButton.press = () => console.log("pressed");
        this.playButton.release = () => console.log("released");
        this.playButton.tap = () => console.log("tapped");

        this.stateMessage = Object(_customPixi_Text__WEBPACK_IMPORTED_MODULE_5__["text"])("", "18px puzzler", "black", 18, 12);
        this.actionMessage = Object(_customPixi_Text__WEBPACK_IMPORTED_MODULE_5__["text"])("", "18px puzzler", "black", 18, 36);

        this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_1__["group"])(this.playButton, this.stateMessage, this.actionMessage);
        this.visible = false;
    }

    update() {
        if (_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__["buttons"].length > 0) {
            _index__WEBPACK_IMPORTED_MODULE_3__["canvas"].style.cursor = "auto";

            _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__["buttons"].forEach(button => {
                button.update(this.pointer, _index__WEBPACK_IMPORTED_MODULE_3__["canvas"]);

                if (button.state === "over" || button.state === "down") {
                    if (button.parent !== undefined) {
                        _index__WEBPACK_IMPORTED_MODULE_3__["canvas"].style.cursor = "pointer";
                    }
                }
            });
        }

        this.stateMessage.content = `State: ${this.playButton.state}`;
        this.actionMessage.content = `Action: ${this.playButton.action}`;

        if (this.visible) {
            if (!this.scene.visible) {
                console.info(`press and release the button`);
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }
}

/***/ }),

/***/ "./src/scenes/dragAndDrop.js":
/*!***********************************!*\
  !*** ./src/scenes/dragAndDrop.js ***!
  \***********************************/
/*! exports provided: DragAndDrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDrop", function() { return DragAndDrop; });
/* harmony import */ var _customPixi_assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/assets */ "./src/customPixi/assets.js");
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customPixi/DisplayObject */ "./src/customPixi/DisplayObject.js");
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./src/index.js");







class DragAndDrop {
    constructor(stage) {
        this.pointer = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["makePointer"])(_index__WEBPACK_IMPORTED_MODULE_4__["canvas"]);

        this.captain = Object(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_2__["sprite"])(_customPixi_assets__WEBPACK_IMPORTED_MODULE_0__["assets"]["captain.png"]);
        stage.putCenter(this.captain, -64, -64);

        this.hulk = Object(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_2__["sprite"])(_customPixi_assets__WEBPACK_IMPORTED_MODULE_0__["assets"]["hulk.png"]);
        stage.putCenter(this.hulk);

        this.ironMan = Object(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_2__["sprite"])(_customPixi_assets__WEBPACK_IMPORTED_MODULE_0__["assets"]["ironMan.png"]);
        stage.putCenter(this.ironMan, 64, 64);

        this.addDraggable(this.captain, this.hulk, this.ironMan);
        this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_1__["group"])(this.captain, this.hulk, this.ironMan);
        this.visible = false;
    }

    update() {
        this.pointer.updateDragAndDrop(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_2__["draggableSprites"]);

        if (this.visible) {
            if (!this.scene.visible) {
                console.info(`use mouse button to drag items`);
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }

    addDraggable(...sprites) {
        sprites.forEach(sprite => {
            sprite.draggable = true;
        });
    }
}

/***/ }),

/***/ "./src/scenes/flappyFairy.js":
/*!***********************************!*\
  !*** ./src/scenes/flappyFairy.js ***!
  \***********************************/
/*! exports provided: FlappyFairy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlappyFairy", function() { return FlappyFairy; });
/* harmony import */ var _customPixi_particles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/particles */ "./src/customPixi/particles.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customPixi/DisplayObject */ "./src/customPixi/DisplayObject.js");
/* harmony import */ var _customPixi_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customPixi/assets */ "./src/customPixi/assets.js");
/* harmony import */ var _customPixi_collision__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customPixi/collision */ "./src/customPixi/collision.js");








class FlappyFairy {
    constructor(stage) {

        this.pointer = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_2__["makePointer"])(_index__WEBPACK_IMPORTED_MODULE_1__["canvas"]);
        this.sky = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_2__["tilingSprite"])(_index__WEBPACK_IMPORTED_MODULE_1__["canvas"].width, _index__WEBPACK_IMPORTED_MODULE_1__["canvas"].height, _customPixi_assets__WEBPACK_IMPORTED_MODULE_5__["assets"]["sky.png"]);

        this.blocks = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_3__["group"])();
        this.createPillars();
        this.fairy = this.createFairyFrames();

        this.dustFrames = [_customPixi_assets__WEBPACK_IMPORTED_MODULE_5__["assets"]["pink.png"], _customPixi_assets__WEBPACK_IMPORTED_MODULE_5__["assets"]["yellow.png"], _customPixi_assets__WEBPACK_IMPORTED_MODULE_5__["assets"]["green.png"], _customPixi_assets__WEBPACK_IMPORTED_MODULE_5__["assets"]["violet.png"]];

        this.dust = this.createFairyDust(this.dustFrames);

        this.pointer.tap = () => {
            this.fairy.vy += 1.5;
        };

        this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_3__["group"])(this.sky, this.blocks, this.fairy, this.dust);
        this.stage = stage;
        this.visible = true;
    }

    update() {
        if (_customPixi_particles__WEBPACK_IMPORTED_MODULE_0__["particles"].length > 0) {
            for (let i = _customPixi_particles__WEBPACK_IMPORTED_MODULE_0__["particles"].length - 1; i >= 0; i--) {
                _customPixi_particles__WEBPACK_IMPORTED_MODULE_0__["particles"][i].update();
            }
        }

        if (this.visible) {
            if (!this.scene.visible) {
                console.info(`use mouse button to make FlappyFairy fly up`);
            }
            this.scene.visible = true;
            this.play(this.stage);
        } else {
            this.scene.visible = false;
        }
    }

    createPillars() {
        let gapSize = 4;
        let numberOfPillars = 15;
        for (let i = 0; i < numberOfPillars; i++) {
            let startGapNumber = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_2__["randomInt"])(0, 8 - gapSize);
            if (i > 0 && i % 5 === 0) {
                gapSize -= 1;
            }

            for (let j = 0; j < 8; j++) {
                if (j < startGapNumber || j > startGapNumber + gapSize - 1) {
                    let block = Object(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__["sprite"])(_customPixi_assets__WEBPACK_IMPORTED_MODULE_5__["assets"]["greenBlock.png"]);
                    this.blocks.addChild(block);

                    block.x = i * 384 + 512;
                    block.y = j * 64;
                }
            }

            if (i === numberOfPillars - 1) {
                this.finish = Object(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__["sprite"])(_customPixi_assets__WEBPACK_IMPORTED_MODULE_5__["assets"]["finish.png"]);
                this.blocks.addChild(this.finish);
                this.finish.x = i * 384 + 896;
                this.finish.y = 192;
            }
        }
    }

    createFairyFrames() {
        let fairlyFrames = [_customPixi_assets__WEBPACK_IMPORTED_MODULE_5__["assets"]["0.png"], _customPixi_assets__WEBPACK_IMPORTED_MODULE_5__["assets"]["1.png"], _customPixi_assets__WEBPACK_IMPORTED_MODULE_5__["assets"]["2.png"]];

        let fairy = Object(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__["sprite"])(fairlyFrames);
        fairy.fps = 24;
        fairy.setPosition(132, 32);
        fairy.vy = 0;
        fairy.oldVy = 0;

        return fairy;
    }

    createFairyDust(dustFrames) {
        return Object(_customPixi_particles__WEBPACK_IMPORTED_MODULE_0__["emitter"])(300, () => Object(_customPixi_particles__WEBPACK_IMPORTED_MODULE_0__["particleEffect"])(this.fairy.x + 8, this.fairy.y + this.fairy.halfHeight + 8, () => Object(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__["sprite"])(dustFrames), 3, 0, true, 2.4, 3.6, 12, 18, 1, 2, 0.005, 0.01, 0.005, 0.01, 0.05, 0.1));
    }

    play(stage) {
        this.sky.tileX -= 1;

        if (this.finish.gx > 80) {
            this.blocks.x -= 2;
        }

        this.fairy.vy += -0.05;
        this.fairy.y -= this.fairy.vy;

        if (this.fairy.vy > this.fairy.oldVy) {
            if (!this.fairy.playing) {
                this.fairy.play();
                if (this.fairy.visible && this.visible && !this.dust.playing) {
                    this.dust.play();
                }
            }
        }

        if (this.fairy.vy < 0 && this.fairy.oldVy > 0) {
            if (this.fairy.playing) {
                this.fairy.stop();
                this.fairy.show(0);
                if (this.dust.playing) {
                    this.dust.stop();
                }
            }
        }

        this.fairy.oldVy = this.fairy.vy;

        let fairyVsStage = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_2__["contain"])(this.fairy, stage.localBounds);
        if (fairyVsStage === "bottom" || fairyVsStage === "top") {
            this.fairy.vy = 0;
        }

        let fairyVsBlock = this.blocks.children.some(block => {
            return Object(_customPixi_collision__WEBPACK_IMPORTED_MODULE_6__["hitTestRectangle"])(this.fairy, block, true);
        });

        if (fairyVsBlock && this.fairy.visible) {
            this.fairy.visible = false;

            Object(_customPixi_particles__WEBPACK_IMPORTED_MODULE_0__["particleEffect"])(this.fairy.centerX, this.fairy.centerY, () => Object(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__["sprite"])(this.dustFrames), 20, 0, false, 0, 6.28, 16, 32, 1, 3);

            this.dust.stop();
            Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_2__["wait"])(3000).then(() => this.reset());
        }
    }

    reset() {
        this.fairy.visible = true;
        this.fairy.y = 32;
        if (this.visible) {
            this.dust.play();
        }
        this.blocks.x = 0;
    }
}

/***/ }),

/***/ "./src/scenes/interactiveSprite.js":
/*!*****************************************!*\
  !*** ./src/scenes/interactiveSprite.js ***!
  \*****************************************/
/*! exports provided: InteractiveSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveSprite", function() { return InteractiveSprite; });
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _customPixi_Circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPixi/Circle */ "./src/customPixi/Circle.js");





class InteractiveSprite {
    constructor(stage) {
        this.pointer = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["makePointer"])(_index__WEBPACK_IMPORTED_MODULE_2__["canvas"]);

        this.ball = Object(_customPixi_Circle__WEBPACK_IMPORTED_MODULE_3__["circle"])(128, "red", "blue", 16);
        stage.putCenter(this.ball);
        this.ball.interacrive = true;

        this.ball.press = () => {
            let colors = ["red", "blue", "yellow", "yellowGreen", "black", "orange"];

            this.ball.fillStyle = colors[Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["randomInt"])(0, 5)];
            this.ball.strokeStyle = colors[Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["randomInt"])(0, 5)];
        };

        this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_0__["group"])(this.ball);
        this.visible = false;
    }

    update() {
        _index__WEBPACK_IMPORTED_MODULE_2__["canvas"].style.cursor = "auto";
        this.ball.update(this.pointer, _index__WEBPACK_IMPORTED_MODULE_2__["canvas"]);
        if (this.ball.state === "over" || this.ball.state === "down") {
            if (this.ball.parent !== undefined) {
                _index__WEBPACK_IMPORTED_MODULE_2__["canvas"].style.cursor = "pointer";
            }
        }

        if (this.visible) {
            if (!this.scene.visible) {
                console.info(`hit the circle to change it`);
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }
}

/***/ }),

/***/ "./src/scenes/movingAndStatCircles.js":
/*!********************************************!*\
  !*** ./src/scenes/movingAndStatCircles.js ***!
  \********************************************/
/*! exports provided: MovingAndStatCircles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovingAndStatCircles", function() { return MovingAndStatCircles; });
/* harmony import */ var _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/DisplayObject */ "./src/customPixi/DisplayObject.js");
/* harmony import */ var _customPixi_collision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customPixi/collision */ "./src/customPixi/collision.js");
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _customPixi_Line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customPixi/Line */ "./src/customPixi/Line.js");
/* harmony import */ var _customPixi_Circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customPixi/Circle */ "./src/customPixi/Circle.js");








class MovingAndStatCircles {
    constructor() {
        this.pointer = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["makePointer"])(_index__WEBPACK_IMPORTED_MODULE_4__["canvas"]);

        this.ball = Object(_customPixi_Circle__WEBPACK_IMPORTED_MODULE_6__["circle"])(18, "red", "black", 1, 96, 25);

        this.ball.vx = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["randomInt"])(5, 15);
        this.ball.vy = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["randomInt"])(5, 15);

        this.ball.gravity = 0.3;
        this.ball.frictionX = 1;
        this.ball.frictionY = 0;
        this.ball.mass = 1.3;

        this.pegs = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["grid"])(10, 9, 48, 48, true, 0, 0, () => {
            let peg = Object(_customPixi_Circle__WEBPACK_IMPORTED_MODULE_6__["circle"])(Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["randomInt"])(8, 32));
            let colors = ["#FFABAB", "#FFDAAB", "#DDFFAB", "#ABE4FF", "#D9ABFF"];

            peg.fillStyle = colors[Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["randomInt"])(0, 4)];
            return peg;
        });
        this.pegs.setPosition(16, 48);

        this.sling = Object(_customPixi_Line__WEBPACK_IMPORTED_MODULE_5__["line"])("yellow", 4);
        this.sling.visible = false;

        this.capturedMarble = null;

        this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_2__["group"])(this.pegs, this.sling, this.ball);
        this.visible = false;
    }

    update() {

        this.ball.vy += this.ball.gravity;
        this.ball.vx *= this.ball.frictionX;

        this.ball.x += this.ball.vx;
        this.ball.y += this.ball.vy;

        let collision = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["contain"])(this.ball, _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_0__["stage"].localBounds, true);
        if (collision === "bottom") {
            this.ball.frictionX = 0.96;
        } else {
            this.ball.frictionX = 1;
        }

        if (this.capturedMarble !== null) {
            this.sling.visible = true;
            this.sling.ax = this.capturedMarble.centerX;
            this.sling.ay = this.capturedMarble.centerY;
            this.sling.bx = this.pointer.x;
            this.sling.by = this.pointer.y;
        }

        if (this.pointer.isDown && this.capturedMarble === null) {
            if (Object(_customPixi_collision__WEBPACK_IMPORTED_MODULE_1__["hitTestPoint"])(this.pointer, this.ball)) {
                this.capturedMarble = this.ball;
                this.capturedMarble.vx = 0;
                this.capturedMarble.vy = 0;
            }
        }

        if (this.pointer.isUp) {
            this.sling.visible = false;

            if (this.capturedMarble !== null) {
                this.sling.length = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["distance"])(this.capturedMarble, this.pointer);
                this.sling.angle = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["angle"])(this.pointer, this.capturedMarble);

                let speed = 5;
                this.capturedMarble.vx = Math.cos(this.sling.angle) * this.sling.length / speed;
                this.capturedMarble.vy = Math.sin(this.sling.angle) * this.sling.length / speed;

                this.capturedMarble = null;
            }
        }

        this.pegs.children.forEach(peg => {
            Object(_customPixi_collision__WEBPACK_IMPORTED_MODULE_1__["circleCollision"])(this.ball, peg, true, true);
        });

        if (this.visible) {
            if (!this.scene.visible) {
                console.info(`push on the red circle then move mouse aside and release, to make it move`);
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }
}

/***/ }),

/***/ "./src/scenes/movingCircleAndStatRects.js":
/*!************************************************!*\
  !*** ./src/scenes/movingCircleAndStatRects.js ***!
  \************************************************/
/*! exports provided: MovingCircleAndStatRects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovingCircleAndStatRects", function() { return MovingCircleAndStatRects; });
/* harmony import */ var _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/DisplayObject */ "./src/customPixi/DisplayObject.js");
/* harmony import */ var _customPixi_collision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customPixi/collision */ "./src/customPixi/collision.js");
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _customPixi_Line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customPixi/Line */ "./src/customPixi/Line.js");
/* harmony import */ var _customPixi_Circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customPixi/Circle */ "./src/customPixi/Circle.js");
/* harmony import */ var _customPixi_Rectangle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../customPixi/Rectangle */ "./src/customPixi/Rectangle.js");









class MovingCircleAndStatRects {
    constructor() {
        this.pointer = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["makePointer"])(_index__WEBPACK_IMPORTED_MODULE_4__["canvas"]);

        this.ball = Object(_customPixi_Circle__WEBPACK_IMPORTED_MODULE_6__["circle"])(18, "red", "black", 1, 96, 25);

        this.ball.vx = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["randomInt"])(5, 15);
        this.ball.vy = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["randomInt"])(5, 15);

        this.ball.gravity = 0.3;
        this.ball.frictionX = 1;
        this.ball.frictionY = 0;
        this.ball.mass = 1.3;

        this.bricks = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["grid"])(6, 5, 80, 80, true, 0, 0, () => {
            let peg = Object(_customPixi_Rectangle__WEBPACK_IMPORTED_MODULE_7__["rectangle"])(Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["randomInt"])(12, 48), Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["randomInt"])(8, 32));
            let colors = ["#FFABAB", "#FFDAAB", "#DDFFAB", "#ABE4FF", "#D9ABFF"];

            peg.fillStyle = colors[Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["randomInt"])(0, 4)];
            return peg;
        });
        this.bricks.setPosition(16, 48);

        this.sling = Object(_customPixi_Line__WEBPACK_IMPORTED_MODULE_5__["line"])("yellow", 4);
        this.sling.visible = false;

        this.capturedMarble = null;

        this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_2__["group"])(this.bricks, this.sling, this.ball);
        this.visible = false;
    }

    update() {

        this.ball.vy += this.ball.gravity;
        this.ball.vx *= this.ball.frictionX;

        this.ball.x += this.ball.vx;
        this.ball.y += this.ball.vy * this.ball.frictionY;

        let collision = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["contain"])(this.ball, _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_0__["stage"].localBounds, true);
        if (collision === "bottom" || collision === "top") {
            this.ball.frictionX = 0.7;
        } else {
            this.ball.frictionX = 1;
        }

        if (collision === "left" || collision === "right") {
            this.ball.frictionY = 0.7;
        } else {
            this.ball.frictionY = 1;
        }

        if (this.capturedMarble !== null) {
            this.sling.visible = true;
            this.sling.ax = this.capturedMarble.centerX;
            this.sling.ay = this.capturedMarble.centerY;
            this.sling.bx = this.pointer.x;
            this.sling.by = this.pointer.y;
        }

        if (this.pointer.isDown && this.capturedMarble === null) {
            if (Object(_customPixi_collision__WEBPACK_IMPORTED_MODULE_1__["hitTestPoint"])(this.pointer, this.ball)) {
                this.capturedMarble = this.ball;
                this.capturedMarble.vx = 0;
                this.capturedMarble.vy = 0;
            }
        }

        if (this.pointer.isUp) {
            this.sling.visible = false;

            if (this.capturedMarble !== null) {
                this.sling.length = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["distance"])(this.capturedMarble, this.pointer);
                this.sling.angle = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_3__["angle"])(this.pointer, this.capturedMarble);

                let speed = 5;
                this.capturedMarble.vx = Math.cos(this.sling.angle) * this.sling.length / speed;
                this.capturedMarble.vy = Math.sin(this.sling.angle) * this.sling.length / speed;

                this.capturedMarble = null;
            }
        }

        this.bricks.children.forEach(brick => {
            Object(_customPixi_collision__WEBPACK_IMPORTED_MODULE_1__["circleRectangleCollision"])(this.ball, brick, true, true);
        });

        if (this.visible) {
            if (!this.scene.visible) {
                console.info(`push on the red circle then move mouse aside and release, to make it move`);
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }
}

/***/ }),

/***/ "./src/scenes/movingCirclesCollision.js":
/*!**********************************************!*\
  !*** ./src/scenes/movingCirclesCollision.js ***!
  \**********************************************/
/*! exports provided: MovingCirclesCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovingCirclesCollision", function() { return MovingCirclesCollision; });
/* harmony import */ var _customPixi_assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/assets */ "./src/customPixi/assets.js");
/* harmony import */ var _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customPixi/DisplayObject */ "./src/customPixi/DisplayObject.js");
/* harmony import */ var _customPixi_collision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customPixi/collision */ "./src/customPixi/collision.js");
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _customPixi_Line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customPixi/Line */ "./src/customPixi/Line.js");









class MovingCirclesCollision {
    constructor() {
        this.pointer = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_4__["makePointer"])(_index__WEBPACK_IMPORTED_MODULE_5__["canvas"]);

        this.marbles = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_4__["grid"])(7, 7, 64, 64, true, 0, 0, () => {
            let marbleFrames = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_4__["frames"])(_customPixi_assets__WEBPACK_IMPORTED_MODULE_0__["assets"]["src/img/marbles.png"], [[0, 0], [32, 0], [64, 0], [0, 32], [32, 32], [64, 32]], 32, 32);

            let marble = Object(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_1__["sprite"])(marbleFrames);
            marble.gotoAndStop(Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_4__["randomInt"])(0, 5));
            marble.circular = true;

            let sizes = [8, 12, 16, 20, 24, 28, 32];
            marble.diameter = sizes[Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_4__["randomInt"])(0, 6)];

            marble.vx = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_4__["randomInt"])(-10, 10);
            marble.vy = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_4__["randomInt"])(-10, 10);

            marble.frictionX = 0.99;
            marble.frictionY = 0.99;
            marble.mass = 0.75 + marble.diameter / 32;

            return marble;
        });

        this.sling = Object(_customPixi_Line__WEBPACK_IMPORTED_MODULE_6__["line"])("yellow", 4);
        this.sling.visible = false;

        this.capturedMarble = null;

        this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_3__["group"])(this.marbles, this.sling);
        this.visible = false;
    }

    update() {

        if (this.capturedMarble !== null) {
            this.sling.visible = true;
            this.sling.ax = this.capturedMarble.centerX;
            this.sling.ay = this.capturedMarble.centerY;
            this.sling.bx = this.pointer.x;
            this.sling.by = this.pointer.y;
        }

        if (this.pointer.isUp) {
            this.sling.visible = false;

            if (this.capturedMarble !== null) {
                this.sling.length = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_4__["distance"])(this.capturedMarble, this.pointer);
                this.sling.angle = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_4__["angle"])(this.pointer, this.capturedMarble);

                let speed = 5;
                this.capturedMarble.vx = Math.cos(this.sling.angle) * this.sling.length / speed;
                this.capturedMarble.vy = Math.sin(this.sling.angle) * this.sling.length / speed;

                this.capturedMarble = null;
            }
        }

        this.marbles.children.forEach(marble => {
            if (this.pointer.isDown && this.capturedMarble === null) {
                if (Object(_customPixi_collision__WEBPACK_IMPORTED_MODULE_2__["hitTestPoint"])(this.pointer, marble)) {
                    this.capturedMarble = marble;
                    this.capturedMarble.vx = 0;
                    this.capturedMarble.vy = 0;
                }
            }

            marble.vx *= marble.frictionX;
            marble.vy *= marble.frictionY;

            marble.x += marble.vx;
            marble.y += marble.vy;

            Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_4__["contain"])(marble, _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_1__["stage"].localBounds, true);
        });

        for (let i = 0; i < this.marbles.children.length; i++) {
            let c1 = this.marbles.children[i];

            for (let j = i + 1; j < this.marbles.children.length; j++) {
                let c2 = this.marbles.children[j];
                Object(_customPixi_collision__WEBPACK_IMPORTED_MODULE_2__["movingCircleCollision"])(c1, c2);
            }
        }

        if (this.visible) {
            if (!this.scene.visible) {
                console.info(`push on any circle then move mouse aside and release, to make it move`);
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }
}

/***/ }),

/***/ "./src/scenes/particleEmitter.js":
/*!***************************************!*\
  !*** ./src/scenes/particleEmitter.js ***!
  \***************************************/
/*! exports provided: ParticleEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticleEmitter", function() { return ParticleEmitter; });
/* harmony import */ var _customPixi_particles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/particles */ "./src/customPixi/particles.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customPixi/DisplayObject */ "./src/customPixi/DisplayObject.js");
/* harmony import */ var _customPixi_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customPixi/assets */ "./src/customPixi/assets.js");







class ParticleEmitter {
    constructor() {

        this.pointer = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_2__["makePointer"])(_index__WEBPACK_IMPORTED_MODULE_1__["canvas"]);

        this.particleStream = Object(_customPixi_particles__WEBPACK_IMPORTED_MODULE_0__["emitter"])(100, () => Object(_customPixi_particles__WEBPACK_IMPORTED_MODULE_0__["particleEffect"])(this.pointer.x, this.pointer.y, () => Object(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__["sprite"])(Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_2__["frame"])(_customPixi_assets__WEBPACK_IMPORTED_MODULE_5__["assets"]["src/img/marbles.png"], 0, 64, 32, 32)), 10, 0.1, false, 3.14, 6.28, 16, 32, 2, 5));

        this.pointer.press = () => {
            if (this.scene.visible === true) {
                this.particleStream.play();
            }
        };
        this.pointer.release = () => {
            if (this.scene.visible === true) {
                this.particleStream.stop();
            }
        };

        this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_3__["group"])(this.particleStream);
        this.visible = false;
    }

    update() {
        if (_customPixi_particles__WEBPACK_IMPORTED_MODULE_0__["particles"].length > 0) {
            for (let i = _customPixi_particles__WEBPACK_IMPORTED_MODULE_0__["particles"].length - 1; i >= 0; i--) {
                _customPixi_particles__WEBPACK_IMPORTED_MODULE_0__["particles"][i].update();
            }
        }

        if (this.visible) {
            if (!this.scene.visible) {
                console.info(`push mouse button inside the canvas`);
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }

}

/***/ }),

/***/ "./src/scenes/pointAndShapeCollision.js":
/*!**********************************************!*\
  !*** ./src/scenes/pointAndShapeCollision.js ***!
  \**********************************************/
/*! exports provided: PointAndShapeCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointAndShapeCollision", function() { return PointAndShapeCollision; });
/* harmony import */ var _customPixi_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/Text */ "./src/customPixi/Text.js");
/* harmony import */ var _customPixi_collision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customPixi/collision */ "./src/customPixi/collision.js");
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPixi/DisplayObject */ "./src/customPixi/DisplayObject.js");
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _customPixi_Circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customPixi/Circle */ "./src/customPixi/Circle.js");
/* harmony import */ var _customPixi_Rectangle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../customPixi/Rectangle */ "./src/customPixi/Rectangle.js");









class PointAndShapeCollision {
    constructor(stage) {
        this.pointer = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_4__["makePointer"])(_index__WEBPACK_IMPORTED_MODULE_5__["canvas"]);

        this.box = Object(_customPixi_Rectangle__WEBPACK_IMPORTED_MODULE_7__["rectangle"])(64, 64, "blue");
        stage.putCenter(this.box, -70, 0);

        this.ball = Object(_customPixi_Circle__WEBPACK_IMPORTED_MODULE_6__["circle"])(64, "red");
        stage.putCenter(this.ball, 70, 0);

        this.message = Object(_customPixi_Text__WEBPACK_IMPORTED_MODULE_0__["text"])("", "12px puzzler", "black", 8, 8);

        this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_2__["group"])(this.box, this.ball, this.message);
        this.visible = false;
    }

    update() {
        this.pointer.updateDragAndDrop(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_3__["draggableSprites"]);

        if (Object(_customPixi_collision__WEBPACK_IMPORTED_MODULE_1__["hitTestPoint"])(this.pointer.position, this.ball)) {
            this.message.content = "Ball!";
        } else if (Object(_customPixi_collision__WEBPACK_IMPORTED_MODULE_1__["hitTestPoint"])(this.pointer.position, this.box)) {
            this.message.content = "Box!";
        } else {
            this.message.content = "No collision...";
        }

        if (this.visible) {
            if (!this.scene.visible) {
                console.info(`use mouse arrow to check for collision between mouse and item`);
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }
}

/***/ }),

/***/ "./src/scenes/rectCollision.js":
/*!*************************************!*\
  !*** ./src/scenes/rectCollision.js ***!
  \*************************************/
/*! exports provided: RectCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectCollision", function() { return RectCollision; });
/* harmony import */ var _customPixi_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/Text */ "./src/customPixi/Text.js");
/* harmony import */ var _customPixi_collision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customPixi/collision */ "./src/customPixi/collision.js");
/* harmony import */ var _customPixi_Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customPixi/Rectangle */ "./src/customPixi/Rectangle.js");
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customPixi/DisplayObject */ "./src/customPixi/DisplayObject.js");
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../index */ "./src/index.js");








class RectCollision {
    constructor(stage) {
        this.pointer = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_5__["makePointer"])(_index__WEBPACK_IMPORTED_MODULE_6__["canvas"]);

        this.blueBox = Object(_customPixi_Rectangle__WEBPACK_IMPORTED_MODULE_2__["rectangle"])(64, 64, "blue");
        this.blueBox.draggable = true;
        stage.putCenter(this.blueBox, -70, 0);

        this.redBox = Object(_customPixi_Rectangle__WEBPACK_IMPORTED_MODULE_2__["rectangle"])(64, 64, "red");
        this.redBox.draggable = true;
        stage.putCenter(this.redBox, 70, 0);

        this.message = Object(_customPixi_Text__WEBPACK_IMPORTED_MODULE_0__["text"])("", "12px puzzler", "black", 8, 8);

        this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_3__["group"])(this.blueBox, this.redBox, this.message);
        this.visible = false;
    }

    update() {
        this.pointer.updateDragAndDrop(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__["draggableSprites"]);

        if (Object(_customPixi_collision__WEBPACK_IMPORTED_MODULE_1__["hitTestRectangle"])(this.blueBox, this.redBox)) {
            this.message.content = "Collision!";
        } else {
            this.message.content = "No collision...";
        }

        if (this.visible) {
            if (!this.scene.visible) {
                console.info(`use mouse button to drag items and to check for collision between them`);
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }
}

/***/ }),

/***/ "./src/scenes/rectanglePush.js":
/*!*************************************!*\
  !*** ./src/scenes/rectanglePush.js ***!
  \*************************************/
/*! exports provided: RectanglePush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectanglePush", function() { return RectanglePush; });
/* harmony import */ var _customPixi_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/Text */ "./src/customPixi/Text.js");
/* harmony import */ var _customPixi_collision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customPixi/collision */ "./src/customPixi/collision.js");
/* harmony import */ var _customPixi_Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customPixi/Rectangle */ "./src/customPixi/Rectangle.js");
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customPixi/DisplayObject */ "./src/customPixi/DisplayObject.js");
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../index */ "./src/index.js");








class RectanglePush {
    constructor(stage) {
        this.pointer = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_5__["makePointer"])(_index__WEBPACK_IMPORTED_MODULE_6__["canvas"]);

        this.blueBox = Object(_customPixi_Rectangle__WEBPACK_IMPORTED_MODULE_2__["rectangle"])(64, 64, "blue");
        this.blueBox.draggable = true;
        stage.putCenter(this.blueBox, -70, 0);

        this.redBox = Object(_customPixi_Rectangle__WEBPACK_IMPORTED_MODULE_2__["rectangle"])(64, 64, "red");
        this.redBox.draggable = true;
        stage.putCenter(this.redBox, 70, 0);

        this.message = Object(_customPixi_Text__WEBPACK_IMPORTED_MODULE_0__["text"])("", "12px puzzler", "black", 8, 8);

        this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_3__["group"])(this.blueBox, this.redBox, this.message);
        this.visible = false;
    }

    update() {
        this.pointer.updateDragAndDrop(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__["draggableSprites"]);

        let collision = Object(_customPixi_collision__WEBPACK_IMPORTED_MODULE_1__["rectangleCollision"])(this.blueBox, this.redBox);
        if (collision) {
            this.message.content = `Collision ${collision}`;
        } else {
            this.message.content = "No collision...";
        }

        if (this.visible) {
            if (!this.scene.visible) {
                console.info(`use mouse to drag the red box and push the blue one`);
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }
}

/***/ }),

/***/ "./src/scenes/rotateAroundPoint.js":
/*!*****************************************!*\
  !*** ./src/scenes/rotateAroundPoint.js ***!
  \*****************************************/
/*! exports provided: RotateAroundPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotateAroundPoint", function() { return RotateAroundPoint; });
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");
/* harmony import */ var _customPixi_Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customPixi/Line */ "./src/customPixi/Line.js");




class RotateAroundPoint {
    constructor() {
        this.movingLine = Object(_customPixi_Line__WEBPACK_IMPORTED_MODULE_2__["line"])("black", 6, 84, 180, 360, 400);
        this.movingLine.angleA = 0;
        this.movingLine.angleB = 0;

        this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_0__["group"])(this.movingLine);
        this.visible = true;
    }

    update() {
        this.movingLine.angleA += 0.03;
        let rotatingA = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["rotatePoint"])(84, 180, 45, 45, this.movingLine.angleA);
        this.movingLine.ax = rotatingA.x;
        this.movingLine.ay = rotatingA.y;

        this.movingLine.angleB += 0.05;
        let rotatingB = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["rotatePoint"])(360, 400, 45, 45, this.movingLine.angleB);
        this.movingLine.bx = rotatingB.x;
        this.movingLine.by = rotatingB.y;

        this.scene.visible = this.visible;
    }
}

/***/ }),

/***/ "./src/scenes/rotateAroundSprite.js":
/*!******************************************!*\
  !*** ./src/scenes/rotateAroundSprite.js ***!
  \******************************************/
/*! exports provided: RotateAroundSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotateAroundSprite", function() { return RotateAroundSprite; });
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");
/* harmony import */ var _customPixi_Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customPixi/Circle */ "./src/customPixi/Circle.js");
/* harmony import */ var _customPixi_Rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPixi/Rectangle */ "./src/customPixi/Rectangle.js");





class RotateAroundSprite {
    constructor(stage) {
        this.box = Object(_customPixi_Rectangle__WEBPACK_IMPORTED_MODULE_3__["rectangle"])(64, 64, "gray");
        stage.putCenter(this.box);

        this.ball = Object(_customPixi_Circle__WEBPACK_IMPORTED_MODULE_2__["circle"])(64, "gray");
        this.box.putLeft(this.ball, -128);
        this.ball.angle = 0;

        this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_0__["group"])(this.box, this.ball);
        this.visible = true;
    }

    update() {
        this.ball.angle += 0.05;
        Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["rotateSprite"])(this.ball, this.box, 128, this.ball.angle);

        this.scene.visible = this.visible;
    }
}

/***/ }),

/***/ "./src/scenes/setupMusic.js":
/*!**********************************!*\
  !*** ./src/scenes/setupMusic.js ***!
  \**********************************/
/*! exports provided: SetupMusic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupMusic", function() { return SetupMusic; });
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");
/* harmony import */ var _customPixi_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customPixi/Text */ "./src/customPixi/Text.js");
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_Sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPixi/Sound */ "./src/customPixi/Sound.js");





class SetupMusic {
    constructor() {

        this.music = Object(_customPixi_Sound__WEBPACK_IMPORTED_MODULE_3__["makeSound"])("src/sounds/111.mp3", this.setupMusic.bind(this));

        this.msgA = Object(_customPixi_Text__WEBPACK_IMPORTED_MODULE_1__["text"])("a - start music", "16px puzzler", "black", 12, 12);
        this.msgB = Object(_customPixi_Text__WEBPACK_IMPORTED_MODULE_1__["text"])("b - pause music", "16px puzzler", "black", 12, 30);
        this.msgC = Object(_customPixi_Text__WEBPACK_IMPORTED_MODULE_1__["text"])("c - restart music", "16px puzzler", "black", 12, 48);
        this.msgD = Object(_customPixi_Text__WEBPACK_IMPORTED_MODULE_1__["text"])("d - start point changed", "16px puzzler", "black", 12, 66);
        this.msgE = Object(_customPixi_Text__WEBPACK_IMPORTED_MODULE_1__["text"])("e - restart music 2x speed", "16px puzzler", "black", 12, 84);
        this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_2__["group"])(this.msgA, this.msgB, this.msgC, this.msgD, this.msgE);
        this.visible = false;
        this.music.playbackRate = 1;
    }

    update() {
        if (this.visible) {
            if (!this.scene.visible) {
                console.info(`use hints from the canvas`);
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
        let a = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_0__["keyboard"])(65),
            b = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_0__["keyboard"])(66),
            c = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_0__["keyboard"])(67),
            d = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_0__["keyboard"])(68),
            e = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_0__["keyboard"])(69);

        a.press = () => {
            if (!this.music.playing && this.visible) {
                this.music.playbackRate = 1;
                this.music.play();
            }
        };

        b.press = () => {
            if (this.visible) {
                this.music.pause();
            }
        };

        c.press = () => {
            if (this.visible) {
                this.music.playbackRate = 1;
                this.music.restart();
            }
        };

        d.press = () => {
            if (this.visible) {
                this.music.playbackRate = 1;
                this.music.playFrom(13);
            }
        };

        e.press = () => {
            if (this.visible) {
                this.music.playbackRate = 2;
                this.music.restart();
            }
        };
    }
}

/***/ }),

/***/ "./src/scenes/tank.js":
/*!****************************!*\
  !*** ./src/scenes/tank.js ***!
  \****************************/
/*! exports provided: Tank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tank", function() { return Tank; });
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");
/* harmony import */ var _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customPixi/DisplayObject */ "./src/customPixi/DisplayObject.js");
/* harmony import */ var _customPixi_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPixi/Text */ "./src/customPixi/Text.js");
/* harmony import */ var _customPixi_Rectangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customPixi/Rectangle */ "./src/customPixi/Rectangle.js");
/* harmony import */ var _customPixi_Line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customPixi/Line */ "./src/customPixi/Line.js");
/* harmony import */ var _customPixi_Circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customPixi/Circle */ "./src/customPixi/Circle.js");








class Tank {
    constructor(stage) {
        this.tank = this.createTank();
        stage.putCenter(this.tank);

        this.bullets = [];
        this.message = Object(_customPixi_Text__WEBPACK_IMPORTED_MODULE_3__["text"])("Shoot the wall", "16px puzzler", "black", 12, 12);
        this.angleMessage = Object(_customPixi_Text__WEBPACK_IMPORTED_MODULE_3__["text"])("", "16px puzzler", "black", 12, 36);
        this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_0__["group"])(this.tank, this.message, this.angleMessage, this.bullets);
        this.visible = false;
    }

    update() {
        this.bullets = this.bullets.filter(bullet => {
            bullet.x += bullet.vx;
            bullet.y += bullet.vy;

            let collision = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["outsideBounds"])(bullet, _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_2__["stage"].localBounds);

            if (collision) {
                this.message.content = `Hit the ${collision}`;
                _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_2__["stage"].remove(bullet);

                return false;
            }

            return true;
        });

        this.tank.rotation += this.tank.rotationSpeed;

        if (this.tank.moveForward) {
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

        this.angleMessage.content = `Angle: ${Math.floor(this.tank.rotation * 10) / 10}`;

        if (this.visible) {
            if (!this.scene.visible) {
                console.info(`use keyboard arrows to move and "space" to shoot`);
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }

    createTank() {
        let box = Object(_customPixi_Rectangle__WEBPACK_IMPORTED_MODULE_4__["rectangle"])(32, 32, "gray", "black", 2);
        let turret = Object(_customPixi_Line__WEBPACK_IMPORTED_MODULE_5__["line"])("red", 4, 0, 0, 32, 0);
        turret.setPosition(16, 16);

        let tank = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_0__["group"])(box, turret);

        tank.vx = 0;
        tank.vy = 0;
        tank.accelerationX = 0.05;
        tank.accelerationY = 0.05;

        tank.rotationSpeed = 0;
        tank.moveForward = false;
        tank.friction = 0.96;
        tank.speed = 0;

        let leftArrow = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["keyboard"])(37),
            rightArrow = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["keyboard"])(39),
            upArrow = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["keyboard"])(38),
            space = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["keyboard"])(32);

        leftArrow.press = () => {
            tank.rotationSpeed = -0.1;
        };
        leftArrow.release = () => {
            if (!rightArrow.isDown) {
                tank.rotationSpeed = 0;
            }
        };

        rightArrow.press = () => {
            tank.rotationSpeed = 0.1;
        };
        rightArrow.release = () => {
            if (!leftArrow.isDown) {
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
            Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["shoot"])(tank, tank.rotation, 32, 7, this.bullets, () => Object(_customPixi_Circle__WEBPACK_IMPORTED_MODULE_6__["circle"])(8, "red"));
        };

        return tank;
    }

}

/***/ }),

/***/ "./src/scenes/treasureHunter.js":
/*!**************************************!*\
  !*** ./src/scenes/treasureHunter.js ***!
  \**************************************/
/*! exports provided: TreasureHunter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreasureHunter", function() { return TreasureHunter; });
/* harmony import */ var _customPixi_assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customPixi/assets */ "./src/customPixi/assets.js");
/* harmony import */ var _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customPixi/DisplayObject */ "./src/customPixi/DisplayObject.js");
/* harmony import */ var _customPixi_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customPixi/Text */ "./src/customPixi/Text.js");
/* harmony import */ var _customPixi_collision__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPixi/collision */ "./src/customPixi/collision.js");
/* harmony import */ var _customPixi_Rectangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customPixi/Rectangle */ "./src/customPixi/Rectangle.js");
/* harmony import */ var _customPixi_Group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customPixi/Group */ "./src/customPixi/Group.js");
/* harmony import */ var _customPixi_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customPixi/utils */ "./src/customPixi/utils.js");









class TreasureHunter {
    constructor(stage) {
        this.gameScene = this.createGameScene(stage);
        this.gameOverScene = this.createGameOverScene(stage);

        this.scene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_5__["group"])(this.gameScene, this.gameOverScene);
        this.visible = true;
        this.addPlayerMovement();
    }

    createGameScene() {
        this.dungeon = Object(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_1__["sprite"])(_customPixi_assets__WEBPACK_IMPORTED_MODULE_0__["assets"]["dungeon.png"]);
        this.dungeon.setPosition(0, 0);

        this.exit = Object(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_1__["sprite"])(_customPixi_assets__WEBPACK_IMPORTED_MODULE_0__["assets"]["door.png"]);
        this.exit.setPosition(32, 0);

        this.player = Object(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_1__["sprite"])(_customPixi_assets__WEBPACK_IMPORTED_MODULE_0__["assets"]["explorer.png"]);
        this.player.setPosition(60, _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_1__["stage"].halfHeight);

        this.treasure = Object(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_1__["sprite"])(_customPixi_assets__WEBPACK_IMPORTED_MODULE_0__["assets"]["treasure.png"]);
        this.treasure.setPosition(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_1__["stage"].width - 60, _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_1__["stage"].halfHeight);

        let gameScene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_5__["group"])(this.dungeon, this.exit, this.player, this.treasure);

        let numberOfEnemies = 6,
            spacing = 48,
            xOffset = 150,
            speed = 2,
            direction = 1;

        this.enemies = [];

        for (let i = 0; i < numberOfEnemies; i++) {
            let enemy = Object(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_1__["sprite"])(_customPixi_assets__WEBPACK_IMPORTED_MODULE_0__["assets"]["blob.png"]);
            let x = spacing * i + xOffset;
            let y = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_6__["randomInt"])(0, _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_1__["stage"].height - enemy.height);

            enemy.x = x;
            enemy.y = y;

            enemy.vy = speed * direction;

            direction *= -1;

            this.enemies.push(enemy);
            gameScene.addChild(enemy);
        }

        let outerBar = Object(_customPixi_Rectangle__WEBPACK_IMPORTED_MODULE_4__["rectangle"])(128, 8, "black"),
            innerBar = Object(_customPixi_Rectangle__WEBPACK_IMPORTED_MODULE_4__["rectangle"])(128, 8, "red");

        this.healthBar = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_5__["group"])(outerBar, innerBar);
        this.healthBar.inner = innerBar;

        this.healthBar.x = _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_1__["stage"].width - 164;
        this.healthBar.y = 4;

        gameScene.addChild(this.healthBar);

        return gameScene;
    }

    createGameOverScene() {
        this.message = Object(_customPixi_Text__WEBPACK_IMPORTED_MODULE_2__["text"])("Game Over!", "64px Futura", "black", 20, 20);
        this.message.x = 120;
        this.message.y = _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_1__["stage"].height / 2 - 64;

        let gameOverScene = Object(_customPixi_Group__WEBPACK_IMPORTED_MODULE_5__["group"])(this.message);
        gameOverScene.visible = false;

        return gameOverScene;
    }

    addPlayerMovement() {
        this.upArrow = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_6__["keyboard"])(38);

        this.upArrow.press = () => {
            this.player.vy = -3;
        };

        this.upArrow.release = () => {
            if (this.downArrow.isUp) {
                this.player.vy = 0;
            }
        };

        this.downArrow = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_6__["keyboard"])(40);

        this.downArrow.press = () => {
            this.player.vy = 3;
        };

        this.downArrow.release = () => {
            if (this.upArrow.isUp) {
                this.player.vy = 0;
            }
        };

        this.leftArrow = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_6__["keyboard"])(37);

        this.leftArrow.press = () => {
            this.player.vx = -3;
        };

        this.leftArrow.release = () => {
            if (this.rightArrow.isUp) {
                this.player.vx = 0;
            }
        };

        this.rightArrow = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_6__["keyboard"])(39);

        this.rightArrow.press = () => {
            this.player.vx = 3;
        };

        this.rightArrow.release = () => {
            if (this.leftArrow.isUp) {
                this.player.vx = 0;
            }
        };
    }

    update() {
        Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_6__["contain"])(this.player, { x: 32, y: 16, width: _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_1__["stage"].width - 32, height: _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_1__["stage"].height - 32 });

        this.playerHit = false;
        this.enemies.forEach(enemy => {
            enemy.x += enemy.vx;
            enemy.y += enemy.vy;

            let enemyHitsEdges = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_6__["contain"])(enemy, { x: 32, y: 16, width: _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_1__["stage"].width - 32, height: _customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_1__["stage"].height - 32 });

            if (enemyHitsEdges) {
                enemy.vy *= -1;
            }

            if (Object(_customPixi_collision__WEBPACK_IMPORTED_MODULE_3__["hitTestRectangle"])(this.player, enemy)) {
                this.playerHit = true;
            }
        });

        if (this.playerHit) {
            this.player.alpha = 0.5;
            this.healthBar.inner.width -= 1;
        } else {
            this.player.alpha = 1;
        }

        if (Object(_customPixi_collision__WEBPACK_IMPORTED_MODULE_3__["hitTestRectangle"])(this.player, this.treasure)) {
            this.treasure.x = this.player.x + 8;
            this.treasure.y = this.player.y + 8;
        }

        if (Object(_customPixi_collision__WEBPACK_IMPORTED_MODULE_3__["hitTestRectangle"])(this.treasure, this.exit)) {
            this.gameScene.visible = false;
            this.gameOverScene.visible = true;
            this.message.content = "You won!";
        }

        if (this.healthBar.inner.width < 0) {
            this.gameScene.visible = false;
            this.gameOverScene.visible = true;
            this.message.content = "You lost!";
        }

        this.player.x += this.player.vx;
        this.player.y += this.player.vy;

        if (this.visible) {
            if (!this.scene.visible) {
                console.info(`use keyboard arrows to move, drag treasure to the exit, avoid touching enemies`);
            }
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
    }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbVBpeGkvQ2lyY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21QaXhpL0Rpc3BsYXlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbVBpeGkvR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbVBpeGkvTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tUGl4aS9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbVBpeGkvU291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbVBpeGkvVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tUGl4aS9hc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbVBpeGkvY29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21QaXhpL21ha2VDYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbVBpeGkvcGFydGljbGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21QaXhpL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tUGl4aS91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9hY2NlbGVyYXRpb25BbmRGcmljdGlvbkJhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9hbGxTY2VuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9iYWxsV2l0aEdyYXZpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9jaXJjbGVBbmRSZWN0Q29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvY2lyY2xlQ29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvY29uc3RhbnRTcGVlZEZvbGxvd2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2NyZWF0ZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2RyYWdBbmREcm9wLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZmxhcHB5RmFpcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pbnRlcmFjdGl2ZVNwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21vdmluZ0FuZFN0YXRDaXJjbGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbW92aW5nQ2lyY2xlQW5kU3RhdFJlY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbW92aW5nQ2lyY2xlc0NvbGxpc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3BhcnRpY2xlRW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3BvaW50QW5kU2hhcGVDb2xsaXNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9yZWN0Q29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvcmVjdGFuZ2xlUHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3JvdGF0ZUFyb3VuZFBvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvcm90YXRlQXJvdW5kU3ByaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvc2V0dXBNdXNpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3RhbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy90cmVhc3VyZUh1bnRlci5qcyJdLCJuYW1lcyI6WyJDaXJjbGUiLCJEaXNwbGF5T2JqZWN0IiwiY29uc3RydWN0b3IiLCJkaWFtZXRlciIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwieCIsInkiLCJjaXJjdWxhciIsIk9iamVjdCIsImFzc2lnbiIsIm1hc2siLCJyZW5kZXIiLCJjdHgiLCJiZWdpblBhdGgiLCJhcmMiLCJyYWRpdXMiLCJwaXZvdFgiLCJNYXRoIiwiUEkiLCJzdHJva2UiLCJmaWxsIiwiY2xpcCIsImNpcmNsZSIsInNwcml0ZSIsInN0YWdlIiwiYWRkQ2hpbGQiLCJ3aWR0aCIsImhlaWdodCIsInJvdGF0aW9uIiwiYWxwaGEiLCJ2aXNpYmxlIiwic2NhbGVYIiwic2NhbGVZIiwicGl2b3RZIiwidngiLCJ2eSIsIl9sYXllciIsInBhcmVudCIsInVuZGVmaW5lZCIsImNoaWxkcmVuIiwic2hhZG93Iiwic2hhZG93Q29sb3IiLCJzaGFkb3dPZmZzZXRYIiwic2hhZG93T2Zmc2V0WSIsInNoYWRvd0JsdXIiLCJibGVuZE1vZGUiLCJmcmFtZXMiLCJsb29wIiwiX2N1cnJlbnRGcmFtZSIsInBsYXlpbmciLCJfZHJhZ2dhYmxlIiwiX2NpcmN1bGFyIiwiX2ludGVyYWN0aXZlIiwiZ3giLCJneSIsImxheWVyIiwidmFsdWUiLCJzb3J0IiwiYSIsImIiLCJyZW1vdmVDaGlsZCIsInB1c2giLCJzcGxpY2UiLCJpbmRleE9mIiwiRXJyb3IiLCJoYWxmV2lkdGgiLCJoYWxmSGVpZ2h0IiwiY2VudGVyWCIsImNlbnRlclkiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwibG9jYWxCb3VuZHMiLCJnbG9iYWxCb3VuZHMiLCJlbXB0eSIsImxlbmd0aCIsInB1dENlbnRlciIsInhPZmZzZXQiLCJ5T2Zmc2V0IiwicHV0VG9wIiwicHV0UmlnaHQiLCJwdXRCb3R0b20iLCJwdXRMZWZ0Iiwic3dhcENoaWxkcmVuIiwiY2hpbGQxIiwiY2hpbGQyIiwiaW5kZXgxIiwiaW5kZXgyIiwiY2hpbGRJbmRleCIsImFkZCIsInNwcml0ZXNUb0FkZCIsImZvckVhY2giLCJyZW1vdmUiLCJzcHJpdGVzVG9SZW1vdmUiLCJjdXJyZW50RnJhbWUiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZ2V0Iiwic2V0IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImRyYWdnYWJsZSIsImRyYWdnYWJsZVNwcml0ZXMiLCJpbnRlcmFjcml2ZSIsIm1ha2VJbnRlcmFjdGl2ZSIsImJ1dHRvbnMiLCJvIiwicHJlc3MiLCJyZWxlYXNlIiwib3ZlciIsIm91dCIsInRhcCIsInN0YXRlIiwiYWN0aW9uIiwicHJlc3NlZCIsImhvdmVyT3ZlciIsInVwZGF0ZSIsInBvaW50ZXIiLCJjYW52YXMiLCJoaXQiLCJoaXRUZXN0U3ByaXRlIiwiaXNVcCIsIkJ1dHRvbiIsImdvdG9BbmRTdG9wIiwiaXNEb3duIiwidGFwcGVkIiwiU3ByaXRlIiwic291cmNlIiwiSW1hZ2UiLCJjcmVhdGVGcm9tSW1hZ2UiLCJmcmFtZSIsImNyZWF0ZUZyb21BdGxhcyIsImltYWdlIiwiZGF0YSIsImNyZWF0ZUZyb21UaWxlc2V0IiwiY3JlYXRlRnJvbVRpbGVzZXRGcmFtZXMiLCJBcnJheSIsImNyZWF0ZUZyb21BdGxhc0ZyYW1lcyIsImNyZWF0ZUZyb21JbWFnZXMiLCJzb3VyY2VYIiwic291cmNlWSIsInNvdXJjZVdpZHRoIiwic291cmNlSGVpZ2h0IiwidGlsZXNldEZyYW1lIiwidyIsImgiLCJmcmFtZU51bWJlciIsImRyYXdJbWFnZSIsImFkZFN0YXRlUGxheWVyIiwiZnJhbWVDb3VudGVyIiwibnVtYmVyT2ZGcmFtZXMiLCJzdGFydEZyYW1lIiwiZW5kRnJhbWUiLCJ0aW1lckludGVydmFsIiwic2hvdyIsInJlc2V0IiwicGxheSIsInBsYXlTZXF1ZW5jZSIsInN0b3AiLCJzZXF1ZW5jZUFycmF5IiwiZnBzIiwiZnJhbWVSYXRlIiwic2V0SW50ZXJ2YWwiLCJhZHZhbmNlRnJhbWUiLCJiaW5kIiwiY2xlYXJJbnRlcnZhbCIsImJ1dHRvbiIsIkdyb3VwIiwic3ByaXRlc1RvR3JvdXAiLCJjYWxjdWxhdGVTaXplIiwiX25ld1dpZHRoIiwiX25ld0hlaWdodCIsImNoaWxkIiwiZ3JvdXAiLCJMaW5lIiwiYXgiLCJheSIsImJ4IiwiYnkiLCJsaW5lSm9pbiIsIm1vdmVUbyIsImxpbmVUbyIsImxpbmUiLCJSZWN0YW5nbGUiLCJyZWN0IiwicmVjdGFuZ2xlIiwiYWN0eCIsIkF1ZGlvQ29udGV4dCIsIlNvdW5kIiwibG9hZEhhbmRsZXIiLCJ2b2x1bWVOb2RlIiwiY3JlYXRlR2FpbiIsInBhbk5vZGUiLCJjcmVhdGVTdGVyZW9QYW5uZXIiLCJzb3VuZE5vZGUiLCJidWZmZXIiLCJwYW5WYWx1ZSIsInZvbHVtZVZhbHVlIiwic3RhcnRUaW1lIiwic3RhcnRPZmZzZXQiLCJwbGF5YmFja1JhdGUiLCJsb2FkIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlY29kZUF1ZGlvRGF0YSIsInJlc3BvbnNlIiwiaGFzTG9hZGVkIiwiZXJyb3IiLCJzZW5kIiwiY3VycmVudFRpbWUiLCJjcmVhdGVCdWZmZXJTb3VyY2UiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJzdGFydCIsImR1cmF0aW9uIiwicGF1c2UiLCJyZXN0YXJ0IiwicGxheUZyb20iLCJ2b2x1bWUiLCJnYWluIiwicGFuIiwibWFrZVNvdW5kIiwiVGV4dCIsImNvbnRlbnQiLCJmb250IiwidGV4dEJhc2VsaW5lIiwic3Ryb2tlVGV4dCIsIm1lYXN1cmVUZXh0IiwidHJhbnNsYXRlIiwiZmlsbFRleHQiLCJ0ZXh0IiwiYXNzZXRzIiwidG9Mb2FkIiwibG9hZGVkIiwiaW1hZ2VFeHRlbnNpb25zIiwiZm9udEV4dGVuc2lvbnMiLCJqc29uRXh0ZW5zaW9ucyIsImF1ZGlvRXh0ZW5zaW9ucyIsInNvdXJjZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNvbnNvbGUiLCJsb2ciLCJleHRlbnNpb24iLCJzcGxpdCIsInBvcCIsImxvYWRJbWFnZSIsImxvYWRGb250IiwibG9hZEpzb24iLCJsb2FkU291bmQiLCJzcmMiLCJmb250RmFtaWx5IiwibmV3U3R5bGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJmb250RmFjZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJoZWFkIiwib25sb2FkIiwiZXZlbnQiLCJzdGF0dXMiLCJmaWxlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwibmFtZSIsImNyZWF0ZVRpbGVzZXRGcmFtZXMiLCJiYXNlVXJsIiwicmVwbGFjZSIsImltYWdlU291cmNlIiwibWV0YSIsImltYWdlTG9hZEhhbmRsZXIiLCJrZXlzIiwic291bmQiLCJoaXRUZXN0UG9pbnQiLCJwb2ludCIsInNoYXBlIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwibWFnbml0dWRlIiwic3FydCIsImhpdFRlc3RDaXJjbGUiLCJjMSIsImMyIiwiZ2xvYmFsIiwiY29tYmluZWRSYWRpaSIsImNpcmNsZUNvbGxpc2lvbiIsImJvdW5jZSIsIm92ZXJsYXAiLCJkeCIsImR5IiwicyIsInF1YW50dW1QYWRkaW5nIiwiYm91bmNlT2ZmU3VyZmFjZSIsIm1vdmluZ0NpcmNsZUNvbGxpc2lvbiIsInhTaWRlIiwieVNpZGUiLCJwMUEiLCJwMUIiLCJwMkEiLCJwMkIiLCJtYXNzIiwidnhIYWxmIiwiYWJzIiwidnlIYWxmIiwibHgiLCJseSIsImRwMSIsImRwMiIsImRwMyIsImRwNCIsIm11bHRpcGxlQ2lyY2xlQ29sbGlzaW9uIiwiYXJyYXlPZkNpcmNsZXMiLCJpIiwiaiIsImhpdFRlc3RSZWN0YW5nbGUiLCJyMSIsInIyIiwiY29tYmluZWRIYWxmV2lkdGhzIiwiY29tYmluZWRIYWxmSGVpZ2h0cyIsInJlY3RhbmdsZUNvbGxpc2lvbiIsImNvbGxpc2lvbiIsIm92ZXJsYXBYIiwib3ZlcmxhcFkiLCJoaXRUZXN0Q2lyY2xlUmVjdGFuZ2xlIiwicmVnaW9uIiwiYzF4IiwiYzF5IiwicjF4IiwicjF5IiwiaGl0VGVzdENpcmNsZVBvaW50IiwiY2lyY2xlUmVjdGFuZ2xlQ29sbGlzaW9uIiwiY2lyY2xlUG9pbnRDb2xsaXNpb24iLCJyZWFjdCIsImV4dHJhIiwiYUlzQVNwcml0ZSIsImJJc0FTcHJpdGUiLCJzcHJpdGVWc0FycmF5IiwiZmluZENvbGxpc2lvblR5cGUiLCJjaXJjbGVWc0NpcmNsZSIsImNpcmNsZVZzUmVjdGFuZ2xlIiwicmVjdGFuZ2xlVnNSZWN0YW5nbGUiLCJwMSIsInAyIiwibWFrZUNhbnZhcyIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsInN0eWxlIiwiYm9keSIsImdldENvbnRleHQiLCJwYXJ0aWNsZXMiLCJwYXJ0aWNsZUVmZmVjdCIsInNwcml0ZUZ1bmN0aW9uIiwibnVtYmVyT2ZQYXJ0aWNsZXMiLCJncmF2aXR5IiwicmFuZG9tU3BhY2luZyIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJtaW5TaXplIiwibWF4U2l6ZSIsIm1pblNwZWVkIiwibWF4U3BlZWQiLCJtaW5TY2FsZVNwZWVkIiwibWF4U2NhbGVTcGVlZCIsIm1pbkFscGhhU3BlZWQiLCJtYXhBbHBoYVNwZWVkIiwibWluUm90YXRpb25TcGVlZCIsIm1heFJvdGF0aW9uU3BlZWQiLCJyYW5kb21GbG9hdCIsIm1pbiIsIm1heCIsInJhbmRvbSIsInJhbmRvbUludCIsImZsb29yIiwiYW5nbGVzIiwiYW5nbGUiLCJzcGFjaW5nIiwibWFrZVBhcnRpY2xlIiwicGFydGljbGUiLCJzaXplIiwic2NhbGVTcGVlZCIsImFscGhhU3BlZWQiLCJyb3RhdGlvblNwZWVkIiwic3BlZWQiLCJjb3MiLCJzaW4iLCJlbWl0dGVyIiwiaW50ZXJ2YWwiLCJwYXJ0aWNsZUZ1bmN0aW9uIiwiZW1pdFBhcnRpY2xlIiwiY2xlYXJSZWN0IiwiZGlzcGxheVNwcml0ZSIsInNhdmUiLCJyb3RhdGUiLCJnbG9iYWxBbHBoYSIsInNjYWxlIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwicmVzdG9yZSIsInJlbmRlcldpdGhJbnRlcnBvbGF0aW9uIiwibGFnT2Zmc2V0IiwicHJldmlvdXNYIiwicmVuZGVyWCIsInByZXZpb3VzWSIsInJlbmRlclkiLCJ3YWl0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwicHJvbWlzZSIsIm9iaiIsImFycmF5T2ZQb3NpdGlvbnMiLCJjb250YWluIiwiYm91bmRzIiwiY2FsbGJhY2siLCJjYXB0dXJlUHJldmlvdXNQb3NpdGlvbnMiLCJzZXRQcmV2aW91c1Bvc2l0aW9uIiwia2V5Ym9hcmQiLCJrZXlDb2RlIiwia2V5IiwiY29kZSIsImRvd25IYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJ1cEhhbmRsZXIiLCJ3aW5kb3ciLCJtYWtlUG9pbnRlciIsImVsZW1lbnQiLCJfeCIsIl95IiwiZHJhZ1Nwcml0ZSIsImRyYWdPZmZzZXRYIiwiZHJhZ09mZnNldFkiLCJtb3ZlSGFuZGxlciIsInRhcmdldCIsInBhZ2VYIiwib2Zmc2V0TGVmdCIsInBhZ2VZIiwib2Zmc2V0VG9wIiwidG91Y2htb3ZlSGFuZGxlciIsInRhcmdldFRvdWNoZXMiLCJkb3duVGltZSIsIkRhdGUiLCJub3ciLCJ0b3VjaHN0YXJ0SGFuZGxlciIsImVsYXBzZWRUaW1lIiwidG91Y2hlbmRIYW5kbGVyIiwiZGlzdGFuY2UiLCJ1cGRhdGVEcmFnQW5kRHJvcCIsImNoZWNrUGFyZW50VmlzaWJpbGl0eSIsInNvbWUiLCJjdXJzb3IiLCJ0b3VjaEFjdGlvbiIsInMxIiwiczIiLCJmb2xsb3dFYXNlIiwiZm9sbG93ZXIiLCJsZWFkZXIiLCJmb2xsb3dDb25zdGFudCIsImF0YW4yIiwicm90YXRlU3ByaXRlIiwicm90YXRpbmdTcHJpdGUiLCJjZW50ZXJTcHJpdGUiLCJyb3RhdGVQb2ludCIsInBvaW50WCIsInBvaW50WSIsImRpc3RhbmNlWCIsImRpc3RhbmNlWSIsImN1cnJlbnQiLCJzaG9vdCIsInNob290ZXIiLCJvZmZzZXRGcm9tQ2VudGVyIiwiYnVsbGV0U3BlZWQiLCJidWxsZXRBcnJheSIsImJ1bGxldFNwcml0ZSIsImJ1bGxldCIsIm91dHNpZGVCb3VuZHMiLCJncmlkIiwiY29sdW1ucyIsInJvd3MiLCJjZWxsV2lkdGgiLCJjZWxsSGVpZ2h0IiwiY2VudGVyQ2VsbCIsIm1ha2VTcHJpdGUiLCJjb250YWluZXIiLCJjcmVhdGVHcmlkIiwidGlsaW5nU3ByaXRlIiwidGlsZVdpZHRoIiwidGlsZUhlaWdodCIsInJvdW5kIiwidGlsZUdyaWQiLCJ0aWxlIiwiX3RpbGVYIiwiX3RpbGVZIiwidGlsZVgiLCJkaWZmZXJlbmNlIiwidGlsZVkiLCJ0aGVuIiwic2NlbmVzQ29uZmlnIiwibGFiZWwiLCJpZCIsIkFjY2VsZXJhdGlvbkFuZEZyaWN0aW9uQmFsbCIsIkJhbGxXaXRoR3Jhdml0eSIsIkNvbnN0YW50U3BlZWRGb2xsb3dpbmciLCJSb3RhdGVBcm91bmRTcHJpdGUiLCJSb3RhdGVBcm91bmRQb2ludCIsIlRhbmsiLCJDcmVhdGVCdXR0b24iLCJJbnRlcmFjdGl2ZVNwcml0ZSIsIkRyYWdBbmREcm9wIiwiVHJlYXN1cmVIdW50ZXIiLCJQb2ludEFuZFNoYXBlQ29sbGlzaW9uIiwiUmVjdENvbGxpc2lvbiIsIlJlY3RhbmdsZVB1c2giLCJDaXJjbGVDb2xsaXNpb24iLCJDaXJjbGVBbmRSZWN0Q29sbGlzaW9uIiwiTW92aW5nQ2lyY2xlc0NvbGxpc2lvbiIsIk1vdmluZ0FuZFN0YXRDaXJjbGVzIiwiTW92aW5nQ2lyY2xlQW5kU3RhdFJlY3RzIiwiUGFydGljbGVFbWl0dGVyIiwiRmxhcHB5RmFpcnkiLCJTZXR1cE11c2ljIiwic2NlbmVzTWFuYWdlciIsIlNjZW5lc01hbmFnZXIiLCJzY2VuZVNlbGVjdG9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJvbmNoYW5nZSIsInNlbGVjdGVkU2NlbmUiLCJoaWRlQWxsIiwic2hvd1NjZW5lIiwiZ2V0U2NlbmVVcGRhdGVGdW5jIiwiZ2FtZUxvb3AiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiYWxsIiwiYWNjZWxlcmF0aW9uWCIsImFjY2VsZXJhdGlvblkiLCJmcmljdGlvblgiLCJmcmljdGlvblkiLCJzY2VuZSIsInNjZW5lc0NvbmZpZ3MiLCJzY2VuZXNTZWxlY3RvciIsIl9hbGxTY2VuZXMiLCJzY2VuZUNvbmZpZyIsImlubmVySFRNTCIsInNjZW5lTmFtZSIsImJveCIsIm1lc3NhZ2UiLCJpbmZvIiwiYmx1ZUJhbGwiLCJyZWRCYWxsIiwiY29ubmVjdGlvbiIsImRpc3RhbmNlQmV0d2VlbkNpcmNsZXMiLCJidXR0b25GcmFtZXMiLCJwbGF5QnV0dG9uIiwic3RhdGVNZXNzYWdlIiwiYWN0aW9uTWVzc2FnZSIsImNhcHRhaW4iLCJodWxrIiwiaXJvbk1hbiIsImFkZERyYWdnYWJsZSIsInNwcml0ZXMiLCJza3kiLCJibG9ja3MiLCJjcmVhdGVQaWxsYXJzIiwiZmFpcnkiLCJjcmVhdGVGYWlyeUZyYW1lcyIsImR1c3RGcmFtZXMiLCJkdXN0IiwiY3JlYXRlRmFpcnlEdXN0IiwiZ2FwU2l6ZSIsIm51bWJlck9mUGlsbGFycyIsInN0YXJ0R2FwTnVtYmVyIiwiYmxvY2siLCJmaW5pc2giLCJmYWlybHlGcmFtZXMiLCJvbGRWeSIsImZhaXJ5VnNTdGFnZSIsImZhaXJ5VnNCbG9jayIsImNvbG9ycyIsInBlZ3MiLCJwZWciLCJzbGluZyIsImNhcHR1cmVkTWFyYmxlIiwiYnJpY2tzIiwiYnJpY2siLCJtYXJibGVzIiwibWFyYmxlRnJhbWVzIiwibWFyYmxlIiwic2l6ZXMiLCJwYXJ0aWNsZVN0cmVhbSIsImJsdWVCb3giLCJyZWRCb3giLCJtb3ZpbmdMaW5lIiwiYW5nbGVBIiwiYW5nbGVCIiwicm90YXRpbmdBIiwicm90YXRpbmdCIiwibXVzaWMiLCJzZXR1cE11c2ljIiwibXNnQSIsIm1zZ0IiLCJtc2dDIiwibXNnRCIsIm1zZ0UiLCJjIiwiZCIsImUiLCJ0YW5rIiwiY3JlYXRlVGFuayIsImJ1bGxldHMiLCJhbmdsZU1lc3NhZ2UiLCJmaWx0ZXIiLCJtb3ZlRm9yd2FyZCIsImZyaWN0aW9uIiwidHVycmV0IiwibGVmdEFycm93IiwicmlnaHRBcnJvdyIsInVwQXJyb3ciLCJzcGFjZSIsImdhbWVTY2VuZSIsImNyZWF0ZUdhbWVTY2VuZSIsImdhbWVPdmVyU2NlbmUiLCJjcmVhdGVHYW1lT3ZlclNjZW5lIiwiYWRkUGxheWVyTW92ZW1lbnQiLCJkdW5nZW9uIiwiZXhpdCIsInBsYXllciIsInRyZWFzdXJlIiwibnVtYmVyT2ZFbmVtaWVzIiwiZGlyZWN0aW9uIiwiZW5lbWllcyIsImVuZW15Iiwib3V0ZXJCYXIiLCJpbm5lckJhciIs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TztBQUNILGlCQUFLNmYsS0FBTCxDQUFXN2YsT0FBWCxHQUFxQixLQUFyQjtBQUNIO0FBQ0o7QUFwTHVCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge0Rpc3BsYXlPYmplY3QsIHN0YWdlfSBmcm9tIFwiLi9EaXNwbGF5T2JqZWN0XCI7XHJcblxyXG5jbGFzcyBDaXJjbGUgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGRpYW1ldGVyID0gMzIsXHJcbiAgICAgICAgZmlsbFN0eWxlID0gXCJncmF5XCIsXHJcbiAgICAgICAgc3Ryb2tlU3R5bGUgPSBcIm5vbmVcIixcclxuICAgICAgICBsaW5lV2lkdGggPSAwLFxyXG4gICAgICAgIHggPSAwLFxyXG4gICAgICAgIHkgPSAwXHJcbiAgICApe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jaXJjdWxhciA9IHRydWU7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7ZGlhbWV0ZXIsIGZpbGxTdHlsZSwgc3Ryb2tlU3R5bGUsIGxpbmVXaWR0aCwgeCwgeX0pO1xyXG5cclxuICAgICAgICB0aGlzLm1hc2sgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoY3R4KSB7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zdHJva2VTdHlsZTtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuZmlsbFN0eWxlO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuXHJcbiAgICAgICAgY3R4LmFyYyhcclxuICAgICAgICAgICAgdGhpcy5yYWRpdXMgKyAoIC10aGlzLmRpYW1ldGVyICogdGhpcy5waXZvdFgpLFxyXG4gICAgICAgICAgICB0aGlzLnJhZGl1cyArICggLXRoaXMuZGlhbWV0ZXIgKiB0aGlzLnBpdm90WCksXHJcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLCAwLCAyKk1hdGguUEksIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZih0aGlzLnN0cm9rZVN0eWxlICE9PSBcIm5vbmVcIil7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZmlsbFN0eWxlICE9PSBcIm5vbmVcIil7XHJcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLm1hc2sgJiYgdGhpcy5tYXNrID09PSB0cnVlKXtcclxuICAgICAgICAgICAgY3R4LmNsaXAoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZShkaWFtZXRlciwgZmlsbFN0eWxlLCBzdHJva2VTdHlsZSwgbGluZVdpZHRoLCB4LCB5KSB7XHJcbiAgICBsZXQgc3ByaXRlID0gbmV3IENpcmNsZShkaWFtZXRlciwgZmlsbFN0eWxlLCBzdHJva2VTdHlsZSwgbGluZVdpZHRoLCB4LCB5KTtcclxuICAgIHN0YWdlLmFkZENoaWxkKHNwcml0ZSk7XHJcbiAgICByZXR1cm4gc3ByaXRlO1xyXG59IiwiZXhwb3J0IGNsYXNzIERpc3BsYXlPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuICAgICAgICB0aGlzLmFscGhhID0gMTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NhbGVYID0gMTtcclxuICAgICAgICB0aGlzLnNjYWxlWSA9IDE7XHJcbiAgICAgICAgdGhpcy5waXZvdFggPSAwLjU7XHJcbiAgICAgICAgdGhpcy5waXZvdFkgPSAwLjU7XHJcblxyXG4gICAgICAgIHRoaXMudnggPSAwO1xyXG4gICAgICAgIHRoaXMudnkgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9sYXllciA9IDA7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnNoYWRvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2hhZG93Q29sb3IgPSBcInJnYmEoMTAwLCAxMDAsIDEwMCwgMC41KVwiO1xyXG4gICAgICAgIHRoaXMuc2hhZG93T2Zmc2V0WCA9IDM7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dPZmZzZXRZID0gMztcclxuICAgICAgICB0aGlzLnNoYWRvd0JsdXIgPSAzO1xyXG5cclxuICAgICAgICB0aGlzLmJsZW5kTW9kZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmxvb3AgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fZHJhZ2dhYmxlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuX2NpcmN1bGFyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5faW50ZXJhY3RpdmUgPSB0cnVlO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGd4KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy54ICsgdGhpcy5wYXJlbnQuZ3g7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMueDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGd5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy55ICsgdGhpcy5wYXJlbnQuZ3k7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMueTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgbGF5ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBsYXllcih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2xheWVyICA9IHZhbHVlO1xyXG4gICAgICAgIGlmKHRoaXMucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmNoaWxkcmVuLnNvcnQoIChhLCBiKSA9PiBhLmxheWVyIC0gYi5sYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZENoaWxkKHNwcml0ZSkge1xyXG4gICAgICAgIGlmKHNwcml0ZS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgc3ByaXRlLnBhcmVudC5yZW1vdmVDaGlsZChzcHJpdGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwcml0ZS5wYXJlbnQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChzcHJpdGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDaGlsZCAoc3ByaXRlKSB7XHJcbiAgICAgICAgaWYgKHNwcml0ZS5wYXJlbnQgPT09IHRoaXMpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UodGhpcy5jaGlsZHJlbi5pbmRleE9mKHNwcml0ZSksIDEpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3Nwcml0ZX0gaXMgbm90IGEgY2hpbGQgb2YgJHt0aGlzfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGFsZldpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndpZHRoLzI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhbGZIZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0LzI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNlbnRlclgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCArIHRoaXMuaGFsZldpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjZW50ZXJZKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnkgKyB0aGlzLmhhbGZIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB7eDogdGhpcy54LCB5OiB0aGlzLnl9O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBvc2l0aW9uKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxvY2FsQm91bmRzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ2xvYmFsQm91bmRzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMuZ3gsXHJcbiAgICAgICAgICAgIHk6IHRoaXMuZ3ksXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmd4ICsgdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmd5ICsgdGhpcy5oZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbXB0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDBcclxuICAgIH1cclxuXHJcbiAgICBwdXRDZW50ZXIoYiwgeE9mZnNldCA9IDAsIHlPZmZzZXQgPSAwKSB7XHJcbiAgICAgICAgbGV0IGEgPSB0aGlzO1xyXG4gICAgICAgIGIueCA9IChhLnggKyBhLmhhbGZXaWR0aCAtIGIuaGFsZldpZHRoKSArIHhPZmZzZXQ7XHJcbiAgICAgICAgYi55ID0gKGEueSArIGEuaGFsZkhlaWdodCAtIGIuaGFsZkhlaWdodCkgKyB5T2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1dFRvcChiLCB4T2Zmc2V0ID0gMCwgeU9mZnNldCA9IDApIHtcclxuICAgICAgICBsZXQgYSA9IHRoaXM7XHJcbiAgICAgICAgYi54ID0gKGEueCArIGEuaGFsZldpZHRoIC0gYi5oYWxmV2lkdGgpICsgeE9mZnNldDtcclxuICAgICAgICBiLnkgPSAoYS55IC0gYi5oZWlnaHQpICsgeU9mZnNldDtcclxuICAgIH1cclxuXHJcbiAgICBwdXRSaWdodChiLCB4T2Zmc2V0ID0gMCwgeU9mZnNldCA9IDApIHtcclxuICAgICAgICBsZXQgYSA9IHRoaXM7XHJcbiAgICAgICAgYi54ID0gKGEueCArIGEud2lkdGgpICsgeE9mZnNldDtcclxuICAgICAgICBiLnkgPSAoYS55ICsgYS5oYWxmSGVpZ2h0IC0gYi5oYWxmSGVpZ2h0KSArIHlPZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0Qm90dG9tKGIsIHhPZmZzZXQgPSAwLCB5T2Zmc2V0ID0gMCkge1xyXG4gICAgICAgIGxldCBhID0gdGhpcztcclxuICAgICAgICBiLnggPSAoYS54ICsgYS5oYWxmV2lkdGggLSBiLmhhbGZXaWR0aCkgKyB4T2Zmc2V0O1xyXG4gICAgICAgIGIueSA9IChhLnkgKyBiLmhlaWdodCkgKyB5T2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1dExlZnQoYiwgeE9mZnNldCA9IDAsIHlPZmZzZXQgPSAwKSB7XHJcbiAgICAgICAgbGV0IGEgPSB0aGlzO1xyXG4gICAgICAgIGIueCA9IChhLnggLSBiLndpZHRoKSArIHhPZmZzZXQ7XHJcbiAgICAgICAgYi55ID0gKGEueSArIGEuaGFsZkhlaWdodCAtIGIuaGFsZkhlaWdodCkgKyB5T2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHN3YXBDaGlsZHJlbihjaGlsZDEsIGNoaWxkMikge1xyXG4gICAgICAgIGxldCBpbmRleDEgPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQxKTtcclxuICAgICAgICBsZXQgaW5kZXgyID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkMik7XHJcblxyXG4gICAgICAgIGlmKGluZGV4MSAhPT0gLTEgJiYgaW5kZXgyICE9PSAtMSl7XHJcbiAgICAgICAgICAgIGNoaWxkMS5jaGlsZEluZGV4ID0gY2hpbGQyO1xyXG4gICAgICAgICAgICBjaGlsZDIuY2hpbGRJbmRleCA9IGNoaWxkMTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baW5kZXgxXSA9IGNoaWxkMjtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpbmRleDJdID0gY2hpbGQxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQm90aCBvYmplY3RzIG11c3QgYmUgYSBjaGlsZCBvZiB0aGUgY2FsbGVyICR7dGhpc31gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGQoLi4uc3ByaXRlc1RvQWRkKXtcclxuICAgICAgICBzcHJpdGVzVG9BZGQuZm9yRWFjaCggc3ByaXRlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChzcHJpdGUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKC4uLnNwcml0ZXNUb1JlbW92ZSkge1xyXG4gICAgICAgIHNwcml0ZXNUb1JlbW92ZS5mb3JFYWNoKCBzcHJpdGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHNwcml0ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3VycmVudEZyYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50RnJhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNpcmN1bGFyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaXJjdWxhcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY2lyY3VsYXIodmFsdWUpIHtcclxuICAgICAgICBpZih2YWx1ZSA9PT0gdHJ1ZSAmJiB0aGlzLl9jaXJjdWxhciA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgICAgICAgICAgZGlhbWV0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmFkaXVzIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFsZldpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gdmFsdWUgKiAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IHZhbHVlICogMjtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fY2lyY3VsYXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSAmJiB0aGlzLl9jaXJjdWxhciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5kaWFtZXRlcjtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMucmFkaXVzO1xyXG4gICAgICAgICAgICB0aGlzLl9jaXJjdWxhciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgZHJhZ2dhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kcmFnZ2FibGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGRyYWdnYWJsZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmKHZhbHVlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGRyYWdnYWJsZVNwcml0ZXMucHVzaCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHZhbHVlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBkcmFnZ2FibGVTcHJpdGVzLnNwbGljZShkcmFnZ2FibGVTcHJpdGVzLmluZGV4T2YodGhpcyksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXQgaW50ZXJhY3JpdmUodmFsdWUpIHtcclxuICAgICAgICBpZih2YWx1ZSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIG1ha2VJbnRlcmFjdGl2ZSh0aGlzKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHZhbHVlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBidXR0b25zLnNwbGljZShidXR0b25zLmluZGV4T2YodGhpcyksIDEpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnRlcmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZUludGVyYWN0aXZlKG8pIHtcclxuICAgIG8ucHJlc3MgPSBvLnByZXNzIHx8IHVuZGVmaW5lZDtcclxuICAgIG8ucmVsZWFzZSA9IG8ucmVsZWFzZSB8fCB1bmRlZmluZWQ7XHJcbiAgICBvLm92ZXIgPSBvLm92ZXIgfHwgdW5kZWZpbmVkO1xyXG4gICAgby5vdXQgPSBvLm91dCB8fCB1bmRlZmluZWQ7XHJcbiAgICBvLnRhcCA9IG8udGFwIHx8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBvLnN0YXRlID0gXCJ1cFwiO1xyXG4gICAgby5hY3Rpb24gPSBcIlwiO1xyXG4gICAgby5wcmVzc2VkID0gZmFsc2U7XHJcbiAgICBvLmhvdmVyT3ZlciA9IGZhbHNlO1xyXG5cclxuICAgIG8udXBkYXRlID0gKHBvaW50ZXIsIGNhbnZhcykgPT4ge1xyXG4gICAgICAgIGxldCBoaXQgPSBwb2ludGVyLmhpdFRlc3RTcHJpdGUobyk7XHJcblxyXG4gICAgICAgIGlmKHBvaW50ZXIuaXNVcCkge1xyXG4gICAgICAgICAgICBvLnN0YXRlID0gXCJ1cFwiO1xyXG5cclxuICAgICAgICAgICAgaWYobyBpbnN0YW5jZW9mIEJ1dHRvbil7XHJcbiAgICAgICAgICAgICAgICBvLmdvdG9BbmRTdG9wKDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoaXQpIHtcclxuICAgICAgICAgICAgby5zdGF0ZSA9IFwib3ZlclwiO1xyXG4gICAgICAgICAgICBpZihvLmZyYW1lcyAmJiBvLmZyYW1lcy5sZW5ndGggPT09IDMgJiYgbyBpbnN0YW5jZW9mIEJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgby5nb3RvQW5kU3RvcCgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihwb2ludGVyLmlzRG93bil7XHJcbiAgICAgICAgICAgICAgICBvLnN0YXRlID0gXCJkb3duXCI7XHJcbiAgICAgICAgICAgICAgICBpZihvIGluc3RhbmNlb2YgQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoby5mcmFtZXMubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uZ290b0FuZFN0b3AoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgby5nb3RvQW5kU3RvcCgxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvLnN0YXRlID09PSBcImRvd25cIikge1xyXG4gICAgICAgICAgICBpZighby5wcmVzc2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpZihvLnByZXNzKXtcclxuICAgICAgICAgICAgICAgICAgICBvLnByZXNzKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG8ucHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBvLmFjdGlvbiA9IFwicHJlc3NlZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvLnN0YXRlID09PSBcIm92ZXJcIikge1xyXG5cclxuICAgICAgICAgICAgaWYoby5wcmVzc2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpZihvLnJlbGVhc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIG8ucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgby5wcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBvLmFjdGlvbiA9IFwicmVsZWFzZWRcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihwb2ludGVyLnRhcHBlZCAmJiBvLnRhcCl7XHJcbiAgICAgICAgICAgICAgICAgICAgby50YXAoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighby5ob3Zlck92ZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvLm92ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvLm92ZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG8uaG92ZXJPdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoby5zdGF0ZSA9PT0gXCJ1cFwiKSB7XHJcbiAgICAgICAgICAgIGlmKG8ucHJlc3NlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYoby5yZWxlYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgby5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvLnByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG8uYWN0aW9uID0gXCJyZWxlYXNlZFwiXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG8uaG92ZXJPdmVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZihvLm91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG8ub3V0KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG8uaG92ZXJPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5jbGFzcyBTcHJpdGUgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCBzb3VyY2UsIHgsIHkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge3gsIHl9KTtcclxuICAgICAgICBpZihzb3VyY2UgaW5zdGFuY2VvZiBJbWFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZyb21JbWFnZShzb3VyY2UpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc291cmNlLmZyYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRnJvbUF0bGFzKHNvdXJjZSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZihzb3VyY2UuaW1hZ2UgJiYgIXNvdXJjZS5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRnJvbVRpbGVzZXQoc291cmNlKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmKHNvdXJjZS5pbWFnZSAmJiBzb3VyY2UuZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZyb21UaWxlc2V0RnJhbWVzKHNvdXJjZSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoc291cmNlIGluc3RhbmNlb2YgQXJyYXkpe1xyXG4gICAgICAgICAgICBpZihzb3VyY2VbMF0gJiYgc291cmNlWzBdLnNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGcm9tQXRsYXNGcmFtZXMoc291cmNlKVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzb3VyY2VbMF0gaW5zdGFuY2VvZiBJbWFnZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZyb21JbWFnZXMoc291cmNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGltYWdlIHNvdXJjZXMgaW4gJHtzb3VyY2V9IGFyZSBub3QgcmVjb2duaXplZGApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGltYWdlIHNvdXJjZSAke3NvdXJjZX0gaXMgbm90IHJlY29nbml6ZWRgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRnJvbUltYWdlKHNvdXJjZSkge1xyXG4gICAgICAgIGlmKCEoc291cmNlIGluc3RhbmNlb2YgSW1hZ2UpKXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3NvdXJjZX0gaXMgbm90IGFuIGltYWdlIG9iamVjdGApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZVggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZVkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoID0gc291cmNlLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHNvdXJjZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlV2lkdGggPSBzb3VyY2Uud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlSGVpZ2h0ID0gc291cmNlLmhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRnJvbUF0bGFzKHNvdXJjZSkge1xyXG4gICAgICAgIHRoaXMudGlsZXNldEZyYW1lID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gdGhpcy50aWxlc2V0RnJhbWUuc291cmNlO1xyXG4gICAgICAgIHRoaXMuc291cmNlWCA9IHRoaXMudGlsZXNldEZyYW1lLmZyYW1lLng7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VZID0gdGhpcy50aWxlc2V0RnJhbWUuZnJhbWUueTtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy50aWxlc2V0RnJhbWUuZnJhbWUudztcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMudGlsZXNldEZyYW1lLmZyYW1lLmg7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VXaWR0aCA9IHRoaXMudGlsZXNldEZyYW1lLmZyYW1lLnc7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VIZWlnaHQgPSB0aGlzLnRpbGVzZXRGcmFtZS5mcmFtZS5oO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUZyb21UaWxlc2V0KHNvdXJjZSkge1xyXG4gICAgICAgIGlmKCEoc291cmNlLmltYWdlIGluc3RhbmNlb2YgSW1hZ2UpKXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3NvdXJjZS5pbWFnZX0gaXMgbm90IGFuIGltYWdlIG9iamVjdGApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlID0gc291cmNlLmltYWdlO1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZVggPSBzb3VyY2UueDtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VZID0gc291cmNlLnk7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSBzb3VyY2Uud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gc291cmNlLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VXaWR0aCA9IHNvdXJjZS53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VIZWlnaHQgPSBzb3VyY2UuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVGcm9tVGlsZXNldEZyYW1lcyhzb3VyY2UpIHtcclxuICAgICAgICBpZighKHNvdXJjZS5pbWFnZSBpbnN0YW5jZW9mIEltYWdlKSl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtzb3VyY2UuaW1hZ2V9IGlzIG5vdCBhbiBpbWFnZSBvYmplY3RgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2UuaW1hZ2U7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVzID0gc291cmNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZVggPSB0aGlzLmZyYW1lc1swXVswXTtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VZID0gdGhpcy5mcmFtZXNbMF1bMV07XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSBzb3VyY2Uud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gc291cmNlLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VXaWR0aCA9IHNvdXJjZS53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VIZWlnaHQgPSBzb3VyY2UuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVGcm9tQXRsYXNGcmFtZXMoc291cmNlKSB7XHJcbiAgICAgICAgdGhpcy5mcmFtZXMgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2VbMF0uc291cmNlO1xyXG4gICAgICAgIHRoaXMuc291cmNlWCA9IHNvdXJjZVswXS5mcmFtZS54O1xyXG4gICAgICAgIHRoaXMuc291cmNlWSA9IHNvdXJjZVswXS5mcmFtZS55O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBzb3VyY2VbMF0uZnJhbWUudztcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHNvdXJjZVswXS5mcmFtZS5oO1xyXG4gICAgICAgIHRoaXMuc291cmNlV2lkdGggPSBzb3VyY2VbMF0uZnJhbWUudztcclxuICAgICAgICB0aGlzLnNvdXJjZUhlaWdodCA9IHNvdXJjZVswXS5mcmFtZS5oO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUZyb21JbWFnZXMoc291cmNlKSB7XHJcbiAgICAgICAgdGhpcy5mcmFtZXMgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2VbMF07XHJcbiAgICAgICAgdGhpcy5zb3VyY2VYID0gMDtcclxuICAgICAgICB0aGlzLnNvdXJjZVkgPSAwO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBzb3VyY2VbMF0ud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzb3VyY2VbMF0uaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc291cmNlV2lkdGggPSBzb3VyY2VbMF0ud2lkdGg7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VIZWlnaHQgPSBzb3VyY2VbMF0uaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGdvdG9BbmRTdG9wKGZyYW1lTnVtYmVyKSB7XHJcbiAgICAgICAgaWYodGhpcy5mcmFtZXMubGVuZ3RoID4gMCAmJiBmcmFtZU51bWJlciA8IHRoaXMuZnJhbWVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZnJhbWVzWzBdIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlWCA9IHRoaXMuZnJhbWVzW2ZyYW1lTnVtYmVyXVswXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlWSA9IHRoaXMuZnJhbWVzW2ZyYW1lTnVtYmVyXVsxXTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKCB0aGlzLmZyYW1lc1tmcmFtZU51bWJlcl0uZnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlWCA9IHRoaXMuZnJhbWVzW2ZyYW1lTnVtYmVyXS5mcmFtZS54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VZID0gdGhpcy5mcmFtZXNbZnJhbWVOdW1iZXJdLmZyYW1lLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5mcmFtZXNbZnJhbWVOdW1iZXJdLmZyYW1lLnc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZnJhbWVzW2ZyYW1lTnVtYmVyXS5mcmFtZS5oO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VXaWR0aCA9IHRoaXMuZnJhbWVzW2ZyYW1lTnVtYmVyXS5mcmFtZS53O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VIZWlnaHQgPSB0aGlzLmZyYW1lc1tmcmFtZU51bWJlcl0uZnJhbWUuaDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlID0gdGhpcy5mcmFtZXNbZnJhbWVOdW1iZXJdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VYID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlWSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5zb3VyY2Uud2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuc291cmNlLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlV2lkdGggPSB0aGlzLnNvdXJjZS53aWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlSGVpZ2h0ID0gdGhpcy5zb3VyY2UuaGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRGcmFtZSA9IGZyYW1lTnVtYmVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRnJhbWUgbnVtYmVyICR7ZnJhbWVOdW1iZXJ9IGRvZXMgbm90IGV4aXN0YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihjdHgpIHtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZSxcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VYLCB0aGlzLnNvdXJjZVksXHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlV2lkdGgsIHRoaXMuc291cmNlSGVpZ2h0LFxyXG4gICAgICAgICAgICAtdGhpcy53aWR0aCAqIHRoaXMucGl2b3RYLFxyXG4gICAgICAgICAgICAtdGhpcy5oZWlnaHQgKiB0aGlzLnBpdm90WSxcclxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkU3RhdGVQbGF5ZXIoc3ByaXRlKSB7XHJcbiAgICBsZXQgZnJhbWVDb3VudGVyID0gMCxcclxuICAgICAgICBudW1iZXJPZkZyYW1lcyA9IDAsXHJcbiAgICAgICAgc3RhcnRGcmFtZSA9IDAsXHJcbiAgICAgICAgZW5kRnJhbWUgPSAwLFxyXG4gICAgICAgIHRpbWVySW50ZXJ2YWwgPSB1bmRlZmluZWQ7XHJcbiAgICBmdW5jdGlvbiBzaG93KGZyYW1lTnVtYmVyKSB7XHJcbiAgICAgICAgcmVzZXQoKTtcclxuICAgICAgICBzcHJpdGUuZ290b0FuZFN0b3AoZnJhbWVOdW1iZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGxheSgpIHtcclxuICAgICAgICBwbGF5U2VxdWVuY2UoWzAsIHNwcml0ZS5mcmFtZXMubGVuZ3RoIC0gMV0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcclxuICAgICAgICByZXNldCgpO1xyXG4gICAgICAgIHNwcml0ZS5nb3RvQW5kU3RvcChzcHJpdGUuY3VycmVudEZyYW1lKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBsYXlTZXF1ZW5jZShzZXF1ZW5jZUFycmF5KSB7XHJcbiAgICAgICAgcmVzZXQoKTtcclxuICAgICAgICBzdGFydEZyYW1lID0gc2VxdWVuY2VBcnJheVswXTtcclxuICAgICAgICBlbmRGcmFtZSA9IHNlcXVlbmNlQXJyYXlbMV07XHJcbiAgICAgICAgbnVtYmVyT2ZGcmFtZXMgPSBlbmRGcmFtZSAtIHN0YXJ0RnJhbWU7XHJcblxyXG4gICAgICAgIGlmIChzdGFydEZyYW1lID09PSAwKSB7XHJcbiAgICAgICAgICAgIG51bWJlck9mRnJhbWVzICs9IDE7XHJcbiAgICAgICAgICAgIGZyYW1lQ291bnRlciArPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobnVtYmVyT2ZGcmFtZXMgPT09IDEpe1xyXG4gICAgICAgICAgICBudW1iZXJPZkZyYW1lcyA9IDI7XHJcbiAgICAgICAgICAgIGZyYW1lQ291bnRlciArPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzcHJpdGUuZnBzKSBzcHJpdGUuZnBzID0gMTI7XHJcbiAgICAgICAgbGV0IGZyYW1lUmF0ZSA9IDEwMDAgLyBzcHJpdGUuZnBzO1xyXG4gICAgICAgIHNwcml0ZS5nb3RvQW5kU3RvcChzdGFydEZyYW1lKTtcclxuXHJcbiAgICAgICAgaWYoIXNwcml0ZS5wbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChhZHZhbmNlRnJhbWUuYmluZCh0aGlzKSwgZnJhbWVSYXRlKTtcclxuICAgICAgICAgICAgc3ByaXRlLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZHZhbmNlRnJhbWUoKSB7XHJcbiAgICAgICAgaWYgKGZyYW1lQ291bnRlciA8IG51bWJlck9mRnJhbWVzKSB7XHJcbiAgICAgICAgICAgIHNwcml0ZS5nb3RvQW5kU3RvcChzcHJpdGUuY3VycmVudEZyYW1lICsgMSk7XHJcbiAgICAgICAgICAgIGZyYW1lQ291bnRlciArPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChzcHJpdGUubG9vcCkge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLmdvdG9BbmRTdG9wKHN0YXJ0RnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgZnJhbWVDb3VudGVyID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xyXG5cclxuICAgICAgICBpZiAodGltZXJJbnRlcnZhbCAhPT0gdW5kZWZpbmVkICYmIHNwcml0ZS5wbGF5aW5nID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHNwcml0ZS5wbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZyYW1lQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIHN0YXJ0RnJhbWUgPSAwO1xyXG4gICAgICAgICAgICBlbmRGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgIG51bWJlck9mRnJhbWVzID0gMDtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzcHJpdGUuc2hvdyA9IHNob3c7XHJcbiAgICBzcHJpdGUucGxheSA9IHBsYXk7XHJcbiAgICBzcHJpdGUuc3RvcCA9IHN0b3A7XHJcbiAgICBzcHJpdGUucGxheVNlcXVlbmNlID0gcGxheVNlcXVlbmNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ByaXRlKHNvdXJjZSwgeCwgeSkge1xyXG4gICAgbGV0IHNwcml0ZSA9IG5ldyBTcHJpdGUoc291cmNlLCB4LCB5KTtcclxuICAgIGlmIChzcHJpdGUuZnJhbWVzLmxlbmd0aCA+IDApIGFkZFN0YXRlUGxheWVyKHNwcml0ZSk7XHJcbiAgICBzdGFnZS5hZGRDaGlsZChzcHJpdGUpO1xyXG4gICAgcmV0dXJuIHNwcml0ZTtcclxufVxyXG5cclxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgU3ByaXRle1xyXG4gICAgY29uc3RydWN0b3Ioc291cmNlLCB4ID0gMCwgeSA9IDApIHtcclxuICAgICAgICBzdXBlcihzb3VyY2UsIHgsIHkpO1xyXG4gICAgICAgIHRoaXMuaW50ZXJhY3JpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnV0dG9uKHNvdXJjZSwgeCwgeSkge1xyXG4gICAgbGV0IHNwcml0ZSA9IG5ldyBCdXR0b24oc291cmNlLCB4LCB5KTtcclxuICAgIHN0YWdlLmFkZENoaWxkKHNwcml0ZSk7XHJcbiAgICByZXR1cm4gc3ByaXRlO1xyXG59XHJcblxyXG5leHBvcnQgbGV0IHN0YWdlID0gbmV3IERpc3BsYXlPYmplY3QoKTtcclxuXHJcbmV4cG9ydCBsZXQgYnV0dG9ucyA9IFtdO1xyXG5leHBvcnQgbGV0IGRyYWdnYWJsZVNwcml0ZXMgPSBbXTtcclxuIiwiaW1wb3J0IHtEaXNwbGF5T2JqZWN0LCBzdGFnZX0gZnJvbSBcIi4vRGlzcGxheU9iamVjdFwiO1xyXG5cclxuY2xhc3MgR3JvdXAgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLnNwcml0ZXNUb0dyb3VwKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBzcHJpdGVzVG9Hcm91cC5mb3JFYWNoKHNwcml0ZSA9PiB0aGlzLmFkZENoaWxkKHNwcml0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENoaWxkKHNwcml0ZSkge1xyXG4gICAgICAgIHN1cGVyLmFkZENoaWxkKHNwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVTaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2hpbGQoc3ByaXRlKSB7XHJcbiAgICAgICAgaWYoc3ByaXRlLnBhcmVudCA9PT0gdGhpcykge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZSh0aGlzLmNoaWxkcmVuLmluZGV4T2Yoc3ByaXRlKSwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlU2l6ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtzcHJpdGV9IGlzIG5vdCBhIGNoaWxkIG9mICR7dGhpc31gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlU2l6ZSgpIHtcclxuICAgICAgICBpZih0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLl9uZXdXaWR0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX25ld0hlaWdodCA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goIGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGNoaWxkLnggKyBjaGlsZC53aWR0aCA+IHRoaXMuX25ld1dpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmV3V2lkdGggPSBjaGlsZC54ICsgY2hpbGQud2lkdGhcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihjaGlsZC55ICsgY2hpbGQuaGVpZ2h0ID4gdGhpcy5fbmV3SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmV3SGVpZ2h0ID0gY2hpbGQueSArIGNoaWxkLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuX25ld1dpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5fbmV3SGVpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXAoLi4uc3ByaXRlc1RvR3JvdXApIHtcclxuICAgIGxldCBzcHJpdGUgPSBuZXcgR3JvdXAoLi4uc3ByaXRlc1RvR3JvdXApO1xyXG4gICAgc3RhZ2UuYWRkQ2hpbGQoc3ByaXRlKTtcclxuICAgIHJldHVybiBzcHJpdGU7XHJcbn0iLCJpbXBvcnQge0Rpc3BsYXlPYmplY3QsIHN0YWdlfSBmcm9tIFwiLi9EaXNwbGF5T2JqZWN0XCI7XHJcblxyXG5jbGFzcyBMaW5lIGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBzdHJva2VTdHlsZSA9IFwibm9uZVwiLFxyXG4gICAgICAgIGxpbmVXaWR0aCA9IDAsXHJcbiAgICAgICAgYXggPSAwLFxyXG4gICAgICAgIGF5ID0gMCxcclxuICAgICAgICBieCA9IDMyLFxyXG4gICAgICAgIGJ5ID0gMzJcclxuICAgICl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtzdHJva2VTdHlsZSwgbGluZVdpZHRoLCBheCwgYXksIGJ4LCBieX0pO1xyXG4gICAgICAgIHRoaXMubGluZUpvaW4gPSBcInJvdW5kXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGN0eCkge1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc3Ryb2tlU3R5bGU7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xyXG4gICAgICAgIGN0eC5saW5lSm9pbiA9IHRoaXMubGluZUpvaW47XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5heCwgdGhpcy5heSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLmJ4LCB0aGlzLmJ5KTtcclxuICAgICAgICBpZiAodGhpcy5zdHJva2VTdHlsZSAhPT0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmUoc3Ryb2tlU3R5bGUsIGxpbmVXaWR0aCwgYXgsIGF5LCBieCwgYnkpe1xyXG4gICAgbGV0IHNwcml0ZSA9IG5ldyBMaW5lKHN0cm9rZVN0eWxlLCBsaW5lV2lkdGgsIGF4LCBheSwgYngsIGJ5KTtcclxuICAgIHN0YWdlLmFkZENoaWxkKHNwcml0ZSk7XHJcbiAgICByZXR1cm4gc3ByaXRlO1xyXG59IiwiaW1wb3J0IHtEaXNwbGF5T2JqZWN0LCBzdGFnZX0gZnJvbSBcIi4vRGlzcGxheU9iamVjdFwiO1xyXG5cclxuXHJcbmNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIERpc3BsYXlPYmplY3R7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICB3aWR0aCA9IDMyLFxyXG4gICAgICAgIGhlaWdodCA9IDMyLFxyXG4gICAgICAgIGZpbGxTdHlsZSA9IFwiZ3JheVwiLFxyXG4gICAgICAgIHN0cm9rZVN0eWxlID0gXCJub25lXCIsXHJcbiAgICAgICAgbGluZVdpZHRoID0gMCxcclxuICAgICAgICB4ID0gMCxcclxuICAgICAgICB5ID0gMFxyXG4gICAgKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcyx7d2lkdGgsIGhlaWdodCwgZmlsbFN0eWxlLCBzdHJva2VTdHlsZSwgbGluZVdpZHRoLCB4LCB5fSk7XHJcbiAgICAgICAgdGhpcy5tYXNrID0gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcihjdHgpIHtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZVN0eWxlO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5maWxsU3R5bGU7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5yZWN0KC10aGlzLndpZHRoICogdGhpcy5waXZvdFgsIC10aGlzLmhlaWdodCAqIHRoaXMucGl2b3RZLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgaWYodGhpcy5zdHJva2VTdHlsZSAhPT0gXCJub25lXCIpe1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmZpbGxTdHlsZSAhPT0gXCJub25lXCIpe1xyXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5tYXNrICYmIHRoaXMubWFzayA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGN0eC5jbGlwKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5nbGUod2lkdGgsIGhlaWdodCwgZmlsbFN0eWxlLCBzdHJva2VTdHlsZSwgbGluZVdpZHRoLCB4LCB5KSB7XHJcbiAgICBsZXQgc3ByaXRlID0gbmV3IFJlY3RhbmdsZSh3aWR0aCwgaGVpZ2h0LCBmaWxsU3R5bGUsIHN0cm9rZVN0eWxlLCBsaW5lV2lkdGgsIHgsIHkpO1xyXG4gICAgc3RhZ2UuYWRkQ2hpbGQoc3ByaXRlKTtcclxuXHJcbiAgICByZXR1cm4gc3ByaXRlO1xyXG59IiwibGV0IGFjdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XHJcblxyXG5jbGFzcyBTb3VuZCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2UsIGxvYWRIYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5sb2FkSGFuZGxlciA9IGxvYWRIYW5kbGVyO1xyXG5cclxuICAgICAgICB0aGlzLmFjdHggPSBhY3R4O1xyXG4gICAgICAgIHRoaXMudm9sdW1lTm9kZSA9IHRoaXMuYWN0eC5jcmVhdGVHYWluKCk7XHJcbiAgICAgICAgdGhpcy5wYW5Ob2RlID0gdGhpcy5hY3R4LmNyZWF0ZVN0ZXJlb1Bhbm5lcigpO1xyXG4gICAgICAgIHRoaXMuc291bmROb2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmJ1ZmZlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sb29wID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMucGFuVmFsdWUgPSAwO1xyXG4gICAgICAgIHRoaXMudm9sdW1lVmFsdWUgPSAxO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLnN0YXJ0T2Zmc2V0ID0gMDtcclxuICAgICAgICB0aGlzLnBsYXliYWNrUmF0ZSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZCgpXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZCgpIHtcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgdGhpcy5zb3VyY2UsIHRydWUpO1xyXG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XHJcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hY3R4LmRlY29kZUF1ZGlvRGF0YShcclxuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZSxcclxuICAgICAgICAgICAgICAgIGJ1ZmZlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNMb2FkZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmxvYWRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXVkaW8gY291bGQgbm90IGJlIGRlY29kZWQgJHtlcnJvcn1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheSgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMuYWN0eC5jdXJyZW50VGltZTtcclxuICAgICAgICB0aGlzLnNvdW5kTm9kZSA9IHRoaXMuYWN0eC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcclxuICAgICAgICB0aGlzLnNvdW5kTm9kZS5idWZmZXIgPSB0aGlzLmJ1ZmZlcjtcclxuICAgICAgICB0aGlzLnNvdW5kTm9kZS5jb25uZWN0KHRoaXMudm9sdW1lTm9kZSk7XHJcbiAgICAgICAgdGhpcy52b2x1bWVOb2RlLmNvbm5lY3QodGhpcy5wYW5Ob2RlKTtcclxuICAgICAgICB0aGlzLnBhbk5vZGUuY29ubmVjdCh0aGlzLmFjdHguZGVzdGluYXRpb24pO1xyXG4gICAgICAgIHRoaXMuc291bmROb2RlLmxvb3AgPSB0aGlzLmxvb3A7XHJcblxyXG4gICAgICAgIHRoaXMuc291bmROb2RlLnBsYXliYWNrUmF0ZS52YWx1ZSA9IHRoaXMucGxheWJhY2tSYXRlO1xyXG4gICAgICAgIHRoaXMuc291bmROb2RlLnN0YXJ0KHRoaXMuc3RhcnRUaW1lLCB0aGlzLnN0YXJ0T2Zmc2V0ICUgdGhpcy5idWZmZXIuZHVyYXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlKCkge1xyXG4gICAgICAgIGlmKHRoaXMucGxheWluZykge1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kTm9kZS5zdG9wKHRoaXMuYWN0eC5jdXJyZW50VGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRPZmZzZXQgKz0gdGhpcy5hY3R4LmN1cnJlbnRUaW1lIC0gdGhpcy5zdGFydFRpbWU7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXlpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VuZE5vZGUuc3RvcCh0aGlzLmFjdHguY3VycmVudFRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXJ0T2Zmc2V0ID0gMDtcclxuICAgICAgICB0aGlzLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5RnJvbSh2YWx1ZSkge1xyXG4gICAgICAgIGlmKHRoaXMucGxheWluZykge1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kTm9kZS5zdG9wKHRoaXMuYWN0eC5jdXJyZW50VGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhcnRPZmZzZXQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdm9sdW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZvbHVtZVZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB2b2x1bWUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnZvbHVtZU5vZGUuZ2Fpbi52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudm9sdW1lVmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGFuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhbk5vZGUucGFuLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0IHBhbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMucGFuTm9kZS5wYW4udmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlU291bmQoc291cmNlLCBsb2FkSGFuZGxlcikge1xyXG4gICAgcmV0dXJuIG5ldyBTb3VuZChzb3VyY2UsIGxvYWRIYW5kbGVyKTtcclxufSIsImltcG9ydCB7RGlzcGxheU9iamVjdCwgc3RhZ2V9IGZyb20gXCIuL0Rpc3BsYXlPYmplY3RcIjtcclxuXHJcbmNsYXNzIFRleHQgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0e1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgY29udGVudCA9IFwiSGVsbG9cIixcclxuICAgICAgICBmb250ID0gXCIxMnB4IHNhbnMtc2VyaWZcIixcclxuICAgICAgICBmaWxsU3R5bGUgPSBcInJlZFwiLFxyXG4gICAgICAgIHggPSAwLFxyXG4gICAgICAgIHkgPSAwXHJcbiAgICApe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7Y29udGVudCwgZm9udCwgZmlsbFN0eWxlLCB4LCB5fSk7XHJcbiAgICAgICAgdGhpcy50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlVGV4dCA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihjdHgpIHtcclxuICAgICAgICBjdHguZm9udCA9IHRoaXMuZm9udDtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZVN0eWxlO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5maWxsU3R5bGU7XHJcblxyXG4gICAgICAgIGlmKHRoaXMud2lkdGggPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHRoaXMuY29udGVudCkud2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuaGVpZ2h0ID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBjdHgubWVhc3VyZVRleHQoXCJNXCIpLndpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy53aWR0aCAqIHRoaXMucGl2b3RYLCAtdGhpcy5oZWlnaHQgKiB0aGlzLnBpdm90WSk7XHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IHRoaXMudGV4dEJhc2VsaW5lO1xyXG5cclxuICAgICAgICBjdHguZmlsbFRleHQodGhpcy5jb250ZW50LCAwLCAwKTtcclxuICAgICAgICBpZih0aGlzLnN0cm9rZVRleHQgIT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VUZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGV4dChjb250ZW50LCBmb250LCBmaWxsU3R5bGUsIHgsIHkpIHtcclxuICAgIGxldCBzcHJpdGUgPSBuZXcgVGV4dChjb250ZW50LCBmb250LCBmaWxsU3R5bGUsIHgsIHkpO1xyXG4gICAgc3RhZ2UuYWRkQ2hpbGQoc3ByaXRlKTtcclxuICAgIHJldHVybiBzcHJpdGU7XHJcbn0iLCJpbXBvcnQge21ha2VTb3VuZH0gZnJvbSBcIi4vU291bmRcIjtcclxuXHJcbmV4cG9ydCBsZXQgYXNzZXRzID0ge1xyXG4gICAgdG9Mb2FkOiAwLFxyXG4gICAgbG9hZGVkOiAwLFxyXG5cclxuICAgIGltYWdlRXh0ZW5zaW9uczogW1wicG5nXCIsIFwianBnXCIsIFwiZ2lmXCJdLFxyXG4gICAgZm9udEV4dGVuc2lvbnM6IFtcInR0ZlwiLCBcIm90ZlwiLCBcInR0Y1wiLCBcIndvZmZcIl0sXHJcbiAgICBqc29uRXh0ZW5zaW9uczogW1wianNvblwiXSxcclxuICAgIGF1ZGlvRXh0ZW5zaW9uczogW1wibXAzXCIsIFwib2dnXCIsIFwid2F2XCIsIFwid2VibVwiXSxcclxuXHJcbiAgICBsb2FkKHNvdXJjZXMpe1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsb2FkSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkICs9IDE7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxvYWRlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy50b0xvYWQgPT09IHRoaXMubG9hZGVkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvTG9hZCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0cyBmaW5pc2ggbG9hZGluZ1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIGFzc2V0cy4uLlwiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9Mb2FkID0gc291cmNlcy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBzb3VyY2VzLmZvckVhY2goIHNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXh0ZW5zaW9uID0gc291cmNlLnNwbGl0KFwiLlwiKS5wb3AoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbWFnZUV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pICE9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkSW1hZ2Uoc291cmNlLCBsb2FkSGFuZGxlcilcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZm9udEV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pICE9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkRm9udChzb3VyY2UsIGxvYWRIYW5kbGVyKVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5qc29uRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgIT09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRKc29uKHNvdXJjZSwgbG9hZEhhbmRsZXIpXHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmF1ZGlvRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgIT09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRTb3VuZChzb3VyY2UsIGxvYWRIYW5kbGVyKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZJbGUgdHlwZSBub3QgcmVjb2duaXplZDogXCIgKyBzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgbG9hZEltYWdlIChzb3VyY2UsIGxvYWRIYW5kbGVyKSB7XHJcbiAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgbG9hZEhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpc1tzb3VyY2VdID0gaW1hZ2U7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gc291cmNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkRm9udChzb3VyY2UsIGxvYWRIYW5kbGVyKXtcclxuICAgICAgICBsZXQgZm9udEZhbWlseSA9IHNvdXJjZS5zcGxpdChcIi9cIikucG9wKCkuc3BsaXQoXCIuXCIpWzBdO1xyXG4gICAgICAgIGxldCBuZXdTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgICBsZXQgZm9udEZhY2UgPSBcIkBmb250LWZhY2Uge2ZvbnQtZmFtaWx5OiAnXCIgKyBmb250RmFtaWx5ICsgXCInOyBzcmM6IHVybCgnXCIrIHNvdXJjZSArXCInKTt9XCI7XHJcbiAgICAgICAgbmV3U3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZm9udEZhY2UpKTtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG5ld1N0eWxlKTtcclxuXHJcbiAgICAgICAgbG9hZEhhbmRsZXIoKTtcclxuICAgIH0sXHJcblxyXG4gICAgbG9hZEpzb24oc291cmNlLCBsb2FkSGFuZGxlcikge1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgc291cmNlLCB0cnVlKTtcclxuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgeGhyLm9ubG9hZCA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaWYoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBmaWxlLm5hbWUgPSBzb3VyY2U7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpc1tmaWxlLm5hbWVdID0gZmlsZTtcclxuICAgICAgICAgICAgICAgIGlmKGZpbGUuZnJhbWVzKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVRpbGVzZXRGcmFtZXMoZmlsZSwgc291cmNlLCBsb2FkSGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZVRpbGVzZXRGcmFtZXMoZmlsZSwgc291cmNlLCBsb2FkSGFuZGxlcil7XHJcbiAgICAgICAgbGV0IGJhc2VVcmwgPSBzb3VyY2UucmVwbGFjZSgvW15cXC9dKiQvLFwiXCIpO1xyXG5cclxuICAgICAgICBsZXQgaW1hZ2VTb3VyY2UgPSBiYXNlVXJsICsgZmlsZS5tZXRhLmltYWdlO1xyXG5cclxuICAgICAgICBsZXQgaW1hZ2VMb2FkSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpc1tpbWFnZVNvdXJjZV0gPSBpbWFnZTtcclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGZpbGUuZnJhbWVzKS5mb3JFYWNoKCBmcmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2ZyYW1lXSA9IGZpbGUuZnJhbWVzW2ZyYW1lXTtcclxuICAgICAgICAgICAgICAgIHRoaXNbZnJhbWVdLnNvdXJjZSA9IGltYWdlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxvYWRIYW5kbGVyKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBpbWFnZUxvYWRIYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VTb3VyY2U7XHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWRTb3VuZChzb3VyY2UsIGxvYWRIYW5kbGVyKXtcclxuICAgICAgICBsZXQgc291bmQgPSBtYWtlU291bmQoc291cmNlLCBsb2FkSGFuZGxlcik7XHJcbiAgICAgICAgc291bmQubmFtZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzW3NvdW5kLm5hbWVdID0gc291bmQ7XHJcbiAgICB9XHJcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIGhpdFRlc3RQb2ludChwb2ludCwgc3ByaXRlKSB7XHJcbiAgICBsZXQgc2hhcGUsIGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbSwgdngsIHZ5LCBtYWduaXR1ZGUsIGhpdDtcclxuXHJcbiAgICBpZihzcHJpdGUucmFkaXVzKSB7XHJcbiAgICAgICAgc2hhcGUgPSBcImNpcmNsZVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzaGFwZSA9IFwicmVjdGFuZ2xlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgIGlmKHNoYXBlID09PSBcInJlY3RhbmdsZVwiKSB7XHJcbiAgICAgICAgIGxlZnQgPSBzcHJpdGUueDtcclxuICAgICAgICAgcmlnaHQgPSBzcHJpdGUueCArIHNwcml0ZS53aWR0aDtcclxuICAgICAgICAgdG9wID0gc3ByaXRlLnk7XHJcbiAgICAgICAgIGJvdHRvbSA9IHNwcml0ZS55ICsgc3ByaXRlLmhlaWdodDtcclxuXHJcbiAgICAgICAgIGhpdCA9IHBvaW50LnggPiBsZWZ0ICYmIHBvaW50LnggPCByaWdodCAmJiBwb2ludC55ID4gdG9wICYmIHBvaW50LnkgPCBib3R0b207XHJcbiAgICAgfVxyXG5cclxuICAgICBpZihzaGFwZSA9PT0gXCJjaXJjbGVcIikge1xyXG4gICAgICAgICB2eCA9IHBvaW50LnggLSBzcHJpdGUuY2VudGVyWDtcclxuICAgICAgICAgdnkgPSBwb2ludC55IC0gc3ByaXRlLmNlbnRlclk7XHJcbiAgICAgICAgIG1hZ25pdHVkZSA9IE1hdGguc3FydCh2eCoqMiArIHZ5KioyKTtcclxuXHJcbiAgICAgICAgIGhpdCA9IG1hZ25pdHVkZSA8IHNwcml0ZS5yYWRpdXM7XHJcbiAgICAgfVxyXG5cclxuICAgICByZXR1cm4gaGl0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGl0VGVzdENpcmNsZShjMSwgYzIsIGdsb2JhbCA9IGZhbHNlKSB7XHJcbiAgICBsZXQgdngsIHZ5LCBtYWduaXR1ZGUsIGNvbWJpbmVkUmFkaWksIGhpdDtcclxuXHJcbiAgICBpZihnbG9iYWwpIHtcclxuICAgICAgICB2eCA9IChjMi5neCArIGMyLnJhZGl1cykgLSAoYzEuZ3ggKyBjMS5yYWRpdXMpO1xyXG4gICAgICAgIHZ5ID0gKGMyLmd5ICsgYzIucmFkaXVzKSAtIChjMS5neSArIGMxLnJhZGl1cyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZ4ID0gYzIuY2VudGVyWCAtIGMxLmNlbnRlclg7XHJcbiAgICAgICAgdnkgPSBjMi5jZW50ZXJZIC0gYzEuY2VudGVyWTtcclxuICAgIH1cclxuXHJcbiAgICBtYWduaXR1ZGUgPSBNYXRoLnNxcnQodngqKjIgKyB2eSoqMik7XHJcbiAgICBjb21iaW5lZFJhZGlpID0gYzEucmFkaXVzICsgYzIucmFkaXVzO1xyXG4gICAgaGl0ID0gbWFnbml0dWRlIDwgY29tYmluZWRSYWRpaTtcclxuXHJcbiAgICByZXR1cm4gaGl0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlQ29sbGlzaW9uKGMxLCBjMiwgYm91bmNlID0gZmFsc2UsIGdsb2JhbCA9IGZhbHNlKSB7XHJcbiAgICBsZXQgbWFnbml0dWRlLCBjb21iaW5lZFJhZGlpLCBvdmVybGFwLCB2eCwgdnksIGR4LCBkeSxcclxuICAgICAgICBzID0ge30sXHJcbiAgICAgICAgaGl0ID0gZmFsc2U7XHJcblxyXG4gICAgaWYoZ2xvYmFsKSB7XHJcbiAgICAgICAgdnggPSAoYzIuZ3ggKyBjMi5yYWRpdXMpIC0gKGMxLmd4ICsgYzEucmFkaXVzKTtcclxuICAgICAgICB2eSA9IChjMi5neSArIGMyLnJhZGl1cykgLSAoYzEuZ3kgKyBjMS5yYWRpdXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2eCA9IGMyLmNlbnRlclggLSBjMS5jZW50ZXJYO1xyXG4gICAgICAgIHZ5ID0gYzIuY2VudGVyWSAtIGMxLmNlbnRlclk7XHJcbiAgICB9XHJcbiAgICBtYWduaXR1ZGUgPSBNYXRoLnNxcnQodngqKjIgKyB2eSoqMik7XHJcbiAgICBjb21iaW5lZFJhZGlpID0gYzEucmFkaXVzICsgYzIucmFkaXVzO1xyXG5cclxuICAgIGlmKG1hZ25pdHVkZSA8IGNvbWJpbmVkUmFkaWkpIHtcclxuICAgICAgICBoaXQgPSB0cnVlO1xyXG4gICAgICAgIG92ZXJsYXAgPSBjb21iaW5lZFJhZGlpIC0gbWFnbml0dWRlO1xyXG4gICAgICAgIGxldCBxdWFudHVtUGFkZGluZyA9IDAuMztcclxuXHJcbiAgICAgICAgb3ZlcmxhcCArPSBxdWFudHVtUGFkZGluZztcclxuICAgICAgICBkeCA9IHZ4IC8gbWFnbml0dWRlO1xyXG4gICAgICAgIGR5ID0gdnkgLyBtYWduaXR1ZGU7XHJcblxyXG4gICAgICAgIGMxLnggLT0gb3ZlcmxhcCAqIGR4O1xyXG4gICAgICAgIGMxLnkgLT0gb3ZlcmxhcCAqIGR5O1xyXG5cclxuICAgICAgICBpZihib3VuY2UpIHtcclxuICAgICAgICAgICAgcy54ID0gdnk7XHJcbiAgICAgICAgICAgIHMueSA9IC12eDtcclxuXHJcbiAgICAgICAgICAgIGJvdW5jZU9mZlN1cmZhY2UoYzEsIHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhpdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmluZ0NpcmNsZUNvbGxpc2lvbihjMSwgYzIsIGdsb2JhbCA9IGZhbHNlKSB7XHJcbiAgICBsZXQgY29tYmluZWRSYWRpaSwgb3ZlcmxhcCwgeFNpZGUsIHlTaWRlLFxyXG4gICAgICAgIHMgPSB7fSxcclxuICAgICAgICBwMUEgPSB7fSxcclxuICAgICAgICBwMUIgPSB7fSxcclxuICAgICAgICBwMkEgPSB7fSxcclxuICAgICAgICBwMkIgPSB7fSxcclxuICAgICAgICBoaXQgPSBmYWxzZTtcclxuICAgIGMxLm1hc3MgPSBjMS5tYXNzIHx8IDE7XHJcbiAgICBjMi5tYXNzID0gYzIubWFzcyB8fCAxO1xyXG5cclxuICAgIGlmKGdsb2JhbCkge1xyXG4gICAgICAgIHMudnggPSAoYzIuZ3ggKyBjMi5yYWRpdXMpIC0gKGMxLmd4ICsgYzEucmFkaXVzKTtcclxuICAgICAgICBzLnZ5ID0gKGMyLmd5ICsgYzIucmFkaXVzKSAtIChjMS5neSArIGMxLnJhZGl1cyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHMudnggPSBjMi5jZW50ZXJYIC0gYzEuY2VudGVyWDtcclxuICAgICAgICBzLnZ5ID0gYzIuY2VudGVyWSAtIGMxLmNlbnRlclk7XHJcbiAgICB9XHJcblxyXG4gICAgcy5tYWduaXR1ZGUgPSBNYXRoLnNxcnQocy52eCoqMiArIHMudnkqKjIpO1xyXG5cclxuICAgIGNvbWJpbmVkUmFkaWkgPSBjMS5yYWRpdXMgKyBjMi5yYWRpdXM7XHJcblxyXG4gICAgaWYocy5tYWduaXR1ZGUgPCBjb21iaW5lZFJhZGlpKSB7XHJcbiAgICAgICAgaGl0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgb3ZlcmxhcCA9IGNvbWJpbmVkUmFkaWkgLSBzLm1hZ25pdHVkZVxyXG5cclxuICAgICAgICBvdmVybGFwICs9IDAuMztcclxuXHJcbiAgICAgICAgcy5keCA9IHMudnggLyBzLm1hZ25pdHVkZTtcclxuICAgICAgICBzLmR5ID0gcy52eSAvIHMubWFnbml0dWRlO1xyXG5cclxuICAgICAgICBzLnZ4SGFsZiA9IE1hdGguYWJzKHMuZHggKiBvdmVybGFwIC8gMik7XHJcbiAgICAgICAgcy52eUhhbGYgPSBNYXRoLmFicyhzLmR5ICogb3ZlcmxhcCAvIDIpO1xyXG5cclxuICAgICAgICAoYzEueCA+IGMyLngpID8geFNpZGUgPSAxIDogeFNpZGUgPSAtMTtcclxuICAgICAgICAoYzEueSA+IGMyLnkpID8geVNpZGUgPSAxIDogeVNpZGUgPSAtMTtcclxuXHJcbiAgICAgICAgYzEueCA9IGMxLnggKyAocy52eEhhbGYgKiB4U2lkZSk7XHJcbiAgICAgICAgYzEueSA9IGMxLnkgKyAocy52eUhhbGYgKiB5U2lkZSk7XHJcblxyXG4gICAgICAgIGMyLnggPSBjMi54ICsgKHMudnhIYWxmICogLXhTaWRlKTtcclxuICAgICAgICBjMi55ID0gYzIueSArIChzLnZ5SGFsZiAqIC15U2lkZSk7XHJcblxyXG4gICAgICAgIHMubHggPSBzLnZ5O1xyXG4gICAgICAgIHMubHkgPSAtcy52eDtcclxuXHJcbiAgICAgICAgbGV0IGRwMSA9IGMxLnZ4ICogcy5keCArIGMxLnZ5ICogcy5keTtcclxuXHJcbiAgICAgICAgcDFBLnggPSBkcDEgKiBzLmR4O1xyXG4gICAgICAgIHAxQS55ID0gZHAxICogcy5keTtcclxuXHJcbiAgICAgICAgbGV0IGRwMiA9IGMxLnZ4ICogKHMubHggLyBzLm1hZ25pdHVkZSkgKyBjMS52eSAqIChzLmx5IC8gcy5tYWduaXR1ZGUpO1xyXG5cclxuICAgICAgICBwMUIueCA9IGRwMiAqIChzLmx4IC8gcy5tYWduaXR1ZGUpO1xyXG4gICAgICAgIHAxQi55ID0gZHAyICogKHMubHkgLyBzLm1hZ25pdHVkZSk7XHJcblxyXG4gICAgICAgIGxldCBkcDMgPSBjMi52eCAqIHMuZHggKyBjMi52eSAqIHMuZHk7XHJcblxyXG4gICAgICAgIHAyQS54ID0gZHAzICogcy5keDtcclxuICAgICAgICBwMkEueSA9IGRwMyAqIHMuZHk7XHJcblxyXG4gICAgICAgIGxldCBkcDQgPSBjMi52eCAqIChzLmx4IC8gcy5tYWduaXR1ZGUpICsgYzIudnkgKiAocy5seSAvIHMubWFnbml0dWRlKTtcclxuXHJcbiAgICAgICAgcDJCLnggPSBkcDQgKiAocy5seCAvIHMubWFnbml0dWRlKTtcclxuICAgICAgICBwMkIueSA9IGRwNCAqIChzLmx5IC8gcy5tYWduaXR1ZGUpO1xyXG5cclxuICAgICAgICBjMS5ib3VuY2UgPSB7fTtcclxuICAgICAgICBjMS5ib3VuY2UueCA9IHAxQi54ICsgcDJBLng7XHJcbiAgICAgICAgYzEuYm91bmNlLnkgPSBwMUIueSArIHAyQS55O1xyXG5cclxuICAgICAgICBjMi5ib3VuY2UgPSB7fTtcclxuICAgICAgICBjMi5ib3VuY2UueCA9IHAxQS54ICsgcDJCLng7XHJcbiAgICAgICAgYzIuYm91bmNlLnkgPSBwMUEueSArIHAyQi55O1xyXG5cclxuICAgICAgICBjMS52eCA9IGMxLmJvdW5jZS54IC8gYzEubWFzcztcclxuICAgICAgICBjMS52eSA9IGMxLmJvdW5jZS55IC8gYzEubWFzcztcclxuICAgICAgICBjMi52eCA9IGMyLmJvdW5jZS54IC8gYzIubWFzcztcclxuICAgICAgICBjMi52eSA9IGMyLmJvdW5jZS55IC8gYzIubWFzcztcclxuICAgIH1cclxuICAgIHJldHVybiBoaXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBsZUNpcmNsZUNvbGxpc2lvbihhcnJheU9mQ2lyY2xlcywgZ2xvYmFsID0gZmFsc2UpIHtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheU9mQ2lyY2xlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgbGV0IGMxID0gYXJyYXlPZkNpcmNsZXNbaV07XHJcblxyXG4gICAgICAgIGZvcihsZXQgaiA9IGkrMTsgaiA8IGFycmF5T2ZDaXJjbGVzLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgbGV0IGMyID0gYXJyYXlPZkNpcmNsZXNbal07XHJcblxyXG4gICAgICAgICAgICBtb3ZpbmdDaXJjbGVDb2xsaXNpb24oYzEsIGMyLCBnbG9iYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpdFRlc3RSZWN0YW5nbGUocjEsIHIyLCBnbG9iYWwgPSBmYWxzZSkge1xyXG4gICAgbGV0IGhpdCwgY29tYmluZWRIYWxmV2lkdGhzLCBjb21iaW5lZEhhbGZIZWlnaHRzLCB2eCwgdnk7XHJcblxyXG4gICAgaGl0ID0gZmFsc2U7XHJcblxyXG4gICAgaWYoZ2xvYmFsKXtcclxuICAgICAgICB2eCA9IChyMS5neCArIHIxLmhhbGZXaWR0aCkgLSAocjIuZ3ggKyByMi5oYWxmV2lkdGgpO1xyXG4gICAgICAgIHZ5ID0gKHIxLmd5ICsgcjEuaGFsZkhlaWdodCkgLSAocjIuZ3kgKyByMi5oYWxmSGVpZ2h0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdnggPSByMS5jZW50ZXJYIC0gcjIuY2VudGVyWDtcclxuICAgICAgICB2eSA9IHIxLmNlbnRlclkgLSByMi5jZW50ZXJZO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbWJpbmVkSGFsZldpZHRocyA9IHIxLmhhbGZXaWR0aCArIHIyLmhhbGZXaWR0aDtcclxuICAgIGNvbWJpbmVkSGFsZkhlaWdodHMgPSByMS5oYWxmSGVpZ2h0ICsgcjIuaGFsZkhlaWdodDtcclxuXHJcbiAgICBpZihNYXRoLmFicyh2eCkgPCBjb21iaW5lZEhhbGZXaWR0aHMgJiYgTWF0aC5hYnModnkpIDwgY29tYmluZWRIYWxmSGVpZ2h0cykge1xyXG4gICAgICAgIGhpdCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhpdCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhpdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlY3RhbmdsZUNvbGxpc2lvbihyMSwgcjIsIGJvdW5jZSA9IGZhbHNlLCBnbG9iYWwgPSB0cnVlKSB7XHJcbiAgICBsZXQgY29sbGlzaW9uLCBjb21iaW5lZEhhbGZXaWR0aHMsIGNvbWJpbmVkSGFsZkhlaWdodHMsIG92ZXJsYXBYLCBvdmVybGFwWSwgdngsIHZ5O1xyXG5cclxuICAgIGlmIChnbG9iYWwpIHtcclxuICAgICAgICB2eCA9IChyMS5neCArIHIxLmhhbGZXaWR0aCkgLSAocjIuZ3ggKyByMi5oYWxmV2lkdGgpO1xyXG4gICAgICAgIHZ5ID0gKHIxLmd5ICsgcjEuaGFsZkhlaWdodCkgLSAocjIuZ3kgKyByMi5oYWxmSGVpZ2h0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdnggPSByMS5jZW50ZXJYIC0gcjIuY2VudGVyWDtcclxuICAgICAgICB2eSA9IHIxLmNlbnRlclkgLSByMi5jZW50ZXJZO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbWJpbmVkSGFsZldpZHRocyA9IHIxLmhhbGZXaWR0aCArIHIyLmhhbGZXaWR0aDtcclxuICAgIGNvbWJpbmVkSGFsZkhlaWdodHMgPSByMS5oYWxmSGVpZ2h0ICsgcjIuaGFsZkhlaWdodDtcclxuXHJcbiAgICBpZiAoTWF0aC5hYnModngpIDwgY29tYmluZWRIYWxmV2lkdGhzKSB7XHJcblxyXG4gICAgICAgIGlmIChNYXRoLmFicyh2eSkgPCBjb21iaW5lZEhhbGZIZWlnaHRzKSB7XHJcblxyXG4gICAgICAgICAgICBvdmVybGFwWCA9IGNvbWJpbmVkSGFsZldpZHRocyAtIE1hdGguYWJzKHZ4KTtcclxuICAgICAgICAgICAgb3ZlcmxhcFkgPSBjb21iaW5lZEhhbGZIZWlnaHRzIC0gTWF0aC5hYnModnkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG92ZXJsYXBYID49IG92ZXJsYXBZKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodnkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uID0gXCJ0b3BcIjtcclxuICAgICAgICAgICAgICAgICAgICByMS55ID0gcjEueSArIG92ZXJsYXBZO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb24gPSBcImJvdHRvbVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHIxLnkgPSByMS55IC0gb3ZlcmxhcFk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJvdW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHIxLnZ5ICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZ4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbiA9IFwibGVmdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHIxLnggPSByMS54ICsgb3ZlcmxhcFg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbiA9IFwicmlnaHRcIjtcclxuICAgICAgICAgICAgICAgICAgICByMS54ID0gcjEueCAtIG92ZXJsYXBYO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChib3VuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByMS52eCAqPSAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb2xsaXNpb247XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGl0VGVzdENpcmNsZVJlY3RhbmdsZShjMSwgcjEsIGdsb2JhbCA9IGZhbHNlKSB7XHJcblxyXG4gICAgbGV0IHJlZ2lvbiwgY29sbGlzaW9uLCBjMXgsIGMxeSwgcjF4LCByMXk7XHJcblxyXG4gICAgaWYgKGdsb2JhbCkge1xyXG4gICAgICAgIGMxeCA9IGMxLmd4O1xyXG4gICAgICAgIGMxeSA9IGMxLmd5O1xyXG4gICAgICAgIHIxeCA9IHIxLmd4O1xyXG4gICAgICAgIHIxeSA9IHIxLmd5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjMXggPSBjMS54O1xyXG4gICAgICAgIGMxeSA9IGMxLnk7XHJcbiAgICAgICAgcjF4ID0gcjEueDtcclxuICAgICAgICByMXkgPSByMS55O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjMXkgPCByMXkgLSByMS5oYWxmSGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKGMxeCA8IHIxeCAtIDEgLSByMS5oYWxmV2lkdGgpIHtcclxuICAgICAgICAgICAgcmVnaW9uID0gXCJ0b3BMZWZ0XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjMXggPiByMXggKyAxICsgcjEuaGFsZldpZHRoKSB7XHJcbiAgICAgICAgICAgIHJlZ2lvbiA9IFwidG9wUmlnaHRcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWdpb24gPSBcInRvcE1pZGRsZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoYzF5ID4gcjF5ICsgcjEuaGFsZkhlaWdodCkge1xyXG5cclxuICAgICAgICBpZiAoYzF4IDwgcjF4IC0gMSAtIHIxLmhhbGZXaWR0aCkge1xyXG4gICAgICAgICAgICByZWdpb24gPSBcImJvdHRvbUxlZnRcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGMxeCA+IHIxeCArIDEgKyByMS5oYWxmV2lkdGgpIHtcclxuICAgICAgICAgICAgcmVnaW9uID0gXCJib3R0b21SaWdodFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlZ2lvbiA9IFwiYm90dG9tTWlkZGxlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoYzF4IDwgcjF4IC0gcjEuaGFsZldpZHRoKSB7XHJcbiAgICAgICAgICAgIHJlZ2lvbiA9IFwibGVmdE1pZGRsZVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlZ2lvbiA9IFwicmlnaHRNaWRkbGVcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlZ2lvbiA9PT0gXCJ0b3BNaWRkbGVcIiB8fCByZWdpb24gPT09IFwiYm90dG9tTWlkZGxlXCIgfHwgcmVnaW9uID09PSBcImxlZnRNaWRkbGVcIiB8fCByZWdpb24gPT09IFwicmlnaHRNaWRkbGVcIikge1xyXG4gICAgICAgIGNvbGxpc2lvbiA9IGhpdFRlc3RSZWN0YW5nbGUoYzEsIHIxLCBnbG9iYWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgcG9pbnQgPSB7fTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChyZWdpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcInRvcExlZnRcIjpcclxuICAgICAgICAgICAgICAgIHBvaW50LnggPSByMXg7XHJcbiAgICAgICAgICAgICAgICBwb2ludC55ID0gcjF5O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwidG9wUmlnaHRcIjpcclxuICAgICAgICAgICAgICAgIHBvaW50LnggPSByMXggKyByMS53aWR0aDtcclxuICAgICAgICAgICAgICAgIHBvaW50LnkgPSByMXk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJib3R0b21MZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICBwb2ludC54ID0gcjF4O1xyXG4gICAgICAgICAgICAgICAgcG9pbnQueSA9IHIxeSArIHIxLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImJvdHRvbVJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICBwb2ludC54ID0gcjF4ICsgcjEud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBwb2ludC55ID0gcjF5ICsgcjEuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2xsaXNpb24gPSBoaXRUZXN0Q2lyY2xlUG9pbnQoYzEsIHBvaW50LCBnbG9iYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb2xsaXNpb24pIHtcclxuICAgICAgICByZXR1cm4gcmVnaW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGl0VGVzdENpcmNsZVBvaW50KGMxLCBwb2ludCwgZ2xvYmFsID0gZmFsc2UpIHtcclxuXHJcbiAgICBwb2ludC5kaWFtZXRlciA9IDE7XHJcbiAgICBwb2ludC5yYWRpdXMgPSAwLjU7XHJcbiAgICBwb2ludC5jZW50ZXJYID0gcG9pbnQueDtcclxuICAgIHBvaW50LmNlbnRlclkgPSBwb2ludC55O1xyXG4gICAgcG9pbnQuZ3ggPSBwb2ludC54O1xyXG4gICAgcG9pbnQuZ3kgPSBwb2ludC55O1xyXG4gICAgcmV0dXJuIGhpdFRlc3RDaXJjbGUoYzEsIHBvaW50LCBnbG9iYWwpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlUmVjdGFuZ2xlQ29sbGlzaW9uKGMxLCByMSwgYm91bmNlID0gZmFsc2UsIGdsb2JhbCA9IGZhbHNlKSB7XHJcblxyXG4gICAgbGV0IHJlZ2lvbiwgY29sbGlzaW9uLCBjMXgsIGMxeSwgcjF4LCByMXk7XHJcblxyXG4gICAgaWYgKGdsb2JhbCkge1xyXG4gICAgICAgIGMxeCA9IGMxLmd4O1xyXG4gICAgICAgIGMxeSA9IGMxLmd5O1xyXG4gICAgICAgIHIxeCA9IHIxLmd4O1xyXG4gICAgICAgIHIxeSA9IHIxLmd5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjMXggPSBjMS54O1xyXG4gICAgICAgIGMxeSA9IGMxLnk7XHJcbiAgICAgICAgcjF4ID0gcjEueDtcclxuICAgICAgICByMXkgPSByMS55O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjMXkgPCByMXkgLSByMS5oYWxmSGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKGMxeCA8IHIxeCAtIDEgLSByMS5oYWxmV2lkdGgpIHtcclxuICAgICAgICAgICAgcmVnaW9uID0gXCJ0b3BMZWZ0XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjMXggPiByMXggKyAxICsgcjEuaGFsZldpZHRoKSB7XHJcbiAgICAgICAgICAgIHJlZ2lvbiA9IFwidG9wUmlnaHRcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWdpb24gPSBcInRvcE1pZGRsZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmIChjMXkgPiByMXkgKyByMS5oYWxmSGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKGMxeCA8IHIxeCAtIDEgLSByMS5oYWxmV2lkdGgpIHtcclxuICAgICAgICAgICAgcmVnaW9uID0gXCJib3R0b21MZWZ0XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjMXggPiByMXggKyAxICsgcjEuaGFsZldpZHRoKSB7XHJcbiAgICAgICAgICAgIHJlZ2lvbiA9IFwiYm90dG9tUmlnaHRcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWdpb24gPSBcImJvdHRvbU1pZGRsZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGMxeCA8IHIxeCAtIHIxLmhhbGZXaWR0aCkge1xyXG4gICAgICAgICAgICByZWdpb24gPSBcImxlZnRNaWRkbGVcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWdpb24gPSBcInJpZ2h0TWlkZGxlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocmVnaW9uID09PSBcInRvcE1pZGRsZVwiIHx8IHJlZ2lvbiA9PT0gXCJib3R0b21NaWRkbGVcIiB8fCByZWdpb24gPT09IFwibGVmdE1pZGRsZVwiIHx8IHJlZ2lvbiA9PT0gXCJyaWdodE1pZGRsZVwiKSB7XHJcbiAgICAgICAgY29sbGlzaW9uID0gcmVjdGFuZ2xlQ29sbGlzaW9uKGMxLCByMSwgYm91bmNlLCBnbG9iYWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgcG9pbnQgPSB7fTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChyZWdpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcInRvcExlZnRcIjpcclxuICAgICAgICAgICAgICAgIHBvaW50LnggPSByMXg7XHJcbiAgICAgICAgICAgICAgICBwb2ludC55ID0gcjF5O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwidG9wUmlnaHRcIjpcclxuICAgICAgICAgICAgICAgIHBvaW50LnggPSByMXggKyByMS53aWR0aDtcclxuICAgICAgICAgICAgICAgIHBvaW50LnkgPSByMXk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJib3R0b21MZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICBwb2ludC54ID0gcjF4O1xyXG4gICAgICAgICAgICAgICAgcG9pbnQueSA9IHIxeSArIHIxLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImJvdHRvbVJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICBwb2ludC54ID0gcjF4ICsgcjEud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBwb2ludC55ID0gcjF5ICsgcjEuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29sbGlzaW9uID0gY2lyY2xlUG9pbnRDb2xsaXNpb24oYzEsIHBvaW50LCBib3VuY2UsIGdsb2JhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbGxpc2lvbikge1xyXG4gICAgICAgIHJldHVybiByZWdpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjb2xsaXNpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGVQb2ludENvbGxpc2lvbihjMSwgcG9pbnQsIGJvdW5jZSA9IGZhbHNlLCBnbG9iYWwgPSBmYWxzZSkge1xyXG4gICAgcG9pbnQuZGlhbWV0ZXIgPSAxO1xyXG4gICAgcG9pbnQucmFkaXVzID0gMC41O1xyXG4gICAgcG9pbnQuY2VudGVyWCA9IHBvaW50Lng7XHJcbiAgICBwb2ludC5jZW50ZXJZID0gcG9pbnQueTtcclxuICAgIHBvaW50Lmd4ID0gcG9pbnQueDtcclxuICAgIHBvaW50Lmd5ID0gcG9pbnQueTtcclxuICAgIHJldHVybiBjaXJjbGVDb2xsaXNpb24oYzEsIHBvaW50LCBib3VuY2UsIGdsb2JhbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaXQoYSwgYiwgcmVhY3QgPSBmYWxzZSwgYm91bmNlID0gZmFsc2UsIGdsb2JhbCwgZXh0cmEgPSB1bmRlZmluZWQpIHtcclxuICAgIGxldCBjb2xsaXNpb24sXHJcbiAgICAgICAgYUlzQVNwcml0ZSA9IGEucGFyZW50ICE9PSB1bmRlZmluZWQsXHJcbiAgICAgICAgYklzQVNwcml0ZSA9IGIucGFyZW50ICE9PSB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYgKGFJc0FTcHJpdGUgJiYgYiBpbnN0YW5jZW9mIEFycmF5IHx8IGJJc0FTcHJpdGUgJiYgYSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgc3ByaXRlVnNBcnJheSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb2xsaXNpb24gPSBmaW5kQ29sbGlzaW9uVHlwZShhLCBiKTtcclxuICAgICAgICBpZiAoY29sbGlzaW9uICYmIGV4dHJhKSBleHRyYShjb2xsaXNpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb2xsaXNpb247XHJcblxyXG4gICAgZnVuY3Rpb24gZmluZENvbGxpc2lvblR5cGUoYSwgYikge1xyXG4gICAgICAgIGxldCBhSXNBU3ByaXRlID0gYS5wYXJlbnQgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgYklzQVNwcml0ZSA9IGIucGFyZW50ICE9PSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmIChhSXNBU3ByaXRlICYmIGJJc0FTcHJpdGUpIHtcclxuICAgICAgICAgICAgaWYgKGEuZGlhbWV0ZXIgJiYgYi5kaWFtZXRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNpcmNsZVZzQ2lyY2xlKGEsIGIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGEuZGlhbWV0ZXIgJiYgIWIuZGlhbWV0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaXJjbGVWc1JlY3RhbmdsZShhLCBiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWN0YW5nbGVWc1JlY3RhbmdsZShhLCBiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYklzQVNwcml0ZSAmJiAhKGEueCA9PT0gdW5kZWZpbmVkKSAmJiAhKGEueSA9PT0gdW5kZWZpbmVkKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaGl0VGVzdFBvaW50KGEsIGIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSSdtIHNvcnJ5LCAke2F9IGFuZCAke2J9IGNhbm5vdCBiZSB1c2UgdG9nZXRoZXIgaW4gYSBjb2xsaXNpb24gdGVzdC4nYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNwcml0ZVZzQXJyYXkoKSB7XHJcbiAgICAgICAgaWYgKGEgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBsZXQgW2EsIGJdID0gW2IsIGFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IHNwcml0ZSA9IGJbaV07XHJcbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IGZpbmRDb2xsaXNpb25UeXBlKGEsIHNwcml0ZSk7XHJcbiAgICAgICAgICAgIGlmIChjb2xsaXNpb24gJiYgZXh0cmEpIGV4dHJhKGNvbGxpc2lvbiwgc3ByaXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2lyY2xlVnNDaXJjbGUoYSwgYikge1xyXG4gICAgICAgIGlmICghcmVhY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGhpdFRlc3RDaXJjbGUoYSwgYik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGEudnggKyBhLnZ5ICE9PSAwICYmIGIudnggKyBiLnZ5ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW92aW5nQ2lyY2xlQ29sbGlzaW9uKGEsIGIsIGdsb2JhbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2lyY2xlQ29sbGlzaW9uKGEsIGIsIGJvdW5jZSwgZ2xvYmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWN0YW5nbGVWc1JlY3RhbmdsZShhLCBiKSB7XHJcbiAgICAgICAgaWYgKCFyZWFjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaGl0VGVzdFJlY3RhbmdsZShhLCBiLCBnbG9iYWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWN0YW5nbGVDb2xsaXNpb24oYSwgYiwgYm91bmNlLCBnbG9iYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaXJjbGVWc1JlY3RhbmdsZShhLCBiKSB7XHJcbiAgICAgICAgaWYgKCFyZWFjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaGl0VGVzdENpcmNsZVJlY3RhbmdsZShhLCBiLCBnbG9iYWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaXJjbGVSZWN0YW5nbGVDb2xsaXNpb24oYSwgYiwgYm91bmNlLCBnbG9iYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYm91bmNlT2ZmU3VyZmFjZShvLCBzKSB7XHJcbiAgICBsZXQgZHAxLCBkcDIsXHJcbiAgICAgICAgcDEgPSB7fSxcclxuICAgICAgICBwMiA9IHt9LFxyXG4gICAgICAgIGJvdW5jZSA9IHt9LFxyXG4gICAgICAgIG1hc3MgPSBvLm1hc3MgfHwgMTtcclxuXHJcbiAgICAvLzEuIENhbGN1bGF0ZSB0aGUgY29sbGlzaW9uIHN1cmZhY2UncyBwcm9wZXJ0aWVzXHJcbiAgICAvL0ZpbmQgdGhlIHN1cmZhY2UgdmVjdG9yJ3MgbGVmdCBub3JtYWxcclxuICAgIHMubHggPSBzLnk7XHJcbiAgICBzLmx5ID0gLXMueDtcclxuXHJcbiAgICAvL0ZpbmQgaXRzIG1hZ25pdHVkZVxyXG4gICAgcy5tYWduaXR1ZGUgPSBNYXRoLnNxcnQocy54ICogcy54ICsgcy55ICogcy55KTtcclxuXHJcbiAgICAvL0ZpbmQgaXRzIG5vcm1hbGl6ZWQgdmFsdWVzXHJcbiAgICBzLmR4ID0gcy54IC8gcy5tYWduaXR1ZGU7XHJcbiAgICBzLmR5ID0gcy55IC8gcy5tYWduaXR1ZGU7XHJcblxyXG4gICAgLy8yLiBCb3VuY2UgdGhlIG9iamVjdCAobykgb2ZmIHRoZSBzdXJmYWNlIChzKVxyXG5cclxuICAgIC8vRmluZCB0aGUgZG90IHByb2R1Y3QgYmV0d2VlbiB0aGUgb2JqZWN0IGFuZCB0aGUgc3VyZmFjZVxyXG4gICAgZHAxID0gby52eCAqIHMuZHggKyBvLnZ5ICogcy5keTtcclxuXHJcbiAgICAvL1Byb2plY3QgdGhlIG9iamVjdCdzIHZlbG9jaXR5IG9udG8gdGhlIGNvbGxpc2lvbiBzdXJmYWNlXHJcbiAgICBwMS52eCA9IGRwMSAqIHMuZHg7XHJcbiAgICBwMS52eSA9IGRwMSAqIHMuZHk7XHJcblxyXG4gICAgLy9GaW5kIHRoZSBkb3QgcHJvZHVjdCBvZiB0aGUgb2JqZWN0IGFuZCB0aGUgc3VyZmFjZSdzIGxlZnQgbm9ybWFsIChzLmx4IGFuZCBzLmx5KVxyXG4gICAgZHAyID0gby52eCAqIChzLmx4IC8gcy5tYWduaXR1ZGUpICsgby52eSAqIChzLmx5IC8gcy5tYWduaXR1ZGUpO1xyXG5cclxuICAgIC8vUHJvamVjdCB0aGUgb2JqZWN0J3MgdmVsb2NpdHkgb250byB0aGUgc3VyZmFjZSdzIGxlZnQgbm9ybWFsXHJcbiAgICBwMi52eCA9IGRwMiAqIChzLmx4IC8gcy5tYWduaXR1ZGUpO1xyXG4gICAgcDIudnkgPSBkcDIgKiAocy5seSAvIHMubWFnbml0dWRlKTtcclxuXHJcbiAgICAvL1JldmVyc2UgdGhlIHByb2plY3Rpb24gb24gdGhlIHN1cmZhY2UncyBsZWZ0IG5vcm1hbFxyXG4gICAgcDIudnggKj0gLTE7XHJcbiAgICBwMi52eSAqPSAtMTtcclxuXHJcbiAgICAvL0FkZCB1cCB0aGUgcHJvamVjdGlvbnMgdG8gY3JlYXRlIGEgbmV3IGJvdW5jZSB2ZWN0b3JcclxuICAgIGJvdW5jZS54ID0gcDEudnggKyBwMi52eDtcclxuICAgIGJvdW5jZS55ID0gcDEudnkgKyBwMi52eTtcclxuXHJcbiAgICAvL0Fzc2lnbiB0aGUgYm91bmNlIHZlY3RvciB0byB0aGUgb2JqZWN0J3MgdmVsb2NpdHlcclxuICAgIC8vd2l0aCBvcHRpb25hbCBtYXNzIHRvIGRhbXBlbiB0aGUgZWZmZWN0XHJcbiAgICBvLnZ4ID0gYm91bmNlLnggLyBtYXNzO1xyXG4gICAgby52eSA9IGJvdW5jZS55IC8gbWFzcztcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gbWFrZUNhbnZhcyh3aWR0aCA9IDI1NiwgaGVpZ2h0ID0gMjU2LCBib3JkZXIgPSBcIjFweCBkYXNoZWQgYmxhY2tcIiwgYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiKSB7XHJcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIGNhbnZhcy5zdHlsZS5ib3JkZXIgPSBib3JkZXI7XHJcbiAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG5cclxuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIHJldHVybiB7Y2FudmFzLCBjdHh9O1xyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHtjaXJjbGV9IGZyb20gXCIuL0NpcmNsZVwiO1xyXG5pbXBvcnQge3JlbW92ZX0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBsZXQgcGFydGljbGVzID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFydGljbGVFZmZlY3QoXHJcbiAgICB4ID0gMCxcclxuICAgIHkgPSAwLFxyXG4gICAgc3ByaXRlRnVuY3Rpb24gPSAoKSA9PiBjaXJjbGUoMTAsIFwicmVkXCIpLFxyXG4gICAgbnVtYmVyT2ZQYXJ0aWNsZXMgPSAxMCxcclxuICAgIGdyYXZpdHkgPSAwLFxyXG4gICAgcmFuZG9tU3BhY2luZyA9IHRydWUsXHJcbiAgICBtaW5BbmdsZSA9IDAsIG1heEFuZ2xlID0gNi4yOCxcclxuICAgIG1pblNpemUgPSA0LCBtYXhTaXplID0gMTYsXHJcbiAgICBtaW5TcGVlZCA9IDAuMSwgbWF4U3BlZWQgPSAxLFxyXG4gICAgbWluU2NhbGVTcGVlZCA9IDAuMDEsIG1heFNjYWxlU3BlZWQgPSAwLjA1LFxyXG4gICAgbWluQWxwaGFTcGVlZCA9IDAuMDIsIG1heEFscGhhU3BlZWQgPSAwLjAyLFxyXG4gICAgbWluUm90YXRpb25TcGVlZCA9IDAuMDEsIG1heFJvdGF0aW9uU3BlZWQgPSAwLjAzXHJcbikge1xyXG5cclxuXHJcbiAgICBsZXQgcmFuZG9tRmxvYXQgPSAobWluLCBtYXgpID0+IG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSxcclxuICAgICAgICByYW5kb21JbnQgPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcblxyXG4gICAgbGV0IGFuZ2xlcyA9IFtdO1xyXG4gICAgbGV0IGFuZ2xlO1xyXG4gICAgbGV0IHNwYWNpbmcgPSAobWF4QW5nbGUgLSBtaW5BbmdsZSkgLyAobnVtYmVyT2ZQYXJ0aWNsZXMgLSAxKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlBhcnRpY2xlczsgaSsrKSB7XHJcblxyXG4gICAgICAgIGlmIChyYW5kb21TcGFjaW5nKSB7XHJcbiAgICAgICAgICAgIGFuZ2xlID0gcmFuZG9tRmxvYXQobWluQW5nbGUsIG1heEFuZ2xlKTtcclxuICAgICAgICAgICAgYW5nbGVzLnB1c2goYW5nbGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChhbmdsZSA9PT0gdW5kZWZpbmVkKSBhbmdsZSA9IG1pbkFuZ2xlO1xyXG4gICAgICAgICAgICBhbmdsZXMucHVzaChhbmdsZSk7XHJcbiAgICAgICAgICAgIGFuZ2xlICs9IHNwYWNpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYW5nbGVzLmZvckVhY2goYW5nbGUgPT4gbWFrZVBhcnRpY2xlKGFuZ2xlKSk7XHJcbiAgICBmdW5jdGlvbiBtYWtlUGFydGljbGUoYW5nbGUpIHtcclxuICAgICAgICBsZXQgcGFydGljbGUgPSBzcHJpdGVGdW5jdGlvbigpO1xyXG4gICAgICAgIGlmIChwYXJ0aWNsZS5mcmFtZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBwYXJ0aWNsZS5nb3RvQW5kU3RvcChyYW5kb21JbnQoMCwgcGFydGljbGUuZnJhbWVzLmxlbmd0aCAtIDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFydGljbGUueCA9IHggLSBwYXJ0aWNsZS5oYWxmV2lkdGg7XHJcbiAgICAgICAgcGFydGljbGUueSA9IHkgLSBwYXJ0aWNsZS5oYWxmSGVpZ2h0O1xyXG5cclxuICAgICAgICBsZXQgc2l6ZSA9IHJhbmRvbUludChtaW5TaXplLCBtYXhTaXplKTtcclxuICAgICAgICBwYXJ0aWNsZS53aWR0aCA9IHNpemU7XHJcbiAgICAgICAgcGFydGljbGUuaGVpZ2h0ID0gc2l6ZTtcclxuXHJcbiAgICAgICAgcGFydGljbGUuc2NhbGVTcGVlZCA9IHJhbmRvbUZsb2F0KG1pblNjYWxlU3BlZWQsIG1heFNjYWxlU3BlZWQpO1xyXG4gICAgICAgIHBhcnRpY2xlLmFscGhhU3BlZWQgPSByYW5kb21GbG9hdChtaW5BbHBoYVNwZWVkLCBtYXhBbHBoYVNwZWVkKTtcclxuICAgICAgICBwYXJ0aWNsZS5yb3RhdGlvblNwZWVkID0gcmFuZG9tRmxvYXQobWluUm90YXRpb25TcGVlZCwgbWF4Um90YXRpb25TcGVlZCk7XHJcblxyXG4gICAgICAgIGxldCBzcGVlZCA9IHJhbmRvbUZsb2F0KG1pblNwZWVkLCBtYXhTcGVlZCk7XHJcbiAgICAgICAgcGFydGljbGUudnggPSBzcGVlZCAqIE1hdGguY29zKGFuZ2xlKTtcclxuICAgICAgICBwYXJ0aWNsZS52eSA9IHNwZWVkICogTWF0aC5zaW4oYW5nbGUpO1xyXG5cclxuICAgICAgICBwYXJ0aWNsZS51cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnZ5ICs9IGdyYXZpdHk7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnggKz0gcGFydGljbGUudng7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnkgKz0gcGFydGljbGUudnk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGFydGljbGUuc2NhbGVYIC0gcGFydGljbGUuc2NhbGVTcGVlZCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlLnNjYWxlWCAtPSBwYXJ0aWNsZS5zY2FsZVNwZWVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYXJ0aWNsZS5zY2FsZVkgLSBwYXJ0aWNsZS5zY2FsZVNwZWVkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGUuc2NhbGVZIC09IHBhcnRpY2xlLnNjYWxlU3BlZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFydGljbGUucm90YXRpb24gKz0gcGFydGljbGUucm90YXRpb25TcGVlZDtcclxuICAgICAgICAgICAgcGFydGljbGUuYWxwaGEgLT0gcGFydGljbGUuYWxwaGFTcGVlZDtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXJ0aWNsZS5hbHBoYSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmUocGFydGljbGUpO1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGVzLnNwbGljZShwYXJ0aWNsZXMuaW5kZXhPZihwYXJ0aWNsZSksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBwYXJ0aWNsZXMucHVzaChwYXJ0aWNsZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbWl0dGVyKGludGVydmFsLCBwYXJ0aWNsZUZ1bmN0aW9uKSB7XHJcbiAgICBsZXQgZW1pdHRlciA9IHt9LFxyXG4gICAgICAgIHRpbWVySW50ZXJ2YWwgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgZW1pdHRlci5wbGF5aW5nID0gZmFsc2U7XHJcblxyXG4gICAgZnVuY3Rpb24gcGxheSgpIHtcclxuICAgICAgICBpZighZW1pdHRlci5wbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlRnVuY3Rpb24oKTtcclxuICAgICAgICAgICAgdGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKGVtaXRQYXJ0aWNsZS5iaW5kKHRoaXMpLCBpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIGVtaXR0ZXIucGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XHJcbiAgICAgICAgaWYoZW1pdHRlci5wbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIGVtaXR0ZXIucGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbWl0UGFydGljbGUoKSB7XHJcbiAgICAgICAgcGFydGljbGVGdW5jdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGVtaXR0ZXIucGxheSA9IHBsYXk7XHJcbiAgICBlbWl0dGVyLnN0b3AgPSBzdG9wO1xyXG4gICAgcmV0dXJuIGVtaXR0ZXI7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7c3RhZ2V9IGZyb20gXCIuL0Rpc3BsYXlPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIgKGNhbnZhcywgY3R4KSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICBzdGFnZS5jaGlsZHJlbi5mb3JFYWNoKCBzcHJpdGUgPT4ge1xyXG4gICAgICAgIGRpc3BsYXlTcHJpdGUoc3ByaXRlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlTcHJpdGUoc3ByaXRlKSB7XHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAgIHNwcml0ZS52aXNpYmxlXHJcbiAgICAgICAgICAgICYmIHNwcml0ZS5neCA8IGNhbnZhcy53aWR0aCArIHNwcml0ZS53aWR0aFxyXG4gICAgICAgICAgICAmJiBzcHJpdGUuZ3ggKyBzcHJpdGUud2lkdGggPj0gLXNwcml0ZS53aWR0aFxyXG4gICAgICAgICAgICAmJiBzcHJpdGUuZ3kgPCBjYW52YXMuaGVpZ2h0ICsgc3ByaXRlLmhlaWdodFxyXG4gICAgICAgICAgICAmJiBzcHJpdGUuZ3kgKyBzcHJpdGUuaGVpZ2h0ID49IC1zcHJpdGUuaGVpZ2h0XHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICBzcHJpdGUueCArIChzcHJpdGUud2lkdGggKiBzcHJpdGUucGl2b3RYKSxcclxuICAgICAgICAgICAgICAgIHNwcml0ZS55ICsgKHNwcml0ZS5oZWlnaHQgKiBzcHJpdGUucGl2b3RZKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjdHgucm90YXRlKHNwcml0ZS5yb3RhdGlvbik7XHJcbiAgICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IHNwcml0ZS5hbHBoYSAqIHNwcml0ZS5wYXJlbnQuYWxwaGE7XHJcbiAgICAgICAgICAgIGN0eC5zY2FsZShzcHJpdGUuc2NhbGVYLCBzcHJpdGUuc2NhbGVZKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHNwcml0ZS5zaGFkb3cpe1xyXG4gICAgICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gc3ByaXRlLnNoYWRvd0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgY3R4LnNoYWRvd09mZnNldFggPSBzcHJpdGUuc2hhZG93T2Zmc2V0WDtcclxuICAgICAgICAgICAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gc3ByaXRlLnNoYWRvd09mZnNldFk7XHJcbiAgICAgICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IHNwcml0ZS5zaGFkb3dCbHVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihzcHJpdGUuYmxlbmRNb2RlKXtcclxuICAgICAgICAgICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBzcHJpdGUuYmxlbmRNb2RlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihzcHJpdGUucmVuZGVyKXtcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5yZW5kZXIoY3R4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoc3ByaXRlLmNoaWxkcmVuICYmIHNwcml0ZS5jaGlsZHJlbi5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIC1zcHJpdGUud2lkdGggKiBzcHJpdGUucGl2b3RYLCAtc3ByaXRlLmhlaWdodCAqIHNwcml0ZS5waXZvdFkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNwcml0ZS5jaGlsZHJlbi5mb3JFYWNoKCBjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVNwcml0ZShjaGlsZClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJXaXRoSW50ZXJwb2xhdGlvbiAoY2FudmFzLCBjdHgsIGxhZ09mZnNldCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgc3RhZ2UuY2hpbGRyZW4uZm9yRWFjaCggc3ByaXRlID0+IHtcclxuICAgICAgICBkaXNwbGF5U3ByaXRlKHNwcml0ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5U3ByaXRlKHNwcml0ZSkge1xyXG4gICAgICAgIGlmKFxyXG4gICAgICAgICAgICBzcHJpdGUudmlzaWJsZVxyXG4gICAgICAgICAgICAmJiBzcHJpdGUuZ3ggPCBjYW52YXMud2lkdGggKyBzcHJpdGUud2lkdGhcclxuICAgICAgICAgICAgJiYgc3ByaXRlLmd4ICsgc3ByaXRlLndpZHRoID49IC1zcHJpdGUud2lkdGhcclxuICAgICAgICAgICAgJiYgc3ByaXRlLmd5IDwgY2FudmFzLmhlaWdodCArIHNwcml0ZS5oZWlnaHRcclxuICAgICAgICAgICAgJiYgc3ByaXRlLmd5ICsgc3ByaXRlLmhlaWdodCA+PSAtc3ByaXRlLmhlaWdodFxyXG4gICAgICAgICl7XHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgICAgICBpZihzcHJpdGUucHJldmlvdXNYKSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUucmVuZGVyWCAgPSAoc3ByaXRlLnggLSBzcHJpdGUucHJldmlvdXNYKSAqIGxhZ09mZnNldCArIHNwcml0ZS5wcmV2aW91c1g7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUucmVuZGVyWCA9IHNwcml0ZS54XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHNwcml0ZS5wcmV2aW91c1kpIHtcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5yZW5kZXJZICA9IChzcHJpdGUueSAtIHNwcml0ZS5wcmV2aW91c1kpICogbGFnT2Zmc2V0ICsgc3ByaXRlLnByZXZpb3VzWTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5yZW5kZXJZID0gc3ByaXRlLnlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5yZW5kZXJYICsgKHNwcml0ZS53aWR0aCAqIHNwcml0ZS5waXZvdFgpLFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnJlbmRlclkgKyAoc3ByaXRlLmhlaWdodCAqIHNwcml0ZS5waXZvdFkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGN0eC5yb3RhdGUoc3ByaXRlLnJvdGF0aW9uKTtcclxuICAgICAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gc3ByaXRlLmFscGhhICogc3ByaXRlLnBhcmVudC5hbHBoYTtcclxuICAgICAgICAgICAgY3R4LnNjYWxlKHNwcml0ZS5zY2FsZVgsIHNwcml0ZS5zY2FsZVkpO1xyXG5cclxuICAgICAgICAgICAgaWYoc3ByaXRlLnNoYWRvdyl7XHJcbiAgICAgICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBzcHJpdGUuc2hhZG93Q29sb3I7XHJcbiAgICAgICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IHNwcml0ZS5zaGFkb3dPZmZzZXRYO1xyXG4gICAgICAgICAgICAgICAgY3R4LnNoYWRvd09mZnNldFkgPSBzcHJpdGUuc2hhZG93T2Zmc2V0WTtcclxuICAgICAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gc3ByaXRlLnNoYWRvd0JsdXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHNwcml0ZS5ibGVuZE1vZGUpe1xyXG4gICAgICAgICAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IHNwcml0ZS5ibGVuZE1vZGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHNwcml0ZS5yZW5kZXIpe1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnJlbmRlcihjdHgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihzcHJpdGUuY2hpbGRyZW4gJiYgc3ByaXRlLmNoaWxkcmVuLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggLXNwcml0ZS53aWR0aCAqIHNwcml0ZS5waXZvdFgsIC1zcHJpdGUuaGVpZ2h0ICogc3ByaXRlLnBpdm90WSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3ByaXRlLmNoaWxkcmVuLmZvckVhY2goIGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U3ByaXRlKGNoaWxkKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7Z3JvdXB9IGZyb20gXCIuL0dyb3VwXCI7XHJcbmltcG9ydCB7c3ByaXRlfSBmcm9tIFwiLi9EaXNwbGF5T2JqZWN0XCI7XHJcbmltcG9ydCB7cmVjdGFuZ2xlfSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3YWl0KGR1cmF0aW9uID0gMCkge1xyXG4gICAgbGV0IHRpbWVyID0gcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBkdXJhdGlvbik7XHJcbiAgICB9O1xyXG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSh0aW1lcik7XHJcbiAgICByZXR1cm4gcHJvbWlzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lKHNvdXJjZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgbGV0IG9iaiA9IHt9O1xyXG4gICAgb2JqLmltYWdlID0gc291cmNlO1xyXG4gICAgb2JqLnggPSB4O1xyXG4gICAgb2JqLnkgPSB5O1xyXG4gICAgb2JqLndpZHRoPSB3aWR0aDtcclxuICAgIG9iai5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZyYW1lcyAoc291cmNlLCBhcnJheU9mUG9zaXRpb25zLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBsZXQgb2JqID0ge307XHJcbiAgICBvYmouaW1hZ2UgPSBzb3VyY2U7XHJcbiAgICBvYmouZGF0YSA9IGFycmF5T2ZQb3NpdGlvbnM7XHJcbiAgICBvYmoud2lkdGg9IHdpZHRoO1xyXG4gICAgb2JqLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUoLi4uc3ByaXRlc1RvUmVtb3ZlKSB7XHJcbiAgICBzcHJpdGVzVG9SZW1vdmUuZm9yRWFjaCggc3ByaXRlID0+IHtcclxuICAgICAgICBzcHJpdGUucGFyZW50LnJlbW92ZUNoaWxkKHNwcml0ZSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtYXgsIG1pbikge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBsZXQgY29sbGlzaW9uID0gY29udGFpbihzcHJpdGUsIGJvdW5kcywgYm91bmNlLCBjYWxsYmFja0Z1bmN0aW9uKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW4oc3ByaXRlLCBib3VuZHMsIGJvdW5jZSA9IGZhbHNlLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xyXG4gICAgbGV0IHggPSBib3VuZHMueCxcclxuICAgICAgICB5ID0gYm91bmRzLnksXHJcbiAgICAgICAgd2lkdGggPSBib3VuZHMud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0ID0gYm91bmRzLmhlaWdodDtcclxuXHJcbiAgICBsZXQgY29sbGlzaW9uO1xyXG4gICAgaWYoc3ByaXRlLnggPCB4KSB7XHJcbiAgICAgICAgaWYoYm91bmNlKXtcclxuICAgICAgICAgICAgc3ByaXRlLnZ4ICo9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzcHJpdGUubWFzcyl7XHJcbiAgICAgICAgICAgIHNwcml0ZS52eCAvPSBzcHJpdGUubWFzc1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcHJpdGUueCA9IHg7XHJcbiAgICAgICAgY29sbGlzaW9uID0gXCJsZWZ0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc3ByaXRlLnkgPCB5KSB7XHJcbiAgICAgICAgaWYoYm91bmNlKXtcclxuICAgICAgICAgICAgc3ByaXRlLnZ5ICo9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzcHJpdGUubWFzcyl7XHJcbiAgICAgICAgICAgIHNwcml0ZS52eSAvPSBzcHJpdGUubWFzc1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcHJpdGUueSA9IHk7XHJcbiAgICAgICAgY29sbGlzaW9uID0gXCJ0b3BcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZihzcHJpdGUueCArIHNwcml0ZS53aWR0aCA+IHdpZHRoKSB7XHJcbiAgICAgICAgaWYoYm91bmNlKXtcclxuICAgICAgICAgICAgc3ByaXRlLnZ4ICo9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzcHJpdGUubWFzcyl7XHJcbiAgICAgICAgICAgIHNwcml0ZS52eCAvPSBzcHJpdGUubWFzc1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcHJpdGUueCA9IHdpZHRoIC0gc3ByaXRlLndpZHRoO1xyXG4gICAgICAgIGNvbGxpc2lvbiA9IFwicmlnaHRcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZihzcHJpdGUueSArIHNwcml0ZS5oZWlnaHQgPiB3aWR0aCkge1xyXG4gICAgICAgIGlmKGJvdW5jZSl7XHJcbiAgICAgICAgICAgIHNwcml0ZS52eSAqPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc3ByaXRlLm1hc3Mpe1xyXG4gICAgICAgICAgICBzcHJpdGUudnkgLz0gc3ByaXRlLm1hc3NcclxuICAgICAgICB9XHJcbiAgICAgICAgc3ByaXRlLnkgPSBoZWlnaHQgLSBzcHJpdGUuaGVpZ2h0O1xyXG4gICAgICAgIGNvbGxpc2lvbiA9IFwiYm90dG9tXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoY29sbGlzaW9uICYmIGNhbGxiYWNrKXtcclxuICAgICAgICBjYWxsYmFjayhjb2xsaXNpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb2xsaXNpb247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYXB0dXJlUHJldmlvdXNQb3NpdGlvbnMoc3RhZ2UpIHtcclxuICAgIHN0YWdlLmNoaWxkcmVuLmZvckVhY2goIHNwcml0ZSA9PiB7XHJcbiAgICAgICAgc2V0UHJldmlvdXNQb3NpdGlvbihzcHJpdGUpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UHJldmlvdXNQb3NpdGlvbihzcHJpdGUpIHtcclxuICAgIHNwcml0ZS5wcmV2aW91c1ggPSBzcHJpdGUueDtcclxuICAgIHNwcml0ZS5wcmV2aW91c1kgPSBzcHJpdGUueTtcclxuXHJcbiAgICBpZihzcHJpdGUuY2hpbGRyZW4gJiYgc3ByaXRlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzcHJpdGUuY2hpbGRyZW4uZm9yRWFjaCggY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBzZXRQcmV2aW91c1Bvc2l0aW9uKGNoaWxkKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBrZXlib2FyZChrZXlDb2RlKXtcclxuICAgIGxldCBrZXkgPSB7fTtcclxuICAgIGtleS5jb2RlID0ga2V5Q29kZTtcclxuICAgIGtleS5pc0Rvd24gPSBmYWxzZTtcclxuICAgIGtleS5pc1VwID0gdHJ1ZTtcclxuICAgIGtleS5wcmVzcyA9IHVuZGVmaW5lZDtcclxuICAgIGtleS5yZWxlYXNlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIGtleS5kb3duSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IGtleS5jb2RlKSB7XHJcbiAgICAgICAgICAgIGlmKGtleS5pc1VwICYmIGtleS5wcmVzcyl7XHJcbiAgICAgICAgICAgICAgICBrZXkucHJlc3MoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGtleS5pc0Rvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICBrZXkuaXNVcCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBrZXkudXBIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0ga2V5LmNvZGUpIHtcclxuICAgICAgICAgICAgaWYoa2V5LmlzRG93biAmJiBrZXkucmVsZWFzZSl7XHJcbiAgICAgICAgICAgICAgICBrZXkucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGtleS5pc0Rvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAga2V5LmlzVXAgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5LmRvd25IYW5kbGVyLmJpbmQoa2V5KSwgZmFsc2UpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXkudXBIYW5kbGVyLmJpbmQoa2V5KSwgZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiBrZXk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUG9pbnRlcihlbGVtZW50LCBzY2FsZSA9IDEpIHtcclxuICAgIGxldCBwb2ludGVyID0ge1xyXG4gICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgc2NhbGU6IHNjYWxlLFxyXG5cclxuICAgICAgICBfeDogMCxcclxuICAgICAgICBfeTogMCxcclxuICAgICAgICBkcmFnU3ByaXRlOiBudWxsLFxyXG4gICAgICAgIGRyYWdPZmZzZXRYOiAwLFxyXG4gICAgICAgIGRyYWdPZmZzZXRZOiAwLFxyXG5cclxuICAgICAgICBnZXQgeCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3gvdGhpcy5zY2FsZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnZXQgeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3kvdGhpcy5zY2FsZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnZXQgY2VudGVyWCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMueDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnZXQgY2VudGVyWSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMueTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnZXQgcG9zaXRpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7eDogdGhpcy54LCB5OiB0aGlzLnl9O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGlzRG93bjogZmFsc2UsXHJcbiAgICAgICAgaXNVcDogdHJ1ZSxcclxuICAgICAgICB0YXA6IHVuZGVmaW5lZCxcclxuXHJcbiAgICAgICAgbW92ZUhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl94ID0gKGV2ZW50LnBhZ2VYIC0gZWxlbWVudC5vZmZzZXRMZWZ0KTtcclxuICAgICAgICAgICAgdGhpcy5feSA9IChldmVudC5wYWdlWSAtIGVsZW1lbnQub2Zmc2V0VG9wKTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdG91Y2htb3ZlSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3ggPSAoZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIGVsZW1lbnQub2Zmc2V0TGVmdCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3kgPSAoZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSAtIGVsZW1lbnQub2Zmc2V0VG9wKTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZG93bkhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Rvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzVXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy50YXBwZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZG93blRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBpZih0aGlzLnByZXNzKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJlc3MoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRvdWNoc3RhcnRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICB0aGlzLl94ID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCAtIGVsZW1lbnQub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgdGhpcy5feSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSBlbGVtZW50Lm9mZnNldFRvcDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1VwID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudGFwcGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRvd25UaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgaWYodGhpcy5wcmVzcyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXNzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHVwSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gTWF0aC5hYnModGhpcy5kb3duVGltZSAtIERhdGUubm93KCkpO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5lbGFwc2VkVGltZSA8PSAyMDAgJiYgdGhpcy50YXBwZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcHBlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnRhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNVcCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLnJlbGVhc2Upe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdG91Y2hlbmRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBNYXRoLmFicyh0aGlzLmRvd25UaW1lIC0gRGF0ZS5ub3coKSk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmVsYXBzZWRUaW1lIDw9IDIwMCAmJiB0aGlzLnRhcHBlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFwcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudGFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNVcCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLnJlbGVhc2Upe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGl0VGVzdFNwcml0ZShzcHJpdGUpIHtcclxuICAgICAgICAgICAgbGV0IGhpdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYoIXNwcml0ZS5jaXJjdWxhcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxlZnQgPSBzcHJpdGUuZ3gsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSBzcHJpdGUuZ3ggKyBzcHJpdGUud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gc3ByaXRlLmd5LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHNwcml0ZS5neSArIHNwcml0ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaGl0ID0gdGhpcy54ID4gbGVmdCAmJiB0aGlzLnggPCByaWdodCAmJiB0aGlzLnkgPiB0b3AgJiYgdGhpcy55IDwgYm90dG9tO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZ4ID0gdGhpcy54IC0gKHNwcml0ZS5neCArIHNwcml0ZS5yYWRpdXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZ5ID0gdGhpcy55IC0gKHNwcml0ZS5neSArIHNwcml0ZS5yYWRpdXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5zcXJ0KHZ4KioyICsgdnkqKjIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGhpdCA9IGRpc3RhbmNlIDwgc3ByaXRlLnJhZGl1cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGhpdDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1cGRhdGVEcmFnQW5kRHJvcChkcmFnZ2FibGVTcHJpdGVzKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNEb3duKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmRyYWdTcHJpdGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSBkcmFnZ2FibGVTcHJpdGVzLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlID0gZHJhZ2dhYmxlU3ByaXRlc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNwcml0ZS52aXNpYmxlID09PSBmYWxzZSB8fCFjaGVja1BhcmVudFZpc2liaWxpdHkoc3ByaXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaGl0VGVzdFNwcml0ZShzcHJpdGUpICYmIHNwcml0ZS5kcmFnZ2FibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ09mZnNldFggPSB0aGlzLnggLSBzcHJpdGUuZ3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdPZmZzZXRZID0gdGhpcy55IC0gc3ByaXRlLmd5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnU3ByaXRlID0gc3ByaXRlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHNwcml0ZS5wYXJlbnQuY2hpbGRyZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi5zcGxpY2UoY2hpbGRyZW4uaW5kZXhPZihzcHJpdGUpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goc3ByaXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVTcHJpdGVzLnNwbGljZShkcmFnZ2FibGVTcHJpdGVzLmluZGV4T2Yoc3ByaXRlKSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVTcHJpdGVzLnB1c2goc3ByaXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnU3ByaXRlLnggPSB0aGlzLnggLSB0aGlzLmRyYWdPZmZzZXRYO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1Nwcml0ZS55ID0gdGhpcy55IC0gdGhpcy5kcmFnT2Zmc2V0WTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5pc1VwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdTcHJpdGUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkcmFnZ2FibGVTcHJpdGVzLnNvbWUoc3ByaXRlID0+IHtcclxuICAgICAgICAgICAgICAgaWYoXHJcbiAgICAgICAgICAgICAgICAgICB0aGlzLmhpdFRlc3RTcHJpdGUoc3ByaXRlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgc3ByaXRlLmRyYWdnYWJsZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgc3ByaXRlLnZpc2libGUgJiZcclxuICAgICAgICAgICAgICAgICAgIGNoZWNrUGFyZW50VmlzaWJpbGl0eShzcHJpdGUpXHJcbiAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgcG9pbnRlci5tb3ZlSGFuZGxlci5iaW5kKHBvaW50ZXIpLCBmYWxzZSk7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgcG9pbnRlci5kb3duSGFuZGxlci5iaW5kKHBvaW50ZXIpLCBmYWxzZSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHBvaW50ZXIudXBIYW5kbGVyLmJpbmQocG9pbnRlciksIGZhbHNlKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgcG9pbnRlci50b3VjaGVuZEhhbmRsZXIuYmluZChwb2ludGVyKSwgZmFsc2UpO1xyXG5cclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBwb2ludGVyLnRvdWNobW92ZUhhbmRsZXIuYmluZChwb2ludGVyKSwgZmFsc2UpO1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBwb2ludGVyLnRvdWNoc3RhcnRIYW5kbGVyLmJpbmQocG9pbnRlciksIGZhbHNlKTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLnRvdWNoQWN0aW9uID0gXCJub25lXCI7XHJcblxyXG4gICAgcmV0dXJuIHBvaW50ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZShzMSwgczIpIHtcclxuICAgIGxldCB2eCA9IHMyLmNlbnRlclggLSBzMS5jZW50ZXJYO1xyXG4gICAgbGV0IHZ5ID0gczIuY2VudGVyWSAtIHMxLmNlbnRlclk7XHJcblxyXG4gICAgcmV0dXJuIE1hdGguc3FydCh2eCoqMiArIHZ5KioyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvbGxvd0Vhc2UoZm9sbG93ZXIsIGxlYWRlciwgc3BlZWQpIHtcclxuICAgIGxldCB2eCA9IGxlYWRlci5jZW50ZXJYIC0gZm9sbG93ZXIuY2VudGVyWDtcclxuICAgIGxldCB2eSA9IGxlYWRlci5jZW50ZXJZIC0gZm9sbG93ZXIuY2VudGVyWTtcclxuICAgIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCh2eCoqMiArIHZ5KioyKTtcclxuXHJcbiAgICBpZihkaXN0YW5jZSA+PSAxKSB7XHJcbiAgICAgICAgZm9sbG93ZXIueCArPSB2eCAqIHNwZWVkO1xyXG4gICAgICAgIGZvbGxvd2VyLnkgKz0gdnkgKiBzcGVlZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvbGxvd0NvbnN0YW50KGZvbGxvd2VyLCBsZWFkZXIsIHNwZWVkKSB7XHJcbiAgICBsZXQgdnggPSBsZWFkZXIuY2VudGVyWCAtIGZvbGxvd2VyLmNlbnRlclg7XHJcbiAgICBsZXQgdnkgPSBsZWFkZXIuY2VudGVyWSAtIGZvbGxvd2VyLmNlbnRlclk7XHJcbiAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQodngqKjIgKyB2eSoqMik7XHJcblxyXG4gICAgaWYoZGlzdGFuY2UgPj0gc3BlZWQpIHtcclxuICAgICAgICBmb2xsb3dlci54ICs9ICh2eCAvIGRpc3RhbmNlKSAqIHNwZWVkO1xyXG4gICAgICAgIGZvbGxvd2VyLnkgKz0gKHZ5IC8gZGlzdGFuY2UpICogc3BlZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbmdsZShzMSwgczIpIHtcclxuICAgIHJldHVybiBNYXRoLmF0YW4yKHMyLmNlbnRlclkgLSBzMS5jZW50ZXJZLCBzMi5jZW50ZXJYIC0gczEuY2VudGVyWClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVNwcml0ZShyb3RhdGluZ1Nwcml0ZSwgY2VudGVyU3ByaXRlLCBkaXN0YW5jZSwgYW5nbGUpIHtcclxuICAgIHJvdGF0aW5nU3ByaXRlLnggPSBjZW50ZXJTcHJpdGUuY2VudGVyWCAtIHJvdGF0aW5nU3ByaXRlLnBhcmVudC54ICtcclxuICAgICAgICArIChkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSkgLSByb3RhdGluZ1Nwcml0ZS5oYWxmV2lkdGg7XHJcblxyXG4gICAgcm90YXRpbmdTcHJpdGUueSA9IGNlbnRlclNwcml0ZS5jZW50ZXJZIC0gcm90YXRpbmdTcHJpdGUucGFyZW50LnkgK1xyXG4gICAgICAgICsgKGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpKSAtIHJvdGF0aW5nU3ByaXRlLmhhbGZXaWR0aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVBvaW50KHBvaW50WCwgcG9pbnRZLCBkaXN0YW5jZVgsIGRpc3RhbmNlWSwgYW5nbGUpIHtcclxuICAgIGxldCBwb2ludCA9IHt9O1xyXG4gICAgcG9pbnQueCA9IHBvaW50WCArIE1hdGguY29zKGFuZ2xlKSAqIGRpc3RhbmNlWDtcclxuICAgIHBvaW50LnkgPSBwb2ludFkgKyBNYXRoLnNpbihhbmdsZSkgKiBkaXN0YW5jZVk7XHJcbiAgICByZXR1cm4gcG9pbnRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUGFyZW50VmlzaWJpbGl0eShzcHJpdGUpe1xyXG4gICAgbGV0IHZpc2libGUgPSB0cnVlO1xyXG4gICAgbGV0IGN1cnJlbnQgPSBzcHJpdGU7XHJcbiAgICB3aGlsZShjdXJyZW50LnBhcmVudCl7XHJcbiAgICAgICAgaWYoY3VycmVudC5wYXJlbnQudmlzaWJsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZpc2libGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG9vdChzaG9vdGVyLCBhbmdsZSwgb2Zmc2V0RnJvbUNlbnRlciwgYnVsbGV0U3BlZWQsIGJ1bGxldEFycmF5LCBidWxsZXRTcHJpdGUpIHtcclxuICAgIGxldCBidWxsZXQgPSBidWxsZXRTcHJpdGUoKTtcclxuXHJcbiAgICBidWxsZXQueCA9IHNob290ZXIuY2VudGVyWCAtIGJ1bGxldC5oYWxmV2lkdGggKyAob2Zmc2V0RnJvbUNlbnRlciAqIE1hdGguY29zKGFuZ2xlKSk7XHJcbiAgICBidWxsZXQueSA9IHNob290ZXIuY2VudGVyWSAtIGJ1bGxldC5oYWxmSGVpZ2h0ICsgKG9mZnNldEZyb21DZW50ZXIgKiBNYXRoLnNpbihhbmdsZSkpO1xyXG5cclxuICAgIGJ1bGxldC52eCA9IE1hdGguY29zKGFuZ2xlKSAqIGJ1bGxldFNwZWVkO1xyXG4gICAgYnVsbGV0LnZ5ID0gTWF0aC5zaW4oYW5nbGUpICogYnVsbGV0U3BlZWQ7XHJcblxyXG4gICAgYnVsbGV0QXJyYXkucHVzaChidWxsZXQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3V0c2lkZUJvdW5kcyhzcHJpdGUsIGJvdW5kcywgZXh0cmEgPSB1bmRlZmluZWQpIHtcclxuICAgIGxldCB4ID0gYm91bmRzLngsXHJcbiAgICAgICAgeSA9IGJvdW5kcy55LFxyXG4gICAgICAgIHdpZHRoID0gYm91bmRzLndpZHRoLFxyXG4gICAgICAgIGhlaWdodCA9IGJvdW5kcy5oZWlnaHQ7XHJcblxyXG4gICAgbGV0IGNvbGxpc2lvbjtcclxuXHJcbiAgICBpZihzcHJpdGUueCA8IHggLSBzcHJpdGUud2lkdGgpIHtcclxuICAgICAgICBjb2xsaXNpb24gPSBcImxlZnRcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZihzcHJpdGUueSA8IHkgLSBzcHJpdGUud2lkdGgpIHtcclxuICAgICAgICBjb2xsaXNpb24gPSBcInRvcFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHNwcml0ZS54ID4gd2lkdGgpIHtcclxuICAgICAgICBjb2xsaXNpb24gPSBcInJpZ2h0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc3ByaXRlLnkgPiBoZWlnaHQpIHtcclxuICAgICAgICBjb2xsaXNpb24gPSBcImJvdHRvbVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGNvbGxpc2lvbiAmJiBleHRyYSkge1xyXG4gICAgICAgIGV4dHJhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbGxpc2lvbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdyaWQoXHJcbiAgICBjb2x1bW5zID0gMCwgcm93cyA9IDAsIGNlbGxXaWR0aCA9IDMyLCBjZWxsSGVpZ2h0ID0gMzIsXHJcbiAgICBjZW50ZXJDZWxsID0gZmFsc2UsIHhPZmZzZXQgPSAwLCB5T2Zmc2V0ID0gMCxcclxuICAgIG1ha2VTcHJpdGUgPSB1bmRlZmluZWQsXHJcbiAgICBleHRyYSA9IHVuZGVmaW5lZFxyXG4pIHtcclxuICAgIGxldCBjb250YWluZXIgPSBncm91cCgpO1xyXG4gICAgbGV0IGNyZWF0ZUdyaWQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IGNvbHVtbnMgKiByb3dzO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHggPSAoaSAlIGNvbHVtbnMpICogY2VsbFdpZHRoO1xyXG4gICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoaSAvIGNvbHVtbnMpICogY2VsbEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGxldCBzcHJpdGUgPSBtYWtlU3ByaXRlKCk7XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoc3ByaXRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFjZW50ZXJDZWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUueCA9IHggKyB4T2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnkgPSB5ICsgeU9mZnNldDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNwcml0ZS54ID0geCArIChjZWxsV2lkdGggLyAyKSAtIHNwcml0ZS5oYWxmV2lkdGggKyB4T2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnkgPSB5ICsgKGNlbGxIZWlnaHQgLyAyKSAtIHNwcml0ZS5oYWxmSGVpZ2h0ICsgeU9mZnNldDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoZXh0cmEpIHtcclxuICAgICAgICAgICAgICAgIGV4dHJhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNyZWF0ZUdyaWQoKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGlsaW5nU3ByaXRlKHdpZHRoLCBoZWlnaHQsIHNvdXJjZSwgeCA9IDAsIHkgPSAwKSB7XHJcblxyXG4gICAgbGV0IHRpbGVXaWR0aCwgdGlsZUhlaWdodDtcclxuXHJcbiAgICBpZihzb3VyY2UuZnJhbWUpIHtcclxuICAgICAgICB0aWxlV2lkdGggPSBzb3VyY2UuZnJhbWUudztcclxuICAgICAgICB0aWxlSGVpZ2h0ID0gc291cmNlLmZyYW1lLmg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRpbGVXaWR0aCA9IHNvdXJjZS53aWR0aDtcclxuICAgICAgICB0aWxlSGVpZ2h0ID0gc291cmNlLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY29sdW1ucywgcm93cztcclxuXHJcbiAgICBpZiAod2lkdGggPj0gdGlsZVdpZHRoKSB7XHJcbiAgICAgICAgY29sdW1ucyA9IE1hdGgucm91bmQod2lkdGggLyB0aWxlV2lkdGgpICsgMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29sdW1ucyA9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhlaWdodCA+PSB0aWxlSGVpZ2h0KSB7XHJcbiAgICAgICAgcm93cyA9IE1hdGgucm91bmQoaGVpZ2h0IC8gdGlsZUhlaWdodCkgKyAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByb3dzID0gMjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbGV0IHRpbGVHcmlkID0gZ3JpZChcclxuICAgICAgICBjb2x1bW5zLCByb3dzLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQsIGZhbHNlLCAwLCAwLFxyXG4gICAgICAgICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0aWxlID0gc3ByaXRlKHNvdXJjZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aWxlO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdGlsZUdyaWQuX3RpbGVYID0gMDtcclxuICAgIHRpbGVHcmlkLl90aWxlWSA9IDA7XHJcblxyXG4gICAgbGV0IGNvbnRhaW5lciA9IHJlY3RhbmdsZSh3aWR0aCwgaGVpZ2h0LCBcIm5vbmVcIiwgXCJub25lXCIpO1xyXG4gICAgY29udGFpbmVyLnggPSB4O1xyXG4gICAgY29udGFpbmVyLnkgPSB5O1xyXG5cclxuICAgIGNvbnRhaW5lci5tYXNrID0gdHJ1ZTtcclxuICAgIGNvbnRhaW5lci5hZGRDaGlsZCh0aWxlR3JpZCk7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29udGFpbmVyLCB7XHJcbiAgICAgICAgdGlsZVg6IHtcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbGVHcmlkLl90aWxlWDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGlsZUdyaWQuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaWZmZXJlbmNlID0gdmFsdWUgLSB0aWxlR3JpZC5fdGlsZVg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnggKz0gZGlmZmVyZW5jZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLnggPiAoY29sdW1ucyAtIDEpICogdGlsZVdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLnggPSAwIC0gdGlsZVdpZHRoICsgZGlmZmVyZW5jZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC54IDwgMCAtIHRpbGVXaWR0aCAtIGRpZmZlcmVuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQueCA9IChjb2x1bW5zIC0gMSkgKiB0aWxlV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGlsZUdyaWQuX3RpbGVYID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGlsZVk6IHtcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbGVHcmlkLl90aWxlWTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGlsZUdyaWQuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpZmZlcmVuY2UgPSB2YWx1ZSAtIHRpbGVHcmlkLl90aWxlWTtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC55ICs9IGRpZmZlcmVuY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLnkgPiAocm93cyAtIDEpICogdGlsZUhlaWdodCkgY2hpbGQueSA9IDAgLSB0aWxlSGVpZ2h0ICsgZGlmZmVyZW5jZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQueSA8IDAgLSB0aWxlSGVpZ2h0IC0gZGlmZmVyZW5jZSkgY2hpbGQueSA9IChyb3dzIC0gMSkgKiB0aWxlSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aWxlR3JpZC5fdGlsZVkgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59IiwiaW1wb3J0IHtTY2VuZXNNYW5hZ2VyfSBmcm9tIFwiLi9zY2VuZXMvYWxsU2NlbmVzXCI7XG5cbmltcG9ydCB7YXNzZXRzfSBmcm9tIFwiLi9jdXN0b21QaXhpL2Fzc2V0c1wiO1xuaW1wb3J0IHttYWtlQ2FudmFzfSBmcm9tIFwiLi9jdXN0b21QaXhpL21ha2VDYW52YXNcIjtcbmltcG9ydCB7cmVuZGVyfSBmcm9tIFwiLi9jdXN0b21QaXhpL3JlbmRlclwiO1xuaW1wb3J0IHtzdGFnZX0gZnJvbSBcIi4vY3VzdG9tUGl4aS9EaXNwbGF5T2JqZWN0XCI7XG5pbXBvcnQge0FjY2VsZXJhdGlvbkFuZEZyaWN0aW9uQmFsbH0gZnJvbSBcIi4vc2NlbmVzL2FjY2VsZXJhdGlvbkFuZEZyaWN0aW9uQmFsbFwiO1xuaW1wb3J0IHtCYWxsV2l0aEdyYXZpdHl9IGZyb20gXCIuL3NjZW5lcy9iYWxsV2l0aEdyYXZpdHlcIjtcbmltcG9ydCB7Q29uc3RhbnRTcGVlZEZvbGxvd2luZ30gZnJvbSBcIi4vc2NlbmVzL2NvbnN0YW50U3BlZWRGb2xsb3dpbmdcIjtcbmltcG9ydCB7Um90YXRlQXJvdW5kU3ByaXRlfSBmcm9tIFwiLi9zY2VuZXMvcm90YXRlQXJvdW5kU3ByaXRlXCI7XG5pbXBvcnQge1JvdGF0ZUFyb3VuZFBvaW50fSBmcm9tIFwiLi9zY2VuZXMvcm90YXRlQXJvdW5kUG9pbnRcIjtcbmltcG9ydCB7VGFua30gZnJvbSBcIi4vc2NlbmVzL3RhbmtcIjtcbmltcG9ydCB7Q3JlYXRlQnV0dG9ufSBmcm9tIFwiLi9zY2VuZXMvY3JlYXRlQnV0dG9uXCI7XG5pbXBvcnQge0ludGVyYWN0aXZlU3ByaXRlfSBmcm9tIFwiLi9zY2VuZXMvaW50ZXJhY3RpdmVTcHJpdGVcIjtcbmltcG9ydCB7RHJhZ0FuZERyb3B9IGZyb20gXCIuL3NjZW5lcy9kcmFnQW5kRHJvcFwiO1xuaW1wb3J0IHtUcmVhc3VyZUh1bnRlcn0gZnJvbSBcIi4vc2NlbmVzL3RyZWFzdXJlSHVudGVyXCI7XG5pbXBvcnQge1BvaW50QW5kU2hhcGVDb2xsaXNpb259IGZyb20gXCIuL3NjZW5lcy9wb2ludEFuZFNoYXBlQ29sbGlzaW9uXCI7XG5pbXBvcnQge1JlY3RDb2xsaXNpb259IGZyb20gXCIuL3NjZW5lcy9yZWN0Q29sbGlzaW9uXCI7XG5pbXBvcnQge0NpcmNsZUNvbGxpc2lvbn0gZnJvbSBcIi4vc2NlbmVzL2NpcmNsZUNvbGxpc2lvblwiO1xuaW1wb3J0IHtDaXJjbGVBbmRSZWN0Q29sbGlzaW9ufSBmcm9tIFwiLi9zY2VuZXMvY2lyY2xlQW5kUmVjdENvbGxpc2lvblwiO1xuaW1wb3J0IHtNb3ZpbmdDaXJjbGVzQ29sbGlzaW9ufSBmcm9tIFwiLi9zY2VuZXMvbW92aW5nQ2lyY2xlc0NvbGxpc2lvblwiO1xuaW1wb3J0IHtNb3ZpbmdBbmRTdGF0Q2lyY2xlc30gZnJvbSBcIi4vc2NlbmVzL21vdmluZ0FuZFN0YXRDaXJjbGVzXCI7XG5pbXBvcnQge01vdmluZ0NpcmNsZUFuZFN0YXRSZWN0c30gZnJvbSBcIi4vc2NlbmVzL21vdmluZ0NpcmNsZUFuZFN0YXRSZWN0c1wiO1xuaW1wb3J0IHtSZWN0YW5nbGVQdXNofSBmcm9tIFwiLi9zY2VuZXMvcmVjdGFuZ2xlUHVzaFwiO1xuaW1wb3J0IHtQYXJ0aWNsZUVtaXR0ZXJ9IGZyb20gXCIuL3NjZW5lcy9wYXJ0aWNsZUVtaXR0ZXJcIjtcbmltcG9ydCB7RmxhcHB5RmFpcnl9IGZyb20gXCIuL3NjZW5lcy9mbGFwcHlGYWlyeVwiO1xuaW1wb3J0IHtTZXR1cE11c2ljfSBmcm9tIFwiLi9zY2VuZXMvc2V0dXBNdXNpY1wiO1xuXG5cbmV4cG9ydCBsZXQge2NhbnZhcywgY3R4fSA9IG1ha2VDYW52YXMoNTEyLCA1MTIpO1xuXG5hc3NldHMubG9hZChbXG4gICAgXCJzcmMvaW1nL3RyZWFzdXJlSHVudGVyLmpzb25cIixcbiAgICBcInNyYy9mb250cy9wdXp6bGVyLm90ZlwiLFxuICAgIFwic3JjL2ltZy9tYXJibGVzLnBuZ1wiLFxuICAgIFwic3JjL2ltZy9idXR0b24uanNvblwiLFxuICAgIFwic3JjL2ZvbnRzL3B1enpsZXIub3RmXCIsXG4gICAgXCJzcmMvaW1nL2F2ZW5nZXJzLmpzb25cIixcbiAgICBcInNyYy9pbWcvZmxhcHB5RmFpcnkuanNvblwiXSlcbiAgICAudGhlbigoKSA9PiBzdGFydCgpKTtcblxuY29uc3Qgc2NlbmVzQ29uZmlnID0gW1xuICAgIHtsYWJlbDogXCJBY2NlbGVyYXRpb24gYW5kIGZyaWN0aW9uIGJhbGxcIiwgaWQ6IFwiYWNjZWxlcmF0aW9uQW5kRnJpY3Rpb25CYWxsXCIsIGNvbnN0cnVjdG9yOiBBY2NlbGVyYXRpb25BbmRGcmljdGlvbkJhbGx9LFxuICAgIHtsYWJlbDogXCJCYWxsIHdpdGggZ3Jhdml0eVwiLCBpZDogXCJiYWxsV2l0aEdyYXZpdHlcIiwgY29uc3RydWN0b3I6IEJhbGxXaXRoR3Jhdml0eX0sXG4gICAge2xhYmVsOiBcIkNvbnN0YW50IHNwZWVkIGZvbGxvd2luZ1wiLCBpZDogXCJjb25zdGFudFNwZWVkRm9sbG93aW5nXCIsIGNvbnN0cnVjdG9yOiBDb25zdGFudFNwZWVkRm9sbG93aW5nfSxcbiAgICB7bGFiZWw6IFwiUm90YXRlIGFyb3VuZCBhIHNwcml0ZVwiLCBpZDogXCJyb3RhdGVBcm91bmRTcHJpdGVcIiwgY29uc3RydWN0b3I6IFJvdGF0ZUFyb3VuZFNwcml0ZX0sXG4gICAge2xhYmVsOiBcIlJvdGF0ZSBhcm91bmQgYSBwb2ludFwiLCBpZDogXCJyb3RhdGVBcm91bmRQb2ludFwiLCBjb25zdHJ1Y3RvcjogUm90YXRlQXJvdW5kUG9pbnR9LFxuICAgIHtsYWJlbDogXCJDcmVhdGUgdGFua1wiLCBpZDogXCJ0YW5rXCIsIGNvbnN0cnVjdG9yOiBUYW5rfSxcbiAgICB7bGFiZWw6IFwiQ3JlYXRlIGJ1dHRvblwiLCBpZDogXCJjcmVhdGVCdXR0b25cIiwgY29uc3RydWN0b3I6IENyZWF0ZUJ1dHRvbn0sXG4gICAge2xhYmVsOiBcIkludGVyYWN0aXZlIHNwcml0ZVwiLCBpZDogXCJpbnRlcmFjdGl2ZVNwcml0ZVwiLCBjb25zdHJ1Y3RvcjogSW50ZXJhY3RpdmVTcHJpdGV9LFxuICAgIHtsYWJlbDogXCJEcmFnIGFuZCBkcm9wXCIsIGlkOiBcImRyYWdBbmREcm9wXCIsIGNvbnN0cnVjdG9yOiBEcmFnQW5kRHJvcH0sXG4gICAge2xhYmVsOiBcIlRyZWFzdXJlIGh1bnRlclwiLCBpZDogXCJ0cmVhc3VyZUh1bnRlclwiLCBjb25zdHJ1Y3RvcjogVHJlYXN1cmVIdW50ZXJ9LFxuICAgIHtsYWJlbDogXCJDb2xsaXNpb24gYmV0d2VlbiBwb2ludCBhbmQgc2hhcGVcIiwgaWQ6IFwicG9pbnRBbmRTaGFwZUNvbGxpc2lvblwiLCBjb25zdHJ1Y3RvcjogUG9pbnRBbmRTaGFwZUNvbGxpc2lvbn0sXG4gICAge2xhYmVsOiBcIkNvbGxpc2lvbiBiZXR3ZWVuIHJlY3RhbmdsZXNcIiwgaWQ6IFwicmVjdENvbGxpc2lvblwiLCBjb25zdHJ1Y3RvcjogUmVjdENvbGxpc2lvbn0sXG4gICAge2xhYmVsOiBcIlJlY3RhbmdsZSBwdXNoXCIsIGlkOiBcInJlY3RhbmdsZVB1c2hcIiwgY29uc3RydWN0b3I6IFJlY3RhbmdsZVB1c2h9LFxuICAgIHtsYWJlbDogXCJDb2xsaXNpb24gYmV0d2VlbiBjaXJjbGVzXCIsIGlkOiBcImNpcmNsZUNvbGxpc2lvblwiLCBjb25zdHJ1Y3RvcjogQ2lyY2xlQ29sbGlzaW9ufSxcbiAgICB7bGFiZWw6IFwiQ29sbGlzaW9uIGJldHdlZW4gY2lyY2xlIGFuZCByZWN0XCIsIGlkOiBcImNpcmNsZUFuZFJlY3RDb2xsaXNpb25cIiwgY29uc3RydWN0b3I6IENpcmNsZUFuZFJlY3RDb2xsaXNpb259LFxuICAgIHtsYWJlbDogXCJNb3ZpbmcgY2lyY2xlcyBjb2xsaXNpb25cIiwgaWQ6IFwibW92aW5nQ2lyY2xlc0NvbGxpc2lvblwiLCBjb25zdHJ1Y3RvcjogTW92aW5nQ2lyY2xlc0NvbGxpc2lvbn0sXG4gICAge2xhYmVsOiBcIk1vdmluZyBhbmQgc3RhdCBjaXJjbGVzIGNvbGxpc2lvblwiLCBpZDogXCJtb3ZpbmdBbmRTdGF0Q2lyY2xlc1wiLCBjb25zdHJ1Y3RvcjogTW92aW5nQW5kU3RhdENpcmNsZXN9LFxuICAgIHtsYWJlbDogXCJNb3ZpbmcgYW5kIHN0YXQgcmVjdGFuZ2xlc1wiLCBpZDogXCJtb3ZpbmdDaXJjbGVBbmRTdGF0UmVjdHNcIiwgY29uc3RydWN0b3I6IE1vdmluZ0NpcmNsZUFuZFN0YXRSZWN0c30sXG4gICAge2xhYmVsOiBcIlBhcnRpY2xlIGVtaXR0ZXJcIiwgaWQ6IFwicGFydGljbGVFbWl0dGVyXCIsIGNvbnN0cnVjdG9yOiBQYXJ0aWNsZUVtaXR0ZXJ9LFxuICAgIHtsYWJlbDogXCJGbGFwcHkgZmFpcnlcIiwgaWQ6IFwiZmxhcHB5RmFpcnlcIiwgY29uc3RydWN0b3I6IEZsYXBweUZhaXJ5fSxcbiAgICB7bGFiZWw6IFwiU2V0dXAgbXVzaWNcIiwgaWQ6IFwic2V0dXBNdXNpY1wiLCBjb25zdHJ1Y3RvcjogU2V0dXBNdXNpY31cblxuXTtcblxuLy9UaGlzIGBzZXR1cGAgZnVuY3Rpb24gd2lsbCBydW4gd2hlbiB0aGUgaW1hZ2UgaGFzIGxvYWRlZFxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgc3RhZ2Uud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgc3RhZ2UuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcblxuICAgIGNvbnN0IHNjZW5lc01hbmFnZXIgPSBuZXcgU2NlbmVzTWFuYWdlcihzdGFnZSwgc2NlbmVzQ29uZmlnKTtcbiAgICBjb25zdCBzY2VuZVNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2VuZVNlbGVjdFwiKTtcblxuICAgIHNjZW5lU2VsZWN0b3Iub25jaGFuZ2UgPSBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRTY2VuZSA9IHNjZW5lU2VsZWN0b3IudmFsdWU7XG5cbiAgICAgICAgc2NlbmVzTWFuYWdlci5oaWRlQWxsKCk7XG5cbiAgICAgICAgaWYoc2NlbmVzTWFuYWdlcltzZWxlY3RlZFNjZW5lXSl7XG4gICAgICAgICAgICBzY2VuZXNNYW5hZ2VyLnNob3dTY2VuZShzZWxlY3RlZFNjZW5lKTtcbiAgICAgICAgICAgIHN0YXRlID0gc2NlbmVzTWFuYWdlci5nZXRTY2VuZVVwZGF0ZUZ1bmMoc2VsZWN0ZWRTY2VuZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlID0gZnVuY3Rpb24gc3RhdGUoKXtcbiAgICAgICAgICAgICAgICAvL3N0dWIsIHRvIGJlIG92ZXJyaWRkZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBnYW1lTG9vcCgpO1xuXG4gICAgZnVuY3Rpb24gc3RhdGUoKXtcbiAgICAgICAgLy9zdHViLCB0byBiZSBvdmVycmlkZGVuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgICAgIHN0YXRlKCk7XG4gICAgICAgIHJlbmRlcihjYW52YXMsIGN0eClcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7Z3JvdXB9IGZyb20gXCIuLi9jdXN0b21QaXhpL0dyb3VwXCI7XHJcbmltcG9ydCB7Y2FudmFzfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IHtjaXJjbGV9IGZyb20gXCIuLi9jdXN0b21QaXhpL0NpcmNsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFjY2VsZXJhdGlvbkFuZEZyaWN0aW9uQmFsbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iYWxsID0gY2lyY2xlKDMyLFwiZ3JheVwiLCBcImJsYWNrXCIsIDIsIDE2MCwgMTgwKTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWxsLnZ4ID0gMDtcclxuICAgICAgICB0aGlzLmJhbGwudnkgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmJhbGwuYWNjZWxlcmF0aW9uWCA9IDAuMztcclxuICAgICAgICB0aGlzLmJhbGwuYWNjZWxlcmF0aW9uWSA9IC0wLjM7XHJcbiAgICAgICAgdGhpcy5iYWxsLmZyaWN0aW9uWCA9IDE7XHJcbiAgICAgICAgdGhpcy5iYWxsLmZyaWN0aW9uWSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBncm91cCh0aGlzLmJhbGwpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5iYWxsLnZ4ICs9IHRoaXMuYmFsbC5hY2NlbGVyYXRpb25YO1xyXG4gICAgICAgIHRoaXMuYmFsbC52eSArPSB0aGlzLmJhbGwuYWNjZWxlcmF0aW9uWTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWxsLnZ4ICo9IHRoaXMuYmFsbC5mcmljdGlvblg7XHJcbiAgICAgICAgdGhpcy5iYWxsLnZ5ICo9IHRoaXMuYmFsbC5mcmljdGlvblk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFsbC54ICs9IHRoaXMuYmFsbC52eDtcclxuICAgICAgICB0aGlzLmJhbGwueSArPSB0aGlzLmJhbGwudnk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYmFsbC54IDwgMHx8IHRoaXMuYmFsbC54ICsgdGhpcy5iYWxsLmRpYW1ldGVyID4gY2FudmFzLndpZHRoKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJhbGwuZnJpY3Rpb25YID0gMC45ODtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLmZyaWN0aW9uWSA9IDAuOTg7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJhbGwuYWNjZWxlcmF0aW9uWCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbC5hY2NlbGVyYXRpb25ZID0gMDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmFsbC52eCA9IC10aGlzLmJhbGwudng7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmJhbGwueSA8IDAgfHwgdGhpcy5iYWxsLnkgKyB0aGlzLmJhbGwuZGlhbWV0ZXIgPiBjYW52YXMuaGVpZ2h0KSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJhbGwuZnJpY3Rpb25YID0gMC45ODtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLmZyaWN0aW9uWSA9IDAuOTg7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJhbGwuYWNjZWxlcmF0aW9uWCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbC5hY2NlbGVyYXRpb25ZID0gMDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmFsbC52eSA9IC10aGlzLmJhbGwudnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSB0aGlzLnZpc2libGU7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgU2NlbmVzTWFuYWdlcntcbiAgICBjb25zdHJ1Y3RvcihzdGFnZSwgc2NlbmVzQ29uZmlncykge1xuICAgICAgICBjb25zdCBzY2VuZXNTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NlbmVTZWxlY3RcIik7XG5cbiAgICAgICAgdGhpcy5fYWxsU2NlbmVzID0gW107XG5cbiAgICAgICAgc2NlbmVzQ29uZmlncy5mb3JFYWNoKHNjZW5lQ29uZmlnID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjZW5lID0gbmV3IHNjZW5lQ29uZmlnLmNvbnN0cnVjdG9yKHN0YWdlKTtcblxuICAgICAgICAgICAgdGhpc1tzY2VuZUNvbmZpZy5pZF0gPSBzY2VuZTtcbiAgICAgICAgICAgIHRoaXMuX2FsbFNjZW5lcy5wdXNoKHNjZW5lKTtcblxuICAgICAgICAgICAgc2NlbmVzU2VsZWN0b3IuaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlPSR7c2NlbmVDb25maWcuaWR9PiR7c2NlbmVDb25maWcubGFiZWx9PC9vcHRpb24+YFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICB9XG5cbiAgICBoaWRlQWxsKCl7XG4gICAgICAgIHRoaXMuX2FsbFNjZW5lcy5mb3JFYWNoKHNjZW5lID0+e1xuICAgICAgICAgICAgc2NlbmUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgc2NlbmUudXBkYXRlKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1NjZW5lKHNjZW5lTmFtZSl7XG4gICAgICAgIHRoaXNbc2NlbmVOYW1lXS52aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRTY2VuZVVwZGF0ZUZ1bmMoc2NlbmVOYW1lKXtcbiAgICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzW3NjZW5lTmFtZV07XG5cbiAgICAgICAgcmV0dXJuIHNjZW5lLnVwZGF0ZS5iaW5kKHNjZW5lKTtcbiAgICB9XG59IiwiaW1wb3J0IHtncm91cH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvR3JvdXBcIjtcclxuaW1wb3J0IHtjb250YWluLCByYW5kb21JbnR9IGZyb20gXCIuLi9jdXN0b21QaXhpL3V0aWxzXCI7XHJcbmltcG9ydCB7Y2lyY2xlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9DaXJjbGVcIjtcclxuaW1wb3J0IHtzdGFnZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvRGlzcGxheU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhbGxXaXRoR3Jhdml0eSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iYWxsID0gY2lyY2xlKDMyLFwiZ3JheVwiLCBcImJsYWNrXCIsIDIsIDk2LCAxMjgpO1xyXG4gICAgICAgIHRoaXMuYmFsbC52eCA9IHJhbmRvbUludCgxMCwgMjApO1xyXG4gICAgICAgIHRoaXMuYmFsbC52eSA9IC1yYW5kb21JbnQoMTAsIDIwKTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWxsLmdyYXZpdHkgPSAwLjM7XHJcbiAgICAgICAgdGhpcy5iYWxsLmZyaWN0aW9uWCA9IDE7XHJcbiAgICAgICAgdGhpcy5iYWxsLmZyaWN0aW9uWSA9IDA7XHJcbiAgICAgICAgdGhpcy5iYWxsLm1hc3MgPSAxLjM7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBncm91cCh0aGlzLmJhbGwpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5iYWxsLnZ5ICs9IHRoaXMuYmFsbC5ncmF2aXR5O1xyXG4gICAgICAgIHRoaXMuYmFsbC52eCAqPSB0aGlzLmJhbGwuZnJpY3Rpb25YO1xyXG5cclxuICAgICAgICB0aGlzLmJhbGwueCArPSB0aGlzLmJhbGwudng7XHJcbiAgICAgICAgdGhpcy5iYWxsLnkgKz0gdGhpcy5iYWxsLnZ5O1xyXG4gICAgICAgIGxldCBjb2xsaXNpb24gPSBjb250YWluKHRoaXMuYmFsbCwgc3RhZ2UubG9jYWxCb3VuZHMsIHRydWUpO1xyXG5cclxuICAgICAgICBpZihjb2xsaXNpb24gPT09IFwiYm90dG9tXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLmZyaWN0aW9uWCA9IDAuOTY7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLmZyaWN0aW9uWCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSB0aGlzLnZpc2libGU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHt0ZXh0fSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9UZXh0XCI7XHJcbmltcG9ydCB7aGl0VGVzdENpcmNsZVJlY3RhbmdsZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7Z3JvdXB9IGZyb20gXCIuLi9jdXN0b21QaXhpL0dyb3VwXCI7XHJcbmltcG9ydCB7ZHJhZ2dhYmxlU3ByaXRlc30gZnJvbSBcIi4uL2N1c3RvbVBpeGkvRGlzcGxheU9iamVjdFwiO1xyXG5pbXBvcnQge21ha2VQb2ludGVyfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS91dGlsc1wiO1xyXG5pbXBvcnQge2NhbnZhc30gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCB7Y2lyY2xlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9DaXJjbGVcIjtcclxuaW1wb3J0IHtyZWN0YW5nbGV9IGZyb20gXCIuLi9jdXN0b21QaXhpL1JlY3RhbmdsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENpcmNsZUFuZFJlY3RDb2xsaXNpb24ge1xyXG4gICAgY29uc3RydWN0b3Ioc3RhZ2UpIHtcclxuICAgICAgICB0aGlzLnBvaW50ZXIgPSBtYWtlUG9pbnRlcihjYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLmJhbGwgPSBjaXJjbGUoNjQsXCJyZWRcIik7XHJcbiAgICAgICAgdGhpcy5iYWxsLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgc3RhZ2UucHV0Q2VudGVyKHRoaXMuYmFsbCwgLTcwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3ggPSByZWN0YW5nbGUoNjQsIDY0LFwiYmx1ZVwiKTtcclxuICAgICAgICB0aGlzLmJveC5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgIHN0YWdlLnB1dENlbnRlcih0aGlzLmJveCwgNzAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0ZXh0KFwiXCIsIFwiMTJweCBwdXp6bGVyXCIsIFwiYmxhY2tcIiwgOCwgOCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBncm91cCh0aGlzLmJhbGwsIHRoaXMuYm94LCB0aGlzLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMucG9pbnRlci51cGRhdGVEcmFnQW5kRHJvcChkcmFnZ2FibGVTcHJpdGVzKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbGxpc2lvbiA9IGhpdFRlc3RDaXJjbGVSZWN0YW5nbGUodGhpcy5iYWxsLCB0aGlzLmJveCk7XHJcblxyXG4gICAgICAgIGlmKGNvbGxpc2lvbikge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuY29udGVudCA9IGNvbGxpc2lvbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuY29udGVudCA9IFwiTm8gY29sbGlzaW9uLi4uXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMudmlzaWJsZSl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnNjZW5lLnZpc2libGUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKGB1c2UgbW91c2UgYnV0dG9uIHRvIGRyYWcgaXRlbXMgYW5kIHRvIGNoZWNrIGZvciBjb2xsaXNpb24gYmV0d2VlbiB0aGVtYClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7dGV4dH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvVGV4dFwiO1xyXG5pbXBvcnQge2hpdFRlc3RDaXJjbGV9IGZyb20gXCIuLi9jdXN0b21QaXhpL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQge2dyb3VwfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9Hcm91cFwiO1xyXG5pbXBvcnQge2RyYWdnYWJsZVNwcml0ZXN9IGZyb20gXCIuLi9jdXN0b21QaXhpL0Rpc3BsYXlPYmplY3RcIjtcclxuaW1wb3J0IHttYWtlUG9pbnRlcn0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvdXRpbHNcIjtcclxuaW1wb3J0IHtjYW52YXN9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQge2NpcmNsZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvQ2lyY2xlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2lyY2xlQ29sbGlzaW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0YWdlKSB7XHJcbiAgICAgICAgdGhpcy5wb2ludGVyID0gbWFrZVBvaW50ZXIoY2FudmFzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ibHVlQmFsbCA9IGNpcmNsZSg2NCxcImJsdWVcIik7XHJcbiAgICAgICAgdGhpcy5ibHVlQmFsbC5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgIHN0YWdlLnB1dENlbnRlcih0aGlzLmJsdWVCYWxsLCAtNzAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLnJlZEJhbGwgPSBjaXJjbGUoNjQsXCJyZWRcIik7XHJcbiAgICAgICAgdGhpcy5yZWRCYWxsLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgc3RhZ2UucHV0Q2VudGVyKHRoaXMucmVkQmFsbCwgNzAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0ZXh0KFwiXCIsIFwiMTJweCBwdXp6bGVyXCIsIFwiYmxhY2tcIiwgOCwgOCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBncm91cCh0aGlzLmJsdWVCYWxsLCB0aGlzLnJlZEJhbGwsIHRoaXMubWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5wb2ludGVyLnVwZGF0ZURyYWdBbmREcm9wKGRyYWdnYWJsZVNwcml0ZXMpO1xyXG5cclxuICAgICAgICBpZihoaXRUZXN0Q2lyY2xlKHRoaXMuYmx1ZUJhbGwsIHRoaXMucmVkQmFsbCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmNvbnRlbnQgPSBcIkNvbGxpc2lvbiFcIlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5jb250ZW50ID0gXCJObyBjb2xsaXNpb24uLi5cIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy52aXNpYmxlKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuc2NlbmUudmlzaWJsZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oYHVzZSBtb3VzZSBidXR0b24gdG8gZHJhZyBpdGVtcyBhbmQgdG8gY2hlY2sgZm9yIGNvbGxpc2lvbiBiZXR3ZWVuIHRoZW1gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtncm91cH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvR3JvdXBcIjtcclxuaW1wb3J0IHtkaXN0YW5jZSwgZm9sbG93Q29uc3RhbnQsIG1ha2VQb2ludGVyfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS91dGlsc1wiO1xyXG5pbXBvcnQge2NhbnZhc30gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCB7Y2lyY2xlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9DaXJjbGVcIjtcclxuaW1wb3J0IHtsaW5lfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9MaW5lXCI7XHJcbmltcG9ydCB7dGV4dH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvVGV4dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50U3BlZWRGb2xsb3dpbmcge1xyXG4gICAgY29uc3RydWN0b3Ioc3RhZ2UpIHtcclxuICAgICAgICB0aGlzLnBvaW50ZXIgPSBtYWtlUG9pbnRlcihjYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0ZXh0KFwiXCIsIFwiMTJweCBwdXp6bGVyXCIsIFwiYmxhY2tcIiwgOCwgOCk7XHJcbiAgICAgICAgdGhpcy5jMSA9IGNpcmNsZSgzMiwgXCJncmF5XCIpO1xyXG4gICAgICAgIHN0YWdlLnB1dENlbnRlcih0aGlzLmMxLCAtMzIsIC0zMik7XHJcblxyXG4gICAgICAgIHRoaXMuYzIgPSBjaXJjbGUoMzIsIFwiZ3JheVwiKTtcclxuICAgICAgICBzdGFnZS5wdXRDZW50ZXIodGhpcy5jMiwgMzIsIDMyKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbGluZShcImJsYWNrXCIsIDIsIHRoaXMuYzEuY2VudGVyWCwgdGhpcy5jMS5jZW50ZXJZLCB0aGlzLmMyLmNlbnRlclgsIHRoaXMuYzIuY2VudGVyWSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNjZW5lID0gZ3JvdXAodGhpcy5jMSwgdGhpcy5jMiwgdGhpcy5tZXNzYWdlLCB0aGlzLmNvbm5lY3Rpb24pO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIGZvbGxvd0NvbnN0YW50KHRoaXMuYzIsIHRoaXMucG9pbnRlciwgMyk7XHJcblxyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5heCA9IHRoaXMuYzEuY2VudGVyWDtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uYXkgPSB0aGlzLmMxLmNlbnRlclk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJ4ID0gdGhpcy5jMi5jZW50ZXJYO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5ieSA9IHRoaXMuYzIuY2VudGVyWTtcclxuXHJcbiAgICAgICAgbGV0IGRpc3RhbmNlQmV0d2VlbkNpcmNsZXMgPSBkaXN0YW5jZSh0aGlzLmMxLCB0aGlzLmMyKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLmNvbnRlbnQgPSBgRGlzdGFuY2UgOiR7TWF0aC5mbG9vcihkaXN0YW5jZUJldHdlZW5DaXJjbGVzKX1gO1xyXG5cclxuICAgICAgICBpZih0aGlzLnZpc2libGUpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5zY2VuZS52aXNpYmxlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgdXNlIG1vdXNlIGFycm93IHRvIHNlZSBjb25zdGFudCBzcGVlZCBmb2xsb3dpbmcgZWZmZWN0YClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHthc3NldHN9IGZyb20gXCIuLi9jdXN0b21QaXhpL2Fzc2V0c1wiO1xyXG5pbXBvcnQge2dyb3VwfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9Hcm91cFwiO1xyXG5pbXBvcnQge21ha2VQb2ludGVyfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS91dGlsc1wiO1xyXG5pbXBvcnQge2NhbnZhc30gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCB7YnV0dG9ucywgYnV0dG9ufSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9EaXNwbGF5T2JqZWN0XCI7XHJcbmltcG9ydCB7dGV4dH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvVGV4dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENyZWF0ZUJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdGFnZSkge1xyXG4gICAgICAgIHRoaXMucG9pbnRlciA9IG1ha2VQb2ludGVyKGNhbnZhcyk7XHJcblxyXG4gICAgICAgIGxldCBidXR0b25GcmFtZXMgPSBbXHJcbiAgICAgICAgICAgIGFzc2V0c1tcInVwLnBuZ1wiXSxcclxuICAgICAgICAgICAgYXNzZXRzW1wib3Zlci5wbmdcIl0sXHJcbiAgICAgICAgICAgIGFzc2V0c1tcImRvd24ucG5nXCJdLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHRoaXMucGxheUJ1dHRvbiA9IGJ1dHRvbihidXR0b25GcmFtZXMpO1xyXG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi5pbnRlcmFjcml2ZSA9IHRydWU7XHJcbiAgICAgICAgc3RhZ2UucHV0Q2VudGVyKHRoaXMucGxheUJ1dHRvbik7XHJcblxyXG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi5vdmVyID0gKCkgPT4gY29uc29sZS5sb2coXCJvdmVyXCIpO1xyXG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi5vdXQgPSAoKSA9PiBjb25zb2xlLmxvZyhcIm91dFwiKTtcclxuICAgICAgICB0aGlzLnBsYXlCdXR0b24ucHJlc3MgPSAoKSA9PiBjb25zb2xlLmxvZyhcInByZXNzZWRcIik7XHJcbiAgICAgICAgdGhpcy5wbGF5QnV0dG9uLnJlbGVhc2UgPSAoKSA9PiBjb25zb2xlLmxvZyhcInJlbGVhc2VkXCIpO1xyXG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi50YXAgPSAoKSA9PiBjb25zb2xlLmxvZyhcInRhcHBlZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZU1lc3NhZ2UgPSB0ZXh0KFwiXCIsIFwiMThweCBwdXp6bGVyXCIsIFwiYmxhY2tcIiwgMTgsIDEyKTtcclxuICAgICAgICB0aGlzLmFjdGlvbk1lc3NhZ2UgPSB0ZXh0KFwiXCIsIFwiMThweCBwdXp6bGVyXCIsIFwiYmxhY2tcIiwgMTgsIDM2KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGdyb3VwKHRoaXMucGxheUJ1dHRvbiwgdGhpcy5zdGF0ZU1lc3NhZ2UsIHRoaXMuYWN0aW9uTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgaWYoYnV0dG9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImF1dG9cIjtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMuZm9yRWFjaCggYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi51cGRhdGUodGhpcy5wb2ludGVyLCBjYW52YXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGJ1dHRvbi5zdGF0ZSA9PT0gXCJvdmVyXCIgfHwgYnV0dG9uLnN0YXRlID09PSBcImRvd25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGJ1dHRvbi5wYXJlbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZU1lc3NhZ2UuY29udGVudCA9IGBTdGF0ZTogJHt0aGlzLnBsYXlCdXR0b24uc3RhdGV9YDtcclxuICAgICAgICB0aGlzLmFjdGlvbk1lc3NhZ2UuY29udGVudCA9IGBBY3Rpb246ICR7dGhpcy5wbGF5QnV0dG9uLmFjdGlvbn1gO1xyXG5cclxuICAgICAgICBpZih0aGlzLnZpc2libGUpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5zY2VuZS52aXNpYmxlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgcHJlc3MgYW5kIHJlbGVhc2UgdGhlIGJ1dHRvbmApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2Fzc2V0c30gZnJvbSBcIi4uL2N1c3RvbVBpeGkvYXNzZXRzXCI7XHJcbmltcG9ydCB7Z3JvdXB9IGZyb20gXCIuLi9jdXN0b21QaXhpL0dyb3VwXCI7XHJcbmltcG9ydCB7ZHJhZ2dhYmxlU3ByaXRlc30gZnJvbSBcIi4uL2N1c3RvbVBpeGkvRGlzcGxheU9iamVjdFwiO1xyXG5pbXBvcnQge21ha2VQb2ludGVyfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS91dGlsc1wiO1xyXG5pbXBvcnQge2NhbnZhc30gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCB7c3ByaXRlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9EaXNwbGF5T2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ0FuZERyb3Age1xyXG4gICAgY29uc3RydWN0b3Ioc3RhZ2UpIHtcclxuICAgICAgICB0aGlzLnBvaW50ZXIgPSBtYWtlUG9pbnRlcihjYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLmNhcHRhaW4gPSBzcHJpdGUoYXNzZXRzW1wiY2FwdGFpbi5wbmdcIl0pO1xyXG4gICAgICAgIHN0YWdlLnB1dENlbnRlcih0aGlzLmNhcHRhaW4sIC02NCwgLTY0KTtcclxuXHJcbiAgICAgICAgdGhpcy5odWxrID0gc3ByaXRlKGFzc2V0c1tcImh1bGsucG5nXCJdKTtcclxuICAgICAgICBzdGFnZS5wdXRDZW50ZXIodGhpcy5odWxrKTtcclxuXHJcbiAgICAgICAgdGhpcy5pcm9uTWFuID0gc3ByaXRlKGFzc2V0c1tcImlyb25NYW4ucG5nXCJdKTtcclxuICAgICAgICBzdGFnZS5wdXRDZW50ZXIodGhpcy5pcm9uTWFuLCA2NCwgNjQpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZERyYWdnYWJsZSh0aGlzLmNhcHRhaW4sIHRoaXMuaHVsaywgdGhpcy5pcm9uTWFuKTtcclxuICAgICAgICB0aGlzLnNjZW5lID0gZ3JvdXAodGhpcy5jYXB0YWluLCB0aGlzLmh1bGssIHRoaXMuaXJvbk1hbik7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5wb2ludGVyLnVwZGF0ZURyYWdBbmREcm9wKGRyYWdnYWJsZVNwcml0ZXMpO1xyXG5cclxuICAgICAgICBpZih0aGlzLnZpc2libGUpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5zY2VuZS52aXNpYmxlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgdXNlIG1vdXNlIGJ1dHRvbiB0byBkcmFnIGl0ZW1zYClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGREcmFnZ2FibGUoLi4uc3ByaXRlcykge1xyXG4gICAgICAgIHNwcml0ZXMuZm9yRWFjaChzcHJpdGUgPT4ge1xyXG4gICAgICAgICAgICBzcHJpdGUuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtwYXJ0aWNsZXMsIHBhcnRpY2xlRWZmZWN0LCBlbWl0dGVyfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9wYXJ0aWNsZXNcIjtcclxuaW1wb3J0IHtjYW52YXN9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQge2NvbnRhaW4sIG1ha2VQb2ludGVyLCByYW5kb21JbnQsIHRpbGluZ1Nwcml0ZSwgd2FpdH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvdXRpbHNcIjtcclxuaW1wb3J0IHtncm91cH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvR3JvdXBcIjtcclxuaW1wb3J0IHtzcHJpdGV9IGZyb20gXCIuLi9jdXN0b21QaXhpL0Rpc3BsYXlPYmplY3RcIjtcclxuaW1wb3J0IHthc3NldHN9IGZyb20gXCIuLi9jdXN0b21QaXhpL2Fzc2V0c1wiO1xyXG5pbXBvcnQge2hpdFRlc3RSZWN0YW5nbGV9IGZyb20gXCIuLi9jdXN0b21QaXhpL2NvbGxpc2lvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZsYXBweUZhaXJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKHN0YWdlKSB7XHJcblxyXG4gICAgICAgIHRoaXMucG9pbnRlciA9IG1ha2VQb2ludGVyKGNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5za3kgPSB0aWxpbmdTcHJpdGUoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCBhc3NldHNbXCJza3kucG5nXCJdKTtcclxuXHJcbiAgICAgICAgdGhpcy5ibG9ja3MgPSBncm91cCgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUGlsbGFycygpO1xyXG4gICAgICAgIHRoaXMuZmFpcnkgPSB0aGlzLmNyZWF0ZUZhaXJ5RnJhbWVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZHVzdEZyYW1lcyA9IFtcclxuICAgICAgICAgICAgYXNzZXRzW1wicGluay5wbmdcIl0sXHJcbiAgICAgICAgICAgIGFzc2V0c1tcInllbGxvdy5wbmdcIl0sXHJcbiAgICAgICAgICAgIGFzc2V0c1tcImdyZWVuLnBuZ1wiXSxcclxuICAgICAgICAgICAgYXNzZXRzW1widmlvbGV0LnBuZ1wiXVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHRoaXMuZHVzdCA9IHRoaXMuY3JlYXRlRmFpcnlEdXN0KHRoaXMuZHVzdEZyYW1lcyk7XHJcblxyXG4gICAgICAgIHRoaXMucG9pbnRlci50YXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFpcnkudnkgKz0gMS41O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBncm91cCh0aGlzLnNreSwgdGhpcy5ibG9ja3MsIHRoaXMuZmFpcnksIHRoaXMuZHVzdCk7XHJcbiAgICAgICAgdGhpcy5zdGFnZSA9IHN0YWdlO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgaWYocGFydGljbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gcGFydGljbGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZXNbaV0udXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMudmlzaWJsZSl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnNjZW5lLnZpc2libGUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKGB1c2UgbW91c2UgYnV0dG9uIHRvIG1ha2UgRmxhcHB5RmFpcnkgZmx5IHVwYClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXkodGhpcy5zdGFnZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQaWxsYXJzICgpIHtcclxuICAgICAgICBsZXQgZ2FwU2l6ZSA9IDQ7XHJcbiAgICAgICAgbGV0IG51bWJlck9mUGlsbGFycyA9IDE1O1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlBpbGxhcnM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRHYXBOdW1iZXIgPSByYW5kb21JbnQoMCw4IC0gZ2FwU2l6ZSk7XHJcbiAgICAgICAgICAgIGlmKGkgPiAwICYmIGkgJSA1ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBnYXBTaXplIC09IDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChqIDwgc3RhcnRHYXBOdW1iZXIgfHwgaiA+IHN0YXJ0R2FwTnVtYmVyICsgZ2FwU2l6ZSAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYmxvY2sgPSBzcHJpdGUoYXNzZXRzW1wiZ3JlZW5CbG9jay5wbmdcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tzLmFkZENoaWxkKGJsb2NrKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2sueCA9IChpICogMzg0KSArIDUxMjtcclxuICAgICAgICAgICAgICAgICAgICBibG9jay55ID0gaiAqIDY0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaSA9PT0gbnVtYmVyT2ZQaWxsYXJzIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2ggPSBzcHJpdGUoYXNzZXRzW1wiZmluaXNoLnBuZ1wiXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2Nrcy5hZGRDaGlsZCh0aGlzLmZpbmlzaCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaC54ID0gKGkgKiAzODQpICsgODk2O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2gueSA9IDE5MjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVGYWlyeUZyYW1lcyAoKSB7XHJcbiAgICAgICAgbGV0IGZhaXJseUZyYW1lcyA9IFtcclxuICAgICAgICAgICAgYXNzZXRzW1wiMC5wbmdcIl0sXHJcbiAgICAgICAgICAgIGFzc2V0c1tcIjEucG5nXCJdLFxyXG4gICAgICAgICAgICBhc3NldHNbXCIyLnBuZ1wiXVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGxldCBmYWlyeSA9IHNwcml0ZShmYWlybHlGcmFtZXMpO1xyXG4gICAgICAgIGZhaXJ5LmZwcyA9IDI0O1xyXG4gICAgICAgIGZhaXJ5LnNldFBvc2l0aW9uKDEzMiwgMzIpO1xyXG4gICAgICAgIGZhaXJ5LnZ5ID0gMDtcclxuICAgICAgICBmYWlyeS5vbGRWeSA9IDA7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWlyeTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVGYWlyeUR1c3QoZHVzdEZyYW1lcykge1xyXG4gICAgICAgIHJldHVybiBlbWl0dGVyKFxyXG4gICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICgpID0+IHBhcnRpY2xlRWZmZWN0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5mYWlyeS54ICsgOCwgdGhpcy5mYWlyeS55ICsgdGhpcy5mYWlyeS5oYWxmSGVpZ2h0ICsgOCxcclxuICAgICAgICAgICAgICAgICgpID0+IHNwcml0ZShkdXN0RnJhbWVzKSxcclxuICAgICAgICAgICAgICAgIDMsIDAsIHRydWUsXHJcbiAgICAgICAgICAgICAgICAyLjQsIDMuNixcclxuICAgICAgICAgICAgICAgIDEyLDE4LFxyXG4gICAgICAgICAgICAgICAgMSwyLFxyXG4gICAgICAgICAgICAgICAgMC4wMDUsIDAuMDEsXHJcbiAgICAgICAgICAgICAgICAwLjAwNSwgMC4wMSxcclxuICAgICAgICAgICAgICAgIDAuMDUsIDAuMVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5KHN0YWdlKXtcclxuICAgICAgICB0aGlzLnNreS50aWxlWCAtPSAxO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5maW5pc2guZ3ggPiA4MCkge1xyXG4gICAgICAgICAgICB0aGlzLmJsb2Nrcy54IC09IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZhaXJ5LnZ5ICs9IC0wLjA1O1xyXG4gICAgICAgIHRoaXMuZmFpcnkueSAtPSB0aGlzLmZhaXJ5LnZ5O1xyXG5cclxuICAgICAgICBpZih0aGlzLmZhaXJ5LnZ5ID4gdGhpcy5mYWlyeS5vbGRWeSl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmZhaXJ5LnBsYXlpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmFpcnkucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5mYWlyeS52aXNpYmxlICYmIHRoaXMudmlzaWJsZSAmJiAhdGhpcy5kdXN0LnBsYXlpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmR1c3QucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmZhaXJ5LnZ5IDwgMCAmJiB0aGlzLmZhaXJ5Lm9sZFZ5ID4gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mYWlyeS5wbGF5aW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZhaXJ5LnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmFpcnkuc2hvdygwKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZHVzdC5wbGF5aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kdXN0LnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5mYWlyeS5vbGRWeSA9IHRoaXMuZmFpcnkudnk7XHJcblxyXG4gICAgICAgIGxldCBmYWlyeVZzU3RhZ2UgPSBjb250YWluKHRoaXMuZmFpcnksIHN0YWdlLmxvY2FsQm91bmRzKTtcclxuICAgICAgICBpZiAoZmFpcnlWc1N0YWdlID09PSBcImJvdHRvbVwiIHx8IGZhaXJ5VnNTdGFnZSA9PT0gXCJ0b3BcIikge1xyXG4gICAgICAgICAgICB0aGlzLmZhaXJ5LnZ5ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBmYWlyeVZzQmxvY2sgPSB0aGlzLmJsb2Nrcy5jaGlsZHJlbi5zb21lKGJsb2NrID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGhpdFRlc3RSZWN0YW5nbGUodGhpcy5mYWlyeSwgYmxvY2ssIHRydWUpIDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYoZmFpcnlWc0Jsb2NrICYmIHRoaXMuZmFpcnkudmlzaWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZhaXJ5LnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHBhcnRpY2xlRWZmZWN0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5mYWlyeS5jZW50ZXJYLCB0aGlzLmZhaXJ5LmNlbnRlclksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiBzcHJpdGUodGhpcy5kdXN0RnJhbWVzKSxcclxuICAgICAgICAgICAgICAgIDIwLFxyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgMCwgNi4yOCxcclxuICAgICAgICAgICAgICAgIDE2LCAzMixcclxuICAgICAgICAgICAgICAgIDEsIDNcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZHVzdC5zdG9wKCk7XHJcbiAgICAgICAgICAgIHdhaXQoMzAwMCkudGhlbigoKSA9PiB0aGlzLnJlc2V0KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmZhaXJ5LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmFpcnkueSA9IDMyO1xyXG4gICAgICAgIGlmKHRoaXMudmlzaWJsZSl7XHJcbiAgICAgICAgICAgIHRoaXMuZHVzdC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmxvY2tzLnggPSAwO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Z3JvdXB9IGZyb20gXCIuLi9jdXN0b21QaXhpL0dyb3VwXCI7XHJcbmltcG9ydCB7bWFrZVBvaW50ZXIsIHJhbmRvbUludH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvdXRpbHNcIjtcclxuaW1wb3J0IHtjYW52YXN9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQge2NpcmNsZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvQ2lyY2xlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJhY3RpdmVTcHJpdGUge1xyXG4gICAgY29uc3RydWN0b3Ioc3RhZ2UpIHtcclxuICAgICAgICB0aGlzLnBvaW50ZXIgPSBtYWtlUG9pbnRlcihjYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLmJhbGwgPSBjaXJjbGUoMTI4LCBcInJlZFwiLCBcImJsdWVcIiwgMTYpO1xyXG4gICAgICAgIHN0YWdlLnB1dENlbnRlcih0aGlzLmJhbGwpO1xyXG4gICAgICAgIHRoaXMuYmFsbC5pbnRlcmFjcml2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuYmFsbC5wcmVzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbG9ycyA9IFtcInJlZFwiLCBcImJsdWVcIiwgXCJ5ZWxsb3dcIiwgXCJ5ZWxsb3dHcmVlblwiLCBcImJsYWNrXCIsIFwib3JhbmdlXCJdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5iYWxsLmZpbGxTdHlsZSA9IGNvbG9yc1tyYW5kb21JbnQoMCwgNSldO1xyXG4gICAgICAgICAgICB0aGlzLmJhbGwuc3Ryb2tlU3R5bGUgPSBjb2xvcnNbcmFuZG9tSW50KDAsIDUpXTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lID0gZ3JvdXAodGhpcy5iYWxsKTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKXtcclxuICAgICAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gXCJhdXRvXCI7XHJcbiAgICAgICAgdGhpcy5iYWxsLnVwZGF0ZSh0aGlzLnBvaW50ZXIsIGNhbnZhcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFsbC5zdGF0ZSA9PT0gXCJvdmVyXCIgfHwgdGhpcy5iYWxsLnN0YXRlID09PSBcImRvd25cIikge1xyXG4gICAgICAgICAgICBpZih0aGlzLmJhbGwucGFyZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy52aXNpYmxlKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuc2NlbmUudmlzaWJsZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oYGhpdCB0aGUgY2lyY2xlIHRvIGNoYW5nZSBpdGApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3N0YWdlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9EaXNwbGF5T2JqZWN0XCI7XHJcbmltcG9ydCB7Y2lyY2xlQ29sbGlzaW9uLCBoaXRUZXN0UG9pbnR9IGZyb20gXCIuLi9jdXN0b21QaXhpL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQge2dyb3VwfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9Hcm91cFwiO1xyXG5pbXBvcnQge2dyaWQsIG1ha2VQb2ludGVyLCByYW5kb21JbnQsIGNvbnRhaW4sIGRpc3RhbmNlLGFuZ2xlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS91dGlsc1wiO1xyXG5pbXBvcnQge2NhbnZhc30gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCB7bGluZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvTGluZVwiO1xyXG5pbXBvcnQge2NpcmNsZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvQ2lyY2xlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmluZ0FuZFN0YXRDaXJjbGVzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucG9pbnRlciA9IG1ha2VQb2ludGVyKGNhbnZhcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFsbCA9IGNpcmNsZSgxOCwgXCJyZWRcIiwgXCJibGFja1wiLCAxLCA5NiwgMjUpO1xyXG5cclxuICAgICAgICB0aGlzLmJhbGwudnggPSByYW5kb21JbnQoNSwxNSk7XHJcbiAgICAgICAgdGhpcy5iYWxsLnZ5ID0gcmFuZG9tSW50KDUsMTUpO1xyXG5cclxuICAgICAgICB0aGlzLmJhbGwuZ3Jhdml0eSA9IDAuMztcclxuICAgICAgICB0aGlzLmJhbGwuZnJpY3Rpb25YID0gMTtcclxuICAgICAgICB0aGlzLmJhbGwuZnJpY3Rpb25ZID0gMDtcclxuICAgICAgICB0aGlzLmJhbGwubWFzcyA9IDEuMztcclxuXHJcbiAgICAgICAgdGhpcy5wZWdzID0gZ3JpZChcclxuICAgICAgICAgICAgMTAsOSw0OCw0OCwgdHJ1ZSwgMCwgMCxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBlZyA9IGNpcmNsZShyYW5kb21JbnQoOCwgMzIpKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xvcnMgPSBbXCIjRkZBQkFCXCIsIFwiI0ZGREFBQlwiLCBcIiNEREZGQUJcIiwgXCIjQUJFNEZGXCIsIFwiI0Q5QUJGRlwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICBwZWcuZmlsbFN0eWxlID0gY29sb3JzW3JhbmRvbUludCgwLDQpXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwZWc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucGVncy5zZXRQb3NpdGlvbigxNiwgNDgpO1xyXG5cclxuICAgICAgICB0aGlzLnNsaW5nID0gbGluZShcInllbGxvd1wiLCA0KTtcclxuICAgICAgICB0aGlzLnNsaW5nLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZE1hcmJsZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBncm91cCh0aGlzLnBlZ3MsIHRoaXMuc2xpbmcsIHRoaXMuYmFsbCk7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcblxyXG4gICAgICAgIHRoaXMuYmFsbC52eSArPSB0aGlzLmJhbGwuZ3Jhdml0eTtcclxuICAgICAgICB0aGlzLmJhbGwudnggKj0gdGhpcy5iYWxsLmZyaWN0aW9uWDtcclxuXHJcbiAgICAgICAgdGhpcy5iYWxsLnggKz0gdGhpcy5iYWxsLnZ4O1xyXG4gICAgICAgIHRoaXMuYmFsbC55ICs9IHRoaXMuYmFsbC52eTtcclxuXHJcbiAgICAgICAgbGV0IGNvbGxpc2lvbiA9IGNvbnRhaW4odGhpcy5iYWxsLCBzdGFnZS5sb2NhbEJvdW5kcywgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKGNvbGxpc2lvbiA9PT0gXCJib3R0b21cIikge1xyXG4gICAgICAgICAgICB0aGlzLmJhbGwuZnJpY3Rpb25YID0gMC45NjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJhbGwuZnJpY3Rpb25YID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuY2FwdHVyZWRNYXJibGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zbGluZy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zbGluZy5heCA9IHRoaXMuY2FwdHVyZWRNYXJibGUuY2VudGVyWDtcclxuICAgICAgICAgICAgdGhpcy5zbGluZy5heSA9IHRoaXMuY2FwdHVyZWRNYXJibGUuY2VudGVyWTtcclxuICAgICAgICAgICAgdGhpcy5zbGluZy5ieCA9IHRoaXMucG9pbnRlci54O1xyXG4gICAgICAgICAgICB0aGlzLnNsaW5nLmJ5ID0gdGhpcy5wb2ludGVyLnlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMucG9pbnRlci5pc0Rvd24gJiYgdGhpcy5jYXB0dXJlZE1hcmJsZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZihoaXRUZXN0UG9pbnQodGhpcy5wb2ludGVyLCB0aGlzLmJhbGwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcHR1cmVkTWFyYmxlID0gdGhpcy5iYWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXB0dXJlZE1hcmJsZS52eCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcHR1cmVkTWFyYmxlLnZ5ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5wb2ludGVyLmlzVXApIHtcclxuICAgICAgICAgICAgdGhpcy5zbGluZy52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmNhcHR1cmVkTWFyYmxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaW5nLmxlbmd0aCA9IGRpc3RhbmNlKHRoaXMuY2FwdHVyZWRNYXJibGUsIHRoaXMucG9pbnRlcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaW5nLmFuZ2xlID0gYW5nbGUodGhpcy5wb2ludGVyLCB0aGlzLmNhcHR1cmVkTWFyYmxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc3BlZWQgPSA1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXB0dXJlZE1hcmJsZS52eCA9IE1hdGguY29zKHRoaXMuc2xpbmcuYW5nbGUpICogdGhpcy5zbGluZy5sZW5ndGggLyBzcGVlZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FwdHVyZWRNYXJibGUudnkgPSBNYXRoLnNpbih0aGlzLnNsaW5nLmFuZ2xlKSAqIHRoaXMuc2xpbmcubGVuZ3RoIC8gc3BlZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXB0dXJlZE1hcmJsZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGVncy5jaGlsZHJlbi5mb3JFYWNoKCBwZWcgPT4ge1xyXG4gICAgICAgICAgICBjaXJjbGVDb2xsaXNpb24odGhpcy5iYWxsLCBwZWcsIHRydWUsIHRydWUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMudmlzaWJsZSl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnNjZW5lLnZpc2libGUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKGBwdXNoIG9uIHRoZSByZWQgY2lyY2xlIHRoZW4gbW92ZSBtb3VzZSBhc2lkZSBhbmQgcmVsZWFzZSwgdG8gbWFrZSBpdCBtb3ZlYClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7c3RhZ2V9IGZyb20gXCIuLi9jdXN0b21QaXhpL0Rpc3BsYXlPYmplY3RcIjtcclxuaW1wb3J0IHtjaXJjbGVSZWN0YW5nbGVDb2xsaXNpb24sIGhpdFRlc3RQb2ludH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7Z3JvdXB9IGZyb20gXCIuLi9jdXN0b21QaXhpL0dyb3VwXCI7XHJcbmltcG9ydCB7Z3JpZCwgbWFrZVBvaW50ZXIsIHJhbmRvbUludCwgY29udGFpbiwgZGlzdGFuY2UsYW5nbGV9IGZyb20gXCIuLi9jdXN0b21QaXhpL3V0aWxzXCI7XHJcbmltcG9ydCB7Y2FudmFzfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IHtsaW5lfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9MaW5lXCI7XHJcbmltcG9ydCB7Y2lyY2xlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9DaXJjbGVcIjtcclxuaW1wb3J0IHtyZWN0YW5nbGV9IGZyb20gXCIuLi9jdXN0b21QaXhpL1JlY3RhbmdsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmluZ0NpcmNsZUFuZFN0YXRSZWN0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnBvaW50ZXIgPSBtYWtlUG9pbnRlcihjYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLmJhbGwgPSBjaXJjbGUoMTgsIFwicmVkXCIsIFwiYmxhY2tcIiwgMSwgOTYsIDI1KTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWxsLnZ4ID0gcmFuZG9tSW50KDUsMTUpO1xyXG4gICAgICAgIHRoaXMuYmFsbC52eSA9IHJhbmRvbUludCg1LDE1KTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWxsLmdyYXZpdHkgPSAwLjM7XHJcbiAgICAgICAgdGhpcy5iYWxsLmZyaWN0aW9uWCA9IDE7XHJcbiAgICAgICAgdGhpcy5iYWxsLmZyaWN0aW9uWSA9IDA7XHJcbiAgICAgICAgdGhpcy5iYWxsLm1hc3MgPSAxLjM7XHJcblxyXG4gICAgICAgIHRoaXMuYnJpY2tzID0gZ3JpZChcclxuICAgICAgICAgICAgNiw1LDgwLDgwLCB0cnVlLCAwLCAwLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGVnID0gcmVjdGFuZ2xlKHJhbmRvbUludCgxMiwgNDgpLCByYW5kb21JbnQoOCwgMzIpKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xvcnMgPSBbXCIjRkZBQkFCXCIsIFwiI0ZGREFBQlwiLCBcIiNEREZGQUJcIiwgXCIjQUJFNEZGXCIsIFwiI0Q5QUJGRlwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICBwZWcuZmlsbFN0eWxlID0gY29sb3JzW3JhbmRvbUludCgwLDQpXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwZWc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuYnJpY2tzLnNldFBvc2l0aW9uKDE2LCA0OCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2xpbmcgPSBsaW5lKFwieWVsbG93XCIsIDQpO1xyXG4gICAgICAgIHRoaXMuc2xpbmcudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmNhcHR1cmVkTWFyYmxlID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGdyb3VwKHRoaXMuYnJpY2tzLCB0aGlzLnNsaW5nLCB0aGlzLmJhbGwpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG5cclxuICAgICAgICB0aGlzLmJhbGwudnkgKz0gdGhpcy5iYWxsLmdyYXZpdHk7XHJcbiAgICAgICAgdGhpcy5iYWxsLnZ4ICo9IHRoaXMuYmFsbC5mcmljdGlvblg7XHJcblxyXG4gICAgICAgIHRoaXMuYmFsbC54ICs9IHRoaXMuYmFsbC52eDtcclxuICAgICAgICB0aGlzLmJhbGwueSArPSB0aGlzLmJhbGwudnkgKiB0aGlzLmJhbGwuZnJpY3Rpb25ZO1xyXG5cclxuICAgICAgICBsZXQgY29sbGlzaW9uID0gY29udGFpbih0aGlzLmJhbGwsIHN0YWdlLmxvY2FsQm91bmRzLCB0cnVlKTtcclxuICAgICAgICBpZiAoY29sbGlzaW9uID09PSBcImJvdHRvbVwiIHx8IGNvbGxpc2lvbiA9PT0gXCJ0b3BcIikge1xyXG4gICAgICAgICAgICB0aGlzLmJhbGwuZnJpY3Rpb25YID0gMC43O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbC5mcmljdGlvblggPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoY29sbGlzaW9uID09PSBcImxlZnRcIiB8fCBjb2xsaXNpb24gPT09IFwicmlnaHRcIil7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbC5mcmljdGlvblkgPSAwLjc7XHJcbiAgICAgICAgfSBlbHNlICB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbC5mcmljdGlvblkgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5jYXB0dXJlZE1hcmJsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNsaW5nLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNsaW5nLmF4ID0gdGhpcy5jYXB0dXJlZE1hcmJsZS5jZW50ZXJYO1xyXG4gICAgICAgICAgICB0aGlzLnNsaW5nLmF5ID0gdGhpcy5jYXB0dXJlZE1hcmJsZS5jZW50ZXJZO1xyXG4gICAgICAgICAgICB0aGlzLnNsaW5nLmJ4ID0gdGhpcy5wb2ludGVyLng7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpbmcuYnkgPSB0aGlzLnBvaW50ZXIueVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5wb2ludGVyLmlzRG93biAmJiB0aGlzLmNhcHR1cmVkTWFyYmxlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmKGhpdFRlc3RQb2ludCh0aGlzLnBvaW50ZXIsIHRoaXMuYmFsbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FwdHVyZWRNYXJibGUgPSB0aGlzLmJhbGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcHR1cmVkTWFyYmxlLnZ4ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FwdHVyZWRNYXJibGUudnkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnBvaW50ZXIuaXNVcCkge1xyXG4gICAgICAgICAgICB0aGlzLnNsaW5nLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuY2FwdHVyZWRNYXJibGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpbmcubGVuZ3RoID0gZGlzdGFuY2UodGhpcy5jYXB0dXJlZE1hcmJsZSwgdGhpcy5wb2ludGVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpbmcuYW5nbGUgPSBhbmdsZSh0aGlzLnBvaW50ZXIsIHRoaXMuY2FwdHVyZWRNYXJibGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzcGVlZCA9IDU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcHR1cmVkTWFyYmxlLnZ4ID0gTWF0aC5jb3ModGhpcy5zbGluZy5hbmdsZSkgKiB0aGlzLnNsaW5nLmxlbmd0aCAvIHNwZWVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXB0dXJlZE1hcmJsZS52eSA9IE1hdGguc2luKHRoaXMuc2xpbmcuYW5nbGUpICogdGhpcy5zbGluZy5sZW5ndGggLyBzcGVlZDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcHR1cmVkTWFyYmxlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5icmlja3MuY2hpbGRyZW4uZm9yRWFjaChicmljayA9PiB7XHJcbiAgICAgICAgICAgIGNpcmNsZVJlY3RhbmdsZUNvbGxpc2lvbih0aGlzLmJhbGwsIGJyaWNrLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYodGhpcy52aXNpYmxlKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuc2NlbmUudmlzaWJsZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oYHB1c2ggb24gdGhlIHJlZCBjaXJjbGUgdGhlbiBtb3ZlIG1vdXNlIGFzaWRlIGFuZCByZWxlYXNlLCB0byBtYWtlIGl0IG1vdmVgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHthc3NldHN9IGZyb20gXCIuLi9jdXN0b21QaXhpL2Fzc2V0c1wiO1xyXG5pbXBvcnQge3N0YWdlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9EaXNwbGF5T2JqZWN0XCI7XHJcbmltcG9ydCB7aGl0VGVzdFBvaW50LCBtb3ZpbmdDaXJjbGVDb2xsaXNpb259IGZyb20gXCIuLi9jdXN0b21QaXhpL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQge2dyb3VwfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9Hcm91cFwiO1xyXG5pbXBvcnQge2dyaWQsIG1ha2VQb2ludGVyLCByYW5kb21JbnQsIGZyYW1lcywgY29udGFpbiwgZGlzdGFuY2UsYW5nbGV9IGZyb20gXCIuLi9jdXN0b21QaXhpL3V0aWxzXCI7XHJcbmltcG9ydCB7Y2FudmFzfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IHtzcHJpdGV9IGZyb20gXCIuLi9jdXN0b21QaXhpL0Rpc3BsYXlPYmplY3RcIjtcclxuaW1wb3J0IHtsaW5lfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9MaW5lXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmluZ0NpcmNsZXNDb2xsaXNpb24ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wb2ludGVyID0gbWFrZVBvaW50ZXIoY2FudmFzKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXJibGVzID0gZ3JpZChcclxuICAgICAgICAgICAgNywgNywgNjQsIDY0LCB0cnVlLCAwLCAwLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWFyYmxlRnJhbWVzID0gZnJhbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0c1tcInNyYy9pbWcvbWFyYmxlcy5wbmdcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbMCwgMF0sIFszMiwgMF0sIFs2NCwgMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFswLCAzMl0sIFszMiwgMzJdLCBbNjQsIDMyXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIDMyLCAzMlxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbWFyYmxlID0gc3ByaXRlKG1hcmJsZUZyYW1lcyk7XHJcbiAgICAgICAgICAgICAgICBtYXJibGUuZ290b0FuZFN0b3AocmFuZG9tSW50KDAsNSkpO1xyXG4gICAgICAgICAgICAgICAgbWFyYmxlLmNpcmN1bGFyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc2l6ZXMgPSBbOCwgMTIsIDE2LCAyMCwgMjQsIDI4LCAzMl07XHJcbiAgICAgICAgICAgICAgICBtYXJibGUuZGlhbWV0ZXIgPSBzaXplc1tyYW5kb21JbnQoMCwgNildO1xyXG5cclxuICAgICAgICAgICAgICAgIG1hcmJsZS52eCA9IHJhbmRvbUludCgtMTAsIDEwKTtcclxuICAgICAgICAgICAgICAgIG1hcmJsZS52eSA9IHJhbmRvbUludCgtMTAsIDEwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBtYXJibGUuZnJpY3Rpb25YID0gMC45OTtcclxuICAgICAgICAgICAgICAgIG1hcmJsZS5mcmljdGlvblkgPSAwLjk5O1xyXG4gICAgICAgICAgICAgICAgbWFyYmxlLm1hc3MgPSAwLjc1ICsgKG1hcmJsZS5kaWFtZXRlciAvIDMyKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFyYmxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5zbGluZyA9IGxpbmUoXCJ5ZWxsb3dcIiwgNCk7XHJcbiAgICAgICAgdGhpcy5zbGluZy52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuY2FwdHVyZWRNYXJibGUgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lID0gZ3JvdXAodGhpcy5tYXJibGVzLCB0aGlzLnNsaW5nKTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKXtcclxuXHJcbiAgICAgICAgaWYodGhpcy5jYXB0dXJlZE1hcmJsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNsaW5nLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNsaW5nLmF4ID0gdGhpcy5jYXB0dXJlZE1hcmJsZS5jZW50ZXJYO1xyXG4gICAgICAgICAgICB0aGlzLnNsaW5nLmF5ID0gdGhpcy5jYXB0dXJlZE1hcmJsZS5jZW50ZXJZO1xyXG4gICAgICAgICAgICB0aGlzLnNsaW5nLmJ4ID0gdGhpcy5wb2ludGVyLng7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpbmcuYnkgPSB0aGlzLnBvaW50ZXIueVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5wb2ludGVyLmlzVXApIHtcclxuICAgICAgICAgICAgdGhpcy5zbGluZy52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmNhcHR1cmVkTWFyYmxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaW5nLmxlbmd0aCA9IGRpc3RhbmNlKHRoaXMuY2FwdHVyZWRNYXJibGUsIHRoaXMucG9pbnRlcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaW5nLmFuZ2xlID0gYW5nbGUodGhpcy5wb2ludGVyLCB0aGlzLmNhcHR1cmVkTWFyYmxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc3BlZWQgPSA1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXB0dXJlZE1hcmJsZS52eCA9IE1hdGguY29zKHRoaXMuc2xpbmcuYW5nbGUpICogdGhpcy5zbGluZy5sZW5ndGggLyBzcGVlZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FwdHVyZWRNYXJibGUudnkgPSBNYXRoLnNpbih0aGlzLnNsaW5nLmFuZ2xlKSAqIHRoaXMuc2xpbmcubGVuZ3RoIC8gc3BlZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXB0dXJlZE1hcmJsZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubWFyYmxlcy5jaGlsZHJlbi5mb3JFYWNoKCBtYXJibGUgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnBvaW50ZXIuaXNEb3duICYmIHRoaXMuY2FwdHVyZWRNYXJibGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmKGhpdFRlc3RQb2ludCh0aGlzLnBvaW50ZXIsIG1hcmJsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcHR1cmVkTWFyYmxlID0gbWFyYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FwdHVyZWRNYXJibGUudnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FwdHVyZWRNYXJibGUudnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtYXJibGUudnggKj0gbWFyYmxlLmZyaWN0aW9uWDtcclxuICAgICAgICAgICAgbWFyYmxlLnZ5ICo9IG1hcmJsZS5mcmljdGlvblk7XHJcblxyXG4gICAgICAgICAgICBtYXJibGUueCArPSBtYXJibGUudng7XHJcbiAgICAgICAgICAgIG1hcmJsZS55ICs9IG1hcmJsZS52eTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW4obWFyYmxlLCBzdGFnZS5sb2NhbEJvdW5kcywgdHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm1hcmJsZXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGMxID0gdGhpcy5tYXJibGVzLmNoaWxkcmVuW2ldO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBqID0gaSArIDE7IGogPCB0aGlzLm1hcmJsZXMuY2hpbGRyZW4ubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IGMyID0gdGhpcy5tYXJibGVzLmNoaWxkcmVuW2pdO1xyXG4gICAgICAgICAgICAgICAgbW92aW5nQ2lyY2xlQ29sbGlzaW9uKGMxLCBjMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMudmlzaWJsZSl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnNjZW5lLnZpc2libGUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKGBwdXNoIG9uIGFueSBjaXJjbGUgdGhlbiBtb3ZlIG1vdXNlIGFzaWRlIGFuZCByZWxlYXNlLCB0byBtYWtlIGl0IG1vdmVgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtwYXJ0aWNsZXMsIHBhcnRpY2xlRWZmZWN0LCBlbWl0dGVyfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9wYXJ0aWNsZXNcIjtcclxuaW1wb3J0IHtjYW52YXN9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQge2ZyYW1lLCBtYWtlUG9pbnRlcn0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvdXRpbHNcIjtcclxuaW1wb3J0IHtncm91cH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvR3JvdXBcIjtcclxuaW1wb3J0IHtzcHJpdGV9IGZyb20gXCIuLi9jdXN0b21QaXhpL0Rpc3BsYXlPYmplY3RcIjtcclxuaW1wb3J0IHthc3NldHN9IGZyb20gXCIuLi9jdXN0b21QaXhpL2Fzc2V0c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRpY2xlRW1pdHRlcntcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB0aGlzLnBvaW50ZXIgPSBtYWtlUG9pbnRlcihjYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLnBhcnRpY2xlU3RyZWFtID0gZW1pdHRlcihcclxuICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAoKSA9PiBwYXJ0aWNsZUVmZmVjdChcclxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRlci54LCB0aGlzLnBvaW50ZXIueSxcclxuICAgICAgICAgICAgICAgICgpID0+IHNwcml0ZShmcmFtZShhc3NldHNbXCJzcmMvaW1nL21hcmJsZXMucG5nXCJdLCAwLCA2NCwgMzIsIDMyKSksXHJcbiAgICAgICAgICAgICAgICAxMCxcclxuICAgICAgICAgICAgICAgIDAuMSxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgMy4xNCwgNi4yOCxcclxuICAgICAgICAgICAgICAgIDE2LCAzMixcclxuICAgICAgICAgICAgICAgIDIsIDVcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMucG9pbnRlci5wcmVzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy5zY2VuZS52aXNpYmxlID09PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFydGljbGVTdHJlYW0ucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnBvaW50ZXIucmVsZWFzZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy5zY2VuZS52aXNpYmxlID09PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFydGljbGVTdHJlYW0uc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGdyb3VwKHRoaXMucGFydGljbGVTdHJlYW0pO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKXtcclxuICAgICAgICBpZihwYXJ0aWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSBwYXJ0aWNsZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlc1tpXS51cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy52aXNpYmxlKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuc2NlbmUudmlzaWJsZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oYHB1c2ggbW91c2UgYnV0dG9uIGluc2lkZSB0aGUgY2FudmFzYClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHt0ZXh0fSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9UZXh0XCI7XHJcbmltcG9ydCB7aGl0VGVzdFBvaW50fSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9jb2xsaXNpb25cIjtcclxuaW1wb3J0IHtncm91cH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvR3JvdXBcIjtcclxuaW1wb3J0IHtkcmFnZ2FibGVTcHJpdGVzfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9EaXNwbGF5T2JqZWN0XCI7XHJcbmltcG9ydCB7bWFrZVBvaW50ZXJ9IGZyb20gXCIuLi9jdXN0b21QaXhpL3V0aWxzXCI7XHJcbmltcG9ydCB7Y2FudmFzfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IHtjaXJjbGV9IGZyb20gXCIuLi9jdXN0b21QaXhpL0NpcmNsZVwiO1xyXG5pbXBvcnQge3JlY3RhbmdsZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvUmVjdGFuZ2xlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnRBbmRTaGFwZUNvbGxpc2lvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdGFnZSkge1xyXG4gICAgICAgIHRoaXMucG9pbnRlciA9IG1ha2VQb2ludGVyKGNhbnZhcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYm94ID0gcmVjdGFuZ2xlKDY0LCA2NCxcImJsdWVcIik7XHJcbiAgICAgICAgc3RhZ2UucHV0Q2VudGVyKHRoaXMuYm94LCAtNzAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLmJhbGwgPSBjaXJjbGUoNjQsXCJyZWRcIik7XHJcbiAgICAgICAgc3RhZ2UucHV0Q2VudGVyKHRoaXMuYmFsbCwgNzAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0ZXh0KFwiXCIsIFwiMTJweCBwdXp6bGVyXCIsIFwiYmxhY2tcIiwgOCwgOCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBncm91cCh0aGlzLmJveCwgdGhpcy5iYWxsLCB0aGlzLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMucG9pbnRlci51cGRhdGVEcmFnQW5kRHJvcChkcmFnZ2FibGVTcHJpdGVzKTtcclxuXHJcbiAgICAgICAgaWYoaGl0VGVzdFBvaW50KHRoaXMucG9pbnRlci5wb3NpdGlvbiwgdGhpcy5iYWxsKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuY29udGVudCA9IFwiQmFsbCFcIlxyXG4gICAgICAgIH0gZWxzZSBpZihoaXRUZXN0UG9pbnQodGhpcy5wb2ludGVyLnBvc2l0aW9uLCB0aGlzLmJveCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmNvbnRlbnQgPSBcIkJveCFcIlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5jb250ZW50ID0gXCJObyBjb2xsaXNpb24uLi5cIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy52aXNpYmxlKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuc2NlbmUudmlzaWJsZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oYHVzZSBtb3VzZSBhcnJvdyB0byBjaGVjayBmb3IgY29sbGlzaW9uIGJldHdlZW4gbW91c2UgYW5kIGl0ZW1gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHt0ZXh0fSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9UZXh0XCI7XHJcbmltcG9ydCB7aGl0VGVzdFJlY3RhbmdsZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7cmVjdGFuZ2xlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IHtncm91cH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvR3JvdXBcIjtcclxuaW1wb3J0IHtkcmFnZ2FibGVTcHJpdGVzfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9EaXNwbGF5T2JqZWN0XCI7XHJcbmltcG9ydCB7bWFrZVBvaW50ZXJ9IGZyb20gXCIuLi9jdXN0b21QaXhpL3V0aWxzXCI7XHJcbmltcG9ydCB7Y2FudmFzfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWN0Q29sbGlzaW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0YWdlKSB7XHJcbiAgICAgICAgdGhpcy5wb2ludGVyID0gbWFrZVBvaW50ZXIoY2FudmFzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ibHVlQm94ID0gcmVjdGFuZ2xlKDY0LCA2NCxcImJsdWVcIik7XHJcbiAgICAgICAgdGhpcy5ibHVlQm94LmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgc3RhZ2UucHV0Q2VudGVyKHRoaXMuYmx1ZUJveCwgLTcwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWRCb3ggPSByZWN0YW5nbGUoNjQsIDY0LCBcInJlZFwiICk7XHJcbiAgICAgICAgdGhpcy5yZWRCb3guZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgICBzdGFnZS5wdXRDZW50ZXIodGhpcy5yZWRCb3gsIDcwLCAwKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRleHQoXCJcIiwgXCIxMnB4IHB1enpsZXJcIiwgXCJibGFja1wiLCA4LCA4KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGdyb3VwKHRoaXMuYmx1ZUJveCwgdGhpcy5yZWRCb3gsIHRoaXMubWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5wb2ludGVyLnVwZGF0ZURyYWdBbmREcm9wKGRyYWdnYWJsZVNwcml0ZXMpO1xyXG5cclxuICAgICAgICBpZihoaXRUZXN0UmVjdGFuZ2xlKHRoaXMuYmx1ZUJveCwgdGhpcy5yZWRCb3gpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5jb250ZW50ID0gXCJDb2xsaXNpb24hXCJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuY29udGVudCA9IFwiTm8gY29sbGlzaW9uLi4uXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMudmlzaWJsZSl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnNjZW5lLnZpc2libGUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKGB1c2UgbW91c2UgYnV0dG9uIHRvIGRyYWcgaXRlbXMgYW5kIHRvIGNoZWNrIGZvciBjb2xsaXNpb24gYmV0d2VlbiB0aGVtYClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7dGV4dH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvVGV4dFwiO1xyXG5pbXBvcnQge3JlY3RhbmdsZUNvbGxpc2lvbn0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7cmVjdGFuZ2xlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IHtncm91cH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvR3JvdXBcIjtcclxuaW1wb3J0IHtkcmFnZ2FibGVTcHJpdGVzfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9EaXNwbGF5T2JqZWN0XCI7XHJcbmltcG9ydCB7bWFrZVBvaW50ZXJ9IGZyb20gXCIuLi9jdXN0b21QaXhpL3V0aWxzXCI7XHJcbmltcG9ydCB7Y2FudmFzfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyAgUmVjdGFuZ2xlUHVzaHtcclxuICAgIGNvbnN0cnVjdG9yKHN0YWdlKSB7XHJcbiAgICAgICAgdGhpcy5wb2ludGVyID0gbWFrZVBvaW50ZXIoY2FudmFzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ibHVlQm94ID0gcmVjdGFuZ2xlKDY0LCA2NCxcImJsdWVcIik7XHJcbiAgICAgICAgdGhpcy5ibHVlQm94LmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgc3RhZ2UucHV0Q2VudGVyKHRoaXMuYmx1ZUJveCwgLTcwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWRCb3ggPSByZWN0YW5nbGUoNjQsIDY0LCBcInJlZFwiICk7XHJcbiAgICAgICAgdGhpcy5yZWRCb3guZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgICBzdGFnZS5wdXRDZW50ZXIodGhpcy5yZWRCb3gsIDcwLCAwKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRleHQoXCJcIiwgXCIxMnB4IHB1enpsZXJcIiwgXCJibGFja1wiLCA4LCA4KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGdyb3VwKHRoaXMuYmx1ZUJveCwgdGhpcy5yZWRCb3gsIHRoaXMubWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5wb2ludGVyLnVwZGF0ZURyYWdBbmREcm9wKGRyYWdnYWJsZVNwcml0ZXMpO1xyXG5cclxuICAgICAgICBsZXQgY29sbGlzaW9uID0gcmVjdGFuZ2xlQ29sbGlzaW9uKHRoaXMuYmx1ZUJveCwgdGhpcy5yZWRCb3gpO1xyXG4gICAgICAgIGlmKGNvbGxpc2lvbikge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuY29udGVudCA9IGBDb2xsaXNpb24gJHtjb2xsaXNpb259YFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5jb250ZW50ID0gXCJObyBjb2xsaXNpb24uLi5cIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy52aXNpYmxlKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuc2NlbmUudmlzaWJsZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oYHVzZSBtb3VzZSB0byBkcmFnIHRoZSByZWQgYm94IGFuZCBwdXNoIHRoZSBibHVlIG9uZWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2dyb3VwfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9Hcm91cFwiO1xyXG5pbXBvcnQge3JvdGF0ZVBvaW50fSBmcm9tIFwiLi4vY3VzdG9tUGl4aS91dGlsc1wiO1xyXG5pbXBvcnQge2xpbmV9IGZyb20gXCIuLi9jdXN0b21QaXhpL0xpbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb3RhdGVBcm91bmRQb2ludCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1vdmluZ0xpbmUgPSBsaW5lKFwiYmxhY2tcIiwgNiwgODQsIDE4MCwgMzYwLCA0MDApO1xyXG4gICAgICAgIHRoaXMubW92aW5nTGluZS5hbmdsZUEgPSAwO1xyXG4gICAgICAgIHRoaXMubW92aW5nTGluZS5hbmdsZUIgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lID0gZ3JvdXAodGhpcy5tb3ZpbmdMaW5lKTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMubW92aW5nTGluZS5hbmdsZUEgKz0gMC4wMztcclxuICAgICAgICBsZXQgcm90YXRpbmdBID0gcm90YXRlUG9pbnQoODQsIDE4MCwgNDUsNDUsIHRoaXMubW92aW5nTGluZS5hbmdsZUEpO1xyXG4gICAgICAgIHRoaXMubW92aW5nTGluZS5heCA9IHJvdGF0aW5nQS54O1xyXG4gICAgICAgIHRoaXMubW92aW5nTGluZS5heSA9IHJvdGF0aW5nQS55O1xyXG5cclxuICAgICAgICB0aGlzLm1vdmluZ0xpbmUuYW5nbGVCICs9IDAuMDU7XHJcbiAgICAgICAgbGV0IHJvdGF0aW5nQiA9IHJvdGF0ZVBvaW50KDM2MCwgNDAwLCA0NSw0NSwgdGhpcy5tb3ZpbmdMaW5lLmFuZ2xlQik7XHJcbiAgICAgICAgdGhpcy5tb3ZpbmdMaW5lLmJ4ID0gcm90YXRpbmdCLng7XHJcbiAgICAgICAgdGhpcy5tb3ZpbmdMaW5lLmJ5ID0gcm90YXRpbmdCLnk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUudmlzaWJsZSA9IHRoaXMudmlzaWJsZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Z3JvdXB9IGZyb20gXCIuLi9jdXN0b21QaXhpL0dyb3VwXCI7XHJcbmltcG9ydCB7cm90YXRlU3ByaXRlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS91dGlsc1wiO1xyXG5pbXBvcnQge2NpcmNsZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvQ2lyY2xlXCI7XHJcbmltcG9ydCB7cmVjdGFuZ2xlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9SZWN0YW5nbGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb3RhdGVBcm91bmRTcHJpdGUge1xyXG4gICAgY29uc3RydWN0b3Ioc3RhZ2UpIHtcclxuICAgICAgICB0aGlzLmJveCA9IHJlY3RhbmdsZSg2NCwgNjQsIFwiZ3JheVwiKTtcclxuICAgICAgICBzdGFnZS5wdXRDZW50ZXIodGhpcy5ib3gpO1xyXG5cclxuICAgICAgICB0aGlzLmJhbGwgPSBjaXJjbGUoNjQsIFwiZ3JheVwiKTtcclxuICAgICAgICB0aGlzLmJveC5wdXRMZWZ0KHRoaXMuYmFsbCwtMTI4KTtcclxuICAgICAgICB0aGlzLmJhbGwuYW5nbGUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lID0gZ3JvdXAodGhpcy5ib3gsIHRoaXMuYmFsbCk7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKXtcclxuICAgICAgICB0aGlzLmJhbGwuYW5nbGUgKz0gMC4wNTtcclxuICAgICAgICByb3RhdGVTcHJpdGUodGhpcy5iYWxsLCB0aGlzLmJveCwgMTI4LCB0aGlzLmJhbGwuYW5nbGUpO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSB0aGlzLnZpc2libGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2tleWJvYXJkfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS91dGlsc1wiO1xyXG5pbXBvcnQge3RleHR9IGZyb20gXCIuLi9jdXN0b21QaXhpL1RleHRcIjtcclxuaW1wb3J0IHtncm91cH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvR3JvdXBcIjtcclxuaW1wb3J0IHttYWtlU291bmR9IGZyb20gXCIuLi9jdXN0b21QaXhpL1NvdW5kXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2V0dXBNdXNpYyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5tdXNpYyA9IG1ha2VTb3VuZChcInNyYy9zb3VuZHMvMTExLm1wM1wiLCB0aGlzLnNldHVwTXVzaWMuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMubXNnQSA9IHRleHQoXCJhIC0gc3RhcnQgbXVzaWNcIiwgXCIxNnB4IHB1enpsZXJcIiwgXCJibGFja1wiLCAxMiwgMTIpO1xyXG4gICAgICAgIHRoaXMubXNnQiA9IHRleHQoXCJiIC0gcGF1c2UgbXVzaWNcIiwgXCIxNnB4IHB1enpsZXJcIiwgXCJibGFja1wiLCAxMiwgMzApO1xyXG4gICAgICAgIHRoaXMubXNnQyA9IHRleHQoXCJjIC0gcmVzdGFydCBtdXNpY1wiLCBcIjE2cHggcHV6emxlclwiLCBcImJsYWNrXCIsIDEyLCA0OCk7XHJcbiAgICAgICAgdGhpcy5tc2dEID0gdGV4dChcImQgLSBzdGFydCBwb2ludCBjaGFuZ2VkXCIsIFwiMTZweCBwdXp6bGVyXCIsIFwiYmxhY2tcIiwgMTIsIDY2KTtcclxuICAgICAgICB0aGlzLm1zZ0UgPSB0ZXh0KFwiZSAtIHJlc3RhcnQgbXVzaWMgMnggc3BlZWRcIiwgXCIxNnB4IHB1enpsZXJcIiwgXCJibGFja1wiLCAxMiwgODQpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBncm91cCh0aGlzLm1zZ0EsIHRoaXMubXNnQiwgdGhpcy5tc2dDLCB0aGlzLm1zZ0QsIHRoaXMubXNnRSk7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tdXNpYy5wbGF5YmFja1JhdGUgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZih0aGlzLnZpc2libGUpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5zY2VuZS52aXNpYmxlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgdXNlIGhpbnRzIGZyb20gdGhlIGNhbnZhc2ApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5tdXNpYy5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXR1cE11c2ljKCkge1xyXG4gICAgICAgIHRoaXMubXVzaWMubG9vcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tdXNpYy5wYW4gPSAtMC44O1xyXG4gICAgICAgIHRoaXMubXVzaWMudm9sdW1lID0gMC4zO1xyXG4gICAgICAgIGxldCBhID0ga2V5Ym9hcmQoNjUpLFxyXG4gICAgICAgICAgICBiID0ga2V5Ym9hcmQoNjYpLFxyXG4gICAgICAgICAgICBjID0ga2V5Ym9hcmQoNjcpLFxyXG4gICAgICAgICAgICBkID0ga2V5Ym9hcmQoNjgpLFxyXG4gICAgICAgICAgICBlID0ga2V5Ym9hcmQoNjkpO1xyXG5cclxuICAgICAgICBhLnByZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubXVzaWMucGxheWluZyAmJiB0aGlzLnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubXVzaWMucGxheWJhY2tSYXRlID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXVzaWMucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYi5wcmVzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy52aXNpYmxlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubXVzaWMucGF1c2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGMucHJlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudmlzaWJsZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm11c2ljLnBsYXliYWNrUmF0ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm11c2ljLnJlc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGQucHJlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudmlzaWJsZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm11c2ljLnBsYXliYWNrUmF0ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm11c2ljLnBsYXlGcm9tKDEzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGUucHJlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudmlzaWJsZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm11c2ljLnBsYXliYWNrUmF0ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm11c2ljLnJlc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtncm91cH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvR3JvdXBcIjtcclxuaW1wb3J0IHtrZXlib2FyZCwgb3V0c2lkZUJvdW5kcywgc2hvb3R9IGZyb20gXCIuLi9jdXN0b21QaXhpL3V0aWxzXCI7XHJcbmltcG9ydCB7c3RhZ2V9IGZyb20gXCIuLi9jdXN0b21QaXhpL0Rpc3BsYXlPYmplY3RcIjtcclxuaW1wb3J0IHt0ZXh0fSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9UZXh0XCI7XHJcbmltcG9ydCB7cmVjdGFuZ2xlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IHtsaW5lfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9MaW5lXCI7XHJcbmltcG9ydCB7Y2lyY2xlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9DaXJjbGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUYW5rIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0YWdlKSB7XHJcbiAgICAgICAgdGhpcy50YW5rID0gdGhpcy5jcmVhdGVUYW5rKCk7XHJcbiAgICAgICAgc3RhZ2UucHV0Q2VudGVyKHRoaXMudGFuayk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRleHQoXCJTaG9vdCB0aGUgd2FsbFwiLCBcIjE2cHggcHV6emxlclwiLCBcImJsYWNrXCIsIDEyLCAxMik7XHJcbiAgICAgICAgdGhpcy5hbmdsZU1lc3NhZ2UgPSB0ZXh0KFwiXCIsIFwiMTZweCBwdXp6bGVyXCIsIFwiYmxhY2tcIiwgMTIsIDM2KTtcclxuICAgICAgICB0aGlzLnNjZW5lID0gZ3JvdXAodGhpcy50YW5rLCB0aGlzLm1lc3NhZ2UsIHRoaXMuYW5nbGVNZXNzYWdlLCB0aGlzLmJ1bGxldHMpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IHRoaXMuYnVsbGV0cy5maWx0ZXIoIGJ1bGxldCA9PiB7XHJcbiAgICAgICAgICAgIGJ1bGxldC54ICs9IGJ1bGxldC52eDtcclxuICAgICAgICAgICAgYnVsbGV0LnkgKz0gYnVsbGV0LnZ5O1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvbGxpc2lvbiA9IG91dHNpZGVCb3VuZHMoYnVsbGV0LCBzdGFnZS5sb2NhbEJvdW5kcyk7XHJcblxyXG4gICAgICAgICAgICBpZihjb2xsaXNpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5jb250ZW50ID0gYEhpdCB0aGUgJHtjb2xsaXNpb259YDtcclxuICAgICAgICAgICAgICAgIHN0YWdlLnJlbW92ZShidWxsZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnRhbmsucm90YXRpb24gKz0gdGhpcy50YW5rLnJvdGF0aW9uU3BlZWQ7XHJcblxyXG4gICAgICAgIGlmKHRoaXMudGFuay5tb3ZlRm9yd2FyZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhbmsuc3BlZWQgKz0gMC4xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFuay5zcGVlZCAqPSB0aGlzLnRhbmsuZnJpY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFuay5hY2NlbGVyYXRpb25YID0gdGhpcy50YW5rLnNwZWVkICogTWF0aC5jb3ModGhpcy50YW5rLnJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLnRhbmsuYWNjZWxlcmF0aW9uWSA9IHRoaXMudGFuay5zcGVlZCAqIE1hdGguc2luKHRoaXMudGFuay5yb3RhdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMudGFuay52eCA9IHRoaXMudGFuay5hY2NlbGVyYXRpb25YO1xyXG4gICAgICAgIHRoaXMudGFuay52eSA9IHRoaXMudGFuay5hY2NlbGVyYXRpb25ZO1xyXG5cclxuICAgICAgICB0aGlzLnRhbmsueCArPSB0aGlzLnRhbmsudng7XHJcbiAgICAgICAgdGhpcy50YW5rLnkgKz0gdGhpcy50YW5rLnZ5O1xyXG5cclxuICAgICAgICB0aGlzLmFuZ2xlTWVzc2FnZS5jb250ZW50ID0gYEFuZ2xlOiAke01hdGguZmxvb3IodGhpcy50YW5rLnJvdGF0aW9uICogMTApLzEwfWA7XHJcblxyXG4gICAgICAgIGlmKHRoaXMudmlzaWJsZSl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnNjZW5lLnZpc2libGUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKGB1c2Uga2V5Ym9hcmQgYXJyb3dzIHRvIG1vdmUgYW5kIFwic3BhY2VcIiB0byBzaG9vdGApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVGFuayAoKSB7XHJcbiAgICAgICAgbGV0IGJveCA9IHJlY3RhbmdsZSgzMiwzMiwgXCJncmF5XCIsIFwiYmxhY2tcIiwgMik7XHJcbiAgICAgICAgbGV0IHR1cnJldCA9IGxpbmUoXCJyZWRcIiwgNCwwLDAsMzIsMCk7XHJcbiAgICAgICAgdHVycmV0LnNldFBvc2l0aW9uKDE2LCAxNik7XHJcblxyXG4gICAgICAgIGxldCB0YW5rID0gZ3JvdXAoYm94LCB0dXJyZXQpO1xyXG5cclxuICAgICAgICB0YW5rLnZ4ID0gMDtcclxuICAgICAgICB0YW5rLnZ5ID0gMDtcclxuICAgICAgICB0YW5rLmFjY2VsZXJhdGlvblggPSAwLjA1O1xyXG4gICAgICAgIHRhbmsuYWNjZWxlcmF0aW9uWSA9IDAuMDU7XHJcblxyXG4gICAgICAgIHRhbmsucm90YXRpb25TcGVlZCA9IDA7XHJcbiAgICAgICAgdGFuay5tb3ZlRm9yd2FyZCA9IGZhbHNlO1xyXG4gICAgICAgIHRhbmsuZnJpY3Rpb24gPSAwLjk2O1xyXG4gICAgICAgIHRhbmsuc3BlZWQgPSAwO1xyXG5cclxuICAgICAgICBsZXQgbGVmdEFycm93ID0ga2V5Ym9hcmQoMzcpLFxyXG4gICAgICAgICAgICByaWdodEFycm93ID0ga2V5Ym9hcmQoMzkpLFxyXG4gICAgICAgICAgICB1cEFycm93ID0ga2V5Ym9hcmQoMzgpLFxyXG4gICAgICAgICAgICBzcGFjZSA9IGtleWJvYXJkKDMyKTtcclxuXHJcbiAgICAgICAgbGVmdEFycm93LnByZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0YW5rLnJvdGF0aW9uU3BlZWQgPSAtMC4xO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGVmdEFycm93LnJlbGVhc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFyaWdodEFycm93LmlzRG93bil7XHJcbiAgICAgICAgICAgICAgICB0YW5rLnJvdGF0aW9uU3BlZWQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmlnaHRBcnJvdy5wcmVzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGFuay5yb3RhdGlvblNwZWVkID0gMC4xO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmlnaHRBcnJvdy5yZWxlYXNlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZighbGVmdEFycm93LmlzRG93bil7XHJcbiAgICAgICAgICAgICAgICB0YW5rLnJvdGF0aW9uU3BlZWQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdXBBcnJvdy5wcmVzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGFuay5tb3ZlRm9yd2FyZCA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdXBBcnJvdy5yZWxlYXNlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0YW5rLm1vdmVGb3J3YXJkID0gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3BhY2UucHJlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNob290KHRhbmssIHRhbmsucm90YXRpb24sIDMyLCA3LCB0aGlzLmJ1bGxldHMsICgpID0+IGNpcmNsZSg4LCBcInJlZFwiKSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRhbms7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHthc3NldHN9IGZyb20gXCIuLi9jdXN0b21QaXhpL2Fzc2V0c1wiO1xyXG5pbXBvcnQge3N0YWdlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9EaXNwbGF5T2JqZWN0XCI7XHJcbmltcG9ydCB7c3ByaXRlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9EaXNwbGF5T2JqZWN0XCI7XHJcbmltcG9ydCB7dGV4dH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvVGV4dFwiO1xyXG5pbXBvcnQge2hpdFRlc3RSZWN0YW5nbGV9IGZyb20gXCIuLi9jdXN0b21QaXhpL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQge3JlY3RhbmdsZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvUmVjdGFuZ2xlXCI7XHJcbmltcG9ydCB7Z3JvdXB9IGZyb20gXCIuLi9jdXN0b21QaXhpL0dyb3VwXCI7XHJcbmltcG9ydCB7cmFuZG9tSW50LCBjb250YWluLCBrZXlib2FyZH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvdXRpbHNcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVHJlYXN1cmVIdW50ZXIge1xyXG4gICAgY29uc3RydWN0b3Ioc3RhZ2Upe1xyXG4gICAgICAgIHRoaXMuZ2FtZVNjZW5lID0gdGhpcy5jcmVhdGVHYW1lU2NlbmUoc3RhZ2UpO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJTY2VuZSA9IHRoaXMuY3JlYXRlR2FtZU92ZXJTY2VuZShzdGFnZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBncm91cCh0aGlzLmdhbWVTY2VuZSwgdGhpcy5nYW1lT3ZlclNjZW5lKTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWRkUGxheWVyTW92ZW1lbnQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlR2FtZVNjZW5lKCkge1xyXG4gICAgICAgIHRoaXMuZHVuZ2VvbiA9IHNwcml0ZShhc3NldHNbXCJkdW5nZW9uLnBuZ1wiXSk7XHJcbiAgICAgICAgdGhpcy5kdW5nZW9uLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLmV4aXQgPSBzcHJpdGUoYXNzZXRzW1wiZG9vci5wbmdcIl0pO1xyXG4gICAgICAgIHRoaXMuZXhpdC5zZXRQb3NpdGlvbigzMiwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyID0gc3ByaXRlKGFzc2V0c1tcImV4cGxvcmVyLnBuZ1wiXSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UG9zaXRpb24oNjAsIHN0YWdlLmhhbGZIZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLnRyZWFzdXJlID0gc3ByaXRlKGFzc2V0c1tcInRyZWFzdXJlLnBuZ1wiXSk7XHJcbiAgICAgICAgdGhpcy50cmVhc3VyZS5zZXRQb3NpdGlvbihzdGFnZS53aWR0aCAtIDYwLCBzdGFnZS5oYWxmSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgbGV0IGdhbWVTY2VuZSA9IGdyb3VwKHRoaXMuZHVuZ2VvbiwgdGhpcy5leGl0LCB0aGlzLnBsYXllciwgdGhpcy50cmVhc3VyZSk7XHJcblxyXG4gICAgICAgIGxldCBudW1iZXJPZkVuZW1pZXMgPSA2LFxyXG4gICAgICAgICAgICBzcGFjaW5nID0gNDgsXHJcbiAgICAgICAgICAgIHhPZmZzZXQgPSAxNTAsXHJcbiAgICAgICAgICAgIHNwZWVkID0gMixcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gW107XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkVuZW1pZXM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZW5lbXkgPSBzcHJpdGUoYXNzZXRzW1wiYmxvYi5wbmdcIl0pO1xyXG4gICAgICAgICAgICBsZXQgeCA9IHNwYWNpbmcgKiBpICsgeE9mZnNldDtcclxuICAgICAgICAgICAgbGV0IHkgPSByYW5kb21JbnQoMCwgc3RhZ2UuaGVpZ2h0IC0gZW5lbXkuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGVuZW15LnggPSB4O1xyXG4gICAgICAgICAgICBlbmVteS55ID0geTtcclxuXHJcbiAgICAgICAgICAgIGVuZW15LnZ5ID0gc3BlZWQgKiBkaXJlY3Rpb247XHJcblxyXG4gICAgICAgICAgICBkaXJlY3Rpb24gKj0gLTE7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChlbmVteSk7XHJcbiAgICAgICAgICAgIGdhbWVTY2VuZS5hZGRDaGlsZChlbmVteSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb3V0ZXJCYXIgPSByZWN0YW5nbGUoMTI4LCA4LCBcImJsYWNrXCIpLFxyXG4gICAgICAgICAgICBpbm5lckJhciA9IHJlY3RhbmdsZSgxMjgsIDgsIFwicmVkXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmhlYWx0aEJhciA9IGdyb3VwKG91dGVyQmFyLCBpbm5lckJhcik7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhCYXIuaW5uZXIgPSBpbm5lckJhcjtcclxuXHJcbiAgICAgICAgdGhpcy5oZWFsdGhCYXIueCA9IHN0YWdlLndpZHRoIC0gMTY0O1xyXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLnkgPSA0O1xyXG5cclxuICAgICAgICBnYW1lU2NlbmUuYWRkQ2hpbGQodGhpcy5oZWFsdGhCYXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gZ2FtZVNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUdhbWVPdmVyU2NlbmUoKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gdGV4dChcIkdhbWUgT3ZlciFcIiwgXCI2NHB4IEZ1dHVyYVwiLCBcImJsYWNrXCIsIDIwLCAyMCk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLnggPSAxMjA7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLnkgPSBzdGFnZS5oZWlnaHQgLyAyIC0gNjQ7XHJcblxyXG4gICAgICAgIGxldCBnYW1lT3ZlclNjZW5lID0gZ3JvdXAodGhpcy5tZXNzYWdlKTtcclxuICAgICAgICBnYW1lT3ZlclNjZW5lLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdhbWVPdmVyU2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUGxheWVyTW92ZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy51cEFycm93ID0ga2V5Ym9hcmQoMzgpO1xyXG5cclxuICAgICAgICB0aGlzLnVwQXJyb3cucHJlc3MgPSAoKSA9PntcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudnkgPSAtMztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnVwQXJyb3cucmVsZWFzZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy5kb3duQXJyb3cuaXNVcCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci52eSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmRvd25BcnJvdyA9IGtleWJvYXJkKDQwKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb3duQXJyb3cucHJlc3MgPSAoKSA9PntcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudnkgPSAzO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZG93bkFycm93LnJlbGVhc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudXBBcnJvdy5pc1VwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnZ5ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubGVmdEFycm93ID0ga2V5Ym9hcmQoMzcpO1xyXG5cclxuICAgICAgICB0aGlzLmxlZnRBcnJvdy5wcmVzcyA9ICgpID0+e1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci52eCA9IC0zO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubGVmdEFycm93LnJlbGVhc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucmlnaHRBcnJvdy5pc1VwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnZ4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucmlnaHRBcnJvdyA9IGtleWJvYXJkKDM5KTtcclxuXHJcbiAgICAgICAgdGhpcy5yaWdodEFycm93LnByZXNzID0gKCkgPT57XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnZ4ID0gMztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnJpZ2h0QXJyb3cucmVsZWFzZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy5sZWZ0QXJyb3cuaXNVcCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci52eCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBjb250YWluKHRoaXMucGxheWVyLCB7eDozMiwgeTogMTYsIHdpZHRoOiBzdGFnZS53aWR0aCAtIDMyLCBoZWlnaHQ6IHN0YWdlLmhlaWdodCAtIDMyfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVySGl0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzLmZvckVhY2goIGVuZW15ID0+IHtcclxuICAgICAgICAgICAgZW5lbXkueCArPSBlbmVteS52eDtcclxuICAgICAgICAgICAgZW5lbXkueSArPSBlbmVteS52eTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbmVteUhpdHNFZGdlcyA9IGNvbnRhaW4oZW5lbXksIHt4OjMyLCB5OiAxNiwgd2lkdGg6IHN0YWdlLndpZHRoIC0gMzIsIGhlaWdodDogc3RhZ2UuaGVpZ2h0IC0gMzJ9KTtcclxuXHJcbiAgICAgICAgICAgIGlmKGVuZW15SGl0c0VkZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBlbmVteS52eSAqPSAtMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoaGl0VGVzdFJlY3RhbmdsZSh0aGlzLnBsYXllciwgZW5lbXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckhpdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMucGxheWVySGl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmFscGhhID0gMC41O1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5pbm5lci53aWR0aCAtPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmFscGhhID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCBoaXRUZXN0UmVjdGFuZ2xlKHRoaXMucGxheWVyLCB0aGlzLnRyZWFzdXJlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyZWFzdXJlLnggPSB0aGlzLnBsYXllci54ICsgODtcclxuICAgICAgICAgICAgdGhpcy50cmVhc3VyZS55ID0gdGhpcy5wbGF5ZXIueSArIDg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihoaXRUZXN0UmVjdGFuZ2xlKHRoaXMudHJlYXN1cmUsIHRoaXMuZXhpdCkpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lU2NlbmUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyU2NlbmUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5jb250ZW50ID0gXCJZb3Ugd29uIVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5oZWFsdGhCYXIuaW5uZXIud2lkdGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVNjZW5lLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlclNjZW5lLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuY29udGVudCA9IFwiWW91IGxvc3QhXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBsYXllci54ICs9IHRoaXMucGxheWVyLnZ4O1xyXG4gICAgICAgIHRoaXMucGxheWVyLnkgKz0gdGhpcy5wbGF5ZXIudnk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMudmlzaWJsZSl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnNjZW5lLnZpc2libGUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKGB1c2Uga2V5Ym9hcmQgYXJyb3dzIHRvIG1vdmUsIGRyYWcgdHJlYXN1cmUgdG8gdGhlIGV4aXQsIGF2b2lkIHRvdWNoaW5nIGVuZW1pZXNgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=