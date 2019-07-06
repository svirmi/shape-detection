const brain = require('brain.js');

const d = new DCanvas(document.getElementById('canv'));

d.drawGrid();

function DCanvas(el) {
    const ctx = el.getContext('2d');
    const pixel = 20;

    let is_mouse_down = false;

    canv.width = 500;
    canv.height = 500;

    this.drawLine = function (x1, y1, x2, y2, color = 'green') {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineJoin = 'miter';
        ctx.lineWidth = 1;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    };

    this.drawCell = function (x, y, w, h) {
        ctx.fillStyle = 'blue';
        ctx.strokeStyle = 'blue';
        ctx.lineJoin = 'miter';
        ctx.lineWidth = 1;
        ctx.rect(x, y, w, h);
        ctx.fill();
    };

    this.clear = function () {
        ctx.clearRect(0,0, canv.width, canv.height);
    };

    this.drawGrid = function() {
        const w = canv.width;
        const h = canv.height;
        const p = w / pixel;

        const xStep = w / p;
        const yStep = h / p;

        for( let x = 0; x < w; x += xStep )
        {
            this.drawLine(x, 0, x, h);
        }

        for( let y = 0; y < h; y += yStep )
        {
            this.drawLine(0, y, w, y);
        }
    };
    
    el.addEventListener('mousedown', function () {
        is_mouse_down = true;
        ctx.beginPath();
    });
    
    el.addEventListener('mouseup', function () {
        is_mouse_down = false;
    });

    el.addEventListener('mousemove', function(e) {
        if (is_mouse_down) {
            ctx.fillStyle = 'red';
            ctx.strokeStyle = 'red';
            ctx.lineWidth = pixel;

            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(e.offsetX, e.offsetY, pixel / 2, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        }
    });
}