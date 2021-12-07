function wspol(x_1,y_1,z_1,x_2,y_2,z_2,x_3,y_3,z_3) {

     if ((x_1 == x_2 && y_1==y_2 && z_1==z_2)|| (x_1 == x_3 && y_1 == y_3 && z_1==z_3) || (x_2 == x_3 && y_2==y_3 && z_2==z_3)) {
        document.getElementById('check').innerHTML='oczywiscie ze sa wspolliniowe bo to albo te same punkty albo 2 takie same lol';
        return
    }

    var v1 = x_2-x_1;
    var v2 = y_2-y_1;
    var v3 = z_2-z_1;

    var w1 = x_3-x_2;
    var w2 = y_3-y_2;
    var w3 = z_3-z_2;
    //generujemy wektorki AB i BC, i sprawdzamy czy są one rownolegle (mają punkt wspolny wiec musza byc rownolegle zeby byc wspolliniowe)
   

    if ( v1/w1 == v2/w2 && v2/w2 == v3/w3) {
        document.getElementById('check').innerHTML='Sa wspolliniowe';
    }
    else {
        document.getElementById('check').innerHTML='nie sa upsik';
    }
}

wspol(2,2,2,2,2,2,2,2,4);