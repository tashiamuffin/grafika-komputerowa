
var M = [0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0];

var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function matrix(M) {
    for (var i = 0; i < 20; i++) {
        var a = Math.floor(Math.random() * values.length);
        var val = values[a];
        M[i] = val;
        if (M.filter(x => x == val).length == 2) {
            remove_ele(values, val);
        }
    }
    return M
}

function remove_ele(M, ele) {
    for (var i = 0; i < M.length; i++) {
        if (M[i] === ele) {
            M.splice(i, 1);
        }
    }
}

var B = matrix(M);


function set_images(M) {
    for (var i = 0; i < 20; i++) {
        var btn = document.getElementById((i + 1).toString());
        var val = M[i];
        var im_path = '<img src="' + val.toString() + '.png" />';
        btn.innerHTML = im_path;
    }
}

//-----------funkcja ustawiająca zdjecie na dany miejsciu planszy----------
function set_image(n) {
    var btn = document.getElementById((n + 1).toString());
    var val = B[n];
    var im_path = '<img src="' + val.toString() + '.png" />';
    btn.innerHTML = im_path;
}

//--------funkcja resetująca odkryte zdjecia---------------------------
function reset_images(M, opened) {
    for (var i = 0; i < 20; i++) {
        if (opened.includes(M[i])) {
            continue
        }
        else {
            var btn = document.getElementById((i + 1).toString());
            var im_path = '<img src="bg.png" />';
            btn.innerHTML = im_path;
        }
    }
}


var turn = 0; //zmienna oznaczająca kolejnosc wykonywania ruchu - 1 - 1sza karta, 2- druga karta, 3- reset
var chosen = [0, 0];
var opened = [0];
var start = new Date().getTime();

function klik(id) {
    if (turn == 1) {
        num = parseInt(id);
        set_image(num - 1); //odwracamy karte
        chosen[1] = M[num - 1]; //sprawdzamy jej wartosc
        document.getElementById('win').innerHTML = chosen;
        if (chosen[0] != chosen[1]) {
            setTimeout(function () {
                reset_images(M, opened);
            }, 1000);
        }
        else {
            opened.push(M[num - 1]);
            document.getElementById('win').innerHTML = chosen + ',' + opened;
            reset_images(M, opened);
        }
        win(opened);
        turn = 0;
        chosen = [0, 0];
    }
    else {
        num = parseInt(id);
        set_image(num - 1); //odwracamy karte
        chosen[0] = M[num - 1]; //sprawdzamy jej wartosc
        turn = 1;
        document.getElementById('win').innerHTML = chosen + turn;
    }
}

function win(opened) {
    if (opened.length == 11) {
        var end = new Date().getTime();
        var score = end - start;
        document.getElementById('win').innerHTML = 'YOU WON, your time: ' + score/1000 + 's';
        return
    }
}
