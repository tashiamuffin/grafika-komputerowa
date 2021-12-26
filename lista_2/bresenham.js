function Bresenline(xp, yp, xk, yk) {
    var x = xp;
    var y = yp;
    var dy = yk - yp;
    var dx = xk - xp;
    var d = 2 * dy;
    var dA = 2 * dy;
    var dB = 2 * (dy - dx);
    while (x < xk) {
        if (d > 0) {
            d = d + dB;
            x = x + 1;
            y = y + 1;
        }
        else {
            d = d + dA;
            x = x + 1;

        }
        Set_Pixel(x, y);
    }
}

function Set_Pixel(x, y) {
    var c = document.getElementById("MyCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(x, y, 1, 1);
    ctx.stroke();
}


var start = new Date().getTime();


Bresenline(20, 20, 500, 390);  // <---- The function you're measuring time for 

var end = new Date().getTime();
var time = end - start;
document.getElementById('check').innerHTML = 'Execution time: ' + time + ' miliseconds';
// ~~~2-4 wychodzi