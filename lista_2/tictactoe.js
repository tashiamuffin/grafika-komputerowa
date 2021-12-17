var M = [0, 0, 0,
    0, 0, 0,
    0, 0, 0];
var player = 1;
var w = 0;
function kliknij(id, n) {
    var btn = document.getElementById(id);
    if (btn.innerText == "X" || btn.innerText == "0" || w == 1) {
        return
    }
    else {
        if (player == 1) {
            player = 10;
            btn.innerText = "X";
            M[n] = 1;
        }
        else {
            player = 1;
            btn.innerText = "0";
            M[n] = 10;
        }
    }
    win();
}
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
        document.getElementById('win').innerHTML = 'PLAYER 0 WON';
        w = 1;
        return
    }
    if (M[0] + M[1] + M[2] + M[3] + M[4] + M[5] + M[6] + M[7] + M[8] > 44) {
        document.getElementById('win').innerHTML = 'NOBODY WON';
        w = 1;
        return
    }

}

//style="width:100%;height:100%;position:absolute;vertical-align:middle;text-align:center;