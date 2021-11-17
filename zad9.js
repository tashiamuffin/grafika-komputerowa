function wspol(x_1,y_1,x_2,y_2,x_3,y_3,) {
    if ((x_1 == x_2 && y_1==y_2)|| (x_1 == x_3 && y_1 == y_3) || (x_2 == x_3 && y_2==y_3)) {
        document.getElementById('check').innerHTML='oczywiscie ze sa wspolliniowe ';
        return
    }
    if ((x_1 == x_2 && x_1!=x_3)|| (x_1 == x_3 && x_1 != x_2) || (x_2 == x_3 && x_2!=x_1)) {
        document.getElementById('check').innerHTML='nie sa wspolliniowe bo nie';
        return
    }

    var a = (y_1-y_2)/(x_1-x_2);
    var b = y_1-a*x_1;
    //czyli nasza prosta łącząca 2 punkty wygląda tak: y = ax+b
    //teraz sprawdzamy czy punkt 3 miesci sie na znalezionej prostej

    if (y_3 == a*x_3 + b) {
        document.getElementById('check').innerHTML='Sa wspolliniowe';
    }
    else {
        document.getElementById('check').innerHTML='nie sa upsik';
    }
}

wspol(2,4,4,8,1,2);