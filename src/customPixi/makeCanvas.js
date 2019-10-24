export function makeCanvas(width = 256, height = 256, border = "1px dashed black", backgroundColor = "white") {
    let canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.border = border;
    canvas.style.backgroundColor = backgroundColor;
    document.body.appendChild(canvas);

    let ctx = canvas.getContext("2d");

    return {canvas, ctx};
}


