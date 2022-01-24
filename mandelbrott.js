var canvas = document.getElementById('obrazek');
var ctx = canvas.getContext('2d');

var maxx = canvas.width;
var maxy = canvas.height;


//p = pre + pim*i 
//f(z) = z^2 + (pre,pim)
function value(pre,pim, iter){          //wylicza predkosci ucieczki z punktu 0 w iteracji zbioru Juli
    var a = 0; //z.re
    var b = 0; //z.im
    var c = 0; //z1.re
    var d = 0; //z1.im
    var i = 0;
    //z^2=(a+bi)^2=a^2-b^2+2abi
    //z^2+pre+pim i=a^2-b^2+pre + (2ab+pim)i
    while( (Math.sqrt((a*a-b*b+pre)**2 +(2*a*b+pim)**2) < 2) && ( i < iter )){ //korzystamy z warunku zbieznosci fraktali |zn+1| = |zn^2 + p|<2 
        c = a*a - b*b + pre; 
        d = 2*a*b + pim;	
        a = c;
        b = d;
        i = i+1;
        }
        return(iter - i);
    }	

function mandelbrot(moc, iter){
    var kolor = 0;
    for (let i = 0; i < maxy; i++){ //idziemy  po pikselach (czyli jakby wyrazach macierzy m.width x m.height) i tworzymy p - punkty o danym kolorze
        var pre = 5/maxy * i - 5/2; //5 to stała skalująca obraz, 5/2 ptrzyma go na srodku
        for (let j = 0; j < maxx; j++){
            var pim = 5/maxx * j - 5/2;
            kolor = value(pre,pim, iter);
            var kolorki = "rgb(" + String((moc*kolor % 255)) + "," + String((moc*kolor % 255)) + "," + String((moc*kolor % 255)) + ")"; //rgb osiaga wartosci od 0 do 255
            ctx.fillStyle = kolorki;
            ctx.fillRect(j, i, 1, 1); //tworzymy piksel danego koloru
            }
        }
    }	
 

mandelbrot(45, 400);