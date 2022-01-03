var M = [0, 0, 0,
    0, 0, 0,
    0, 0, 0];
var player = 1;
var w = 0;


function kliknij(id, n) {
    var btn = document.getElementById(id);
    if (M[n] == 1 || M[n] == 10 || w == 1) {
        return
    }
    else {
        if (player == 1) {
            player = 10;
            var im_path = '<img src="krzyzyk.png" />';
            btn.innerHTML = im_path;
            //btn.innerText = "X";
            M[n] = 1;
        }
        else {
            player = 1;
            var im_path = '<img src="kolko.png" />';
            btn.innerHTML = im_path;
            //btn.innerText = "0";
            M[n] = 10;
        }
    }
    win();
}

//sprawdzanie wygranej
function win() {
    if (M[0] + M[1] + M[2] == 3 || M[3] + M[4] + M[5] == 3 || M[6] + M[7] + M[8] == 3 ||
        M[0] + M[3] + M[6] == 3 || M[1] + M[4] + M[7] == 3 || M[2] + M[5] + M[8] == 3 ||
        M[0] + M[4] + M[8] == 3 || M[2] + M[4] + M[6] == 3) {
        document.getElementById('win').innerHTML = 'PLAYER X WON';
        w = 1;
        return
    }
    if (M[0] + M[1] + M[2] == 30 || M[3] + M[4] + M[5] == 30 || M[6] + M[7] + M[8] == 30 ||
        M[0] + M[3] + M[6] == 30 || M[1] + M[4] + M[7] == 30 || M[2] + M[5] + M[8] == 30 ||
        M[0] + M[4] + M[8] == 30 || M[2] + M[4] + M[6] == 30) {
        document.getElementById('win').innerHTML = 'PLAYER O WON';
        w = 1;
        return
    }
    if (M[0] + M[1] + M[2] + M[3] + M[4] + M[5] + M[6] + M[7] + M[8] > 44) {
        document.getElementById('win').innerHTML = 'NOBODY WON';
        w = 1;
        return
    }

}

