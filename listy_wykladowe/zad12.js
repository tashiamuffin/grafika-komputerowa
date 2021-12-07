function side(A, B, C, X, Y) {
    //PUNKT 0 to A, bierzemy wektor AB = a i AC = b

    var x_0 = A[0];
    var y_0 = A[1];
    var z_0 = A[2];

    var a = [B[0] - A[0], B[1] - A[1], B[2] - A[2]];
    var b = [C[0] - A[0], C[1] - A[1], C[2] - A[2]];

    var prod = [a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]];

    //nasza płaszczyzna to n1 * (x-x0) + n2* (y-y0) + n3*(z-z0) = 0, gdzie wektor normalny n=[n1,n2,n3]

    var value_1 = prod[0] * (X[0] - x_0) + prod[1] * (X[1] - y_0) + prod[2] * (X[2] - z_0);
    var value_2 = prod[0] * (Y[0] - x_0) + prod[1] * (Y[1] - y_0) + prod[2] * (Y[2] - z_0);

    //jesli wartosci sa tego samego znaku tzn ze sa po tej samej stronie plaszczyzny
    if (value_1 == 0 || value_2 == 0) {
        document.getElementById('check').innerHTML = 'przynajmniej jeden z punktow lezy na plaszczyznie wiec who knows';
        return
    }
    if ((value_1 < 0 && value_2 < 0) || (value_1 > 0 && value_2 > 0)) {
        document.getElementById('check').innerHTML = 'Sa po tej samej stronie';
        return
    }
    else {
        document.getElementById('check').innerHTML = 'nie sa :c';
        return
    }
}
side([0, 0, 0], [1, 1, 0], [5, 1, 0], [10, 10, 10], [10, 10, -5]);