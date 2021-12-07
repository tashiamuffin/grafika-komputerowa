function matrix(A, B) {
    //szukamy a1, a2 - wspolczynnikow kierunkowych prostych utworzonych z punktow A,B do poczatku ukladu wsp
    //x != 0 
    if ((A[0] == 0 && A[1] == 0) || (B[0] == 0 && B[1] == 0)) {
        document.getElementById('check').innerHTML = 'nie da sie przesunac, punkt (0,0)';
        return
    }
    // x1, x2 sa zerami, sa po dwoch stronach osi ox
    if (A[0] == 0 && B[0] == 0 && ((A[1] > 0 && B[1] < 0) || (A[1] < 0 && B[1] > 0)) ) {
        var fi = Math.PI;
    }
    // x1,x2 = 0, sa po tej samej stronie osi
    if (A[0] == 0 && B[0] == 0 && (A[1] > 0 && B[1] > 0 || A[1] < 0 && B[1] < 0)) {
        var fi = 0;
    }
    // x1=0, x2 nie, y1 jest dodatnie 
    if (B[0] != 0 && A[0] == 0 && A[1] > 0) {
        var a2 = B[1] / B[0];
        var fi = Math.atan(a2) - 90*Math.PI/180;
    }
    // x1=0, x2 nie, y1 jest ujemne
    if (B[0] != 0 && A[0] == 0 && A[1] < 0) {
        var a2 = B[1] / B[0];
        var fi = Math.atan(a2) - 270*Math.PI/180;
    }
    //x2 = 0, x1 nie i y2 dodatnie
    if (A[0] != 0 && B[0] == 0 && B[1] > 0) {
        var a1 = A[1] / A[0];
        var fi = 90*Math.PI/180-Math.atan(a1);
    }
    //x2 = 0, x1 nie i y2 ujemne
    if (A[0] != 0 && B[0] == 0 && B[1] < 0) {
        var a1 = A[1] / A[0];
        var fi = 270*Math.PI/180-Math.atan(a1);
    }

    //wszystko jest ok, x1 i x2 nie sa zerami
    if (B[0] != 0 && A[0] != 0) {
        var a1 = A[1] / A[0];
        var a2 = B[1] / B[0];
        var fi = Math.atan((a2 - a1) / (1 + a2 * a1));
    }

    //skalowanie x'=sx ==> d2=sd1 ==> d2/d1 = s
    var d1 = Math.sqrt((A[0]) ** 2 + (A[1]) ** 2);
    var d2 = Math.sqrt((B[0]) ** 2 + (B[1]) ** 2);
    var s = d2 / d1;
    document.getElementById('check2').innerHTML = 'kat: ' + fi + ", s = " + s;

    //macierz
    var M = [s * (Math.cos(fi)), -s * (Math.sin(fi)), s * (Math.sin(fi)), s * (Math.cos(fi))];
    document.getElementById('check').innerHTML = M;

}



//matrix([0, 1], [1, -1]); //fi = 5/4 pi, cosfi = sinfi = - sqrt2/2, s = sqrt2
//matrix([1, -1],[0, 1]); // fi = 3/4 pi, s = 1/sqrt2
//matrix([-3,-3],[-5,0]); // fi = -pi/4, s = 5/sqrt(18)
matrix([1,2],[5,4]);