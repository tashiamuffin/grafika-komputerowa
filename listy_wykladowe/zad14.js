function normal(A, B, C) {

    // bierzemy wektorki AB i AC i tworzymy z nich iloczyn wektorowy == normalnemu wektorowi
    var a = [B[0] - A[0], B[1] - A[1], B[2] - A[2]];
    var b = [C[0] - A[0], C[1] - A[1], C[2] - A[2]];

    var prod = [a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]];

    var length = Math.sqrt(prod[0] ** 2 + prod[1] ** 2 + prod[2] ** 2);

    //nasza płaszczyzna to n1 * (x-x0) + n2* (y-y0) + n3*(z-z0) = 0, gdzie wektor normalny n=[n1,n2,n3]

    var wektorek = [prod[0] / length, prod[1] / length, prod[2] / length];

    document.getElementById('check').innerHTML = '[' + wektorek + ']';
}

normal([0, 0, 0], [1, 1, 0], [1, 5, 0]);