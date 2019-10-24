import {DisplayObject, stage} from "./DisplayObject";

class Group extends DisplayObject {
    constructor(...spritesToGroup) {
        super();
        spritesToGroup.forEach(sprite => this.addChild(sprite));
    }

    addChild(sprite) {
        super.addChild(sprite);
        this.calculateSize();
    }

    removeChild(sprite) {
        if(sprite.parent === this) {
            this.children.splice(this.children.indexOf(sprite), 1);
            this.calculateSize();
        } else {
            throw new Error(`${sprite} is not a child of ${this}`);
        }
    }

    calculateSize() {
        if(this.children.length > 0){
            this._newWidth = 0;
            this._newHeight = 0;

            this.children.forEach( child => {
                if(child.x + child.width > this._newWidth) {
                    this._newWidth = child.x + child.width
                }

                if(child.y + child.height > this._newHeight) {
                    this._newHeight = child.y + child.height
                }
            })
        }

        this.width = this._newWidth;
        this.height = this._newHeight;
    }
}

export function group(...spritesToGroup) {
    let sprite = new Group(...spritesToGroup);
    stage.addChild(sprite);
    return sprite;
}