function hulaj(A, B, C, D) {
    var a = (A[1] - B[1]) / (A[0] - B[0]);
    var b = A[1] - a * A[0];

    //mamy nasza prosta y=ax+b
    //sprawdzamy ax+b-y ile wynosi i zaleznie od znaku stwierdzamy po ktorej stronie jest
    var value_1 = a * C[0] + b - C[1];
    var value_2 = a * D[0] + b - D[1];

    if (value_1 == 0 || value_2 == 0) {
        document.getElementById('check').innerHTML = 'przynajmniej jeden z punktow lezy na prostej wiec who knows';
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

hulaj([0, 0], [1, 1], [1, 2], [5, 2])