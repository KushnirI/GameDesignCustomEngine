import {stage} from "./DisplayObject";

export function render (canvas, ctx) {
    ctx.clearRect(0,0, canvas.width, canvas.height);

    stage.children.forEach( sprite => {
        displaySprite(sprite);
    });

    function displaySprite(sprite) {
        if(
            sprite.visible
            && sprite.gx < canvas.width + sprite.width
            && sprite.gx + sprite.width >= -sprite.width
            && sprite.gy < canvas.height + sprite.height
            && sprite.gy + sprite.height >= -sprite.height
        ){
            ctx.save();

            ctx.translate(
                sprite.x + (sprite.width * sprite.pivotX),
                sprite.y + (sprite.height * sprite.pivotY)
            );
            ctx.rotate(sprite.rotation);
            ctx.globalAlpha = sprite.alpha * sprite.parent.alpha;
            ctx.scale(sprite.scaleX, sprite.scaleY);

            if(sprite.shadow){
                ctx.shadowColor = sprite.shadowColor;
                ctx.shadowOffsetX = sprite.shadowOffsetX;
                ctx.shadowOffsetY = sprite.shadowOffsetY;
                ctx.shadowBlur = sprite.shadowBlur;
            }

            if(sprite.blendMode){
                ctx.globalCompositeOperation = sprite.blendMode;
            }

            if(sprite.render){
                sprite.render(ctx);
            }

            if(sprite.children && sprite.children.length > 0){
                ctx.translate( -sprite.width * sprite.pivotX, -sprite.height * sprite.pivotY);

                sprite.children.forEach( child => {
                    displaySprite(child)
                })
            }
            ctx.restore();
        }
    }
}

export function renderWithInterpolation (canvas, ctx, lagOffset) {
    ctx.clearRect(0,0, canvas.width, canvas.height);

    stage.children.forEach( sprite => {
        displaySprite(sprite);
    });

    function displaySprite(sprite) {
        if(
            sprite.visible
            && sprite.gx < canvas.width + sprite.width
            && sprite.gx + sprite.width >= -sprite.width
            && sprite.gy < canvas.height + sprite.height
            && sprite.gy + sprite.height >= -sprite.height
        ){
            ctx.save();

            if(sprite.previousX) {
                sprite.renderX  = (sprite.x - sprite.previousX) * lagOffset + sprite.previousX;
            } else {
                sprite.renderX = sprite.x
            }

            if(sprite.previousY) {
                sprite.renderY  = (sprite.y - sprite.previousY) * lagOffset + sprite.previousY;
            } else {
                sprite.renderY = sprite.y
            }

            ctx.translate(
                sprite.renderX + (sprite.width * sprite.pivotX),
                sprite.renderY + (sprite.height * sprite.pivotY)
            );
            ctx.rotate(sprite.rotation);
            ctx.globalAlpha = sprite.alpha * sprite.parent.alpha;
            ctx.scale(sprite.scaleX, sprite.scaleY);

            if(sprite.shadow){
                ctx.shadowColor = sprite.shadowColor;
                ctx.shadowOffsetX = sprite.shadowOffsetX;
                ctx.shadowOffsetY = sprite.shadowOffsetY;
                ctx.shadowBlur = sprite.shadowBlur;
            }

            if(sprite.blendMode){
                ctx.globalCompositeOperation = sprite.blendMode;
            }

            if(sprite.render){
                sprite.render(ctx);
            }

            if(sprite.children && sprite.children.length > 0){
                ctx.translate( -sprite.width * sprite.pivotX, -sprite.height * sprite.pivotY);

                sprite.children.forEach( child => {
                    displaySprite(child)
                })
            }
            ctx.restore();
        }
    }
}