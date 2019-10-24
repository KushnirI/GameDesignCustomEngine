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
/*! exports provided: DisplayObject, sprite, button, stage, buttons, draggableSprites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayObject", function() { return DisplayObject; });
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

function sprite(source, x, y) {
    let sprite = new Sprite(source, x, y);
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
        console.log("loadSound called - see Chapter 10 for details");
    }
};

/***/ }),

/***/ "./src/customPixi/collision.js":
/*!*************************************!*\
  !*** ./src/customPixi/collision.js ***!
  \*************************************/
/*! exports provided: hitTestPoint, hitTestCircle, circleCollision, movingCircleCollision, multipleCircleCollision, hitTestRectangle, rectangleCollision */
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
/*! exports provided: frame, frames, remove, randomInt, contain, capturePreviousPositions, keyboard, makePointer, distance, followEase, followConstant, angle, rotateSprite, rotatePoint, checkParentVisibility, shoot, outsideBounds, grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Group */ "./src/customPixi/Group.js");


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
/* harmony import */ var _scenes_movingCirclesCollision__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./scenes/movingCirclesCollision */ "./src/scenes/movingCirclesCollision.js");
/* harmony import */ var _scenes_movingAndStatCircles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./scenes/movingAndStatCircles */ "./src/scenes/movingAndStatCircles.js");
/* harmony import */ var _scenes_rectanglePush__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./scenes/rectanglePush */ "./src/scenes/rectanglePush.js");























let { canvas, ctx } = Object(_customPixi_makeCanvas__WEBPACK_IMPORTED_MODULE_2__["makeCanvas"])(512, 512);
_customPixi_assets__WEBPACK_IMPORTED_MODULE_1__["assets"].load(["src/img/treasureHunter.json", "src/fonts/puzzler.otf", "src/img/marbles.png", "src/img/button.json", "src/fonts/puzzler.otf", "src/img/avengers.json"]).then(() => start());

const scenesConfig = [{ label: "Acceleration and friction ball", id: "accelerationAndFrictionBall", constructor: _scenes_accelerationAndFrictionBall__WEBPACK_IMPORTED_MODULE_5__["AccelerationAndFrictionBall"] }, { label: "Ball with gravity", id: "ballWithGravity", constructor: _scenes_ballWithGravity__WEBPACK_IMPORTED_MODULE_6__["BallWithGravity"] }, { label: "Constant speed following", id: "constantSpeedFollowing", constructor: _scenes_constantSpeedFollowing__WEBPACK_IMPORTED_MODULE_7__["ConstantSpeedFollowing"] }, { label: "Rotate around a sprite", id: "rotateAroundSprite", constructor: _scenes_rotateAroundSprite__WEBPACK_IMPORTED_MODULE_8__["RotateAroundSprite"] }, { label: "Rotate around a point", id: "rotateAroundPoint", constructor: _scenes_rotateAroundPoint__WEBPACK_IMPORTED_MODULE_9__["RotateAroundPoint"] }, { label: "Create tank", id: "tank", constructor: _scenes_tank__WEBPACK_IMPORTED_MODULE_10__["Tank"] }, { label: "Create button", id: "createButton", constructor: _scenes_createButton__WEBPACK_IMPORTED_MODULE_11__["CreateButton"] }, { label: "Interactive sprite", id: "interactiveSprite", constructor: _scenes_interactiveSprite__WEBPACK_IMPORTED_MODULE_12__["InteractiveSprite"] }, { label: "Drag and drop", id: "dragAndDrop", constructor: _scenes_dragAndDrop__WEBPACK_IMPORTED_MODULE_13__["DragAndDrop"] }, { label: "Treasure hunter", id: "treasureHunter", constructor: _scenes_treasureHunter__WEBPACK_IMPORTED_MODULE_14__["TreasureHunter"] }, { label: "Collision between point and shape", id: "pointAndShapeCollision", constructor: _scenes_pointAndShapeCollision__WEBPACK_IMPORTED_MODULE_15__["PointAndShapeCollision"] }, { label: "Collision between rectangles", id: "rectCollision", constructor: _scenes_rectCollision__WEBPACK_IMPORTED_MODULE_16__["RectCollision"] }, { label: "Rectangle push", id: "rectanglePush", constructor: _scenes_rectanglePush__WEBPACK_IMPORTED_MODULE_20__["RectanglePush"] }, { label: "Collision between circles", id: "circleCollision", constructor: _scenes_circleCollision__WEBPACK_IMPORTED_MODULE_17__["CircleCollision"] }, { label: "Moving circles collision", id: "movingCirclesCollision", constructor: _scenes_movingCirclesCollision__WEBPACK_IMPORTED_MODULE_18__["MovingCirclesCollision"] }, { label: "Moving and stat circles collision", id: "movingAndStatCircles", constructor: _scenes_movingAndStatCircles__WEBPACK_IMPORTED_MODULE_19__["MovingAndStatCircles"] }];

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
        this.visible = true;
    }

    update() {
        this.pointer.updateDragAndDrop(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_3__["draggableSprites"]);

        if (Object(_customPixi_collision__WEBPACK_IMPORTED_MODULE_1__["hitTestCircle"])(this.blueBall, this.redBall)) {
            this.message.content = "Collision!";
        } else {
            this.message.content = "No collision...";
        }

        this.scene.visible = this.visible;
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
                this.visible = true;
        }

        update() {
                Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["followConstant"])(this.c2, this.pointer, 3);

                this.connection.ax = this.c1.centerX;
                this.connection.ay = this.c1.centerY;
                this.connection.bx = this.c2.centerX;
                this.connection.by = this.c2.centerY;

                let distanceBetweenCircles = Object(_customPixi_utils__WEBPACK_IMPORTED_MODULE_1__["distance"])(this.c1, this.c2);

                this.message.content = `Distance :${Math.floor(distanceBetweenCircles)}`;

                this.scene.visible = this.visible;
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
        this.visible = true;
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

        this.scene.visible = this.visible;
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
        this.visible = true;
    }

    update() {
        this.pointer.updateDragAndDrop(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_2__["draggableSprites"]);
        this.scene.visible = this.visible;
    }

    addDraggable(...sprites) {
        sprites.forEach(sprite => {
            sprite.draggable = true;
        });
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
        this.visible = true;
    }

    update() {
        _index__WEBPACK_IMPORTED_MODULE_2__["canvas"].style.cursor = "auto";
        this.ball.update(this.pointer, _index__WEBPACK_IMPORTED_MODULE_2__["canvas"]);
        if (this.ball.state === "over" || this.ball.state === "down") {
            if (this.ball.parent !== undefined) {
                _index__WEBPACK_IMPORTED_MODULE_2__["canvas"].style.cursor = "pointer";
            }
        }
        this.scene.visible = this.visible;
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
        this.visible = true;
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

        this.scene.visible = this.visible;
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
        this.visible = true;
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

        this.scene.visible = this.visible;
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
        this.visible = true;
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

        this.scene.visible = this.visible;
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
        this.visible = true;
    }

    update() {
        this.pointer.updateDragAndDrop(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__["draggableSprites"]);

        if (Object(_customPixi_collision__WEBPACK_IMPORTED_MODULE_1__["hitTestRectangle"])(this.blueBox, this.redBox)) {
            this.message.content = "Collision!";
        } else {
            this.message.content = "No collision...";
        }

        this.scene.visible = this.visible;
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
        this.visible = true;
    }

    update() {
        this.pointer.updateDragAndDrop(_customPixi_DisplayObject__WEBPACK_IMPORTED_MODULE_4__["draggableSprites"]);

        let collision = Object(_customPixi_collision__WEBPACK_IMPORTED_MODULE_1__["rectangleCollision"])(this.blueBox, this.redBox);
        if (collision) {
            this.message.content = `Collision ${collision}`;
        } else {
            this.message.content = "No collision...";
        }

        this.scene.visible = this.visible;
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
        this.visible = true;
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

        this.scene.visible = this.visible;
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

                this.scene.visible = this.visible;
        }

}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbVBpeGkvQ2lyY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21QaXhpL0Rpc3BsYXlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbVBpeGkvR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbVBpeGkvTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tUGl4aS9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbVBpeGkvVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tUGl4aS9hc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbVBpeGkvY29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21QaXhpL21ha2VDYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbVBpeGkvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b21QaXhpL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2FjY2VsZXJhdGlvbkFuZEZyaWN0aW9uQmFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2FsbFNjZW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2JhbGxXaXRoR3Jhdml0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2NpcmNsZUNvbGxpc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2NvbnN0YW50U3BlZWRGb2xsb3dpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9jcmVhdGVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9kcmFnQW5kRHJvcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2ludGVyYWN0aXZlU3ByaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbW92aW5nQW5kU3RhdENpcmNsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tb3ZpbmdDaXJjbGVzQ29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvcG9pbnRBbmRTaGFwZUNvbGxpc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3JlY3RDb2xsaXNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9yZWN0YW5nbGVQdXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvcm90YXRlQXJvdW5kUG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9yb3RhdGVBcm91bmRTcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy90YW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdHJlYXN1cmVIdW50ZXIuanMiXSwibmFtZXMiOlsiQ2lyY2xlIiwiRGlzcGxheU9iamVjdCIsImNvbnN0cnVjdG9yIiwiZGlhbWV0ZXIiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsIngiLCJ5IiwiY2lyY3VsYXIiLCJPYmplY3QiLCJhc3NpZ24iLCJtYXNrIiwicmVuZGVyIiwiY3R4IiwiYmVnaW5QYXRoIiwiYXJjIiwicmFkaXVzIiwicGl2b3RYIiwiTWF0aCIsIlBJIiwic3Ryb2tlIiwiZmlsbCIsImNsaXAiLCJjaXJjbGUiLCJzcHJpdGUiLCJzdGFnZSIsImFkZENoaWxkIiwid2lkdGgiLCJoZWlnaHQiLCJyb3RhdGlvbiIsImFscGhhIiwidmlzaWJsZSIsInNjYWxlWCIsInNjYWxlWSIsInBpdm90WSIsInZ4IiwidnkiLCJfbGF5ZXIiLCJwYXJlbnQiLCJ1bmRlZmluZWQiLCJjaGlsZHJlbiIsInNoYWRvdyIsInNoYWRvd0NvbG9yIiwic2hhZG93T2Zmc2V0WCIsInNoYWRvd09mZnNldFkiLCJzaGFkb3dCbHVyIiwiYmxlbmRNb2RlIiwiZnJhbWVzIiwibG9vcCIsIl9jdXJyZW50RnJhbWUiLCJwbGF5aW5nIiwiX2RyYWdnYWJsZSIsIl9jaXJjdWxhciIsIl9pbnRlcmFjdGl2ZSIsImd4IiwiZ3kiLCJsYXllciIsInZhbHVlIiwic29ydCIsImEiLCJiIiwicmVtb3ZlQ2hpbGQiLCJwdXNoIiwic3BsaWNlIiwiaW5kZXhPZiIsIkVycm9yIiwiaGFsZldpZHRoIiwiaGFsZkhlaWdodCIsImNlbnRlclgiLCJjZW50ZXJZIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsImxvY2FsQm91bmRzIiwiZ2xvYmFsQm91bmRzIiwiZW1wdHkiLCJsZW5ndGgiLCJwdXRDZW50ZXIiLCJ4T2Zmc2V0IiwieU9mZnNldCIsInB1dFRvcCIsInB1dFJpZ2h0IiwicHV0Qm90dG9tIiwicHV0TGVmdCIsInN3YXBDaGlsZHJlbiIsImNoaWxkMSIsImNoaWxkMiIsImluZGV4MSIsImluZGV4MiIsImNoaWxkSW5kZXgiLCJhZGQiLCJzcHJpdGVzVG9BZGQiLCJmb3JFYWNoIiwicmVtb3ZlIiwic3ByaXRlc1RvUmVtb3ZlIiwiY3VycmVudEZyYW1lIiwiZGVmaW5lUHJvcGVydGllcyIsImdldCIsInNldCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJkcmFnZ2FibGUiLCJkcmFnZ2FibGVTcHJpdGVzIiwiaW50ZXJhY3JpdmUiLCJtYWtlSW50ZXJhY3RpdmUiLCJidXR0b25zIiwibyIsInByZXNzIiwicmVsZWFzZSIsIm92ZXIiLCJvdXQiLCJ0YXAiLCJzdGF0ZSIsImFjdGlvbiIsInByZXNzZWQiLCJob3Zlck92ZXIiLCJ1cGRhdGUiLCJwb2ludGVyIiwiY2FudmFzIiwiaGl0IiwiaGl0VGVzdFNwcml0ZSIsImlzVXAiLCJCdXR0b24iLCJnb3RvQW5kU3RvcCIsImlzRG93biIsInRhcHBlZCIsIlNwcml0ZSIsInNvdXJjZSIsIkltYWdlIiwiY3JlYXRlRnJvbUltYWdlIiwiZnJhbWUiLCJjcmVhdGVGcm9tQXRsYXMiLCJpbWFnZSIsImRhdGEiLCJjcmVhdGVGcm9tVGlsZXNldCIsImNyZWF0ZUZyb21UaWxlc2V0RnJhbWVzIiwiQXJyYXkiLCJjcmVhdGVGcm9tQXRsYXNGcmFtZXMiLCJjcmVhdGVGcm9tSW1hZ2VzIiwic291cmNlWCIsInNvdXJjZVkiLCJzb3VyY2VXaWR0aCIsInNvdXJjZUhlaWdodCIsInRpbGVzZXRGcmFtZSIsInciLCJoIiwiZnJhbWVOdW1iZXIiLCJkcmF3SW1hZ2UiLCJidXR0b24iLCJHcm91cCIsInNwcml0ZXNUb0dyb3VwIiwiY2FsY3VsYXRlU2l6ZSIsIl9uZXdXaWR0aCIsIl9uZXdIZWlnaHQiLCJjaGlsZCIsImdyb3VwIiwiTGluZSIsImF4IiwiYXkiLCJieCIsImJ5IiwibGluZUpvaW4iLCJtb3ZlVG8iLCJsaW5lVG8iLCJsaW5lIiwiUmVjdGFuZ2xlIiwicmVjdCIsInJlY3RhbmdsZSIsIlRleHQiLCJjb250ZW50IiwiZm9udCIsInRleHRCYXNlbGluZSIsInN0cm9rZVRleHQiLCJtZWFzdXJlVGV4dCIsInRyYW5zbGF0ZSIsImZpbGxUZXh0IiwidGV4dCIsImFzc2V0cyIsInRvTG9hZCIsImxvYWRlZCIsImltYWdlRXh0ZW5zaW9ucyIsImZvbnRFeHRlbnNpb25zIiwianNvbkV4dGVuc2lvbnMiLCJhdWRpb0V4dGVuc2lvbnMiLCJsb2FkIiwic291cmNlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwibG9hZEhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwiZXh0ZW5zaW9uIiwic3BsaXQiLCJwb3AiLCJsb2FkSW1hZ2UiLCJsb2FkRm9udCIsImxvYWRKc29uIiwibG9hZFNvdW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNyYyIsImZvbnRGYW1pbHkiLCJuZXdTdHlsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImZvbnRGYWNlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImhlYWQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJvbmxvYWQiLCJldmVudCIsInN0YXR1cyIsImZpbGUiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJuYW1lIiwiY3JlYXRlVGlsZXNldEZyYW1lcyIsInNlbmQiLCJiYXNlVXJsIiwicmVwbGFjZSIsImltYWdlU291cmNlIiwibWV0YSIsImltYWdlTG9hZEhhbmRsZXIiLCJrZXlzIiwiaGl0VGVzdFBvaW50IiwicG9pbnQiLCJzaGFwZSIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsIm1hZ25pdHVkZSIsInNxcnQiLCJoaXRUZXN0Q2lyY2xlIiwiYzEiLCJjMiIsImdsb2JhbCIsImNvbWJpbmVkUmFkaWkiLCJjaXJjbGVDb2xsaXNpb24iLCJib3VuY2UiLCJvdmVybGFwIiwiZHgiLCJkeSIsInMiLCJxdWFudHVtUGFkZGluZyIsImJvdW5jZU9mZlN1cmZhY2UiLCJtb3ZpbmdDaXJjbGVDb2xsaXNpb24iLCJ4U2lkZSIsInlTaWRlIiwicDFBIiwicDFCIiwicDJBIiwicDJCIiwibWFzcyIsInZ4SGFsZiIsImFicyIsInZ5SGFsZiIsImx4IiwibHkiLCJkcDEiLCJkcDIiLCJkcDMiLCJkcDQiLCJtdWx0aXBsZUNpcmNsZUNvbGxpc2lvbiIsImFycmF5T2ZDaXJjbGVzIiwiaSIsImoiLCJoaXRUZXN0UmVjdGFuZ2xlIiwicjEiLCJyMiIsImNvbWJpbmVkSGFsZldpZHRocyIsImNvbWJpbmVkSGFsZkhlaWdodHMiLCJyZWN0YW5nbGVDb2xsaXNpb24iLCJjb2xsaXNpb24iLCJvdmVybGFwWCIsIm92ZXJsYXBZIiwicDEiLCJwMiIsIm1ha2VDYW52YXMiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdHlsZSIsImJvZHkiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0IiwiZGlzcGxheVNwcml0ZSIsInNhdmUiLCJyb3RhdGUiLCJnbG9iYWxBbHBoYSIsInNjYWxlIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwicmVzdG9yZSIsInJlbmRlcldpdGhJbnRlcnBvbGF0aW9uIiwibGFnT2Zmc2V0IiwicHJldmlvdXNYIiwicmVuZGVyWCIsInByZXZpb3VzWSIsInJlbmRlclkiLCJvYmoiLCJhcnJheU9mUG9zaXRpb25zIiwicmFuZG9tSW50IiwibWF4IiwibWluIiwiZmxvb3IiLCJyYW5kb20iLCJjb250YWluIiwiYm91bmRzIiwiY2FsbGJhY2siLCJjYXB0dXJlUHJldmlvdXNQb3NpdGlvbnMiLCJzZXRQcmV2aW91c1Bvc2l0aW9uIiwia2V5Ym9hcmQiLCJrZXlDb2RlIiwia2V5IiwiY29kZSIsImRvd25IYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJ1cEhhbmRsZXIiLCJ3aW5kb3ciLCJiaW5kIiwibWFrZVBvaW50ZXIiLCJlbGVtZW50IiwiX3giLCJfeSIsImRyYWdTcHJpdGUiLCJkcmFnT2Zmc2V0WCIsImRyYWdPZmZzZXRZIiwibW92ZUhhbmRsZXIiLCJ0YXJnZXQiLCJwYWdlWCIsIm9mZnNldExlZnQiLCJwYWdlWSIsIm9mZnNldFRvcCIsInRvdWNobW92ZUhhbmRsZXIiLCJ0YXJnZXRUb3VjaGVzIiwiZG93blRpbWUiLCJEYXRlIiwibm93IiwidG91Y2hzdGFydEhhbmRsZXIiLCJlbGFwc2VkVGltZSIsInRvdWNoZW5kSGFuZGxlciIsImRpc3RhbmNlIiwidXBkYXRlRHJhZ0FuZERyb3AiLCJjaGVja1BhcmVudFZpc2liaWxpdHkiLCJzb21lIiwiY3Vyc29yIiwidG91Y2hBY3Rpb24iLCJzMSIsInMyIiwiZm9sbG93RWFzZSIsImZvbGxvd2VyIiwibGVhZGVyIiwic3BlZWQiLCJmb2xsb3dDb25zdGFudCIsImFuZ2xlIiwiYXRhbjIiLCJyb3RhdGVTcHJpdGUiLCJyb3RhdGluZ1Nwcml0ZSIsImNlbnRlclNwcml0ZSIsImNvcyIsInNpbiIsInJvdGF0ZVBvaW50IiwicG9pbnRYIiwicG9pbnRZIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwiY3VycmVudCIsInNob290Iiwic2hvb3RlciIsIm9mZnNldEZyb21DZW50ZXIiLCJidWxsZXRTcGVlZCIsImJ1bGxldEFycmF5IiwiYnVsbGV0U3ByaXRlIiwiYnVsbGV0Iiwib3V0c2lkZUJvdW5kcyIsImV4dHJhIiwiZ3JpZCIsImNvbHVtbnMiLCJyb3dzIiwiY2VsbFdpZHRoIiwiY2VsbEhlaWdodCIsImNlbnRlckNlbGwiLCJtYWtlU3ByaXRlIiwiY29udGFpbmVyIiwiY3JlYXRlR3JpZCIsInRoZW4iLCJzdGFydCIsInNjZW5lc0NvbmZpZyIsImxhYmVsIiwiaWQiLCJBY2NlbGVyYXRpb25BbmRGcmljdGlvbkJhbGwiLCJCYWxsV2l0aEdyYXZpdHkiLCJDb25zdGFudFNwZWVkRm9sbG93aW5nIiwiUm90YXRlQXJvdW5kU3ByaXRlIiwiUm90YXRlQXJvdW5kUG9pbnQiLCJUYW5rIiwiQ3JlYXRlQnV0dG9uIiwiSW50ZXJhY3RpdmVTcHJpdGUiLCJEcmFnQW5kRHJvcCIsIlRyZWFzdXJlSHVudGVyIiwiUG9pbnRBbmRTaGFwZUNvbGxpc2lvbiIsIlJlY3RDb2xsaXNpb24iLCJSZWN0YW5nbGVQdXNoIiwiQ2lyY2xlQ29sbGlzaW9uIiwiTW92aW5nQ2lyY2xlc0NvbGxpc2lvbiIsIk1vdmluZ0FuZFN0YXRDaXJjbGVzIiwic2NlbmVzTWFuYWdlciIsIlNjZW5lc01hbmFnZXIiLCJzY2VuZVNlbGVjdG9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJvbmNoYW5nZSIsInNlbGVjdGVkU2NlbmUiLCJoaWRlQWxsIiwic2hvd1NjZW5lIiwiZ2V0U2NlbmVVcGRhdGVGdW5jIiwiZ2FtZUxvb3AiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiYWxsIiwiYWNjZWxlcmF0aW9uWCIsImFjY2VsZXJhdGlvblkiLCJmcmljdGlvblgiLCJmcmljdGlvblkiLCJzY2VuZSIsInNjZW5lc0NvbmZpZ3MiLCJzY2VuZXNTZWxlY3RvciIsIl9hbGxTY2VuZXMiLCJzY2VuZUNvbmZpZyIsImlubmVySFRNTCIsInNjZW5lTmFtZSIsImdyYXZpdHkiLCJibHVlQmFsbCIsInJlZEJhbGwiLCJtZXNzYWdlIiwiY29ubmVjdGlvbiIsImRpc3RhbmNlQmV0d2VlbkNpcmNsZXMiLCJidXR0b25GcmFtZXMiLCJwbGF5QnV0dG9uIiwic3RhdGVNZXNzYWdlIiwiYWN0aW9uTWVzc2FnZSIsImNhcHRhaW4iLCJodWxrIiwiaXJvbk1hbiIsImFkZERyYWdnYWJsZSIsInNwcml0ZXMiLCJjb2xvcnMiLCJwZWdzIiwicGVnIiwic2xpbmciLCJjYXB0dXJlZE1hcmJsZSIsIm1hcmJsZXMiLCJtYXJibGVGcmFtZXMiLCJtYXJibGUiLCJzaXplcyIsImJveCIsImJsdWVCb3giLCJyZWRCb3giLCJtb3ZpbmdMaW5lIiwiYW5nbGVBIiwiYW5nbGVCIiwicm90YXRpbmdBIiwicm90YXRpbmdCIiwidGFuayIsImNyZWF0ZVRhbmsiLCJidWxsZXRzIiwiYW5nbGVNZXNzYWdlIiwiZmlsdGVyIiwicm90YXRpb25TcGVlZCIsIm1vdmVGb3J3YXJkIiwiZnJpY3Rpb24iLCJ0dXJyZXQiLCJsZWZ0QXJyb3ciLCJyaWdodEFycm93IiwidXBBcnJvdyIsInNwYWNlIiwiZ2FtZVNjZW5lIiwiY3JlYXRlR2FtZVNjZW5lIiwiZ2FtZU92ZXJTY2VuZSIsImNyZWF0ZUdhbWVPdmVyU2NlbmUiLCJhZGRQbGF5ZXJNb3ZlbWVudCIsImR1bmdlb24iLCJleGl0IiwicGxheWVyIiwidHJlYXN1cmUiLCJudW1iZXJPZkVuZW1pZXMiLCJzcGFjaW5nIiwiZGlyZWN0aW9uIiwiZW5lbWllcyIsImVuZW15Iiwib3V0ZXJCYXIiLCJpbm5lckJhciIsImhlYWx0aEJhciIsImlubmVyIiwiZG93bkFycm93IiwicGxheWVySGl0IiwiZW5lbXlIaXRzRWRnZXMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURB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QUFLQSxRQUFMLENBQWM5ZCxDQUFkLEdBQWtCLEtBQUs2ZCxNQUFMLENBQVk3ZCxDQUFaLEdBQWdCLENBQWxDO0FBQ0EsNkJBQUs4ZCxRQUFMLENBQWM3ZCxDQUFkLEdBQWtCLEtBQUs0ZCxNQUFMLENBQVk1ZCxDQUFaLEdBQWdCLENBQWxDO0FBQ0g7O0FBRUQsb0JBQUd1USw4RUFBZ0JBLENBQUMsS0FBS3NOLFFBQXRCLEVBQWdDLEtBQUtGLElBQXJDLENBQUgsRUFBK0M7QUFDM0MsNkJBQUtOLFNBQUwsQ0FBZTdiLE9BQWYsR0FBeUIsS0FBekI7QUFDQSw2QkFBSytiLGFBQUwsQ0FBbUIvYixPQUFuQixHQUE2QixJQUE3QjtBQUNBLDZCQUFLbVosT0FBTCxDQUFhMVEsT0FBYixHQUF1QixVQUF2QjtBQUNIOztBQUVELG9CQUFHLEtBQUtvVSxTQUFMLENBQWVDLEtBQWYsQ0FBcUJsZCxLQUFyQixHQUE2QixDQUFoQyxFQUFtQztBQUMvQiw2QkFBS2ljLFNBQUwsQ0FBZTdiLE9BQWYsR0FBeUIsS0FBekI7QUFDQSw2QkFBSytiLGFBQUwsQ0FBbUIvYixPQUFuQixHQUE2QixJQUE3QjtBQUNBLDZCQUFLbVosT0FBTCxDQUFhMVEsT0FBYixHQUF1QixXQUF2QjtBQUNIOztBQUVELHFCQUFLMlQsTUFBTCxDQUFZN2QsQ0FBWixJQUFpQixLQUFLNmQsTUFBTCxDQUFZaGMsRUFBN0I7QUFDQSxxQkFBS2djLE1BQUwsQ0FBWTVkLENBQVosSUFBaUIsS0FBSzRkLE1BQUwsQ0FBWS9iLEVBQTdCOztBQUVBLHFCQUFLb1ksS0FBTCxDQUFXelksT0FBWCxHQUFxQixLQUFLQSxPQUExQjtBQUVIOztBQWpMdUIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7RGlzcGxheU9iamVjdCwgc3RhZ2V9IGZyb20gXCIuL0Rpc3BsYXlPYmplY3RcIjtcclxuXHJcbmNsYXNzIENpcmNsZSBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZGlhbWV0ZXIgPSAzMixcclxuICAgICAgICBmaWxsU3R5bGUgPSBcImdyYXlcIixcclxuICAgICAgICBzdHJva2VTdHlsZSA9IFwibm9uZVwiLFxyXG4gICAgICAgIGxpbmVXaWR0aCA9IDAsXHJcbiAgICAgICAgeCA9IDAsXHJcbiAgICAgICAgeSA9IDBcclxuICAgICl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNpcmN1bGFyID0gdHJ1ZTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtkaWFtZXRlciwgZmlsbFN0eWxlLCBzdHJva2VTdHlsZSwgbGluZVdpZHRoLCB4LCB5fSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFzayA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihjdHgpIHtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZVN0eWxlO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5maWxsU3R5bGU7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG5cclxuICAgICAgICBjdHguYXJjKFxyXG4gICAgICAgICAgICB0aGlzLnJhZGl1cyArICggLXRoaXMuZGlhbWV0ZXIgKiB0aGlzLnBpdm90WCksXHJcbiAgICAgICAgICAgIHRoaXMucmFkaXVzICsgKCAtdGhpcy5kaWFtZXRlciAqIHRoaXMucGl2b3RYKSxcclxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsIDAsIDIqTWF0aC5QSSwgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmKHRoaXMuc3Ryb2tlU3R5bGUgIT09IFwibm9uZVwiKXtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5maWxsU3R5bGUgIT09IFwibm9uZVwiKXtcclxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMubWFzayAmJiB0aGlzLm1hc2sgPT09IHRydWUpe1xyXG4gICAgICAgICAgICBjdHguY2xpcCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlKGRpYW1ldGVyLCBmaWxsU3R5bGUsIHN0cm9rZVN0eWxlLCBsaW5lV2lkdGgsIHgsIHkpIHtcclxuICAgIGxldCBzcHJpdGUgPSBuZXcgQ2lyY2xlKGRpYW1ldGVyLCBmaWxsU3R5bGUsIHN0cm9rZVN0eWxlLCBsaW5lV2lkdGgsIHgsIHkpO1xyXG4gICAgc3RhZ2UuYWRkQ2hpbGQoc3ByaXRlKTtcclxuICAgIHJldHVybiBzcHJpdGU7XHJcbn0iLCJleHBvcnQgY2xhc3MgRGlzcGxheU9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB0aGlzLndpZHRoID0gMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAxO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2FsZVggPSAxO1xyXG4gICAgICAgIHRoaXMuc2NhbGVZID0gMTtcclxuICAgICAgICB0aGlzLnBpdm90WCA9IDAuNTtcclxuICAgICAgICB0aGlzLnBpdm90WSA9IDAuNTtcclxuXHJcbiAgICAgICAgdGhpcy52eCA9IDA7XHJcbiAgICAgICAgdGhpcy52eSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuX2xheWVyID0gMDtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc2hhZG93ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dDb2xvciA9IFwicmdiYSgxMDAsIDEwMCwgMTAwLCAwLjUpXCI7XHJcbiAgICAgICAgdGhpcy5zaGFkb3dPZmZzZXRYID0gMztcclxuICAgICAgICB0aGlzLnNoYWRvd09mZnNldFkgPSAzO1xyXG4gICAgICAgIHRoaXMuc2hhZG93Qmx1ciA9IDM7XHJcblxyXG4gICAgICAgIHRoaXMuYmxlbmRNb2RlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICB0aGlzLmZyYW1lcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubG9vcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9kcmFnZ2FibGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5fY2lyY3VsYXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9pbnRlcmFjdGl2ZSA9IHRydWU7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ3goKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnggKyB0aGlzLnBhcmVudC5neDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy54O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnkgKyB0aGlzLnBhcmVudC5neTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy55O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBsYXllcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGxheWVyKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fbGF5ZXIgID0gdmFsdWU7XHJcbiAgICAgICAgaWYodGhpcy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuY2hpbGRyZW4uc29ydCggKGEsIGIpID0+IGEubGF5ZXIgLSBiLmxheWVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2hpbGQoc3ByaXRlKSB7XHJcbiAgICAgICAgaWYoc3ByaXRlLnBhcmVudCkge1xyXG4gICAgICAgICAgICBzcHJpdGUucGFyZW50LnJlbW92ZUNoaWxkKHNwcml0ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc3ByaXRlLnBhcmVudCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHNwcml0ZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNoaWxkIChzcHJpdGUpIHtcclxuICAgICAgICBpZiAoc3ByaXRlLnBhcmVudCA9PT0gdGhpcykge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZSh0aGlzLmNoaWxkcmVuLmluZGV4T2Yoc3ByaXRlKSwgMSk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7c3ByaXRlfSBpcyBub3QgYSBjaGlsZCBvZiAke3RoaXN9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYWxmV2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGgvMjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGFsZkhlaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHQvMjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2VudGVyWCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54ICsgdGhpcy5oYWxmV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNlbnRlclkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGFsZkhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHt4OiB0aGlzLngsIHk6IHRoaXMueX07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb24oeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbG9jYWxCb3VuZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBnbG9iYWxCb3VuZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogdGhpcy5neCxcclxuICAgICAgICAgICAgeTogdGhpcy5neSxcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZ3ggKyB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuZ3kgKyB0aGlzLmhlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVtcHR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMFxyXG4gICAgfVxyXG5cclxuICAgIHB1dENlbnRlcihiLCB4T2Zmc2V0ID0gMCwgeU9mZnNldCA9IDApIHtcclxuICAgICAgICBsZXQgYSA9IHRoaXM7XHJcbiAgICAgICAgYi54ID0gKGEueCArIGEuaGFsZldpZHRoIC0gYi5oYWxmV2lkdGgpICsgeE9mZnNldDtcclxuICAgICAgICBiLnkgPSAoYS55ICsgYS5oYWxmSGVpZ2h0IC0gYi5oYWxmSGVpZ2h0KSArIHlPZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0VG9wKGIsIHhPZmZzZXQgPSAwLCB5T2Zmc2V0ID0gMCkge1xyXG4gICAgICAgIGxldCBhID0gdGhpcztcclxuICAgICAgICBiLnggPSAoYS54ICsgYS5oYWxmV2lkdGggLSBiLmhhbGZXaWR0aCkgKyB4T2Zmc2V0O1xyXG4gICAgICAgIGIueSA9IChhLnkgLSBiLmhlaWdodCkgKyB5T2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1dFJpZ2h0KGIsIHhPZmZzZXQgPSAwLCB5T2Zmc2V0ID0gMCkge1xyXG4gICAgICAgIGxldCBhID0gdGhpcztcclxuICAgICAgICBiLnggPSAoYS54ICsgYS53aWR0aCkgKyB4T2Zmc2V0O1xyXG4gICAgICAgIGIueSA9IChhLnkgKyBhLmhhbGZIZWlnaHQgLSBiLmhhbGZIZWlnaHQpICsgeU9mZnNldDtcclxuICAgIH1cclxuXHJcbiAgICBwdXRCb3R0b20oYiwgeE9mZnNldCA9IDAsIHlPZmZzZXQgPSAwKSB7XHJcbiAgICAgICAgbGV0IGEgPSB0aGlzO1xyXG4gICAgICAgIGIueCA9IChhLnggKyBhLmhhbGZXaWR0aCAtIGIuaGFsZldpZHRoKSArIHhPZmZzZXQ7XHJcbiAgICAgICAgYi55ID0gKGEueSArIGIuaGVpZ2h0KSArIHlPZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0TGVmdChiLCB4T2Zmc2V0ID0gMCwgeU9mZnNldCA9IDApIHtcclxuICAgICAgICBsZXQgYSA9IHRoaXM7XHJcbiAgICAgICAgYi54ID0gKGEueCAtIGIud2lkdGgpICsgeE9mZnNldDtcclxuICAgICAgICBiLnkgPSAoYS55ICsgYS5oYWxmSGVpZ2h0IC0gYi5oYWxmSGVpZ2h0KSArIHlPZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3dhcENoaWxkcmVuKGNoaWxkMSwgY2hpbGQyKSB7XHJcbiAgICAgICAgbGV0IGluZGV4MSA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZDEpO1xyXG4gICAgICAgIGxldCBpbmRleDIgPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQyKTtcclxuXHJcbiAgICAgICAgaWYoaW5kZXgxICE9PSAtMSAmJiBpbmRleDIgIT09IC0xKXtcclxuICAgICAgICAgICAgY2hpbGQxLmNoaWxkSW5kZXggPSBjaGlsZDI7XHJcbiAgICAgICAgICAgIGNoaWxkMi5jaGlsZEluZGV4ID0gY2hpbGQxO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpbmRleDFdID0gY2hpbGQyO1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2luZGV4Ml0gPSBjaGlsZDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCb3RoIG9iamVjdHMgbXVzdCBiZSBhIGNoaWxkIG9mIHRoZSBjYWxsZXIgJHt0aGlzfWApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZCguLi5zcHJpdGVzVG9BZGQpe1xyXG4gICAgICAgIHNwcml0ZXNUb0FkZC5mb3JFYWNoKCBzcHJpdGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHNwcml0ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoLi4uc3ByaXRlc1RvUmVtb3ZlKSB7XHJcbiAgICAgICAgc3ByaXRlc1RvUmVtb3ZlLmZvckVhY2goIHNwcml0ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoc3ByaXRlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50RnJhbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRGcmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2lyY3VsYXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NpcmN1bGFyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjaXJjdWxhcih2YWx1ZSkge1xyXG4gICAgICAgIGlmKHZhbHVlID09PSB0cnVlICYmIHRoaXMuX2NpcmN1bGFyID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgICAgICAgICBkaWFtZXRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByYWRpdXMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYWxmV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSB2YWx1ZSAqIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdmFsdWUgKiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jaXJjdWxhciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlICYmIHRoaXMuX2NpcmN1bGFyID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmRpYW1ldGVyO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yYWRpdXM7XHJcbiAgICAgICAgICAgIHRoaXMuX2NpcmN1bGFyID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBkcmFnZ2FibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYWdnYWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZHJhZ2dhYmxlKHZhbHVlKSB7XHJcbiAgICAgICAgaWYodmFsdWUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgZHJhZ2dhYmxlU3ByaXRlcy5wdXNoKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodmFsdWUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGRyYWdnYWJsZVNwcml0ZXMuc3BsaWNlKGRyYWdnYWJsZVNwcml0ZXMuaW5kZXhPZih0aGlzKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBpbnRlcmFjcml2ZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmKHZhbHVlID09PSB0cnVlKXtcclxuICAgICAgICAgICAgbWFrZUludGVyYWN0aXZlKHRoaXMpO1xyXG4gICAgICAgICAgICBidXR0b25zLnB1c2godGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2ludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodmFsdWUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMuc3BsaWNlKGJ1dHRvbnMuaW5kZXhPZih0aGlzKSwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2ludGVyYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlSW50ZXJhY3RpdmUobykge1xyXG4gICAgby5wcmVzcyA9IG8ucHJlc3MgfHwgdW5kZWZpbmVkO1xyXG4gICAgby5yZWxlYXNlID0gby5yZWxlYXNlIHx8IHVuZGVmaW5lZDtcclxuICAgIG8ub3ZlciA9IG8ub3ZlciB8fCB1bmRlZmluZWQ7XHJcbiAgICBvLm91dCA9IG8ub3V0IHx8IHVuZGVmaW5lZDtcclxuICAgIG8udGFwID0gby50YXAgfHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIG8uc3RhdGUgPSBcInVwXCI7XHJcbiAgICBvLmFjdGlvbiA9IFwiXCI7XHJcbiAgICBvLnByZXNzZWQgPSBmYWxzZTtcclxuICAgIG8uaG92ZXJPdmVyID0gZmFsc2U7XHJcblxyXG4gICAgby51cGRhdGUgPSAocG9pbnRlciwgY2FudmFzKSA9PiB7XHJcbiAgICAgICAgbGV0IGhpdCA9IHBvaW50ZXIuaGl0VGVzdFNwcml0ZShvKTtcclxuXHJcbiAgICAgICAgaWYocG9pbnRlci5pc1VwKSB7XHJcbiAgICAgICAgICAgIG8uc3RhdGUgPSBcInVwXCI7XHJcblxyXG4gICAgICAgICAgICBpZihvIGluc3RhbmNlb2YgQnV0dG9uKXtcclxuICAgICAgICAgICAgICAgIG8uZ290b0FuZFN0b3AoMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhpdCkge1xyXG4gICAgICAgICAgICBvLnN0YXRlID0gXCJvdmVyXCI7XHJcbiAgICAgICAgICAgIGlmKG8uZnJhbWVzICYmIG8uZnJhbWVzLmxlbmd0aCA9PT0gMyAmJiBvIGluc3RhbmNlb2YgQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICBvLmdvdG9BbmRTdG9wKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHBvaW50ZXIuaXNEb3duKXtcclxuICAgICAgICAgICAgICAgIG8uc3RhdGUgPSBcImRvd25cIjtcclxuICAgICAgICAgICAgICAgIGlmKG8gaW5zdGFuY2VvZiBCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihvLmZyYW1lcy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgby5nb3RvQW5kU3RvcCgyKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvLmdvdG9BbmRTdG9wKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG8uc3RhdGUgPT09IFwiZG93blwiKSB7XHJcbiAgICAgICAgICAgIGlmKCFvLnByZXNzZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmKG8ucHJlc3Mpe1xyXG4gICAgICAgICAgICAgICAgICAgIG8ucHJlc3MoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgby5wcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG8uYWN0aW9uID0gXCJwcmVzc2VkXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG8uc3RhdGUgPT09IFwib3ZlclwiKSB7XHJcblxyXG4gICAgICAgICAgICBpZihvLnByZXNzZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmKG8ucmVsZWFzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgby5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvLnByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG8uYWN0aW9uID0gXCJyZWxlYXNlZFwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHBvaW50ZXIudGFwcGVkICYmIG8udGFwKXtcclxuICAgICAgICAgICAgICAgICAgICBvLnRhcCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCFvLmhvdmVyT3Zlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG8ub3Zlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG8ub3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgby5ob3Zlck92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvLnN0YXRlID09PSBcInVwXCIpIHtcclxuICAgICAgICAgICAgaWYoby5wcmVzc2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpZihvLnJlbGVhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBvLnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG8ucHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgby5hY3Rpb24gPSBcInJlbGVhc2VkXCJcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoby5ob3Zlck92ZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmKG8ub3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgby5vdXQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgby5ob3Zlck92ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmNsYXNzIFNwcml0ZSBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoIHNvdXJjZSwgeCwgeSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7eCwgeX0pO1xyXG4gICAgICAgIGlmKHNvdXJjZSBpbnN0YW5jZW9mIEltYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRnJvbUltYWdlKHNvdXJjZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2UuZnJhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVGcm9tQXRsYXMoc291cmNlKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmKHNvdXJjZS5pbWFnZSAmJiAhc291cmNlLmRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVGcm9tVGlsZXNldChzb3VyY2UpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYoc291cmNlLmltYWdlICYmIHNvdXJjZS5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRnJvbVRpbGVzZXRGcmFtZXMoc291cmNlKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSl7XHJcbiAgICAgICAgICAgIGlmKHNvdXJjZVswXSAmJiBzb3VyY2VbMF0uc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZyb21BdGxhc0ZyYW1lcyhzb3VyY2UpXHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZVswXSBpbnN0YW5jZW9mIEltYWdlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRnJvbUltYWdlcyhzb3VyY2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgaW1hZ2Ugc291cmNlcyBpbiAke3NvdXJjZX0gYXJlIG5vdCByZWNvZ25pemVkYCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgaW1hZ2Ugc291cmNlICR7c291cmNlfSBpcyBub3QgcmVjb2duaXplZGApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVGcm9tSW1hZ2Uoc291cmNlKSB7XHJcbiAgICAgICAgaWYoIShzb3VyY2UgaW5zdGFuY2VvZiBJbWFnZSkpe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7c291cmNlfSBpcyBub3QgYW4gaW1hZ2Ugb2JqZWN0YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlWCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlWSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSBzb3VyY2Uud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gc291cmNlLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VXaWR0aCA9IHNvdXJjZS53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VIZWlnaHQgPSBzb3VyY2UuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVGcm9tQXRsYXMoc291cmNlKSB7XHJcbiAgICAgICAgdGhpcy50aWxlc2V0RnJhbWUgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLnRpbGVzZXRGcmFtZS5zb3VyY2U7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VYID0gdGhpcy50aWxlc2V0RnJhbWUuZnJhbWUueDtcclxuICAgICAgICB0aGlzLnNvdXJjZVkgPSB0aGlzLnRpbGVzZXRGcmFtZS5mcmFtZS55O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLnRpbGVzZXRGcmFtZS5mcmFtZS53O1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy50aWxlc2V0RnJhbWUuZnJhbWUuaDtcclxuICAgICAgICB0aGlzLnNvdXJjZVdpZHRoID0gdGhpcy50aWxlc2V0RnJhbWUuZnJhbWUudztcclxuICAgICAgICB0aGlzLnNvdXJjZUhlaWdodCA9IHRoaXMudGlsZXNldEZyYW1lLmZyYW1lLmg7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRnJvbVRpbGVzZXQoc291cmNlKSB7XHJcbiAgICAgICAgaWYoIShzb3VyY2UuaW1hZ2UgaW5zdGFuY2VvZiBJbWFnZSkpe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7c291cmNlLmltYWdlfSBpcyBub3QgYW4gaW1hZ2Ugb2JqZWN0YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2UuaW1hZ2U7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlWCA9IHNvdXJjZS54O1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZVkgPSBzb3VyY2UueTtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHNvdXJjZS53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBzb3VyY2UuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZVdpZHRoID0gc291cmNlLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZUhlaWdodCA9IHNvdXJjZS5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUZyb21UaWxlc2V0RnJhbWVzKHNvdXJjZSkge1xyXG4gICAgICAgIGlmKCEoc291cmNlLmltYWdlIGluc3RhbmNlb2YgSW1hZ2UpKXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3NvdXJjZS5pbWFnZX0gaXMgbm90IGFuIGltYWdlIG9iamVjdGApO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZS5pbWFnZTtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZXMgPSBzb3VyY2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlWCA9IHRoaXMuZnJhbWVzWzBdWzBdO1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZVkgPSB0aGlzLmZyYW1lc1swXVsxXTtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHNvdXJjZS53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBzb3VyY2UuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZVdpZHRoID0gc291cmNlLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZUhlaWdodCA9IHNvdXJjZS5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUZyb21BdGxhc0ZyYW1lcyhzb3VyY2UpIHtcclxuICAgICAgICB0aGlzLmZyYW1lcyA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZVswXS5zb3VyY2U7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VYID0gc291cmNlWzBdLmZyYW1lLng7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VZID0gc291cmNlWzBdLmZyYW1lLnk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHNvdXJjZVswXS5mcmFtZS53O1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gc291cmNlWzBdLmZyYW1lLmg7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VXaWR0aCA9IHNvdXJjZVswXS5mcmFtZS53O1xyXG4gICAgICAgIHRoaXMuc291cmNlSGVpZ2h0ID0gc291cmNlWzBdLmZyYW1lLmg7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRnJvbUltYWdlcyhzb3VyY2UpIHtcclxuICAgICAgICB0aGlzLmZyYW1lcyA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZVswXTtcclxuICAgICAgICB0aGlzLnNvdXJjZVggPSAwO1xyXG4gICAgICAgIHRoaXMuc291cmNlWSA9IDA7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHNvdXJjZVswXS53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHNvdXJjZVswXS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VXaWR0aCA9IHNvdXJjZVswXS53aWR0aDtcclxuICAgICAgICB0aGlzLnNvdXJjZUhlaWdodCA9IHNvdXJjZVswXS5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ290b0FuZFN0b3AoZnJhbWVOdW1iZXIpIHtcclxuICAgICAgICBpZih0aGlzLmZyYW1lcy5sZW5ndGggPiAwICYmIGZyYW1lTnVtYmVyIDwgdGhpcy5mcmFtZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgaWYodGhpcy5mcmFtZXNbMF0gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VYID0gdGhpcy5mcmFtZXNbZnJhbWVOdW1iZXJdWzBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VZID0gdGhpcy5mcmFtZXNbZnJhbWVOdW1iZXJdWzFdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoIHRoaXMuZnJhbWVzW2ZyYW1lTnVtYmVyXS5mcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VYID0gdGhpcy5mcmFtZXNbZnJhbWVOdW1iZXJdLmZyYW1lLng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZVkgPSB0aGlzLmZyYW1lc1tmcmFtZU51bWJlcl0uZnJhbWUueTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmZyYW1lc1tmcmFtZU51bWJlcl0uZnJhbWUudztcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5mcmFtZXNbZnJhbWVOdW1iZXJdLmZyYW1lLmg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZVdpZHRoID0gdGhpcy5mcmFtZXNbZnJhbWVOdW1iZXJdLmZyYW1lLnc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZUhlaWdodCA9IHRoaXMuZnJhbWVzW2ZyYW1lTnVtYmVyXS5mcmFtZS5oO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLmZyYW1lc1tmcmFtZU51bWJlcl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZVggPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VZID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLnNvdXJjZS53aWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5zb3VyY2UuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VXaWR0aCA9IHRoaXMuc291cmNlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VIZWlnaHQgPSB0aGlzLnNvdXJjZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEZyYW1lID0gZnJhbWVOdW1iZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGcmFtZSBudW1iZXIgJHtmcmFtZU51bWJlcn0gZG9lcyBub3QgZXhpc3RgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGN0eCkge1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlLFxyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZVgsIHRoaXMuc291cmNlWSxcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VXaWR0aCwgdGhpcy5zb3VyY2VIZWlnaHQsXHJcbiAgICAgICAgICAgIC10aGlzLndpZHRoICogdGhpcy5waXZvdFgsXHJcbiAgICAgICAgICAgIC10aGlzLmhlaWdodCAqIHRoaXMucGl2b3RZLFxyXG4gICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzcHJpdGUoc291cmNlLCB4LCB5KSB7XHJcbiAgICBsZXQgc3ByaXRlID0gbmV3IFNwcml0ZShzb3VyY2UsIHgsIHkpO1xyXG4gICAgc3RhZ2UuYWRkQ2hpbGQoc3ByaXRlKTtcclxuICAgIHJldHVybiBzcHJpdGU7XHJcbn1cclxuXHJcbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFNwcml0ZXtcclxuICAgIGNvbnN0cnVjdG9yKHNvdXJjZSwgeCA9IDAsIHkgPSAwKSB7XHJcbiAgICAgICAgc3VwZXIoc291cmNlLCB4LCB5KTtcclxuICAgICAgICB0aGlzLmludGVyYWNyaXZlID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1dHRvbihzb3VyY2UsIHgsIHkpIHtcclxuICAgIGxldCBzcHJpdGUgPSBuZXcgQnV0dG9uKHNvdXJjZSwgeCwgeSk7XHJcbiAgICBzdGFnZS5hZGRDaGlsZChzcHJpdGUpO1xyXG4gICAgcmV0dXJuIHNwcml0ZTtcclxufVxyXG5cclxuZXhwb3J0IGxldCBzdGFnZSA9IG5ldyBEaXNwbGF5T2JqZWN0KCk7XHJcblxyXG5leHBvcnQgbGV0IGJ1dHRvbnMgPSBbXTtcclxuZXhwb3J0IGxldCBkcmFnZ2FibGVTcHJpdGVzID0gW107XHJcbiIsImltcG9ydCB7RGlzcGxheU9iamVjdCwgc3RhZ2V9IGZyb20gXCIuL0Rpc3BsYXlPYmplY3RcIjtcclxuXHJcbmNsYXNzIEdyb3VwIGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5zcHJpdGVzVG9Hcm91cCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgc3ByaXRlc1RvR3JvdXAuZm9yRWFjaChzcHJpdGUgPT4gdGhpcy5hZGRDaGlsZChzcHJpdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDaGlsZChzcHJpdGUpIHtcclxuICAgICAgICBzdXBlci5hZGRDaGlsZChzcHJpdGUpO1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlU2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNoaWxkKHNwcml0ZSkge1xyXG4gICAgICAgIGlmKHNwcml0ZS5wYXJlbnQgPT09IHRoaXMpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UodGhpcy5jaGlsZHJlbi5pbmRleE9mKHNwcml0ZSksIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVNpemUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7c3ByaXRlfSBpcyBub3QgYSBjaGlsZCBvZiAke3RoaXN9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVNpemUoKSB7XHJcbiAgICAgICAgaWYodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5fbmV3V2lkdGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9uZXdIZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKCBjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihjaGlsZC54ICsgY2hpbGQud2lkdGggPiB0aGlzLl9uZXdXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25ld1dpZHRoID0gY2hpbGQueCArIGNoaWxkLndpZHRoXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY2hpbGQueSArIGNoaWxkLmhlaWdodCA+IHRoaXMuX25ld0hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25ld0hlaWdodCA9IGNoaWxkLnkgKyBjaGlsZC5oZWlnaHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLl9uZXdXaWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuX25ld0hlaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwKC4uLnNwcml0ZXNUb0dyb3VwKSB7XHJcbiAgICBsZXQgc3ByaXRlID0gbmV3IEdyb3VwKC4uLnNwcml0ZXNUb0dyb3VwKTtcclxuICAgIHN0YWdlLmFkZENoaWxkKHNwcml0ZSk7XHJcbiAgICByZXR1cm4gc3ByaXRlO1xyXG59IiwiaW1wb3J0IHtEaXNwbGF5T2JqZWN0LCBzdGFnZX0gZnJvbSBcIi4vRGlzcGxheU9iamVjdFwiO1xyXG5cclxuY2xhc3MgTGluZSBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgc3Ryb2tlU3R5bGUgPSBcIm5vbmVcIixcclxuICAgICAgICBsaW5lV2lkdGggPSAwLFxyXG4gICAgICAgIGF4ID0gMCxcclxuICAgICAgICBheSA9IDAsXHJcbiAgICAgICAgYnggPSAzMixcclxuICAgICAgICBieSA9IDMyXHJcbiAgICApe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7c3Ryb2tlU3R5bGUsIGxpbmVXaWR0aCwgYXgsIGF5LCBieCwgYnl9KTtcclxuICAgICAgICB0aGlzLmxpbmVKb2luID0gXCJyb3VuZFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihjdHgpIHtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZVN0eWxlO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBjdHgubGluZUpvaW4gPSB0aGlzLmxpbmVKb2luO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKHRoaXMuYXgsIHRoaXMuYXkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5ieCwgdGhpcy5ieSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3Ryb2tlU3R5bGUgIT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5lKHN0cm9rZVN0eWxlLCBsaW5lV2lkdGgsIGF4LCBheSwgYngsIGJ5KXtcclxuICAgIGxldCBzcHJpdGUgPSBuZXcgTGluZShzdHJva2VTdHlsZSwgbGluZVdpZHRoLCBheCwgYXksIGJ4LCBieSk7XHJcbiAgICBzdGFnZS5hZGRDaGlsZChzcHJpdGUpO1xyXG4gICAgcmV0dXJuIHNwcml0ZTtcclxufSIsImltcG9ydCB7RGlzcGxheU9iamVjdCwgc3RhZ2V9IGZyb20gXCIuL0Rpc3BsYXlPYmplY3RcIjtcclxuXHJcblxyXG5jbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0e1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgd2lkdGggPSAzMixcclxuICAgICAgICBoZWlnaHQgPSAzMixcclxuICAgICAgICBmaWxsU3R5bGUgPSBcImdyYXlcIixcclxuICAgICAgICBzdHJva2VTdHlsZSA9IFwibm9uZVwiLFxyXG4gICAgICAgIGxpbmVXaWR0aCA9IDAsXHJcbiAgICAgICAgeCA9IDAsXHJcbiAgICAgICAgeSA9IDBcclxuICAgICl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMse3dpZHRoLCBoZWlnaHQsIGZpbGxTdHlsZSwgc3Ryb2tlU3R5bGUsIGxpbmVXaWR0aCwgeCwgeX0pO1xyXG4gICAgICAgIHRoaXMubWFzayA9IGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoY3R4KSB7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zdHJva2VTdHlsZTtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuZmlsbFN0eWxlO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgucmVjdCgtdGhpcy53aWR0aCAqIHRoaXMucGl2b3RYLCAtdGhpcy5oZWlnaHQgKiB0aGlzLnBpdm90WSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIGlmKHRoaXMuc3Ryb2tlU3R5bGUgIT09IFwibm9uZVwiKXtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5maWxsU3R5bGUgIT09IFwibm9uZVwiKXtcclxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMubWFzayAmJiB0aGlzLm1hc2sgPT09IHRydWUpe1xyXG4gICAgICAgICAgICBjdHguY2xpcCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVjdGFuZ2xlKHdpZHRoLCBoZWlnaHQsIGZpbGxTdHlsZSwgc3Ryb2tlU3R5bGUsIGxpbmVXaWR0aCwgeCwgeSkge1xyXG4gICAgbGV0IHNwcml0ZSA9IG5ldyBSZWN0YW5nbGUod2lkdGgsIGhlaWdodCwgZmlsbFN0eWxlLCBzdHJva2VTdHlsZSwgbGluZVdpZHRoLCB4LCB5KTtcclxuICAgIHN0YWdlLmFkZENoaWxkKHNwcml0ZSk7XHJcblxyXG4gICAgcmV0dXJuIHNwcml0ZTtcclxufSIsImltcG9ydCB7RGlzcGxheU9iamVjdCwgc3RhZ2V9IGZyb20gXCIuL0Rpc3BsYXlPYmplY3RcIjtcclxuXHJcbmNsYXNzIFRleHQgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0e1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgY29udGVudCA9IFwiSGVsbG9cIixcclxuICAgICAgICBmb250ID0gXCIxMnB4IHNhbnMtc2VyaWZcIixcclxuICAgICAgICBmaWxsU3R5bGUgPSBcInJlZFwiLFxyXG4gICAgICAgIHggPSAwLFxyXG4gICAgICAgIHkgPSAwXHJcbiAgICApe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7Y29udGVudCwgZm9udCwgZmlsbFN0eWxlLCB4LCB5fSk7XHJcbiAgICAgICAgdGhpcy50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlVGV4dCA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihjdHgpIHtcclxuICAgICAgICBjdHguZm9udCA9IHRoaXMuZm9udDtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZVN0eWxlO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5maWxsU3R5bGU7XHJcblxyXG4gICAgICAgIGlmKHRoaXMud2lkdGggPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHRoaXMuY29udGVudCkud2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuaGVpZ2h0ID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBjdHgubWVhc3VyZVRleHQoXCJNXCIpLndpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy53aWR0aCAqIHRoaXMucGl2b3RYLCAtdGhpcy5oZWlnaHQgKiB0aGlzLnBpdm90WSk7XHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IHRoaXMudGV4dEJhc2VsaW5lO1xyXG5cclxuICAgICAgICBjdHguZmlsbFRleHQodGhpcy5jb250ZW50LCAwLCAwKTtcclxuICAgICAgICBpZih0aGlzLnN0cm9rZVRleHQgIT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VUZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGV4dChjb250ZW50LCBmb250LCBmaWxsU3R5bGUsIHgsIHkpIHtcclxuICAgIGxldCBzcHJpdGUgPSBuZXcgVGV4dChjb250ZW50LCBmb250LCBmaWxsU3R5bGUsIHgsIHkpO1xyXG4gICAgc3RhZ2UuYWRkQ2hpbGQoc3ByaXRlKTtcclxuICAgIHJldHVybiBzcHJpdGU7XHJcbn0iLCJleHBvcnQgbGV0IGFzc2V0cyA9IHtcclxuICAgIHRvTG9hZDogMCxcclxuICAgIGxvYWRlZDogMCxcclxuXHJcbiAgICBpbWFnZUV4dGVuc2lvbnM6IFtcInBuZ1wiLCBcImpwZ1wiLCBcImdpZlwiXSxcclxuICAgIGZvbnRFeHRlbnNpb25zOiBbXCJ0dGZcIiwgXCJvdGZcIiwgXCJ0dGNcIiwgXCJ3b2ZmXCJdLFxyXG4gICAganNvbkV4dGVuc2lvbnM6IFtcImpzb25cIl0sXHJcbiAgICBhdWRpb0V4dGVuc2lvbnM6IFtcIm1wM1wiLCBcIm9nZ1wiLCBcIndhdlwiLCBcIndlYm1cIl0sXHJcblxyXG4gICAgbG9hZChzb3VyY2VzKXtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbG9hZEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCArPSAxO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2FkZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudG9Mb2FkID09PSB0aGlzLmxvYWRlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b0xvYWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldHMgZmluaXNoIGxvYWRpbmdcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBhc3NldHMuLi5cIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvTG9hZCA9IHNvdXJjZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgc291cmNlcy5mb3JFYWNoKCBzb3VyY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGV4dGVuc2lvbiA9IHNvdXJjZS5zcGxpdChcIi5cIikucG9wKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSAhPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEltYWdlKHNvdXJjZSwgbG9hZEhhbmRsZXIpXHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZvbnRFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSAhPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEZvbnQoc291cmNlLCBsb2FkSGFuZGxlcilcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuanNvbkV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pICE9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkSnNvbihzb3VyY2UsIGxvYWRIYW5kbGVyKVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hdWRpb0V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pICE9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkU291bmQoc291cmNlLCBsb2FkSGFuZGxlcilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGSWxlIHR5cGUgbm90IHJlY29nbml6ZWQ6IFwiICsgc291cmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWRJbWFnZSAoc291cmNlLCBsb2FkSGFuZGxlcikge1xyXG4gICAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGxvYWRIYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHRoaXNbc291cmNlXSA9IGltYWdlO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IHNvdXJjZTtcclxuICAgIH0sXHJcblxyXG4gICAgbG9hZEZvbnQoc291cmNlLCBsb2FkSGFuZGxlcil7XHJcbiAgICAgICAgbGV0IGZvbnRGYW1pbHkgPSBzb3VyY2Uuc3BsaXQoXCIvXCIpLnBvcCgpLnNwbGl0KFwiLlwiKVswXTtcclxuICAgICAgICBsZXQgbmV3U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICAgICAgbGV0IGZvbnRGYWNlID0gXCJAZm9udC1mYWNlIHtmb250LWZhbWlseTogJ1wiICsgZm9udEZhbWlseSArIFwiJzsgc3JjOiB1cmwoJ1wiKyBzb3VyY2UgK1wiJyk7fVwiO1xyXG4gICAgICAgIG5ld1N0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGZvbnRGYWNlKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChuZXdTdHlsZSk7XHJcblxyXG4gICAgICAgIGxvYWRIYW5kbGVyKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWRKc29uKHNvdXJjZSwgbG9hZEhhbmRsZXIpIHtcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHNvdXJjZSwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgIHhoci5vbmxvYWQgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgZmlsZS5uYW1lID0gc291cmNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXNbZmlsZS5uYW1lXSA9IGZpbGU7XHJcbiAgICAgICAgICAgICAgICBpZihmaWxlLmZyYW1lcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVUaWxlc2V0RnJhbWVzKGZpbGUsIHNvdXJjZSwgbG9hZEhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkSGFuZGxlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVUaWxlc2V0RnJhbWVzKGZpbGUsIHNvdXJjZSwgbG9hZEhhbmRsZXIpe1xyXG4gICAgICAgIGxldCBiYXNlVXJsID0gc291cmNlLnJlcGxhY2UoL1teXFwvXSokLyxcIlwiKTtcclxuXHJcbiAgICAgICAgbGV0IGltYWdlU291cmNlID0gYmFzZVVybCArIGZpbGUubWV0YS5pbWFnZTtcclxuXHJcbiAgICAgICAgbGV0IGltYWdlTG9hZEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXNbaW1hZ2VTb3VyY2VdID0gaW1hZ2U7XHJcblxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhmaWxlLmZyYW1lcykuZm9yRWFjaCggZnJhbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpc1tmcmFtZV0gPSBmaWxlLmZyYW1lc1tmcmFtZV07XHJcbiAgICAgICAgICAgICAgICB0aGlzW2ZyYW1lXS5zb3VyY2UgPSBpbWFnZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsb2FkSGFuZGxlcigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW1hZ2VMb2FkSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IGltYWdlU291cmNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkU291bmQoc291cmNlLCBsb2FkSGFuZGxlcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2FkU291bmQgY2FsbGVkIC0gc2VlIENoYXB0ZXIgMTAgZm9yIGRldGFpbHNcIik7XHJcbiAgICB9XHJcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIGhpdFRlc3RQb2ludChwb2ludCwgc3ByaXRlKSB7XHJcbiAgICBsZXQgc2hhcGUsIGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbSwgdngsIHZ5LCBtYWduaXR1ZGUsIGhpdDtcclxuXHJcbiAgICBpZihzcHJpdGUucmFkaXVzKSB7XHJcbiAgICAgICAgc2hhcGUgPSBcImNpcmNsZVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzaGFwZSA9IFwicmVjdGFuZ2xlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgIGlmKHNoYXBlID09PSBcInJlY3RhbmdsZVwiKSB7XHJcbiAgICAgICAgIGxlZnQgPSBzcHJpdGUueDtcclxuICAgICAgICAgcmlnaHQgPSBzcHJpdGUueCArIHNwcml0ZS53aWR0aDtcclxuICAgICAgICAgdG9wID0gc3ByaXRlLnk7XHJcbiAgICAgICAgIGJvdHRvbSA9IHNwcml0ZS55ICsgc3ByaXRlLmhlaWdodDtcclxuXHJcbiAgICAgICAgIGhpdCA9IHBvaW50LnggPiBsZWZ0ICYmIHBvaW50LnggPCByaWdodCAmJiBwb2ludC55ID4gdG9wICYmIHBvaW50LnkgPCBib3R0b207XHJcbiAgICAgfVxyXG5cclxuICAgICBpZihzaGFwZSA9PT0gXCJjaXJjbGVcIikge1xyXG4gICAgICAgICB2eCA9IHBvaW50LnggLSBzcHJpdGUuY2VudGVyWDtcclxuICAgICAgICAgdnkgPSBwb2ludC55IC0gc3ByaXRlLmNlbnRlclk7XHJcbiAgICAgICAgIG1hZ25pdHVkZSA9IE1hdGguc3FydCh2eCoqMiArIHZ5KioyKTtcclxuXHJcbiAgICAgICAgIGhpdCA9IG1hZ25pdHVkZSA8IHNwcml0ZS5yYWRpdXM7XHJcbiAgICAgfVxyXG5cclxuICAgICByZXR1cm4gaGl0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGl0VGVzdENpcmNsZShjMSwgYzIsIGdsb2JhbCA9IGZhbHNlKSB7XHJcbiAgICBsZXQgdngsIHZ5LCBtYWduaXR1ZGUsIGNvbWJpbmVkUmFkaWksIGhpdDtcclxuXHJcbiAgICBpZihnbG9iYWwpIHtcclxuICAgICAgICB2eCA9IChjMi5neCArIGMyLnJhZGl1cykgLSAoYzEuZ3ggKyBjMS5yYWRpdXMpO1xyXG4gICAgICAgIHZ5ID0gKGMyLmd5ICsgYzIucmFkaXVzKSAtIChjMS5neSArIGMxLnJhZGl1cyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZ4ID0gYzIuY2VudGVyWCAtIGMxLmNlbnRlclg7XHJcbiAgICAgICAgdnkgPSBjMi5jZW50ZXJZIC0gYzEuY2VudGVyWTtcclxuICAgIH1cclxuXHJcbiAgICBtYWduaXR1ZGUgPSBNYXRoLnNxcnQodngqKjIgKyB2eSoqMik7XHJcbiAgICBjb21iaW5lZFJhZGlpID0gYzEucmFkaXVzICsgYzIucmFkaXVzO1xyXG4gICAgaGl0ID0gbWFnbml0dWRlIDwgY29tYmluZWRSYWRpaTtcclxuXHJcbiAgICByZXR1cm4gaGl0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlQ29sbGlzaW9uKGMxLCBjMiwgYm91bmNlID0gZmFsc2UsIGdsb2JhbCA9IGZhbHNlKSB7XHJcbiAgICBsZXQgbWFnbml0dWRlLCBjb21iaW5lZFJhZGlpLCBvdmVybGFwLCB2eCwgdnksIGR4LCBkeSxcclxuICAgICAgICBzID0ge30sXHJcbiAgICAgICAgaGl0ID0gZmFsc2U7XHJcblxyXG4gICAgaWYoZ2xvYmFsKSB7XHJcbiAgICAgICAgdnggPSAoYzIuZ3ggKyBjMi5yYWRpdXMpIC0gKGMxLmd4ICsgYzEucmFkaXVzKTtcclxuICAgICAgICB2eSA9IChjMi5neSArIGMyLnJhZGl1cykgLSAoYzEuZ3kgKyBjMS5yYWRpdXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2eCA9IGMyLmNlbnRlclggLSBjMS5jZW50ZXJYO1xyXG4gICAgICAgIHZ5ID0gYzIuY2VudGVyWSAtIGMxLmNlbnRlclk7XHJcbiAgICB9XHJcbiAgICBtYWduaXR1ZGUgPSBNYXRoLnNxcnQodngqKjIgKyB2eSoqMik7XHJcbiAgICBjb21iaW5lZFJhZGlpID0gYzEucmFkaXVzICsgYzIucmFkaXVzO1xyXG5cclxuICAgIGlmKG1hZ25pdHVkZSA8IGNvbWJpbmVkUmFkaWkpIHtcclxuICAgICAgICBoaXQgPSB0cnVlO1xyXG4gICAgICAgIG92ZXJsYXAgPSBjb21iaW5lZFJhZGlpIC0gbWFnbml0dWRlO1xyXG4gICAgICAgIGxldCBxdWFudHVtUGFkZGluZyA9IDAuMztcclxuXHJcbiAgICAgICAgb3ZlcmxhcCArPSBxdWFudHVtUGFkZGluZztcclxuICAgICAgICBkeCA9IHZ4IC8gbWFnbml0dWRlO1xyXG4gICAgICAgIGR5ID0gdnkgLyBtYWduaXR1ZGU7XHJcblxyXG4gICAgICAgIGMxLnggLT0gb3ZlcmxhcCAqIGR4O1xyXG4gICAgICAgIGMxLnkgLT0gb3ZlcmxhcCAqIGR5O1xyXG5cclxuICAgICAgICBpZihib3VuY2UpIHtcclxuICAgICAgICAgICAgcy54ID0gdnk7XHJcbiAgICAgICAgICAgIHMueSA9IC12eDtcclxuXHJcbiAgICAgICAgICAgIGJvdW5jZU9mZlN1cmZhY2UoYzEsIHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhpdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmluZ0NpcmNsZUNvbGxpc2lvbihjMSwgYzIsIGdsb2JhbCA9IGZhbHNlKSB7XHJcbiAgICBsZXQgY29tYmluZWRSYWRpaSwgb3ZlcmxhcCwgeFNpZGUsIHlTaWRlLFxyXG4gICAgICAgIHMgPSB7fSxcclxuICAgICAgICBwMUEgPSB7fSxcclxuICAgICAgICBwMUIgPSB7fSxcclxuICAgICAgICBwMkEgPSB7fSxcclxuICAgICAgICBwMkIgPSB7fSxcclxuICAgICAgICBoaXQgPSBmYWxzZTtcclxuICAgIGMxLm1hc3MgPSBjMS5tYXNzIHx8IDE7XHJcbiAgICBjMi5tYXNzID0gYzIubWFzcyB8fCAxO1xyXG5cclxuICAgIGlmKGdsb2JhbCkge1xyXG4gICAgICAgIHMudnggPSAoYzIuZ3ggKyBjMi5yYWRpdXMpIC0gKGMxLmd4ICsgYzEucmFkaXVzKTtcclxuICAgICAgICBzLnZ5ID0gKGMyLmd5ICsgYzIucmFkaXVzKSAtIChjMS5neSArIGMxLnJhZGl1cyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHMudnggPSBjMi5jZW50ZXJYIC0gYzEuY2VudGVyWDtcclxuICAgICAgICBzLnZ5ID0gYzIuY2VudGVyWSAtIGMxLmNlbnRlclk7XHJcbiAgICB9XHJcblxyXG4gICAgcy5tYWduaXR1ZGUgPSBNYXRoLnNxcnQocy52eCoqMiArIHMudnkqKjIpO1xyXG5cclxuICAgIGNvbWJpbmVkUmFkaWkgPSBjMS5yYWRpdXMgKyBjMi5yYWRpdXM7XHJcblxyXG4gICAgaWYocy5tYWduaXR1ZGUgPCBjb21iaW5lZFJhZGlpKSB7XHJcbiAgICAgICAgaGl0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgb3ZlcmxhcCA9IGNvbWJpbmVkUmFkaWkgLSBzLm1hZ25pdHVkZVxyXG5cclxuICAgICAgICBvdmVybGFwICs9IDAuMztcclxuXHJcbiAgICAgICAgcy5keCA9IHMudnggLyBzLm1hZ25pdHVkZTtcclxuICAgICAgICBzLmR5ID0gcy52eSAvIHMubWFnbml0dWRlO1xyXG5cclxuICAgICAgICBzLnZ4SGFsZiA9IE1hdGguYWJzKHMuZHggKiBvdmVybGFwIC8gMik7XHJcbiAgICAgICAgcy52eUhhbGYgPSBNYXRoLmFicyhzLmR5ICogb3ZlcmxhcCAvIDIpO1xyXG5cclxuICAgICAgICAoYzEueCA+IGMyLngpID8geFNpZGUgPSAxIDogeFNpZGUgPSAtMTtcclxuICAgICAgICAoYzEueSA+IGMyLnkpID8geVNpZGUgPSAxIDogeVNpZGUgPSAtMTtcclxuXHJcbiAgICAgICAgYzEueCA9IGMxLnggKyAocy52eEhhbGYgKiB4U2lkZSk7XHJcbiAgICAgICAgYzEueSA9IGMxLnkgKyAocy52eUhhbGYgKiB5U2lkZSk7XHJcblxyXG4gICAgICAgIGMyLnggPSBjMi54ICsgKHMudnhIYWxmICogLXhTaWRlKTtcclxuICAgICAgICBjMi55ID0gYzIueSArIChzLnZ5SGFsZiAqIC15U2lkZSk7XHJcblxyXG4gICAgICAgIHMubHggPSBzLnZ5O1xyXG4gICAgICAgIHMubHkgPSAtcy52eDtcclxuXHJcbiAgICAgICAgbGV0IGRwMSA9IGMxLnZ4ICogcy5keCArIGMxLnZ5ICogcy5keTtcclxuXHJcbiAgICAgICAgcDFBLnggPSBkcDEgKiBzLmR4O1xyXG4gICAgICAgIHAxQS55ID0gZHAxICogcy5keTtcclxuXHJcbiAgICAgICAgbGV0IGRwMiA9IGMxLnZ4ICogKHMubHggLyBzLm1hZ25pdHVkZSkgKyBjMS52eSAqIChzLmx5IC8gcy5tYWduaXR1ZGUpO1xyXG5cclxuICAgICAgICBwMUIueCA9IGRwMiAqIChzLmx4IC8gcy5tYWduaXR1ZGUpO1xyXG4gICAgICAgIHAxQi55ID0gZHAyICogKHMubHkgLyBzLm1hZ25pdHVkZSk7XHJcblxyXG4gICAgICAgIGxldCBkcDMgPSBjMi52eCAqIHMuZHggKyBjMi52eSAqIHMuZHk7XHJcblxyXG4gICAgICAgIHAyQS54ID0gZHAzICogcy5keDtcclxuICAgICAgICBwMkEueSA9IGRwMyAqIHMuZHk7XHJcblxyXG4gICAgICAgIGxldCBkcDQgPSBjMi52eCAqIChzLmx4IC8gcy5tYWduaXR1ZGUpICsgYzIudnkgKiAocy5seSAvIHMubWFnbml0dWRlKTtcclxuXHJcbiAgICAgICAgcDJCLnggPSBkcDQgKiAocy5seCAvIHMubWFnbml0dWRlKTtcclxuICAgICAgICBwMkIueSA9IGRwNCAqIChzLmx5IC8gcy5tYWduaXR1ZGUpO1xyXG5cclxuICAgICAgICBjMS5ib3VuY2UgPSB7fTtcclxuICAgICAgICBjMS5ib3VuY2UueCA9IHAxQi54ICsgcDJBLng7XHJcbiAgICAgICAgYzEuYm91bmNlLnkgPSBwMUIueSArIHAyQS55O1xyXG5cclxuICAgICAgICBjMi5ib3VuY2UgPSB7fTtcclxuICAgICAgICBjMi5ib3VuY2UueCA9IHAxQS54ICsgcDJCLng7XHJcbiAgICAgICAgYzIuYm91bmNlLnkgPSBwMUEueSArIHAyQi55O1xyXG5cclxuICAgICAgICBjMS52eCA9IGMxLmJvdW5jZS54IC8gYzEubWFzcztcclxuICAgICAgICBjMS52eSA9IGMxLmJvdW5jZS55IC8gYzEubWFzcztcclxuICAgICAgICBjMi52eCA9IGMyLmJvdW5jZS54IC8gYzIubWFzcztcclxuICAgICAgICBjMi52eSA9IGMyLmJvdW5jZS55IC8gYzIubWFzcztcclxuICAgIH1cclxuICAgIHJldHVybiBoaXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBsZUNpcmNsZUNvbGxpc2lvbihhcnJheU9mQ2lyY2xlcywgZ2xvYmFsID0gZmFsc2UpIHtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheU9mQ2lyY2xlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgbGV0IGMxID0gYXJyYXlPZkNpcmNsZXNbaV07XHJcblxyXG4gICAgICAgIGZvcihsZXQgaiA9IGkrMTsgaiA8IGFycmF5T2ZDaXJjbGVzLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgbGV0IGMyID0gYXJyYXlPZkNpcmNsZXNbal07XHJcblxyXG4gICAgICAgICAgICBtb3ZpbmdDaXJjbGVDb2xsaXNpb24oYzEsIGMyLCBnbG9iYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpdFRlc3RSZWN0YW5nbGUocjEsIHIyLCBnbG9iYWwgPSBmYWxzZSkge1xyXG4gICAgbGV0IGhpdCwgY29tYmluZWRIYWxmV2lkdGhzLCBjb21iaW5lZEhhbGZIZWlnaHRzLCB2eCwgdnk7XHJcblxyXG4gICAgaGl0ID0gZmFsc2U7XHJcblxyXG4gICAgaWYoZ2xvYmFsKXtcclxuICAgICAgICB2eCA9IChyMS5neCArIHIxLmhhbGZXaWR0aCkgLSAocjIuZ3ggKyByMi5oYWxmV2lkdGgpO1xyXG4gICAgICAgIHZ5ID0gKHIxLmd5ICsgcjEuaGFsZkhlaWdodCkgLSAocjIuZ3kgKyByMi5oYWxmSGVpZ2h0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdnggPSByMS5jZW50ZXJYIC0gcjIuY2VudGVyWDtcclxuICAgICAgICB2eSA9IHIxLmNlbnRlclkgLSByMi5jZW50ZXJZO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbWJpbmVkSGFsZldpZHRocyA9IHIxLmhhbGZXaWR0aCArIHIyLmhhbGZXaWR0aDtcclxuICAgIGNvbWJpbmVkSGFsZkhlaWdodHMgPSByMS5oYWxmSGVpZ2h0ICsgcjIuaGFsZkhlaWdodDtcclxuXHJcbiAgICBpZihNYXRoLmFicyh2eCkgPCBjb21iaW5lZEhhbGZXaWR0aHMgJiYgTWF0aC5hYnModnkpIDwgY29tYmluZWRIYWxmSGVpZ2h0cykge1xyXG4gICAgICAgIGhpdCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhpdCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhpdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlY3RhbmdsZUNvbGxpc2lvbihyMSwgcjIsIGJvdW5jZSA9IGZhbHNlLCBnbG9iYWwgPSB0cnVlKSB7XHJcbiAgICBsZXQgY29sbGlzaW9uLCBjb21iaW5lZEhhbGZXaWR0aHMsIGNvbWJpbmVkSGFsZkhlaWdodHMsIG92ZXJsYXBYLCBvdmVybGFwWSwgdngsIHZ5O1xyXG5cclxuICAgIGlmIChnbG9iYWwpIHtcclxuICAgICAgICB2eCA9IChyMS5neCArIHIxLmhhbGZXaWR0aCkgLSAocjIuZ3ggKyByMi5oYWxmV2lkdGgpO1xyXG4gICAgICAgIHZ5ID0gKHIxLmd5ICsgcjEuaGFsZkhlaWdodCkgLSAocjIuZ3kgKyByMi5oYWxmSGVpZ2h0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdnggPSByMS5jZW50ZXJYIC0gcjIuY2VudGVyWDtcclxuICAgICAgICB2eSA9IHIxLmNlbnRlclkgLSByMi5jZW50ZXJZO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbWJpbmVkSGFsZldpZHRocyA9IHIxLmhhbGZXaWR0aCArIHIyLmhhbGZXaWR0aDtcclxuICAgIGNvbWJpbmVkSGFsZkhlaWdodHMgPSByMS5oYWxmSGVpZ2h0ICsgcjIuaGFsZkhlaWdodDtcclxuXHJcbiAgICBpZiAoTWF0aC5hYnModngpIDwgY29tYmluZWRIYWxmV2lkdGhzKSB7XHJcblxyXG4gICAgICAgIGlmIChNYXRoLmFicyh2eSkgPCBjb21iaW5lZEhhbGZIZWlnaHRzKSB7XHJcblxyXG4gICAgICAgICAgICBvdmVybGFwWCA9IGNvbWJpbmVkSGFsZldpZHRocyAtIE1hdGguYWJzKHZ4KTtcclxuICAgICAgICAgICAgb3ZlcmxhcFkgPSBjb21iaW5lZEhhbGZIZWlnaHRzIC0gTWF0aC5hYnModnkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG92ZXJsYXBYID49IG92ZXJsYXBZKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodnkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uID0gXCJ0b3BcIjtcclxuICAgICAgICAgICAgICAgICAgICByMS55ID0gcjEueSArIG92ZXJsYXBZO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb24gPSBcImJvdHRvbVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHIxLnkgPSByMS55IC0gb3ZlcmxhcFk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJvdW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHIxLnZ5ICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZ4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbiA9IFwibGVmdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHIxLnggPSByMS54ICsgb3ZlcmxhcFg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbiA9IFwicmlnaHRcIjtcclxuICAgICAgICAgICAgICAgICAgICByMS54ID0gcjEueCAtIG92ZXJsYXBYO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChib3VuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByMS52eCAqPSAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb2xsaXNpb247XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYm91bmNlT2ZmU3VyZmFjZShvLCBzKSB7XHJcbiAgICBsZXQgZHAxLCBkcDIsXHJcbiAgICAgICAgcDEgPSB7fSxcclxuICAgICAgICBwMiA9IHt9LFxyXG4gICAgICAgIGJvdW5jZSA9IHt9LFxyXG4gICAgICAgIG1hc3MgPSBvLm1hc3MgfHwgMTtcclxuXHJcbiAgICAvLzEuIENhbGN1bGF0ZSB0aGUgY29sbGlzaW9uIHN1cmZhY2UncyBwcm9wZXJ0aWVzXHJcbiAgICAvL0ZpbmQgdGhlIHN1cmZhY2UgdmVjdG9yJ3MgbGVmdCBub3JtYWxcclxuICAgIHMubHggPSBzLnk7XHJcbiAgICBzLmx5ID0gLXMueDtcclxuXHJcbiAgICAvL0ZpbmQgaXRzIG1hZ25pdHVkZVxyXG4gICAgcy5tYWduaXR1ZGUgPSBNYXRoLnNxcnQocy54ICogcy54ICsgcy55ICogcy55KTtcclxuXHJcbiAgICAvL0ZpbmQgaXRzIG5vcm1hbGl6ZWQgdmFsdWVzXHJcbiAgICBzLmR4ID0gcy54IC8gcy5tYWduaXR1ZGU7XHJcbiAgICBzLmR5ID0gcy55IC8gcy5tYWduaXR1ZGU7XHJcblxyXG4gICAgLy8yLiBCb3VuY2UgdGhlIG9iamVjdCAobykgb2ZmIHRoZSBzdXJmYWNlIChzKVxyXG5cclxuICAgIC8vRmluZCB0aGUgZG90IHByb2R1Y3QgYmV0d2VlbiB0aGUgb2JqZWN0IGFuZCB0aGUgc3VyZmFjZVxyXG4gICAgZHAxID0gby52eCAqIHMuZHggKyBvLnZ5ICogcy5keTtcclxuXHJcbiAgICAvL1Byb2plY3QgdGhlIG9iamVjdCdzIHZlbG9jaXR5IG9udG8gdGhlIGNvbGxpc2lvbiBzdXJmYWNlXHJcbiAgICBwMS52eCA9IGRwMSAqIHMuZHg7XHJcbiAgICBwMS52eSA9IGRwMSAqIHMuZHk7XHJcblxyXG4gICAgLy9GaW5kIHRoZSBkb3QgcHJvZHVjdCBvZiB0aGUgb2JqZWN0IGFuZCB0aGUgc3VyZmFjZSdzIGxlZnQgbm9ybWFsIChzLmx4IGFuZCBzLmx5KVxyXG4gICAgZHAyID0gby52eCAqIChzLmx4IC8gcy5tYWduaXR1ZGUpICsgby52eSAqIChzLmx5IC8gcy5tYWduaXR1ZGUpO1xyXG5cclxuICAgIC8vUHJvamVjdCB0aGUgb2JqZWN0J3MgdmVsb2NpdHkgb250byB0aGUgc3VyZmFjZSdzIGxlZnQgbm9ybWFsXHJcbiAgICBwMi52eCA9IGRwMiAqIChzLmx4IC8gcy5tYWduaXR1ZGUpO1xyXG4gICAgcDIudnkgPSBkcDIgKiAocy5seSAvIHMubWFnbml0dWRlKTtcclxuXHJcbiAgICAvL1JldmVyc2UgdGhlIHByb2plY3Rpb24gb24gdGhlIHN1cmZhY2UncyBsZWZ0IG5vcm1hbFxyXG4gICAgcDIudnggKj0gLTE7XHJcbiAgICBwMi52eSAqPSAtMTtcclxuXHJcbiAgICAvL0FkZCB1cCB0aGUgcHJvamVjdGlvbnMgdG8gY3JlYXRlIGEgbmV3IGJvdW5jZSB2ZWN0b3JcclxuICAgIGJvdW5jZS54ID0gcDEudnggKyBwMi52eDtcclxuICAgIGJvdW5jZS55ID0gcDEudnkgKyBwMi52eTtcclxuXHJcbiAgICAvL0Fzc2lnbiB0aGUgYm91bmNlIHZlY3RvciB0byB0aGUgb2JqZWN0J3MgdmVsb2NpdHlcclxuICAgIC8vd2l0aCBvcHRpb25hbCBtYXNzIHRvIGRhbXBlbiB0aGUgZWZmZWN0XHJcbiAgICBvLnZ4ID0gYm91bmNlLnggLyBtYXNzO1xyXG4gICAgby52eSA9IGJvdW5jZS55IC8gbWFzcztcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gbWFrZUNhbnZhcyh3aWR0aCA9IDI1NiwgaGVpZ2h0ID0gMjU2LCBib3JkZXIgPSBcIjFweCBkYXNoZWQgYmxhY2tcIiwgYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiKSB7XHJcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIGNhbnZhcy5zdHlsZS5ib3JkZXIgPSBib3JkZXI7XHJcbiAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG5cclxuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIHJldHVybiB7Y2FudmFzLCBjdHh9O1xyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHtzdGFnZX0gZnJvbSBcIi4vRGlzcGxheU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlciAoY2FudmFzLCBjdHgpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIHN0YWdlLmNoaWxkcmVuLmZvckVhY2goIHNwcml0ZSA9PiB7XHJcbiAgICAgICAgZGlzcGxheVNwcml0ZShzcHJpdGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheVNwcml0ZShzcHJpdGUpIHtcclxuICAgICAgICBpZihcclxuICAgICAgICAgICAgc3ByaXRlLnZpc2libGVcclxuICAgICAgICAgICAgJiYgc3ByaXRlLmd4IDwgY2FudmFzLndpZHRoICsgc3ByaXRlLndpZHRoXHJcbiAgICAgICAgICAgICYmIHNwcml0ZS5neCArIHNwcml0ZS53aWR0aCA+PSAtc3ByaXRlLndpZHRoXHJcbiAgICAgICAgICAgICYmIHNwcml0ZS5neSA8IGNhbnZhcy5oZWlnaHQgKyBzcHJpdGUuaGVpZ2h0XHJcbiAgICAgICAgICAgICYmIHNwcml0ZS5neSArIHNwcml0ZS5oZWlnaHQgPj0gLXNwcml0ZS5oZWlnaHRcclxuICAgICAgICApe1xyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgIHNwcml0ZS54ICsgKHNwcml0ZS53aWR0aCAqIHNwcml0ZS5waXZvdFgpLFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnkgKyAoc3ByaXRlLmhlaWdodCAqIHNwcml0ZS5waXZvdFkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGN0eC5yb3RhdGUoc3ByaXRlLnJvdGF0aW9uKTtcclxuICAgICAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gc3ByaXRlLmFscGhhICogc3ByaXRlLnBhcmVudC5hbHBoYTtcclxuICAgICAgICAgICAgY3R4LnNjYWxlKHNwcml0ZS5zY2FsZVgsIHNwcml0ZS5zY2FsZVkpO1xyXG5cclxuICAgICAgICAgICAgaWYoc3ByaXRlLnNoYWRvdyl7XHJcbiAgICAgICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBzcHJpdGUuc2hhZG93Q29sb3I7XHJcbiAgICAgICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IHNwcml0ZS5zaGFkb3dPZmZzZXRYO1xyXG4gICAgICAgICAgICAgICAgY3R4LnNoYWRvd09mZnNldFkgPSBzcHJpdGUuc2hhZG93T2Zmc2V0WTtcclxuICAgICAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gc3ByaXRlLnNoYWRvd0JsdXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHNwcml0ZS5ibGVuZE1vZGUpe1xyXG4gICAgICAgICAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IHNwcml0ZS5ibGVuZE1vZGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHNwcml0ZS5yZW5kZXIpe1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnJlbmRlcihjdHgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihzcHJpdGUuY2hpbGRyZW4gJiYgc3ByaXRlLmNoaWxkcmVuLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggLXNwcml0ZS53aWR0aCAqIHNwcml0ZS5waXZvdFgsIC1zcHJpdGUuaGVpZ2h0ICogc3ByaXRlLnBpdm90WSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3ByaXRlLmNoaWxkcmVuLmZvckVhY2goIGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U3ByaXRlKGNoaWxkKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcldpdGhJbnRlcnBvbGF0aW9uIChjYW52YXMsIGN0eCwgbGFnT2Zmc2V0KSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICBzdGFnZS5jaGlsZHJlbi5mb3JFYWNoKCBzcHJpdGUgPT4ge1xyXG4gICAgICAgIGRpc3BsYXlTcHJpdGUoc3ByaXRlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlTcHJpdGUoc3ByaXRlKSB7XHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAgIHNwcml0ZS52aXNpYmxlXHJcbiAgICAgICAgICAgICYmIHNwcml0ZS5neCA8IGNhbnZhcy53aWR0aCArIHNwcml0ZS53aWR0aFxyXG4gICAgICAgICAgICAmJiBzcHJpdGUuZ3ggKyBzcHJpdGUud2lkdGggPj0gLXNwcml0ZS53aWR0aFxyXG4gICAgICAgICAgICAmJiBzcHJpdGUuZ3kgPCBjYW52YXMuaGVpZ2h0ICsgc3ByaXRlLmhlaWdodFxyXG4gICAgICAgICAgICAmJiBzcHJpdGUuZ3kgKyBzcHJpdGUuaGVpZ2h0ID49IC1zcHJpdGUuaGVpZ2h0XHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHNwcml0ZS5wcmV2aW91c1gpIHtcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5yZW5kZXJYICA9IChzcHJpdGUueCAtIHNwcml0ZS5wcmV2aW91c1gpICogbGFnT2Zmc2V0ICsgc3ByaXRlLnByZXZpb3VzWDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5yZW5kZXJYID0gc3ByaXRlLnhcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoc3ByaXRlLnByZXZpb3VzWSkge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnJlbmRlclkgID0gKHNwcml0ZS55IC0gc3ByaXRlLnByZXZpb3VzWSkgKiBsYWdPZmZzZXQgKyBzcHJpdGUucHJldmlvdXNZO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnJlbmRlclkgPSBzcHJpdGUueVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnJlbmRlclggKyAoc3ByaXRlLndpZHRoICogc3ByaXRlLnBpdm90WCksXHJcbiAgICAgICAgICAgICAgICBzcHJpdGUucmVuZGVyWSArIChzcHJpdGUuaGVpZ2h0ICogc3ByaXRlLnBpdm90WSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY3R4LnJvdGF0ZShzcHJpdGUucm90YXRpb24pO1xyXG4gICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSBzcHJpdGUuYWxwaGEgKiBzcHJpdGUucGFyZW50LmFscGhhO1xyXG4gICAgICAgICAgICBjdHguc2NhbGUoc3ByaXRlLnNjYWxlWCwgc3ByaXRlLnNjYWxlWSk7XHJcblxyXG4gICAgICAgICAgICBpZihzcHJpdGUuc2hhZG93KXtcclxuICAgICAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IHNwcml0ZS5zaGFkb3dDb2xvcjtcclxuICAgICAgICAgICAgICAgIGN0eC5zaGFkb3dPZmZzZXRYID0gc3ByaXRlLnNoYWRvd09mZnNldFg7XHJcbiAgICAgICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IHNwcml0ZS5zaGFkb3dPZmZzZXRZO1xyXG4gICAgICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSBzcHJpdGUuc2hhZG93Qmx1cjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoc3ByaXRlLmJsZW5kTW9kZSl7XHJcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gc3ByaXRlLmJsZW5kTW9kZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoc3ByaXRlLnJlbmRlcil7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHNwcml0ZS5jaGlsZHJlbiAmJiBzcHJpdGUuY2hpbGRyZW4ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCAtc3ByaXRlLndpZHRoICogc3ByaXRlLnBpdm90WCwgLXNwcml0ZS5oZWlnaHQgKiBzcHJpdGUucGl2b3RZKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuY2hpbGRyZW4uZm9yRWFjaCggY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTcHJpdGUoY2hpbGQpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtncm91cH0gZnJvbSBcIi4vR3JvdXBcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmcmFtZShzb3VyY2UsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGxldCBvYmogPSB7fTtcclxuICAgIG9iai5pbWFnZSA9IHNvdXJjZTtcclxuICAgIG9iai54ID0geDtcclxuICAgIG9iai55ID0geTtcclxuICAgIG9iai53aWR0aD0gd2lkdGg7XHJcbiAgICBvYmouaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmcmFtZXMgKHNvdXJjZSwgYXJyYXlPZlBvc2l0aW9ucywgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgbGV0IG9iaiA9IHt9O1xyXG4gICAgb2JqLmltYWdlID0gc291cmNlO1xyXG4gICAgb2JqLmRhdGEgPSBhcnJheU9mUG9zaXRpb25zO1xyXG4gICAgb2JqLndpZHRoPSB3aWR0aDtcclxuICAgIG9iai5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlKC4uLnNwcml0ZXNUb1JlbW92ZSkge1xyXG4gICAgc3ByaXRlc1RvUmVtb3ZlLmZvckVhY2goIHNwcml0ZSA9PiB7XHJcbiAgICAgICAgc3ByaXRlLnBhcmVudC5yZW1vdmVDaGlsZChzcHJpdGUpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnQobWF4LCBtaW4pIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XHJcblxyXG4vLyBleHBvcnQgbGV0IGNvbGxpc2lvbiA9IGNvbnRhaW4oc3ByaXRlLCBib3VuZHMsIGJvdW5jZSwgY2FsbGJhY2tGdW5jdGlvbik7XHJcbmV4cG9ydCBmdW5jdGlvbiBjb250YWluKHNwcml0ZSwgYm91bmRzLCBib3VuY2UgPSBmYWxzZSwgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcclxuICAgIGxldCB4ID0gYm91bmRzLngsXHJcbiAgICAgICAgeSA9IGJvdW5kcy55LFxyXG4gICAgICAgIHdpZHRoID0gYm91bmRzLndpZHRoLFxyXG4gICAgICAgIGhlaWdodCA9IGJvdW5kcy5oZWlnaHQ7XHJcblxyXG4gICAgbGV0IGNvbGxpc2lvbjtcclxuICAgIGlmKHNwcml0ZS54IDwgeCkge1xyXG4gICAgICAgIGlmKGJvdW5jZSl7XHJcbiAgICAgICAgICAgIHNwcml0ZS52eCAqPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc3ByaXRlLm1hc3Mpe1xyXG4gICAgICAgICAgICBzcHJpdGUudnggLz0gc3ByaXRlLm1hc3NcclxuICAgICAgICB9XHJcbiAgICAgICAgc3ByaXRlLnggPSB4O1xyXG4gICAgICAgIGNvbGxpc2lvbiA9IFwibGVmdFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHNwcml0ZS55IDwgeSkge1xyXG4gICAgICAgIGlmKGJvdW5jZSl7XHJcbiAgICAgICAgICAgIHNwcml0ZS52eSAqPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc3ByaXRlLm1hc3Mpe1xyXG4gICAgICAgICAgICBzcHJpdGUudnkgLz0gc3ByaXRlLm1hc3NcclxuICAgICAgICB9XHJcbiAgICAgICAgc3ByaXRlLnkgPSB5O1xyXG4gICAgICAgIGNvbGxpc2lvbiA9IFwidG9wXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc3ByaXRlLnggKyBzcHJpdGUud2lkdGggPiB3aWR0aCkge1xyXG4gICAgICAgIGlmKGJvdW5jZSl7XHJcbiAgICAgICAgICAgIHNwcml0ZS52eCAqPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc3ByaXRlLm1hc3Mpe1xyXG4gICAgICAgICAgICBzcHJpdGUudnggLz0gc3ByaXRlLm1hc3NcclxuICAgICAgICB9XHJcbiAgICAgICAgc3ByaXRlLnggPSB3aWR0aCAtIHNwcml0ZS53aWR0aDtcclxuICAgICAgICBjb2xsaXNpb24gPSBcInJpZ2h0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc3ByaXRlLnkgKyBzcHJpdGUuaGVpZ2h0ID4gd2lkdGgpIHtcclxuICAgICAgICBpZihib3VuY2Upe1xyXG4gICAgICAgICAgICBzcHJpdGUudnkgKj0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHNwcml0ZS5tYXNzKXtcclxuICAgICAgICAgICAgc3ByaXRlLnZ5IC89IHNwcml0ZS5tYXNzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwcml0ZS55ID0gaGVpZ2h0IC0gc3ByaXRlLmhlaWdodDtcclxuICAgICAgICBjb2xsaXNpb24gPSBcImJvdHRvbVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGNvbGxpc2lvbiAmJiBjYWxsYmFjayl7XHJcbiAgICAgICAgY2FsbGJhY2soY29sbGlzaW9uKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29sbGlzaW9uO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZVByZXZpb3VzUG9zaXRpb25zKHN0YWdlKSB7XHJcbiAgICBzdGFnZS5jaGlsZHJlbi5mb3JFYWNoKCBzcHJpdGUgPT4ge1xyXG4gICAgICAgIHNldFByZXZpb3VzUG9zaXRpb24oc3ByaXRlKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFByZXZpb3VzUG9zaXRpb24oc3ByaXRlKSB7XHJcbiAgICBzcHJpdGUucHJldmlvdXNYID0gc3ByaXRlLng7XHJcbiAgICBzcHJpdGUucHJldmlvdXNZID0gc3ByaXRlLnk7XHJcblxyXG4gICAgaWYoc3ByaXRlLmNoaWxkcmVuICYmIHNwcml0ZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc3ByaXRlLmNoaWxkcmVuLmZvckVhY2goIGNoaWxkID0+IHtcclxuICAgICAgICAgICAgc2V0UHJldmlvdXNQb3NpdGlvbihjaGlsZClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24ga2V5Ym9hcmQoa2V5Q29kZSl7XHJcbiAgICBsZXQga2V5ID0ge307XHJcbiAgICBrZXkuY29kZSA9IGtleUNvZGU7XHJcbiAgICBrZXkuaXNEb3duID0gZmFsc2U7XHJcbiAgICBrZXkuaXNVcCA9IHRydWU7XHJcbiAgICBrZXkucHJlc3MgPSB1bmRlZmluZWQ7XHJcbiAgICBrZXkucmVsZWFzZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBrZXkuZG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZihldmVudC5rZXlDb2RlID09PSBrZXkuY29kZSkge1xyXG4gICAgICAgICAgICBpZihrZXkuaXNVcCAmJiBrZXkucHJlc3Mpe1xyXG4gICAgICAgICAgICAgICAga2V5LnByZXNzKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBrZXkuaXNEb3duID0gdHJ1ZTtcclxuICAgICAgICAgICAga2V5LmlzVXAgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH07XHJcblxyXG4gICAga2V5LnVwSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IGtleS5jb2RlKSB7XHJcbiAgICAgICAgICAgIGlmKGtleS5pc0Rvd24gJiYga2V5LnJlbGVhc2Upe1xyXG4gICAgICAgICAgICAgICAga2V5LnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBrZXkuaXNEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGtleS5pc1VwID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleS5kb3duSGFuZGxlci5iaW5kKGtleSksIGZhbHNlKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5LnVwSGFuZGxlci5iaW5kKGtleSksIGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4ga2V5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZVBvaW50ZXIoZWxlbWVudCwgc2NhbGUgPSAxKSB7XHJcbiAgICBsZXQgcG9pbnRlciA9IHtcclxuICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgIHNjYWxlOiBzY2FsZSxcclxuXHJcbiAgICAgICAgX3g6IDAsXHJcbiAgICAgICAgX3k6IDAsXHJcbiAgICAgICAgZHJhZ1Nwcml0ZTogbnVsbCxcclxuICAgICAgICBkcmFnT2Zmc2V0WDogMCxcclxuICAgICAgICBkcmFnT2Zmc2V0WTogMCxcclxuXHJcbiAgICAgICAgZ2V0IHgoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl94L3RoaXMuc2NhbGU7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0IHkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl95L3RoaXMuc2NhbGU7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0IGNlbnRlclgoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLng7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0IGNlbnRlclkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0IHBvc2l0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge3g6IHRoaXMueCwgeTogdGhpcy55fTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpc0Rvd246IGZhbHNlLFxyXG4gICAgICAgIGlzVXA6IHRydWUsXHJcbiAgICAgICAgdGFwOiB1bmRlZmluZWQsXHJcblxyXG4gICAgICAgIG1vdmVIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5feCA9IChldmVudC5wYWdlWCAtIGVsZW1lbnQub2Zmc2V0TGVmdCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3kgPSAoZXZlbnQucGFnZVkgLSBlbGVtZW50Lm9mZnNldFRvcCk7XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRvdWNobW92ZUhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl94ID0gKGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVggLSBlbGVtZW50Lm9mZnNldExlZnQpO1xyXG4gICAgICAgICAgICB0aGlzLl95ID0gKGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgLSBlbGVtZW50Lm9mZnNldFRvcCk7XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRvd25IYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1VwID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudGFwcGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRvd25UaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgaWYodGhpcy5wcmVzcyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXNzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB0b3VjaHN0YXJ0SGFuZGxlcihldmVudCkge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgdGhpcy5feCA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVggLSBlbGVtZW50Lm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3kgPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIC0gZWxlbWVudC5vZmZzZXRUb3A7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzRG93biA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNVcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnRhcHBlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kb3duVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucHJlc3Mpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzcygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1cEhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IE1hdGguYWJzKHRoaXMuZG93blRpbWUgLSBEYXRlLm5vdygpKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZWxhcHNlZFRpbWUgPD0gMjAwICYmIHRoaXMudGFwcGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXBwZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy50YXApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzVXAgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5yZWxlYXNlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRvdWNoZW5kSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gTWF0aC5hYnModGhpcy5kb3duVGltZSAtIERhdGUubm93KCkpO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5lbGFwc2VkVGltZSA8PSAyMDAgJiYgdGhpcy50YXBwZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcHBlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnRhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzVXAgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5yZWxlYXNlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhpdFRlc3RTcHJpdGUoc3ByaXRlKSB7XHJcbiAgICAgICAgICAgIGxldCBoaXQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFzcHJpdGUuY2lyY3VsYXIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsZWZ0ID0gc3ByaXRlLmd4LFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gc3ByaXRlLmd4ICsgc3ByaXRlLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHNwcml0ZS5neSxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b20gPSBzcHJpdGUuZ3kgKyBzcHJpdGUuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIGhpdCA9IHRoaXMueCA+IGxlZnQgJiYgdGhpcy54IDwgcmlnaHQgJiYgdGhpcy55ID4gdG9wICYmIHRoaXMueSA8IGJvdHRvbTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCB2eCA9IHRoaXMueCAtIChzcHJpdGUuZ3ggKyBzcHJpdGUucmFkaXVzKSxcclxuICAgICAgICAgICAgICAgICAgICB2eSA9IHRoaXMueSAtIChzcHJpdGUuZ3kgKyBzcHJpdGUucmFkaXVzKSxcclxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguc3FydCh2eCoqMiArIHZ5KioyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBoaXQgPSBkaXN0YW5jZSA8IHNwcml0ZS5yYWRpdXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBoaXQ7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdXBkYXRlRHJhZ0FuZERyb3AoZHJhZ2dhYmxlU3ByaXRlcykge1xyXG4gICAgICAgICAgICBpZih0aGlzLmlzRG93bikge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kcmFnU3ByaXRlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gZHJhZ2dhYmxlU3ByaXRlcy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNwcml0ZSA9IGRyYWdnYWJsZVNwcml0ZXNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzcHJpdGUudmlzaWJsZSA9PT0gZmFsc2UgfHwhY2hlY2tQYXJlbnRWaXNpYmlsaXR5KHNwcml0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmhpdFRlc3RTcHJpdGUoc3ByaXRlKSAmJiBzcHJpdGUuZHJhZ2dhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdPZmZzZXRYID0gdGhpcy54IC0gc3ByaXRlLmd4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnT2Zmc2V0WSA9IHRoaXMueSAtIHNwcml0ZS5neTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1Nwcml0ZSA9IHNwcml0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBzcHJpdGUucGFyZW50LmNoaWxkcmVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4uc3BsaWNlKGNoaWxkcmVuLmluZGV4T2Yoc3ByaXRlKSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKHNwcml0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlU3ByaXRlcy5zcGxpY2UoZHJhZ2dhYmxlU3ByaXRlcy5pbmRleE9mKHNwcml0ZSksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlU3ByaXRlcy5wdXNoKHNwcml0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1Nwcml0ZS54ID0gdGhpcy54IC0gdGhpcy5kcmFnT2Zmc2V0WDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdTcHJpdGUueSA9IHRoaXMueSAtIHRoaXMuZHJhZ09mZnNldFk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNVcCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnU3ByaXRlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZHJhZ2dhYmxlU3ByaXRlcy5zb21lKHNwcml0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgIGlmKFxyXG4gICAgICAgICAgICAgICAgICAgdGhpcy5oaXRUZXN0U3ByaXRlKHNwcml0ZSkgJiZcclxuICAgICAgICAgICAgICAgICAgIHNwcml0ZS5kcmFnZ2FibGUgJiZcclxuICAgICAgICAgICAgICAgICAgIHNwcml0ZS52aXNpYmxlICYmXHJcbiAgICAgICAgICAgICAgICAgICBjaGVja1BhcmVudFZpc2liaWxpdHkoc3ByaXRlKVxyXG4gICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmN1cnNvciA9IFwiYXV0b1wiO1xyXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHBvaW50ZXIubW92ZUhhbmRsZXIuYmluZChwb2ludGVyKSwgZmFsc2UpO1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHBvaW50ZXIuZG93bkhhbmRsZXIuYmluZChwb2ludGVyKSwgZmFsc2UpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBwb2ludGVyLnVwSGFuZGxlci5iaW5kKHBvaW50ZXIpLCBmYWxzZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHBvaW50ZXIudG91Y2hlbmRIYW5kbGVyLmJpbmQocG9pbnRlciksIGZhbHNlKTtcclxuXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgcG9pbnRlci50b3VjaG1vdmVIYW5kbGVyLmJpbmQocG9pbnRlciksIGZhbHNlKTtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgcG9pbnRlci50b3VjaHN0YXJ0SGFuZGxlci5iaW5kKHBvaW50ZXIpLCBmYWxzZSk7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS50b3VjaEFjdGlvbiA9IFwibm9uZVwiO1xyXG5cclxuICAgIHJldHVybiBwb2ludGVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2UoczEsIHMyKSB7XHJcbiAgICBsZXQgdnggPSBzMi5jZW50ZXJYIC0gczEuY2VudGVyWDtcclxuICAgIGxldCB2eSA9IHMyLmNlbnRlclkgLSBzMS5jZW50ZXJZO1xyXG5cclxuICAgIHJldHVybiBNYXRoLnNxcnQodngqKjIgKyB2eSoqMik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb2xsb3dFYXNlKGZvbGxvd2VyLCBsZWFkZXIsIHNwZWVkKSB7XHJcbiAgICBsZXQgdnggPSBsZWFkZXIuY2VudGVyWCAtIGZvbGxvd2VyLmNlbnRlclg7XHJcbiAgICBsZXQgdnkgPSBsZWFkZXIuY2VudGVyWSAtIGZvbGxvd2VyLmNlbnRlclk7XHJcbiAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQodngqKjIgKyB2eSoqMik7XHJcblxyXG4gICAgaWYoZGlzdGFuY2UgPj0gMSkge1xyXG4gICAgICAgIGZvbGxvd2VyLnggKz0gdnggKiBzcGVlZDtcclxuICAgICAgICBmb2xsb3dlci55ICs9IHZ5ICogc3BlZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb2xsb3dDb25zdGFudChmb2xsb3dlciwgbGVhZGVyLCBzcGVlZCkge1xyXG4gICAgbGV0IHZ4ID0gbGVhZGVyLmNlbnRlclggLSBmb2xsb3dlci5jZW50ZXJYO1xyXG4gICAgbGV0IHZ5ID0gbGVhZGVyLmNlbnRlclkgLSBmb2xsb3dlci5jZW50ZXJZO1xyXG4gICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KHZ4KioyICsgdnkqKjIpO1xyXG5cclxuICAgIGlmKGRpc3RhbmNlID49IHNwZWVkKSB7XHJcbiAgICAgICAgZm9sbG93ZXIueCArPSAodnggLyBkaXN0YW5jZSkgKiBzcGVlZDtcclxuICAgICAgICBmb2xsb3dlci55ICs9ICh2eSAvIGRpc3RhbmNlKSAqIHNwZWVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW5nbGUoczEsIHMyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5hdGFuMihzMi5jZW50ZXJZIC0gczEuY2VudGVyWSwgczIuY2VudGVyWCAtIHMxLmNlbnRlclgpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVTcHJpdGUocm90YXRpbmdTcHJpdGUsIGNlbnRlclNwcml0ZSwgZGlzdGFuY2UsIGFuZ2xlKSB7XHJcbiAgICByb3RhdGluZ1Nwcml0ZS54ID0gY2VudGVyU3ByaXRlLmNlbnRlclggLSByb3RhdGluZ1Nwcml0ZS5wYXJlbnQueCArXHJcbiAgICAgICAgKyAoZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkpIC0gcm90YXRpbmdTcHJpdGUuaGFsZldpZHRoO1xyXG5cclxuICAgIHJvdGF0aW5nU3ByaXRlLnkgPSBjZW50ZXJTcHJpdGUuY2VudGVyWSAtIHJvdGF0aW5nU3ByaXRlLnBhcmVudC55ICtcclxuICAgICAgICArIChkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSkgLSByb3RhdGluZ1Nwcml0ZS5oYWxmV2lkdGg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVQb2ludChwb2ludFgsIHBvaW50WSwgZGlzdGFuY2VYLCBkaXN0YW5jZVksIGFuZ2xlKSB7XHJcbiAgICBsZXQgcG9pbnQgPSB7fTtcclxuICAgIHBvaW50LnggPSBwb2ludFggKyBNYXRoLmNvcyhhbmdsZSkgKiBkaXN0YW5jZVg7XHJcbiAgICBwb2ludC55ID0gcG9pbnRZICsgTWF0aC5zaW4oYW5nbGUpICogZGlzdGFuY2VZO1xyXG4gICAgcmV0dXJuIHBvaW50XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1BhcmVudFZpc2liaWxpdHkoc3ByaXRlKXtcclxuICAgIGxldCB2aXNpYmxlID0gdHJ1ZTtcclxuICAgIGxldCBjdXJyZW50ID0gc3ByaXRlO1xyXG4gICAgd2hpbGUoY3VycmVudC5wYXJlbnQpe1xyXG4gICAgICAgIGlmKGN1cnJlbnQucGFyZW50LnZpc2libGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2aXNpYmxlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvb3Qoc2hvb3RlciwgYW5nbGUsIG9mZnNldEZyb21DZW50ZXIsIGJ1bGxldFNwZWVkLCBidWxsZXRBcnJheSwgYnVsbGV0U3ByaXRlKSB7XHJcbiAgICBsZXQgYnVsbGV0ID0gYnVsbGV0U3ByaXRlKCk7XHJcblxyXG4gICAgYnVsbGV0LnggPSBzaG9vdGVyLmNlbnRlclggLSBidWxsZXQuaGFsZldpZHRoICsgKG9mZnNldEZyb21DZW50ZXIgKiBNYXRoLmNvcyhhbmdsZSkpO1xyXG4gICAgYnVsbGV0LnkgPSBzaG9vdGVyLmNlbnRlclkgLSBidWxsZXQuaGFsZkhlaWdodCArIChvZmZzZXRGcm9tQ2VudGVyICogTWF0aC5zaW4oYW5nbGUpKTtcclxuXHJcbiAgICBidWxsZXQudnggPSBNYXRoLmNvcyhhbmdsZSkgKiBidWxsZXRTcGVlZDtcclxuICAgIGJ1bGxldC52eSA9IE1hdGguc2luKGFuZ2xlKSAqIGJ1bGxldFNwZWVkO1xyXG5cclxuICAgIGJ1bGxldEFycmF5LnB1c2goYnVsbGV0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG91dHNpZGVCb3VuZHMoc3ByaXRlLCBib3VuZHMsIGV4dHJhID0gdW5kZWZpbmVkKSB7XHJcbiAgICBsZXQgeCA9IGJvdW5kcy54LFxyXG4gICAgICAgIHkgPSBib3VuZHMueSxcclxuICAgICAgICB3aWR0aCA9IGJvdW5kcy53aWR0aCxcclxuICAgICAgICBoZWlnaHQgPSBib3VuZHMuaGVpZ2h0O1xyXG5cclxuICAgIGxldCBjb2xsaXNpb247XHJcblxyXG4gICAgaWYoc3ByaXRlLnggPCB4IC0gc3ByaXRlLndpZHRoKSB7XHJcbiAgICAgICAgY29sbGlzaW9uID0gXCJsZWZ0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc3ByaXRlLnkgPCB5IC0gc3ByaXRlLndpZHRoKSB7XHJcbiAgICAgICAgY29sbGlzaW9uID0gXCJ0b3BcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZihzcHJpdGUueCA+IHdpZHRoKSB7XHJcbiAgICAgICAgY29sbGlzaW9uID0gXCJyaWdodFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHNwcml0ZS55ID4gaGVpZ2h0KSB7XHJcbiAgICAgICAgY29sbGlzaW9uID0gXCJib3R0b21cIjtcclxuICAgIH1cclxuXHJcbiAgICBpZihjb2xsaXNpb24gJiYgZXh0cmEpIHtcclxuICAgICAgICBleHRyYSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb2xsaXNpb247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBncmlkKFxyXG4gICAgY29sdW1ucyA9IDAsIHJvd3MgPSAwLCBjZWxsV2lkdGggPSAzMiwgY2VsbEhlaWdodCA9IDMyLFxyXG4gICAgY2VudGVyQ2VsbCA9IGZhbHNlLCB4T2Zmc2V0ID0gMCwgeU9mZnNldCA9IDAsXHJcbiAgICBtYWtlU3ByaXRlID0gdW5kZWZpbmVkLFxyXG4gICAgZXh0cmEgPSB1bmRlZmluZWRcclxuKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZ3JvdXAoKTtcclxuICAgIGxldCBjcmVhdGVHcmlkID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBsZW5ndGggPSBjb2x1bW5zICogcm93cztcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gKGkgJSBjb2x1bW5zKSAqIGNlbGxXaWR0aDtcclxuICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKGkgLyBjb2x1bW5zKSAqIGNlbGxIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3ByaXRlID0gbWFrZVNwcml0ZSgpO1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHNwcml0ZSk7XHJcblxyXG4gICAgICAgICAgICBpZighY2VudGVyQ2VsbCkge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnggPSB4ICsgeE9mZnNldDtcclxuICAgICAgICAgICAgICAgIHNwcml0ZS55ID0geSArIHlPZmZzZXQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUueCA9IHggKyAoY2VsbFdpZHRoIC8gMikgLSBzcHJpdGUuaGFsZldpZHRoICsgeE9mZnNldDtcclxuICAgICAgICAgICAgICAgIHNwcml0ZS55ID0geSArIChjZWxsSGVpZ2h0IC8gMikgLSBzcHJpdGUuaGFsZkhlaWdodCArIHlPZmZzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGV4dHJhKSB7XHJcbiAgICAgICAgICAgICAgICBleHRyYSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjcmVhdGVHcmlkKCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufSIsImltcG9ydCB7U2NlbmVzTWFuYWdlcn0gZnJvbSBcIi4vc2NlbmVzL2FsbFNjZW5lc1wiO1xuXG5pbXBvcnQge2Fzc2V0c30gZnJvbSBcIi4vY3VzdG9tUGl4aS9hc3NldHNcIjtcbmltcG9ydCB7bWFrZUNhbnZhc30gZnJvbSBcIi4vY3VzdG9tUGl4aS9tYWtlQ2FudmFzXCI7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSBcIi4vY3VzdG9tUGl4aS9yZW5kZXJcIjtcbmltcG9ydCB7c3RhZ2V9IGZyb20gXCIuL2N1c3RvbVBpeGkvRGlzcGxheU9iamVjdFwiO1xuaW1wb3J0IHtBY2NlbGVyYXRpb25BbmRGcmljdGlvbkJhbGx9IGZyb20gXCIuL3NjZW5lcy9hY2NlbGVyYXRpb25BbmRGcmljdGlvbkJhbGxcIjtcbmltcG9ydCB7QmFsbFdpdGhHcmF2aXR5fSBmcm9tIFwiLi9zY2VuZXMvYmFsbFdpdGhHcmF2aXR5XCI7XG5pbXBvcnQge0NvbnN0YW50U3BlZWRGb2xsb3dpbmd9IGZyb20gXCIuL3NjZW5lcy9jb25zdGFudFNwZWVkRm9sbG93aW5nXCI7XG5pbXBvcnQge1JvdGF0ZUFyb3VuZFNwcml0ZX0gZnJvbSBcIi4vc2NlbmVzL3JvdGF0ZUFyb3VuZFNwcml0ZVwiO1xuaW1wb3J0IHtSb3RhdGVBcm91bmRQb2ludH0gZnJvbSBcIi4vc2NlbmVzL3JvdGF0ZUFyb3VuZFBvaW50XCI7XG5pbXBvcnQge1Rhbmt9IGZyb20gXCIuL3NjZW5lcy90YW5rXCI7XG5pbXBvcnQge0NyZWF0ZUJ1dHRvbn0gZnJvbSBcIi4vc2NlbmVzL2NyZWF0ZUJ1dHRvblwiO1xuaW1wb3J0IHtJbnRlcmFjdGl2ZVNwcml0ZX0gZnJvbSBcIi4vc2NlbmVzL2ludGVyYWN0aXZlU3ByaXRlXCI7XG5pbXBvcnQge0RyYWdBbmREcm9wfSBmcm9tIFwiLi9zY2VuZXMvZHJhZ0FuZERyb3BcIjtcbmltcG9ydCB7VHJlYXN1cmVIdW50ZXJ9IGZyb20gXCIuL3NjZW5lcy90cmVhc3VyZUh1bnRlclwiO1xuaW1wb3J0IHtQb2ludEFuZFNoYXBlQ29sbGlzaW9ufSBmcm9tIFwiLi9zY2VuZXMvcG9pbnRBbmRTaGFwZUNvbGxpc2lvblwiO1xuaW1wb3J0IHtSZWN0Q29sbGlzaW9ufSBmcm9tIFwiLi9zY2VuZXMvcmVjdENvbGxpc2lvblwiO1xuaW1wb3J0IHtDaXJjbGVDb2xsaXNpb259IGZyb20gXCIuL3NjZW5lcy9jaXJjbGVDb2xsaXNpb25cIjtcbmltcG9ydCB7TW92aW5nQ2lyY2xlc0NvbGxpc2lvbn0gZnJvbSBcIi4vc2NlbmVzL21vdmluZ0NpcmNsZXNDb2xsaXNpb25cIjtcbmltcG9ydCB7TW92aW5nQW5kU3RhdENpcmNsZXN9IGZyb20gXCIuL3NjZW5lcy9tb3ZpbmdBbmRTdGF0Q2lyY2xlc1wiO1xuaW1wb3J0IHtSZWN0YW5nbGVQdXNofSBmcm9tIFwiLi9zY2VuZXMvcmVjdGFuZ2xlUHVzaFwiO1xuXG5cbmV4cG9ydCBsZXQge2NhbnZhcywgY3R4fSA9IG1ha2VDYW52YXMoNTEyLCA1MTIpO1xuYXNzZXRzLmxvYWQoW1xuICAgIFwic3JjL2ltZy90cmVhc3VyZUh1bnRlci5qc29uXCIsXG4gICAgXCJzcmMvZm9udHMvcHV6emxlci5vdGZcIixcbiAgICBcInNyYy9pbWcvbWFyYmxlcy5wbmdcIixcbiAgICBcInNyYy9pbWcvYnV0dG9uLmpzb25cIixcbiAgICBcInNyYy9mb250cy9wdXp6bGVyLm90ZlwiLFxuICAgIFwic3JjL2ltZy9hdmVuZ2Vycy5qc29uXCJdKVxuICAgIC50aGVuKCgpID0+IHN0YXJ0KCkpO1xuXG5cbmNvbnN0IHNjZW5lc0NvbmZpZyA9IFtcbiAgICB7bGFiZWw6IFwiQWNjZWxlcmF0aW9uIGFuZCBmcmljdGlvbiBiYWxsXCIsIGlkOiBcImFjY2VsZXJhdGlvbkFuZEZyaWN0aW9uQmFsbFwiLCBjb25zdHJ1Y3RvcjogQWNjZWxlcmF0aW9uQW5kRnJpY3Rpb25CYWxsfSxcbiAgICB7bGFiZWw6IFwiQmFsbCB3aXRoIGdyYXZpdHlcIiwgaWQ6IFwiYmFsbFdpdGhHcmF2aXR5XCIsIGNvbnN0cnVjdG9yOiBCYWxsV2l0aEdyYXZpdHl9LFxuICAgIHtsYWJlbDogXCJDb25zdGFudCBzcGVlZCBmb2xsb3dpbmdcIiwgaWQ6IFwiY29uc3RhbnRTcGVlZEZvbGxvd2luZ1wiLCBjb25zdHJ1Y3RvcjogQ29uc3RhbnRTcGVlZEZvbGxvd2luZ30sXG4gICAge2xhYmVsOiBcIlJvdGF0ZSBhcm91bmQgYSBzcHJpdGVcIiwgaWQ6IFwicm90YXRlQXJvdW5kU3ByaXRlXCIsIGNvbnN0cnVjdG9yOiBSb3RhdGVBcm91bmRTcHJpdGV9LFxuICAgIHtsYWJlbDogXCJSb3RhdGUgYXJvdW5kIGEgcG9pbnRcIiwgaWQ6IFwicm90YXRlQXJvdW5kUG9pbnRcIiwgY29uc3RydWN0b3I6IFJvdGF0ZUFyb3VuZFBvaW50fSxcbiAgICB7bGFiZWw6IFwiQ3JlYXRlIHRhbmtcIiwgaWQ6IFwidGFua1wiLCBjb25zdHJ1Y3RvcjogVGFua30sXG4gICAge2xhYmVsOiBcIkNyZWF0ZSBidXR0b25cIiwgaWQ6IFwiY3JlYXRlQnV0dG9uXCIsIGNvbnN0cnVjdG9yOiBDcmVhdGVCdXR0b259LFxuICAgIHtsYWJlbDogXCJJbnRlcmFjdGl2ZSBzcHJpdGVcIiwgaWQ6IFwiaW50ZXJhY3RpdmVTcHJpdGVcIiwgY29uc3RydWN0b3I6IEludGVyYWN0aXZlU3ByaXRlfSxcbiAgICB7bGFiZWw6IFwiRHJhZyBhbmQgZHJvcFwiLCBpZDogXCJkcmFnQW5kRHJvcFwiLCBjb25zdHJ1Y3RvcjogRHJhZ0FuZERyb3B9LFxuICAgIHtsYWJlbDogXCJUcmVhc3VyZSBodW50ZXJcIiwgaWQ6IFwidHJlYXN1cmVIdW50ZXJcIiwgY29uc3RydWN0b3I6IFRyZWFzdXJlSHVudGVyfSxcbiAgICB7bGFiZWw6IFwiQ29sbGlzaW9uIGJldHdlZW4gcG9pbnQgYW5kIHNoYXBlXCIsIGlkOiBcInBvaW50QW5kU2hhcGVDb2xsaXNpb25cIiwgY29uc3RydWN0b3I6IFBvaW50QW5kU2hhcGVDb2xsaXNpb259LFxuICAgIHtsYWJlbDogXCJDb2xsaXNpb24gYmV0d2VlbiByZWN0YW5nbGVzXCIsIGlkOiBcInJlY3RDb2xsaXNpb25cIiwgY29uc3RydWN0b3I6IFJlY3RDb2xsaXNpb259LFxuICAgIHtsYWJlbDogXCJSZWN0YW5nbGUgcHVzaFwiLCBpZDogXCJyZWN0YW5nbGVQdXNoXCIsIGNvbnN0cnVjdG9yOiBSZWN0YW5nbGVQdXNofSxcbiAgICB7bGFiZWw6IFwiQ29sbGlzaW9uIGJldHdlZW4gY2lyY2xlc1wiLCBpZDogXCJjaXJjbGVDb2xsaXNpb25cIiwgY29uc3RydWN0b3I6IENpcmNsZUNvbGxpc2lvbn0sXG4gICAge2xhYmVsOiBcIk1vdmluZyBjaXJjbGVzIGNvbGxpc2lvblwiLCBpZDogXCJtb3ZpbmdDaXJjbGVzQ29sbGlzaW9uXCIsIGNvbnN0cnVjdG9yOiBNb3ZpbmdDaXJjbGVzQ29sbGlzaW9ufSxcbiAgICB7bGFiZWw6IFwiTW92aW5nIGFuZCBzdGF0IGNpcmNsZXMgY29sbGlzaW9uXCIsIGlkOiBcIm1vdmluZ0FuZFN0YXRDaXJjbGVzXCIsIGNvbnN0cnVjdG9yOiBNb3ZpbmdBbmRTdGF0Q2lyY2xlc31cbl07XG5cbi8vVGhpcyBgc2V0dXBgIGZ1bmN0aW9uIHdpbGwgcnVuIHdoZW4gdGhlIGltYWdlIGhhcyBsb2FkZWRcbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHN0YWdlLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgIHN0YWdlLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgICBjb25zdCBzY2VuZXNNYW5hZ2VyID0gbmV3IFNjZW5lc01hbmFnZXIoc3RhZ2UsIHNjZW5lc0NvbmZpZyk7XG4gICAgY29uc3Qgc2NlbmVTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NlbmVTZWxlY3RcIik7XG5cbiAgICBzY2VuZVNlbGVjdG9yLm9uY2hhbmdlID0gZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkU2NlbmUgPSBzY2VuZVNlbGVjdG9yLnZhbHVlO1xuXG4gICAgICAgIHNjZW5lc01hbmFnZXIuaGlkZUFsbCgpO1xuXG4gICAgICAgIGlmKHNjZW5lc01hbmFnZXJbc2VsZWN0ZWRTY2VuZV0pe1xuICAgICAgICAgICAgc2NlbmVzTWFuYWdlci5zaG93U2NlbmUoc2VsZWN0ZWRTY2VuZSk7XG4gICAgICAgICAgICBzdGF0ZSA9IHNjZW5lc01hbmFnZXIuZ2V0U2NlbmVVcGRhdGVGdW5jKHNlbGVjdGVkU2NlbmUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGZ1bmN0aW9uIHN0YXRlKCl7XG4gICAgICAgICAgICAgICAgLy9zdHViLCB0byBiZSBvdmVycmlkZGVuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZ2FtZUxvb3AoKTtcblxuICAgIGZ1bmN0aW9uIHN0YXRlKCl7XG4gICAgICAgIC8vc3R1YiwgdG8gYmUgb3ZlcnJpZGRlblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgICAgICBzdGF0ZSgpO1xuICAgICAgICByZW5kZXIoY2FudmFzLCBjdHgpXG4gICAgfVxuXG59XG4iLCJpbXBvcnQge2dyb3VwfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9Hcm91cFwiO1xyXG5pbXBvcnQge2NhbnZhc30gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCB7Y2lyY2xlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9DaXJjbGVcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQWNjZWxlcmF0aW9uQW5kRnJpY3Rpb25CYWxsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB0aGlzLmJhbGwgPSBjaXJjbGUoMzIsXCJncmF5XCIsIFwiYmxhY2tcIiwgMiwgMTYwLCAxODApO1xyXG5cclxuICAgICAgICB0aGlzLmJhbGwudnggPSAwO1xyXG4gICAgICAgIHRoaXMuYmFsbC52eSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuYmFsbC5hY2NlbGVyYXRpb25YID0gMC4zO1xyXG4gICAgICAgIHRoaXMuYmFsbC5hY2NlbGVyYXRpb25ZID0gLTAuMztcclxuICAgICAgICB0aGlzLmJhbGwuZnJpY3Rpb25YID0gMTtcclxuICAgICAgICB0aGlzLmJhbGwuZnJpY3Rpb25ZID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGdyb3VwKHRoaXMuYmFsbCk7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKXtcclxuICAgICAgICB0aGlzLmJhbGwudnggKz0gdGhpcy5iYWxsLmFjY2VsZXJhdGlvblg7XHJcbiAgICAgICAgdGhpcy5iYWxsLnZ5ICs9IHRoaXMuYmFsbC5hY2NlbGVyYXRpb25ZO1xyXG5cclxuICAgICAgICB0aGlzLmJhbGwudnggKj0gdGhpcy5iYWxsLmZyaWN0aW9uWDtcclxuICAgICAgICB0aGlzLmJhbGwudnkgKj0gdGhpcy5iYWxsLmZyaWN0aW9uWTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWxsLnggKz0gdGhpcy5iYWxsLnZ4O1xyXG4gICAgICAgIHRoaXMuYmFsbC55ICs9IHRoaXMuYmFsbC52eTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5iYWxsLnggPCAwfHwgdGhpcy5iYWxsLnggKyB0aGlzLmJhbGwuZGlhbWV0ZXIgPiBjYW52YXMud2lkdGgpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmFsbC5mcmljdGlvblggPSAwLjk4O1xyXG4gICAgICAgICAgICB0aGlzLmJhbGwuZnJpY3Rpb25ZID0gMC45ODtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmFsbC5hY2NlbGVyYXRpb25YID0gMDtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLmFjY2VsZXJhdGlvblkgPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5iYWxsLnZ4ID0gLXRoaXMuYmFsbC52eDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYmFsbC55IDwgMCB8fCB0aGlzLmJhbGwueSArIHRoaXMuYmFsbC5kaWFtZXRlciA+IGNhbnZhcy5oZWlnaHQpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmFsbC5mcmljdGlvblggPSAwLjk4O1xyXG4gICAgICAgICAgICB0aGlzLmJhbGwuZnJpY3Rpb25ZID0gMC45ODtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmFsbC5hY2NlbGVyYXRpb25YID0gMDtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLmFjY2VsZXJhdGlvblkgPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5iYWxsLnZ5ID0gLXRoaXMuYmFsbC52eTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUudmlzaWJsZSA9IHRoaXMudmlzaWJsZTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgU2NlbmVzTWFuYWdlcntcbiAgICBjb25zdHJ1Y3RvcihzdGFnZSwgc2NlbmVzQ29uZmlncykge1xuICAgICAgICBjb25zdCBzY2VuZXNTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NlbmVTZWxlY3RcIik7XG5cbiAgICAgICAgdGhpcy5fYWxsU2NlbmVzID0gW107XG5cbiAgICAgICAgc2NlbmVzQ29uZmlncy5mb3JFYWNoKHNjZW5lQ29uZmlnID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjZW5lID0gbmV3IHNjZW5lQ29uZmlnLmNvbnN0cnVjdG9yKHN0YWdlKTtcblxuICAgICAgICAgICAgdGhpc1tzY2VuZUNvbmZpZy5pZF0gPSBzY2VuZTtcbiAgICAgICAgICAgIHRoaXMuX2FsbFNjZW5lcy5wdXNoKHNjZW5lKTtcblxuICAgICAgICAgICAgc2NlbmVzU2VsZWN0b3IuaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlPSR7c2NlbmVDb25maWcuaWR9PiR7c2NlbmVDb25maWcubGFiZWx9PC9vcHRpb24+YFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmhpZGVBbGwoKTtcbiAgICB9XG5cbiAgICBoaWRlQWxsKCl7XG4gICAgICAgIHRoaXMuX2FsbFNjZW5lcy5mb3JFYWNoKHNjZW5lID0+e1xuICAgICAgICAgICAgc2NlbmUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgc2NlbmUudXBkYXRlKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1NjZW5lKHNjZW5lTmFtZSl7XG4gICAgICAgIHRoaXNbc2NlbmVOYW1lXS52aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRTY2VuZVVwZGF0ZUZ1bmMoc2NlbmVOYW1lKXtcbiAgICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzW3NjZW5lTmFtZV07XG5cbiAgICAgICAgcmV0dXJuIHNjZW5lLnVwZGF0ZS5iaW5kKHNjZW5lKTtcbiAgICB9XG59IiwiaW1wb3J0IHtncm91cH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvR3JvdXBcIjtcclxuaW1wb3J0IHtjb250YWluLCByYW5kb21JbnR9IGZyb20gXCIuLi9jdXN0b21QaXhpL3V0aWxzXCI7XHJcbmltcG9ydCB7Y2lyY2xlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9DaXJjbGVcIjtcclxuaW1wb3J0IHtzdGFnZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvRGlzcGxheU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhbGxXaXRoR3Jhdml0eSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iYWxsID0gY2lyY2xlKDMyLFwiZ3JheVwiLCBcImJsYWNrXCIsIDIsIDk2LCAxMjgpO1xyXG4gICAgICAgIHRoaXMuYmFsbC52eCA9IHJhbmRvbUludCgxMCwgMjApO1xyXG4gICAgICAgIHRoaXMuYmFsbC52eSA9IC1yYW5kb21JbnQoMTAsIDIwKTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWxsLmdyYXZpdHkgPSAwLjM7XHJcbiAgICAgICAgdGhpcy5iYWxsLmZyaWN0aW9uWCA9IDE7XHJcbiAgICAgICAgdGhpcy5iYWxsLmZyaWN0aW9uWSA9IDA7XHJcbiAgICAgICAgdGhpcy5iYWxsLm1hc3MgPSAxLjM7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBncm91cCh0aGlzLmJhbGwpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5iYWxsLnZ5ICs9IHRoaXMuYmFsbC5ncmF2aXR5O1xyXG4gICAgICAgIHRoaXMuYmFsbC52eCAqPSB0aGlzLmJhbGwuZnJpY3Rpb25YO1xyXG5cclxuICAgICAgICB0aGlzLmJhbGwueCArPSB0aGlzLmJhbGwudng7XHJcbiAgICAgICAgdGhpcy5iYWxsLnkgKz0gdGhpcy5iYWxsLnZ5O1xyXG4gICAgICAgIGxldCBjb2xsaXNpb24gPSBjb250YWluKHRoaXMuYmFsbCwgc3RhZ2UubG9jYWxCb3VuZHMsIHRydWUpO1xyXG5cclxuICAgICAgICBpZihjb2xsaXNpb24gPT09IFwiYm90dG9tXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLmZyaWN0aW9uWCA9IDAuOTY7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLmZyaWN0aW9uWCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSB0aGlzLnZpc2libGU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHt0ZXh0fSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9UZXh0XCI7XHJcbmltcG9ydCB7aGl0VGVzdENpcmNsZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7Z3JvdXB9IGZyb20gXCIuLi9jdXN0b21QaXhpL0dyb3VwXCI7XHJcbmltcG9ydCB7ZHJhZ2dhYmxlU3ByaXRlc30gZnJvbSBcIi4uL2N1c3RvbVBpeGkvRGlzcGxheU9iamVjdFwiO1xyXG5pbXBvcnQge21ha2VQb2ludGVyfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS91dGlsc1wiO1xyXG5pbXBvcnQge2NhbnZhc30gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCB7Y2lyY2xlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9DaXJjbGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaXJjbGVDb2xsaXNpb24ge1xyXG4gICAgY29uc3RydWN0b3Ioc3RhZ2UpIHtcclxuICAgICAgICB0aGlzLnBvaW50ZXIgPSBtYWtlUG9pbnRlcihjYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLmJsdWVCYWxsID0gY2lyY2xlKDY0LFwiYmx1ZVwiKTtcclxuICAgICAgICB0aGlzLmJsdWVCYWxsLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgc3RhZ2UucHV0Q2VudGVyKHRoaXMuYmx1ZUJhbGwsIC03MCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVkQmFsbCA9IGNpcmNsZSg2NCxcInJlZFwiKTtcclxuICAgICAgICB0aGlzLnJlZEJhbGwuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgICBzdGFnZS5wdXRDZW50ZXIodGhpcy5yZWRCYWxsLCA3MCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRleHQoXCJcIiwgXCIxMnB4IHB1enpsZXJcIiwgXCJibGFja1wiLCA4LCA4KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGdyb3VwKHRoaXMuYmx1ZUJhbGwsIHRoaXMucmVkQmFsbCwgdGhpcy5tZXNzYWdlKTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMucG9pbnRlci51cGRhdGVEcmFnQW5kRHJvcChkcmFnZ2FibGVTcHJpdGVzKTtcclxuXHJcbiAgICAgICAgaWYoaGl0VGVzdENpcmNsZSh0aGlzLmJsdWVCYWxsLCB0aGlzLnJlZEJhbGwpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5jb250ZW50ID0gXCJDb2xsaXNpb24hXCJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuY29udGVudCA9IFwiTm8gY29sbGlzaW9uLi4uXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUudmlzaWJsZSA9IHRoaXMudmlzaWJsZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Z3JvdXB9IGZyb20gXCIuLi9jdXN0b21QaXhpL0dyb3VwXCI7XHJcbmltcG9ydCB7ZGlzdGFuY2UsIGZvbGxvd0NvbnN0YW50LCBtYWtlUG9pbnRlcn0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvdXRpbHNcIjtcclxuaW1wb3J0IHtjYW52YXN9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQge2NpcmNsZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvQ2lyY2xlXCI7XHJcbmltcG9ydCB7bGluZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvTGluZVwiO1xyXG5pbXBvcnQge3RleHR9IGZyb20gXCIuLi9jdXN0b21QaXhpL1RleHRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zdGFudFNwZWVkRm9sbG93aW5nIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0YWdlKSB7XHJcbiAgICAgICAgdGhpcy5wb2ludGVyID0gbWFrZVBvaW50ZXIoY2FudmFzKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gdGV4dChcIlwiLCBcIjEycHggcHV6emxlclwiLCBcImJsYWNrXCIsIDgsIDgpO1xyXG4gICAgICAgIHRoaXMuYzEgPSBjaXJjbGUoMzIsIFwiZ3JheVwiKTtcclxuICAgICAgICBzdGFnZS5wdXRDZW50ZXIodGhpcy5jMSwgLTMyLCAtMzIpO1xyXG5cclxuICAgICAgICB0aGlzLmMyID0gY2lyY2xlKDMyLCBcImdyYXlcIik7XHJcbiAgICAgICAgc3RhZ2UucHV0Q2VudGVyKHRoaXMuYzIsIDMyLCAzMik7XHJcblxyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IGxpbmUoXCJibGFja1wiLCAyLCB0aGlzLmMxLmNlbnRlclgsIHRoaXMuYzEuY2VudGVyWSwgdGhpcy5jMi5jZW50ZXJYLCB0aGlzLmMyLmNlbnRlclkpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGdyb3VwKHRoaXMuYzEsIHRoaXMuYzIsIHRoaXMubWVzc2FnZSwgdGhpcy5jb25uZWN0aW9uKTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIGZvbGxvd0NvbnN0YW50KHRoaXMuYzIsIHRoaXMucG9pbnRlciwgMyk7XHJcblxyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5heCA9IHRoaXMuYzEuY2VudGVyWDtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uYXkgPSB0aGlzLmMxLmNlbnRlclk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJ4ID0gdGhpcy5jMi5jZW50ZXJYO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5ieSA9IHRoaXMuYzIuY2VudGVyWTtcclxuXHJcbiAgICAgICAgbGV0IGRpc3RhbmNlQmV0d2VlbkNpcmNsZXMgPSBkaXN0YW5jZSh0aGlzLmMxLCB0aGlzLmMyKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLmNvbnRlbnQgPSBgRGlzdGFuY2UgOiR7TWF0aC5mbG9vcihkaXN0YW5jZUJldHdlZW5DaXJjbGVzKX1gO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSB0aGlzLnZpc2libGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7YXNzZXRzfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9hc3NldHNcIjtcclxuaW1wb3J0IHtncm91cH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvR3JvdXBcIjtcclxuaW1wb3J0IHttYWtlUG9pbnRlcn0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvdXRpbHNcIjtcclxuaW1wb3J0IHtjYW52YXN9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQge2J1dHRvbnMsIGJ1dHRvbn0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvRGlzcGxheU9iamVjdFwiO1xyXG5pbXBvcnQge3RleHR9IGZyb20gXCIuLi9jdXN0b21QaXhpL1RleHRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3Ioc3RhZ2UpIHtcclxuICAgICAgICB0aGlzLnBvaW50ZXIgPSBtYWtlUG9pbnRlcihjYW52YXMpO1xyXG5cclxuICAgICAgICBsZXQgYnV0dG9uRnJhbWVzID0gW1xyXG4gICAgICAgICAgICBhc3NldHNbXCJ1cC5wbmdcIl0sXHJcbiAgICAgICAgICAgIGFzc2V0c1tcIm92ZXIucG5nXCJdLFxyXG4gICAgICAgICAgICBhc3NldHNbXCJkb3duLnBuZ1wiXSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXlCdXR0b24gPSBidXR0b24oYnV0dG9uRnJhbWVzKTtcclxuICAgICAgICB0aGlzLnBsYXlCdXR0b24uaW50ZXJhY3JpdmUgPSB0cnVlO1xyXG4gICAgICAgIHN0YWdlLnB1dENlbnRlcih0aGlzLnBsYXlCdXR0b24pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXlCdXR0b24ub3ZlciA9ICgpID0+IGNvbnNvbGUubG9nKFwib3ZlclwiKTtcclxuICAgICAgICB0aGlzLnBsYXlCdXR0b24ub3V0ID0gKCkgPT4gY29uc29sZS5sb2coXCJvdXRcIik7XHJcbiAgICAgICAgdGhpcy5wbGF5QnV0dG9uLnByZXNzID0gKCkgPT4gY29uc29sZS5sb2coXCJwcmVzc2VkXCIpO1xyXG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi5yZWxlYXNlID0gKCkgPT4gY29uc29sZS5sb2coXCJyZWxlYXNlZFwiKTtcclxuICAgICAgICB0aGlzLnBsYXlCdXR0b24udGFwID0gKCkgPT4gY29uc29sZS5sb2coXCJ0YXBwZWRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGVNZXNzYWdlID0gdGV4dChcIlwiLCBcIjE4cHggcHV6emxlclwiLCBcImJsYWNrXCIsIDE4LCAxMik7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25NZXNzYWdlID0gdGV4dChcIlwiLCBcIjE4cHggcHV6emxlclwiLCBcImJsYWNrXCIsIDE4LCAzNik7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBncm91cCh0aGlzLnBsYXlCdXR0b24sIHRoaXMuc3RhdGVNZXNzYWdlLCB0aGlzLmFjdGlvbk1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgaWYoYnV0dG9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImF1dG9cIjtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMuZm9yRWFjaCggYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi51cGRhdGUodGhpcy5wb2ludGVyLCBjYW52YXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGJ1dHRvbi5zdGF0ZSA9PT0gXCJvdmVyXCIgfHwgYnV0dG9uLnN0YXRlID09PSBcImRvd25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGJ1dHRvbi5wYXJlbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZU1lc3NhZ2UuY29udGVudCA9IGBTdGF0ZTogJHt0aGlzLnBsYXlCdXR0b24uc3RhdGV9YDtcclxuICAgICAgICB0aGlzLmFjdGlvbk1lc3NhZ2UuY29udGVudCA9IGBBY3Rpb246ICR7dGhpcy5wbGF5QnV0dG9uLmFjdGlvbn1gO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSB0aGlzLnZpc2libGU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHthc3NldHN9IGZyb20gXCIuLi9jdXN0b21QaXhpL2Fzc2V0c1wiO1xyXG5pbXBvcnQge2dyb3VwfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9Hcm91cFwiO1xyXG5pbXBvcnQge2RyYWdnYWJsZVNwcml0ZXN9IGZyb20gXCIuLi9jdXN0b21QaXhpL0Rpc3BsYXlPYmplY3RcIjtcclxuaW1wb3J0IHttYWtlUG9pbnRlcn0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvdXRpbHNcIjtcclxuaW1wb3J0IHtjYW52YXN9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQge3Nwcml0ZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvRGlzcGxheU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyYWdBbmREcm9wIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0YWdlKSB7XHJcbiAgICAgICAgdGhpcy5wb2ludGVyID0gbWFrZVBvaW50ZXIoY2FudmFzKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYXB0YWluID0gc3ByaXRlKGFzc2V0c1tcImNhcHRhaW4ucG5nXCJdKTtcclxuICAgICAgICBzdGFnZS5wdXRDZW50ZXIodGhpcy5jYXB0YWluLCAtNjQsIC02NCk7XHJcblxyXG4gICAgICAgIHRoaXMuaHVsayA9IHNwcml0ZShhc3NldHNbXCJodWxrLnBuZ1wiXSk7XHJcbiAgICAgICAgc3RhZ2UucHV0Q2VudGVyKHRoaXMuaHVsayk7XHJcblxyXG4gICAgICAgIHRoaXMuaXJvbk1hbiA9IHNwcml0ZShhc3NldHNbXCJpcm9uTWFuLnBuZ1wiXSk7XHJcbiAgICAgICAgc3RhZ2UucHV0Q2VudGVyKHRoaXMuaXJvbk1hbiwgNjQsIDY0KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGREcmFnZ2FibGUodGhpcy5jYXB0YWluLCB0aGlzLmh1bGssIHRoaXMuaXJvbk1hbik7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGdyb3VwKHRoaXMuY2FwdGFpbiwgdGhpcy5odWxrLCB0aGlzLmlyb25NYW4pO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5wb2ludGVyLnVwZGF0ZURyYWdBbmREcm9wKGRyYWdnYWJsZVNwcml0ZXMpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUudmlzaWJsZSA9IHRoaXMudmlzaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGREcmFnZ2FibGUoLi4uc3ByaXRlcykge1xyXG4gICAgICAgIHNwcml0ZXMuZm9yRWFjaChzcHJpdGUgPT4ge1xyXG4gICAgICAgICAgICBzcHJpdGUuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtncm91cH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvR3JvdXBcIjtcclxuaW1wb3J0IHttYWtlUG9pbnRlciwgcmFuZG9tSW50fSBmcm9tIFwiLi4vY3VzdG9tUGl4aS91dGlsc1wiO1xyXG5pbXBvcnQge2NhbnZhc30gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCB7Y2lyY2xlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9DaXJjbGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcmFjdGl2ZVNwcml0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdGFnZSkge1xyXG4gICAgICAgIHRoaXMucG9pbnRlciA9IG1ha2VQb2ludGVyKGNhbnZhcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFsbCA9IGNpcmNsZSgxMjgsIFwicmVkXCIsIFwiYmx1ZVwiLCAxNik7XHJcbiAgICAgICAgc3RhZ2UucHV0Q2VudGVyKHRoaXMuYmFsbCk7XHJcbiAgICAgICAgdGhpcy5iYWxsLmludGVyYWNyaXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWxsLnByZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY29sb3JzID0gW1wicmVkXCIsIFwiYmx1ZVwiLCBcInllbGxvd1wiLCBcInllbGxvd0dyZWVuXCIsIFwiYmxhY2tcIiwgXCJvcmFuZ2VcIl07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJhbGwuZmlsbFN0eWxlID0gY29sb3JzW3JhbmRvbUludCgwLCA1KV07XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbC5zdHJva2VTdHlsZSA9IGNvbG9yc1tyYW5kb21JbnQoMCwgNSldO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBncm91cCh0aGlzLmJhbGwpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgY2FudmFzLnN0eWxlLmN1cnNvciA9IFwiYXV0b1wiO1xyXG4gICAgICAgIHRoaXMuYmFsbC51cGRhdGUodGhpcy5wb2ludGVyLCBjYW52YXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmJhbGwuc3RhdGUgPT09IFwib3ZlclwiIHx8IHRoaXMuYmFsbC5zdGF0ZSA9PT0gXCJkb3duXCIpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5iYWxsLnBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2VuZS52aXNpYmxlID0gdGhpcy52aXNpYmxlO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7c3RhZ2V9IGZyb20gXCIuLi9jdXN0b21QaXhpL0Rpc3BsYXlPYmplY3RcIjtcclxuaW1wb3J0IHtjaXJjbGVDb2xsaXNpb24sIGhpdFRlc3RQb2ludH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7Z3JvdXB9IGZyb20gXCIuLi9jdXN0b21QaXhpL0dyb3VwXCI7XHJcbmltcG9ydCB7Z3JpZCwgbWFrZVBvaW50ZXIsIHJhbmRvbUludCwgY29udGFpbiwgZGlzdGFuY2UsYW5nbGV9IGZyb20gXCIuLi9jdXN0b21QaXhpL3V0aWxzXCI7XHJcbmltcG9ydCB7Y2FudmFzfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IHtsaW5lfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9MaW5lXCI7XHJcbmltcG9ydCB7Y2lyY2xlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9DaXJjbGVcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTW92aW5nQW5kU3RhdENpcmNsZXMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wb2ludGVyID0gbWFrZVBvaW50ZXIoY2FudmFzKTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWxsID0gY2lyY2xlKDE4LCBcInJlZFwiLCBcImJsYWNrXCIsIDEsIDk2LCAyNSk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFsbC52eCA9IHJhbmRvbUludCg1LDE1KTtcclxuICAgICAgICB0aGlzLmJhbGwudnkgPSByYW5kb21JbnQoNSwxNSk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFsbC5ncmF2aXR5ID0gMC4zO1xyXG4gICAgICAgIHRoaXMuYmFsbC5mcmljdGlvblggPSAxO1xyXG4gICAgICAgIHRoaXMuYmFsbC5mcmljdGlvblkgPSAwO1xyXG4gICAgICAgIHRoaXMuYmFsbC5tYXNzID0gMS4zO1xyXG5cclxuICAgICAgICB0aGlzLnBlZ3MgPSBncmlkKFxyXG4gICAgICAgICAgICAxMCw5LDQ4LDQ4LCB0cnVlLCAwLCAwLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGVnID0gY2lyY2xlKHJhbmRvbUludCg4LCAzMikpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9ycyA9IFtcIiNGRkFCQUJcIiwgXCIjRkZEQUFCXCIsIFwiI0RERkZBQlwiLCBcIiNBQkU0RkZcIiwgXCIjRDlBQkZGXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgIHBlZy5maWxsU3R5bGUgPSBjb2xvcnNbcmFuZG9tSW50KDAsNCldO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5wZWdzLnNldFBvc2l0aW9uKDE2LCA0OCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2xpbmcgPSBsaW5lKFwieWVsbG93XCIsIDQpO1xyXG4gICAgICAgIHRoaXMuc2xpbmcudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmNhcHR1cmVkTWFyYmxlID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGdyb3VwKHRoaXMucGVncywgdGhpcy5zbGluZywgdGhpcy5iYWxsKTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG5cclxuICAgICAgICB0aGlzLmJhbGwudnkgKz0gdGhpcy5iYWxsLmdyYXZpdHk7XHJcbiAgICAgICAgdGhpcy5iYWxsLnZ4ICo9IHRoaXMuYmFsbC5mcmljdGlvblg7XHJcblxyXG4gICAgICAgIHRoaXMuYmFsbC54ICs9IHRoaXMuYmFsbC52eDtcclxuICAgICAgICB0aGlzLmJhbGwueSArPSB0aGlzLmJhbGwudnk7XHJcblxyXG4gICAgICAgIGxldCBjb2xsaXNpb24gPSBjb250YWluKHRoaXMuYmFsbCwgc3RhZ2UubG9jYWxCb3VuZHMsIHRydWUpO1xyXG4gICAgICAgIGlmIChjb2xsaXNpb24gPT09IFwiYm90dG9tXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLmZyaWN0aW9uWCA9IDAuOTY7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLmZyaWN0aW9uWCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmNhcHR1cmVkTWFyYmxlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpbmcudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpbmcuYXggPSB0aGlzLmNhcHR1cmVkTWFyYmxlLmNlbnRlclg7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpbmcuYXkgPSB0aGlzLmNhcHR1cmVkTWFyYmxlLmNlbnRlclk7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpbmcuYnggPSB0aGlzLnBvaW50ZXIueDtcclxuICAgICAgICAgICAgdGhpcy5zbGluZy5ieSA9IHRoaXMucG9pbnRlci55XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnBvaW50ZXIuaXNEb3duICYmIHRoaXMuY2FwdHVyZWRNYXJibGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYoaGl0VGVzdFBvaW50KHRoaXMucG9pbnRlciwgdGhpcy5iYWxsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXB0dXJlZE1hcmJsZSA9IHRoaXMuYmFsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FwdHVyZWRNYXJibGUudnggPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXB0dXJlZE1hcmJsZS52eSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMucG9pbnRlci5pc1VwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpbmcudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5jYXB0dXJlZE1hcmJsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGluZy5sZW5ndGggPSBkaXN0YW5jZSh0aGlzLmNhcHR1cmVkTWFyYmxlLCB0aGlzLnBvaW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGluZy5hbmdsZSA9IGFuZ2xlKHRoaXMucG9pbnRlciwgdGhpcy5jYXB0dXJlZE1hcmJsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHNwZWVkID0gNTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FwdHVyZWRNYXJibGUudnggPSBNYXRoLmNvcyh0aGlzLnNsaW5nLmFuZ2xlKSAqIHRoaXMuc2xpbmcubGVuZ3RoIC8gc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcHR1cmVkTWFyYmxlLnZ5ID0gTWF0aC5zaW4odGhpcy5zbGluZy5hbmdsZSkgKiB0aGlzLnNsaW5nLmxlbmd0aCAvIHNwZWVkO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FwdHVyZWRNYXJibGUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBlZ3MuY2hpbGRyZW4uZm9yRWFjaCggcGVnID0+IHtcclxuICAgICAgICAgICAgY2lyY2xlQ29sbGlzaW9uKHRoaXMuYmFsbCwgcGVnLCB0cnVlLCB0cnVlKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSB0aGlzLnZpc2libGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2Fzc2V0c30gZnJvbSBcIi4uL2N1c3RvbVBpeGkvYXNzZXRzXCI7XHJcbmltcG9ydCB7c3RhZ2V9IGZyb20gXCIuLi9jdXN0b21QaXhpL0Rpc3BsYXlPYmplY3RcIjtcclxuaW1wb3J0IHtoaXRUZXN0UG9pbnQsIG1vdmluZ0NpcmNsZUNvbGxpc2lvbn0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7Z3JvdXB9IGZyb20gXCIuLi9jdXN0b21QaXhpL0dyb3VwXCI7XHJcbmltcG9ydCB7Z3JpZCwgbWFrZVBvaW50ZXIsIHJhbmRvbUludCwgZnJhbWVzLCBjb250YWluLCBkaXN0YW5jZSxhbmdsZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvdXRpbHNcIjtcclxuaW1wb3J0IHtjYW52YXN9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQge3Nwcml0ZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvRGlzcGxheU9iamVjdFwiO1xyXG5pbXBvcnQge2xpbmV9IGZyb20gXCIuLi9jdXN0b21QaXhpL0xpbmVcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTW92aW5nQ2lyY2xlc0NvbGxpc2lvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnBvaW50ZXIgPSBtYWtlUG9pbnRlcihjYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLm1hcmJsZXMgPSBncmlkKFxyXG4gICAgICAgICAgICA3LCA3LCA2NCwgNjQsIHRydWUsIDAsIDAsXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBtYXJibGVGcmFtZXMgPSBmcmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzW1wic3JjL2ltZy9tYXJibGVzLnBuZ1wiXSxcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFswLCAwXSwgWzMyLCAwXSwgWzY0LCAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzAsIDMyXSwgWzMyLCAzMl0sIFs2NCwgMzJdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgMzIsIDMyXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtYXJibGUgPSBzcHJpdGUobWFyYmxlRnJhbWVzKTtcclxuICAgICAgICAgICAgICAgIG1hcmJsZS5nb3RvQW5kU3RvcChyYW5kb21JbnQoMCw1KSk7XHJcbiAgICAgICAgICAgICAgICBtYXJibGUuY2lyY3VsYXIgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzaXplcyA9IFs4LCAxMiwgMTYsIDIwLCAyNCwgMjgsIDMyXTtcclxuICAgICAgICAgICAgICAgIG1hcmJsZS5kaWFtZXRlciA9IHNpemVzW3JhbmRvbUludCgwLCA2KV07XHJcblxyXG4gICAgICAgICAgICAgICAgbWFyYmxlLnZ4ID0gcmFuZG9tSW50KC0xMCwgMTApO1xyXG4gICAgICAgICAgICAgICAgbWFyYmxlLnZ5ID0gcmFuZG9tSW50KC0xMCwgMTApO1xyXG5cclxuICAgICAgICAgICAgICAgIG1hcmJsZS5mcmljdGlvblggPSAwLjk5O1xyXG4gICAgICAgICAgICAgICAgbWFyYmxlLmZyaWN0aW9uWSA9IDAuOTk7XHJcbiAgICAgICAgICAgICAgICBtYXJibGUubWFzcyA9IDAuNzUgKyAobWFyYmxlLmRpYW1ldGVyIC8gMzIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXJibGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnNsaW5nID0gbGluZShcInllbGxvd1wiLCA0KTtcclxuICAgICAgICB0aGlzLnNsaW5nLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZE1hcmJsZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBncm91cCh0aGlzLm1hcmJsZXMsIHRoaXMuc2xpbmcpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuY2FwdHVyZWRNYXJibGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zbGluZy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zbGluZy5heCA9IHRoaXMuY2FwdHVyZWRNYXJibGUuY2VudGVyWDtcclxuICAgICAgICAgICAgdGhpcy5zbGluZy5heSA9IHRoaXMuY2FwdHVyZWRNYXJibGUuY2VudGVyWTtcclxuICAgICAgICAgICAgdGhpcy5zbGluZy5ieCA9IHRoaXMucG9pbnRlci54O1xyXG4gICAgICAgICAgICB0aGlzLnNsaW5nLmJ5ID0gdGhpcy5wb2ludGVyLnlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMucG9pbnRlci5pc1VwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpbmcudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5jYXB0dXJlZE1hcmJsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGluZy5sZW5ndGggPSBkaXN0YW5jZSh0aGlzLmNhcHR1cmVkTWFyYmxlLCB0aGlzLnBvaW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGluZy5hbmdsZSA9IGFuZ2xlKHRoaXMucG9pbnRlciwgdGhpcy5jYXB0dXJlZE1hcmJsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHNwZWVkID0gNTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FwdHVyZWRNYXJibGUudnggPSBNYXRoLmNvcyh0aGlzLnNsaW5nLmFuZ2xlKSAqIHRoaXMuc2xpbmcubGVuZ3RoIC8gc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcHR1cmVkTWFyYmxlLnZ5ID0gTWF0aC5zaW4odGhpcy5zbGluZy5hbmdsZSkgKiB0aGlzLnNsaW5nLmxlbmd0aCAvIHNwZWVkO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FwdHVyZWRNYXJibGUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1hcmJsZXMuY2hpbGRyZW4uZm9yRWFjaCggbWFyYmxlID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy5wb2ludGVyLmlzRG93biAmJiB0aGlzLmNhcHR1cmVkTWFyYmxlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZihoaXRUZXN0UG9pbnQodGhpcy5wb2ludGVyLCBtYXJibGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXB0dXJlZE1hcmJsZSA9IG1hcmJsZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcHR1cmVkTWFyYmxlLnZ4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcHR1cmVkTWFyYmxlLnZ5ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbWFyYmxlLnZ4ICo9IG1hcmJsZS5mcmljdGlvblg7XHJcbiAgICAgICAgICAgIG1hcmJsZS52eSAqPSBtYXJibGUuZnJpY3Rpb25ZO1xyXG5cclxuICAgICAgICAgICAgbWFyYmxlLnggKz0gbWFyYmxlLnZ4O1xyXG4gICAgICAgICAgICBtYXJibGUueSArPSBtYXJibGUudnk7XHJcblxyXG4gICAgICAgICAgICBjb250YWluKG1hcmJsZSwgc3RhZ2UubG9jYWxCb3VuZHMsIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXJibGVzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjMSA9IHRoaXMubWFyYmxlcy5jaGlsZHJlbltpXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5tYXJibGVzLmNoaWxkcmVuLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIGxldCBjMiA9IHRoaXMubWFyYmxlcy5jaGlsZHJlbltqXTtcclxuICAgICAgICAgICAgICAgIG1vdmluZ0NpcmNsZUNvbGxpc2lvbihjMSwgYzIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSB0aGlzLnZpc2libGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3RleHR9IGZyb20gXCIuLi9jdXN0b21QaXhpL1RleHRcIjtcclxuaW1wb3J0IHtoaXRUZXN0UG9pbnR9IGZyb20gXCIuLi9jdXN0b21QaXhpL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQge2dyb3VwfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9Hcm91cFwiO1xyXG5pbXBvcnQge2RyYWdnYWJsZVNwcml0ZXN9IGZyb20gXCIuLi9jdXN0b21QaXhpL0Rpc3BsYXlPYmplY3RcIjtcclxuaW1wb3J0IHttYWtlUG9pbnRlcn0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvdXRpbHNcIjtcclxuaW1wb3J0IHtjYW52YXN9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQge2NpcmNsZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvQ2lyY2xlXCI7XHJcbmltcG9ydCB7cmVjdGFuZ2xlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9SZWN0YW5nbGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludEFuZFNoYXBlQ29sbGlzaW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0YWdlKSB7XHJcbiAgICAgICAgdGhpcy5wb2ludGVyID0gbWFrZVBvaW50ZXIoY2FudmFzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3ggPSByZWN0YW5nbGUoNjQsIDY0LFwiYmx1ZVwiKTtcclxuICAgICAgICBzdGFnZS5wdXRDZW50ZXIodGhpcy5ib3gsIC03MCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFsbCA9IGNpcmNsZSg2NCxcInJlZFwiKTtcclxuICAgICAgICBzdGFnZS5wdXRDZW50ZXIodGhpcy5iYWxsLCA3MCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRleHQoXCJcIiwgXCIxMnB4IHB1enpsZXJcIiwgXCJibGFja1wiLCA4LCA4KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGdyb3VwKHRoaXMuYm94LCB0aGlzLmJhbGwsIHRoaXMubWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKXtcclxuICAgICAgICB0aGlzLnBvaW50ZXIudXBkYXRlRHJhZ0FuZERyb3AoZHJhZ2dhYmxlU3ByaXRlcyk7XHJcblxyXG4gICAgICAgIGlmKGhpdFRlc3RQb2ludCh0aGlzLnBvaW50ZXIucG9zaXRpb24sIHRoaXMuYmFsbCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmNvbnRlbnQgPSBcIkJhbGwhXCJcclxuICAgICAgICB9IGVsc2UgaWYoaGl0VGVzdFBvaW50KHRoaXMucG9pbnRlci5wb3NpdGlvbiwgdGhpcy5ib3gpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5jb250ZW50ID0gXCJCb3ghXCJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuY29udGVudCA9IFwiTm8gY29sbGlzaW9uLi4uXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUudmlzaWJsZSA9IHRoaXMudmlzaWJsZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7dGV4dH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvVGV4dFwiO1xyXG5pbXBvcnQge2hpdFRlc3RSZWN0YW5nbGV9IGZyb20gXCIuLi9jdXN0b21QaXhpL2NvbGxpc2lvblwiO1xyXG5pbXBvcnQge3JlY3RhbmdsZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvUmVjdGFuZ2xlXCI7XHJcbmltcG9ydCB7Z3JvdXB9IGZyb20gXCIuLi9jdXN0b21QaXhpL0dyb3VwXCI7XHJcbmltcG9ydCB7ZHJhZ2dhYmxlU3ByaXRlc30gZnJvbSBcIi4uL2N1c3RvbVBpeGkvRGlzcGxheU9iamVjdFwiO1xyXG5pbXBvcnQge21ha2VQb2ludGVyfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS91dGlsc1wiO1xyXG5pbXBvcnQge2NhbnZhc30gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVjdENvbGxpc2lvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdGFnZSkge1xyXG4gICAgICAgIHRoaXMucG9pbnRlciA9IG1ha2VQb2ludGVyKGNhbnZhcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYmx1ZUJveCA9IHJlY3RhbmdsZSg2NCwgNjQsXCJibHVlXCIpO1xyXG4gICAgICAgIHRoaXMuYmx1ZUJveC5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgIHN0YWdlLnB1dENlbnRlcih0aGlzLmJsdWVCb3gsIC03MCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVkQm94ID0gcmVjdGFuZ2xlKDY0LCA2NCwgXCJyZWRcIiApO1xyXG4gICAgICAgIHRoaXMucmVkQm94LmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgc3RhZ2UucHV0Q2VudGVyKHRoaXMucmVkQm94LCA3MCwgMCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0ZXh0KFwiXCIsIFwiMTJweCBwdXp6bGVyXCIsIFwiYmxhY2tcIiwgOCwgOCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBncm91cCh0aGlzLmJsdWVCb3gsIHRoaXMucmVkQm94LCB0aGlzLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5wb2ludGVyLnVwZGF0ZURyYWdBbmREcm9wKGRyYWdnYWJsZVNwcml0ZXMpO1xyXG5cclxuICAgICAgICBpZihoaXRUZXN0UmVjdGFuZ2xlKHRoaXMuYmx1ZUJveCwgdGhpcy5yZWRCb3gpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5jb250ZW50ID0gXCJDb2xsaXNpb24hXCJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuY29udGVudCA9IFwiTm8gY29sbGlzaW9uLi4uXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUudmlzaWJsZSA9IHRoaXMudmlzaWJsZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7dGV4dH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvVGV4dFwiO1xyXG5pbXBvcnQge3JlY3RhbmdsZUNvbGxpc2lvbn0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7cmVjdGFuZ2xlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IHtncm91cH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvR3JvdXBcIjtcclxuaW1wb3J0IHtkcmFnZ2FibGVTcHJpdGVzfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9EaXNwbGF5T2JqZWN0XCI7XHJcbmltcG9ydCB7bWFrZVBvaW50ZXJ9IGZyb20gXCIuLi9jdXN0b21QaXhpL3V0aWxzXCI7XHJcbmltcG9ydCB7Y2FudmFzfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyAgUmVjdGFuZ2xlUHVzaHtcclxuICAgIGNvbnN0cnVjdG9yKHN0YWdlKSB7XHJcbiAgICAgICAgdGhpcy5wb2ludGVyID0gbWFrZVBvaW50ZXIoY2FudmFzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ibHVlQm94ID0gcmVjdGFuZ2xlKDY0LCA2NCxcImJsdWVcIik7XHJcbiAgICAgICAgdGhpcy5ibHVlQm94LmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgc3RhZ2UucHV0Q2VudGVyKHRoaXMuYmx1ZUJveCwgLTcwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWRCb3ggPSByZWN0YW5nbGUoNjQsIDY0LCBcInJlZFwiICk7XHJcbiAgICAgICAgdGhpcy5yZWRCb3guZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgICBzdGFnZS5wdXRDZW50ZXIodGhpcy5yZWRCb3gsIDcwLCAwKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRleHQoXCJcIiwgXCIxMnB4IHB1enpsZXJcIiwgXCJibGFja1wiLCA4LCA4KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGdyb3VwKHRoaXMuYmx1ZUJveCwgdGhpcy5yZWRCb3gsIHRoaXMubWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKXtcclxuICAgICAgICB0aGlzLnBvaW50ZXIudXBkYXRlRHJhZ0FuZERyb3AoZHJhZ2dhYmxlU3ByaXRlcyk7XHJcblxyXG4gICAgICAgIGxldCBjb2xsaXNpb24gPSByZWN0YW5nbGVDb2xsaXNpb24odGhpcy5ibHVlQm94LCB0aGlzLnJlZEJveCk7XHJcbiAgICAgICAgaWYoY29sbGlzaW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5jb250ZW50ID0gYENvbGxpc2lvbiAke2NvbGxpc2lvbn1gXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmNvbnRlbnQgPSBcIk5vIGNvbGxpc2lvbi4uLlwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLnZpc2libGUgPSB0aGlzLnZpc2libGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2dyb3VwfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9Hcm91cFwiO1xyXG5pbXBvcnQge3JvdGF0ZVBvaW50fSBmcm9tIFwiLi4vY3VzdG9tUGl4aS91dGlsc1wiO1xyXG5pbXBvcnQge2xpbmV9IGZyb20gXCIuLi9jdXN0b21QaXhpL0xpbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb3RhdGVBcm91bmRQb2ludCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1vdmluZ0xpbmUgPSBsaW5lKFwiYmxhY2tcIiwgNiwgODQsIDE4MCwgMzYwLCA0MDApO1xyXG4gICAgICAgIHRoaXMubW92aW5nTGluZS5hbmdsZUEgPSAwO1xyXG4gICAgICAgIHRoaXMubW92aW5nTGluZS5hbmdsZUIgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lID0gZ3JvdXAodGhpcy5tb3ZpbmdMaW5lKTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMubW92aW5nTGluZS5hbmdsZUEgKz0gMC4wMztcclxuICAgICAgICBsZXQgcm90YXRpbmdBID0gcm90YXRlUG9pbnQoODQsIDE4MCwgNDUsNDUsIHRoaXMubW92aW5nTGluZS5hbmdsZUEpO1xyXG4gICAgICAgIHRoaXMubW92aW5nTGluZS5heCA9IHJvdGF0aW5nQS54O1xyXG4gICAgICAgIHRoaXMubW92aW5nTGluZS5heSA9IHJvdGF0aW5nQS55O1xyXG5cclxuICAgICAgICB0aGlzLm1vdmluZ0xpbmUuYW5nbGVCICs9IDAuMDU7XHJcbiAgICAgICAgbGV0IHJvdGF0aW5nQiA9IHJvdGF0ZVBvaW50KDM2MCwgNDAwLCA0NSw0NSwgdGhpcy5tb3ZpbmdMaW5lLmFuZ2xlQik7XHJcbiAgICAgICAgdGhpcy5tb3ZpbmdMaW5lLmJ4ID0gcm90YXRpbmdCLng7XHJcbiAgICAgICAgdGhpcy5tb3ZpbmdMaW5lLmJ5ID0gcm90YXRpbmdCLnk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUudmlzaWJsZSA9IHRoaXMudmlzaWJsZTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge2dyb3VwfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9Hcm91cFwiO1xyXG5pbXBvcnQge3JvdGF0ZVNwcml0ZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvdXRpbHNcIjtcclxuaW1wb3J0IHtjaXJjbGV9IGZyb20gXCIuLi9jdXN0b21QaXhpL0NpcmNsZVwiO1xyXG5pbXBvcnQge3JlY3RhbmdsZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvUmVjdGFuZ2xlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm90YXRlQXJvdW5kU3ByaXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0YWdlKSB7XHJcbiAgICAgICAgdGhpcy5ib3ggPSByZWN0YW5nbGUoNjQsIDY0LCBcImdyYXlcIik7XHJcbiAgICAgICAgc3RhZ2UucHV0Q2VudGVyKHRoaXMuYm94KTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWxsID0gY2lyY2xlKDY0LCBcImdyYXlcIik7XHJcbiAgICAgICAgdGhpcy5ib3gucHV0TGVmdCh0aGlzLmJhbGwsLTEyOCk7XHJcbiAgICAgICAgdGhpcy5iYWxsLmFuZ2xlID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGdyb3VwKHRoaXMuYm94LCB0aGlzLmJhbGwpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5iYWxsLmFuZ2xlICs9IDAuMDU7XHJcbiAgICAgICAgcm90YXRlU3ByaXRlKHRoaXMuYmFsbCwgdGhpcy5ib3gsIDEyOCwgdGhpcy5iYWxsLmFuZ2xlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS52aXNpYmxlID0gdGhpcy52aXNpYmxlO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7Z3JvdXB9IGZyb20gXCIuLi9jdXN0b21QaXhpL0dyb3VwXCI7XHJcbmltcG9ydCB7a2V5Ym9hcmQsIG91dHNpZGVCb3VuZHMsIHNob290fSBmcm9tIFwiLi4vY3VzdG9tUGl4aS91dGlsc1wiO1xyXG5pbXBvcnQge3N0YWdlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9EaXNwbGF5T2JqZWN0XCI7XHJcbmltcG9ydCB7dGV4dH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvVGV4dFwiO1xyXG5pbXBvcnQge3JlY3RhbmdsZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvUmVjdGFuZ2xlXCI7XHJcbmltcG9ydCB7bGluZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvTGluZVwiO1xyXG5pbXBvcnQge2NpcmNsZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvQ2lyY2xlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFuayB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdGFnZSkge1xyXG4gICAgICAgIHRoaXMudGFuayA9IHRoaXMuY3JlYXRlVGFuaygpO1xyXG4gICAgICAgIHN0YWdlLnB1dENlbnRlcih0aGlzLnRhbmspO1xyXG5cclxuICAgICAgICB0aGlzLmJ1bGxldHMgPSBbXTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0ZXh0KFwiU2hvb3QgdGhlIHdhbGxcIiwgXCIxNnB4IHB1enpsZXJcIiwgXCJibGFja1wiLCAxMiwgMTIpO1xyXG4gICAgICAgIHRoaXMuYW5nbGVNZXNzYWdlID0gdGV4dChcIlwiLCBcIjE2cHggcHV6emxlclwiLCBcImJsYWNrXCIsIDEyLCAzNik7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGdyb3VwKHRoaXMudGFuaywgdGhpcy5tZXNzYWdlLCB0aGlzLmFuZ2xlTWVzc2FnZSwgdGhpcy5idWxsZXRzKTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IHRoaXMuYnVsbGV0cy5maWx0ZXIoIGJ1bGxldCA9PiB7XHJcbiAgICAgICAgICAgIGJ1bGxldC54ICs9IGJ1bGxldC52eDtcclxuICAgICAgICAgICAgYnVsbGV0LnkgKz0gYnVsbGV0LnZ5O1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvbGxpc2lvbiA9IG91dHNpZGVCb3VuZHMoYnVsbGV0LCBzdGFnZS5sb2NhbEJvdW5kcyk7XHJcblxyXG4gICAgICAgICAgICBpZihjb2xsaXNpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5jb250ZW50ID0gYEhpdCB0aGUgJHtjb2xsaXNpb259YDtcclxuICAgICAgICAgICAgICAgIHN0YWdlLnJlbW92ZShidWxsZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnRhbmsucm90YXRpb24gKz0gdGhpcy50YW5rLnJvdGF0aW9uU3BlZWQ7XHJcblxyXG4gICAgICAgIGlmKHRoaXMudGFuay5tb3ZlRm9yd2FyZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhbmsuc3BlZWQgKz0gMC4xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFuay5zcGVlZCAqPSB0aGlzLnRhbmsuZnJpY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFuay5hY2NlbGVyYXRpb25YID0gdGhpcy50YW5rLnNwZWVkICogTWF0aC5jb3ModGhpcy50YW5rLnJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLnRhbmsuYWNjZWxlcmF0aW9uWSA9IHRoaXMudGFuay5zcGVlZCAqIE1hdGguc2luKHRoaXMudGFuay5yb3RhdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMudGFuay52eCA9IHRoaXMudGFuay5hY2NlbGVyYXRpb25YO1xyXG4gICAgICAgIHRoaXMudGFuay52eSA9IHRoaXMudGFuay5hY2NlbGVyYXRpb25ZO1xyXG5cclxuICAgICAgICB0aGlzLnRhbmsueCArPSB0aGlzLnRhbmsudng7XHJcbiAgICAgICAgdGhpcy50YW5rLnkgKz0gdGhpcy50YW5rLnZ5O1xyXG5cclxuICAgICAgICB0aGlzLmFuZ2xlTWVzc2FnZS5jb250ZW50ID0gYEFuZ2xlOiAke01hdGguZmxvb3IodGhpcy50YW5rLnJvdGF0aW9uICogMTApLzEwfWA7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUudmlzaWJsZSA9IHRoaXMudmlzaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUYW5rICgpIHtcclxuICAgICAgICBsZXQgYm94ID0gcmVjdGFuZ2xlKDMyLDMyLCBcImdyYXlcIiwgXCJibGFja1wiLCAyKTtcclxuICAgICAgICBsZXQgdHVycmV0ID0gbGluZShcInJlZFwiLCA0LDAsMCwzMiwwKTtcclxuICAgICAgICB0dXJyZXQuc2V0UG9zaXRpb24oMTYsIDE2KTtcclxuXHJcbiAgICAgICAgbGV0IHRhbmsgPSBncm91cChib3gsIHR1cnJldCk7XHJcblxyXG4gICAgICAgIHRhbmsudnggPSAwO1xyXG4gICAgICAgIHRhbmsudnkgPSAwO1xyXG4gICAgICAgIHRhbmsuYWNjZWxlcmF0aW9uWCA9IDAuMDU7XHJcbiAgICAgICAgdGFuay5hY2NlbGVyYXRpb25ZID0gMC4wNTtcclxuXHJcbiAgICAgICAgdGFuay5yb3RhdGlvblNwZWVkID0gMDtcclxuICAgICAgICB0YW5rLm1vdmVGb3J3YXJkID0gZmFsc2U7XHJcbiAgICAgICAgdGFuay5mcmljdGlvbiA9IDAuOTY7XHJcbiAgICAgICAgdGFuay5zcGVlZCA9IDA7XHJcblxyXG4gICAgICAgIGxldCBsZWZ0QXJyb3cgPSBrZXlib2FyZCgzNyksXHJcbiAgICAgICAgICAgIHJpZ2h0QXJyb3cgPSBrZXlib2FyZCgzOSksXHJcbiAgICAgICAgICAgIHVwQXJyb3cgPSBrZXlib2FyZCgzOCksXHJcbiAgICAgICAgICAgIHNwYWNlID0ga2V5Ym9hcmQoMzIpO1xyXG5cclxuICAgICAgICBsZWZ0QXJyb3cucHJlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRhbmsucm90YXRpb25TcGVlZCA9IC0wLjE7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZWZ0QXJyb3cucmVsZWFzZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYoIXJpZ2h0QXJyb3cuaXNEb3duKXtcclxuICAgICAgICAgICAgICAgIHRhbmsucm90YXRpb25TcGVlZCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByaWdodEFycm93LnByZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0YW5rLnJvdGF0aW9uU3BlZWQgPSAwLjE7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByaWdodEFycm93LnJlbGVhc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFsZWZ0QXJyb3cuaXNEb3duKXtcclxuICAgICAgICAgICAgICAgIHRhbmsucm90YXRpb25TcGVlZCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB1cEFycm93LnByZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0YW5rLm1vdmVGb3J3YXJkID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB1cEFycm93LnJlbGVhc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRhbmsubW92ZUZvcndhcmQgPSBmYWxzZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzcGFjZS5wcmVzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2hvb3QodGFuaywgdGFuay5yb3RhdGlvbiwgMzIsIDcsIHRoaXMuYnVsbGV0cywgKCkgPT4gY2lyY2xlKDgsIFwicmVkXCIpKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGFuaztcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge2Fzc2V0c30gZnJvbSBcIi4uL2N1c3RvbVBpeGkvYXNzZXRzXCI7XHJcbmltcG9ydCB7c3RhZ2V9IGZyb20gXCIuLi9jdXN0b21QaXhpL0Rpc3BsYXlPYmplY3RcIjtcclxuaW1wb3J0IHtzcHJpdGV9IGZyb20gXCIuLi9jdXN0b21QaXhpL0Rpc3BsYXlPYmplY3RcIjtcclxuaW1wb3J0IHt0ZXh0fSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9UZXh0XCI7XHJcbmltcG9ydCB7aGl0VGVzdFJlY3RhbmdsZX0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvY29sbGlzaW9uXCI7XHJcbmltcG9ydCB7cmVjdGFuZ2xlfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IHtncm91cH0gZnJvbSBcIi4uL2N1c3RvbVBpeGkvR3JvdXBcIjtcclxuaW1wb3J0IHtyYW5kb21JbnQsIGNvbnRhaW4sIGtleWJvYXJkfSBmcm9tIFwiLi4vY3VzdG9tUGl4aS91dGlsc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVhc3VyZUh1bnRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdGFnZSl7XHJcbiAgICAgICAgdGhpcy5nYW1lU2NlbmUgPSB0aGlzLmNyZWF0ZUdhbWVTY2VuZShzdGFnZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlclNjZW5lID0gdGhpcy5jcmVhdGVHYW1lT3ZlclNjZW5lKHN0YWdlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IGdyb3VwKHRoaXMuZ2FtZVNjZW5lLCB0aGlzLmdhbWVPdmVyU2NlbmUpO1xyXG5cclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFBsYXllck1vdmVtZW50KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUdhbWVTY2VuZSgpIHtcclxuICAgICAgICB0aGlzLmR1bmdlb24gPSBzcHJpdGUoYXNzZXRzW1wiZHVuZ2Vvbi5wbmdcIl0pO1xyXG4gICAgICAgIHRoaXMuZHVuZ2Vvbi5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5leGl0ID0gc3ByaXRlKGFzc2V0c1tcImRvb3IucG5nXCJdKTtcclxuICAgICAgICB0aGlzLmV4aXQuc2V0UG9zaXRpb24oMzIsIDApO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllciA9IHNwcml0ZShhc3NldHNbXCJleHBsb3Jlci5wbmdcIl0pO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnNldFBvc2l0aW9uKDYwLCBzdGFnZS5oYWxmSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy50cmVhc3VyZSA9IHNwcml0ZShhc3NldHNbXCJ0cmVhc3VyZS5wbmdcIl0pO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmUuc2V0UG9zaXRpb24oc3RhZ2Uud2lkdGggLSA2MCwgc3RhZ2UuaGFsZkhlaWdodCk7XHJcblxyXG4gICAgICAgIGxldCBnYW1lU2NlbmUgPSBncm91cCh0aGlzLmR1bmdlb24sIHRoaXMuZXhpdCwgdGhpcy5wbGF5ZXIsIHRoaXMudHJlYXN1cmUpO1xyXG5cclxuICAgICAgICBsZXQgbnVtYmVyT2ZFbmVtaWVzID0gNixcclxuICAgICAgICAgICAgc3BhY2luZyA9IDQ4LFxyXG4gICAgICAgICAgICB4T2Zmc2V0ID0gMTUwLFxyXG4gICAgICAgICAgICBzcGVlZCA9IDIsXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZFbmVtaWVzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVuZW15ID0gc3ByaXRlKGFzc2V0c1tcImJsb2IucG5nXCJdKTtcclxuICAgICAgICAgICAgbGV0IHggPSBzcGFjaW5nICogaSArIHhPZmZzZXQ7XHJcbiAgICAgICAgICAgIGxldCB5ID0gcmFuZG9tSW50KDAsIHN0YWdlLmhlaWdodCAtIGVuZW15LmhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICBlbmVteS54ID0geDtcclxuICAgICAgICAgICAgZW5lbXkueSA9IHk7XHJcblxyXG4gICAgICAgICAgICBlbmVteS52eSA9IHNwZWVkICogZGlyZWN0aW9uO1xyXG5cclxuICAgICAgICAgICAgZGlyZWN0aW9uICo9IC0xO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2goZW5lbXkpO1xyXG4gICAgICAgICAgICBnYW1lU2NlbmUuYWRkQ2hpbGQoZW5lbXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG91dGVyQmFyID0gcmVjdGFuZ2xlKDEyOCwgOCwgXCJibGFja1wiKSxcclxuICAgICAgICAgICAgaW5uZXJCYXIgPSByZWN0YW5nbGUoMTI4LCA4LCBcInJlZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5oZWFsdGhCYXIgPSBncm91cChvdXRlckJhciwgaW5uZXJCYXIpO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLmlubmVyID0gaW5uZXJCYXI7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLnggPSBzdGFnZS53aWR0aCAtIDE2NDtcclxuICAgICAgICB0aGlzLmhlYWx0aEJhci55ID0gNDtcclxuXHJcbiAgICAgICAgZ2FtZVNjZW5lLmFkZENoaWxkKHRoaXMuaGVhbHRoQmFyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdhbWVTY2VuZTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVHYW1lT3ZlclNjZW5lKCkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRleHQoXCJHYW1lIE92ZXIhXCIsIFwiNjRweCBGdXR1cmFcIiwgXCJibGFja1wiLCAyMCwgMjApO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZS54ID0gMTIwO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZS55ID0gc3RhZ2UuaGVpZ2h0IC8gMiAtIDY0O1xyXG5cclxuICAgICAgICBsZXQgZ2FtZU92ZXJTY2VuZSA9IGdyb3VwKHRoaXMubWVzc2FnZSk7XHJcbiAgICAgICAgZ2FtZU92ZXJTY2VuZS52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBnYW1lT3ZlclNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFBsYXllck1vdmVtZW50KCkge1xyXG4gICAgICAgIHRoaXMudXBBcnJvdyA9IGtleWJvYXJkKDM4KTtcclxuXHJcbiAgICAgICAgdGhpcy51cEFycm93LnByZXNzID0gKCkgPT57XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnZ5ID0gLTM7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy51cEFycm93LnJlbGVhc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZG93bkFycm93LmlzVXApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIudnkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5kb3duQXJyb3cgPSBrZXlib2FyZCg0MCk7XHJcblxyXG4gICAgICAgIHRoaXMuZG93bkFycm93LnByZXNzID0gKCkgPT57XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnZ5ID0gMztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmRvd25BcnJvdy5yZWxlYXNlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnVwQXJyb3cuaXNVcCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci52eSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmxlZnRBcnJvdyA9IGtleWJvYXJkKDM3KTtcclxuXHJcbiAgICAgICAgdGhpcy5sZWZ0QXJyb3cucHJlc3MgPSAoKSA9PntcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudnggPSAtMztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmxlZnRBcnJvdy5yZWxlYXNlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnJpZ2h0QXJyb3cuaXNVcCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci52eCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnJpZ2h0QXJyb3cgPSBrZXlib2FyZCgzOSk7XHJcblxyXG4gICAgICAgIHRoaXMucmlnaHRBcnJvdy5wcmVzcyA9ICgpID0+e1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci52eCA9IDM7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5yaWdodEFycm93LnJlbGVhc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubGVmdEFycm93LmlzVXApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIudnggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgY29udGFpbih0aGlzLnBsYXllciwge3g6MzIsIHk6IDE2LCB3aWR0aDogc3RhZ2Uud2lkdGggLSAzMiwgaGVpZ2h0OiBzdGFnZS5oZWlnaHQgLSAzMn0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllckhpdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKCBlbmVteSA9PiB7XHJcbiAgICAgICAgICAgIGVuZW15LnggKz0gZW5lbXkudng7XHJcbiAgICAgICAgICAgIGVuZW15LnkgKz0gZW5lbXkudnk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZW5lbXlIaXRzRWRnZXMgPSBjb250YWluKGVuZW15LCB7eDozMiwgeTogMTYsIHdpZHRoOiBzdGFnZS53aWR0aCAtIDMyLCBoZWlnaHQ6IHN0YWdlLmhlaWdodCAtIDMyfSk7XHJcblxyXG4gICAgICAgICAgICBpZihlbmVteUhpdHNFZGdlcykge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkudnkgKj0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBpZihoaXRUZXN0UmVjdGFuZ2xlKHRoaXMucGxheWVyLCBlbmVteSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVySGl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXJIaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYWxwaGEgPSAwLjU7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmlubmVyLndpZHRoIC09IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYWxwaGEgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIGhpdFRlc3RSZWN0YW5nbGUodGhpcy5wbGF5ZXIsIHRoaXMudHJlYXN1cmUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJlYXN1cmUueCA9IHRoaXMucGxheWVyLnggKyA4O1xyXG4gICAgICAgICAgICB0aGlzLnRyZWFzdXJlLnkgPSB0aGlzLnBsYXllci55ICsgODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGhpdFRlc3RSZWN0YW5nbGUodGhpcy50cmVhc3VyZSwgdGhpcy5leGl0KSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVTY2VuZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJTY2VuZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmNvbnRlbnQgPSBcIllvdSB3b24hXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmhlYWx0aEJhci5pbm5lci53aWR0aCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lU2NlbmUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyU2NlbmUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5jb250ZW50ID0gXCJZb3UgbG9zdCFcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyLnggKz0gdGhpcy5wbGF5ZXIudng7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIueSArPSB0aGlzLnBsYXllci52eTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS52aXNpYmxlID0gdGhpcy52aXNpYmxlO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==