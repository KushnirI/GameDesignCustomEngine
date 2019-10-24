export function hitTestPoint(point, sprite) {
    let shape, left, right, top, bottom, vx, vy, magnitude, hit;

    if(sprite.radius) {
        shape = "circle";
    } else {
        shape = "rectangle";
    }

     if(shape === "rectangle") {
         left = sprite.x;
         right = sprite.x + sprite.width;
         top = sprite.y;
         bottom = sprite.y + sprite.height;

         hit = point.x > left && point.x < right && point.y > top && point.y < bottom;
     }

     if(shape === "circle") {
         vx = point.x - sprite.centerX;
         vy = point.y - sprite.centerY;
         magnitude = Math.sqrt(vx**2 + vy**2);

         hit = magnitude < sprite.radius;
     }

     return hit;
}

export function hitTestCircle(c1, c2, global = false) {
    let vx, vy, magnitude, combinedRadii, hit;

    if(global) {
        vx = (c2.gx + c2.radius) - (c1.gx + c1.radius);
        vy = (c2.gy + c2.radius) - (c1.gy + c1.radius);
    } else {
        vx = c2.centerX - c1.centerX;
        vy = c2.centerY - c1.centerY;
    }

    magnitude = Math.sqrt(vx**2 + vy**2);
    combinedRadii = c1.radius + c2.radius;
    hit = magnitude < combinedRadii;

    return hit;
}

export function circleCollision(c1, c2, bounce = false, global = false) {
    let magnitude, combinedRadii, overlap, vx, vy, dx, dy,
        s = {},
        hit = false;

    if(global) {
        vx = (c2.gx + c2.radius) - (c1.gx + c1.radius);
        vy = (c2.gy + c2.radius) - (c1.gy + c1.radius);
    } else {
        vx = c2.centerX - c1.centerX;
        vy = c2.centerY - c1.centerY;
    }
    magnitude = Math.sqrt(vx**2 + vy**2);
    combinedRadii = c1.radius + c2.radius;

    if(magnitude < combinedRadii) {
        hit = true;
        overlap = combinedRadii - magnitude;
        let quantumPadding = 0.3;

        overlap += quantumPadding;
        dx = vx / magnitude;
        dy = vy / magnitude;

        c1.x -= overlap * dx;
        c1.y -= overlap * dy;

        if(bounce) {
            s.x = vy;
            s.y = -vx;

            bounceOffSurface(c1, s);
        }

    }

    return hit;
}

export function movingCircleCollision(c1, c2, global = false) {
    let combinedRadii, overlap, xSide, ySide,
        s = {},
        p1A = {},
        p1B = {},
        p2A = {},
        p2B = {},
        hit = false;
    c1.mass = c1.mass || 1;
    c2.mass = c2.mass || 1;

    if(global) {
        s.vx = (c2.gx + c2.radius) - (c1.gx + c1.radius);
        s.vy = (c2.gy + c2.radius) - (c1.gy + c1.radius);
    } else {
        s.vx = c2.centerX - c1.centerX;
        s.vy = c2.centerY - c1.centerY;
    }

    s.magnitude = Math.sqrt(s.vx**2 + s.vy**2);

    combinedRadii = c1.radius + c2.radius;

    if(s.magnitude < combinedRadii) {
        hit = true;

        overlap = combinedRadii - s.magnitude

        overlap += 0.3;

        s.dx = s.vx / s.magnitude;
        s.dy = s.vy / s.magnitude;

        s.vxHalf = Math.abs(s.dx * overlap / 2);
        s.vyHalf = Math.abs(s.dy * overlap / 2);

        (c1.x > c2.x) ? xSide = 1 : xSide = -1;
        (c1.y > c2.y) ? ySide = 1 : ySide = -1;

        c1.x = c1.x + (s.vxHalf * xSide);
        c1.y = c1.y + (s.vyHalf * ySide);

        c2.x = c2.x + (s.vxHalf * -xSide);
        c2.y = c2.y + (s.vyHalf * -ySide);

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

export function multipleCircleCollision(arrayOfCircles, global = false) {
    for(let i = 0; i < arrayOfCircles.length; i++){
        let c1 = arrayOfCircles[i];

        for(let j = i+1; j < arrayOfCircles.length; j++){
            let c2 = arrayOfCircles[j];

            movingCircleCollision(c1, c2, global);
        }
    }
}

export function hitTestRectangle(r1, r2, global = false) {
    let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

    hit = false;

    if(global){
        vx = (r1.gx + r1.halfWidth) - (r2.gx + r2.halfWidth);
        vy = (r1.gy + r1.halfHeight) - (r2.gy + r2.halfHeight);
    } else {
        vx = r1.centerX - r2.centerX;
        vy = r1.centerY - r2.centerY;
    }

    combinedHalfWidths = r1.halfWidth + r2.halfWidth;
    combinedHalfHeights = r1.halfHeight + r2.halfHeight;

    if(Math.abs(vx) < combinedHalfWidths && Math.abs(vy) < combinedHalfHeights) {
        hit = true;
    } else {
        hit = false
    }

    return hit;
}

export function rectangleCollision(r1, r2, bounce = false, global = true) {
    let collision, combinedHalfWidths, combinedHalfHeights, overlapX, overlapY, vx, vy;

    if (global) {
        vx = (r1.gx + r1.halfWidth) - (r2.gx + r2.halfWidth);
        vy = (r1.gy + r1.halfHeight) - (r2.gy + r2.halfHeight);
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
    let dp1, dp2,
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
