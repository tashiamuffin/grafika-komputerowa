function prosta(xp, yp, xk, yk) {
    var x = xp;
    var y = yp;
    //yp = axp+b
    //yk= axk +b 
    //yp-yk = a(xp-xk)
    //b = yp - axp

    if (xp == xk) {
        document.getElementById('check').innerHTML = 'oczywiscie ze sa wspolliniowe ';
        return
    }

    var a = (yp - yk) / (xp - xk);
    var b = yp - a * xp;


    while (x < xk) {
        x = x + 1;
        y = Math.round(a * x + b);
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
prosta(20, 20, 500, 390);
var end = new Date().getTime();
var time = end - start;
document.getElementById('check').innerHTML = 'Execution time: ' + time + ' miliseconds';
//3-5 