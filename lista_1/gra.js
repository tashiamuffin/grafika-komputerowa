var c = document.getElementById('MyCanvas');
var ctx = c.getContext("2d");

//---------------------------- kwadracik grającego--------------
var player = {
  rect_x: 10,
  rect_y: c.height - 20,
  score: 0,
  velocity: 10,
  win: false,
  draw: function () {
    var a = this.rect_x;
    var b = this.rect_y;
    ctx.beginPath();
    ctx.rect(a, b, 15, 15);
    ctx.stroke();
  },
  collision: function (object) {
    var a = this.rect_x;
    var b = this.rect_y;
    var x = object.tr_x;
    var y = object.tr_y;
    var crash = false;
    if (((x <= a + 15 && a <= x + 35) && (y >= (b - 35) && b >= y - 15))
    ) {
      crash = true;
    }
    if (a < 0 || a > c.width - 15 || b > c.height - 15 || b < 0) {
      crash = true
    }
    return crash;
  },
  winwin: function () {
    if (this.rect_x >= c.width - 50 && this.rect_y < 50) {
      this.win = true
    }
  }
}

//------------------ zle kwadraty-------------------------------
function obstacle(y) {
  this.tr_x = Math.random() * 500;
  this.tr_y = y;
  this.velocity = 10;
  this.ctx = c.getContext('2d');
  this.draw = function () {
    var a = this.tr_x;
    var b = this.tr_y;
    ctx.beginPath();
    ctx.rect(a, b, 35, 35);
    ctx.stroke();
  },
    this.update = function () {
      this.tr_x += getRandomInt(-1, 2);
      this.tr_y += getRandomInt(-1, 2);
      if (this.tr_x < 20) {
        this.tr_x = this.tr_x + 2;
      }
      if (this.tr_y < 20) {
        this.tr_y = this.tr_y + 2;
      }
      this.draw();

    }
}

//---------------------inicjalizacja---------------

player.ctx = c.getContext('2d');
player.draw();

m1 = new obstacle(20 + Math.random() * 500);
m2 = new obstacle(20 + Math.random() * 500);
m3 = new obstacle(20 + Math.random() * 500);
m4 = new obstacle(20 + Math.random() * 500);
m5 = new obstacle(20 + Math.random() * 500);
var t = 0

// ---------------funkcja update-----------------------------

function update() {
  t += 1
  ctx.clearRect(0, 0, c.width, c.height);

  if (player.collision(m1) || player.collision(m2) || player.collision(m3) || player.collision(m4) || player.collision(m5)) {
    document.getElementById('check').innerHTML = 'GAME OVER';
    clearInterval(interv)
    return
  }
  player.winwin();
  if (player.win == true) {
    document.getElementById('check').innerHTML = 'YOU WON!';
    document.getElementById('score').innerHTML = 'score: ' + t / 100 + 's';
    clearInterval(interv)
    return
  }
  player.draw();
  m1.update();
  m2.update();
  m3.update();
  m4.update();
  m5.update();
  target();
}
interv = setInterval(update, 10);
function kliknij() {
  t = 0
  player.rect_x = 10;
  player.rect_y = c.height - 20;
  player.score = 0;
  player.velocity = 10;
  player.win = false;
  player.draw();
  m1 = new obstacle(20 + Math.random() * 500);
  m2 = new obstacle(20 + Math.random() * 500);
  m3 = new obstacle(20 + Math.random() * 500);
  m4 = new obstacle(20 + Math.random() * 500);
  m5 = new obstacle(20 + Math.random() * 500);


  document.getElementById('check').innerHTML = 'Good luck ;)';
  document.getElementById('score').innerHTML = ' ';
  interv = setInterval(update, 10);

}
//--------------------kontrolki---------------

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 39) {
    //right arrow
    player.rect_x += 10;

  }
  if (event.keyCode == 37) {
    //left arrow
    player.rect_x -= 10;

  }
  if (event.keyCode == 40) {
    //up arrow
    player.rect_y += 10;

  }
  if (event.keyCode == 38) {
    //down arrow
    player.rect_y -= 10;

  }
});


//-----------------f. pomocniczne -------------------------

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function target() {
  ctx.beginPath();
  ctx.arc(c.width - 30, 30, 30, 0, 2 * Math.PI);
  ctx.stroke();
}

