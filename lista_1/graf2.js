var c = document.getElementById('MyCanvas');

var turtle = {
    x: 0,
    y: c.height / 2,
    angle: 180,
    pencolor: '#000000',
    pen: false,
    lineWidth: 3,

    penDown: function () {
        this.pen = true
    },
    penUp: function () {
        this.pen = false
    },

    forward: function (steps) {
        var a = this.x;
        var b = this.y;
        this.x = a + steps * Math.sin(this.angle * 2 * Math.PI / 360);
        this.y = b + steps * Math.cos(this.angle * 2 * Math.PI / 360);
        if (this.pen) {
            this.ctx.beginPath();
            this.ctx.lineWidth = this.lineWidth;
            this.ctx.strokeStyle = this.pencolor;
            this.ctx.moveTo(a, b);
            this.ctx.lineTo(this.x, this.y);
            this.ctx.stroke();
        }
        else {
            this.ctx.moveTo(this.x, this.y);
        }
        return this;
    },

    backward: function (steps) {
        this.forward(-steps);
        return this;
    },

    right: function (number) {
        this.angle -= number;
        return this;
    },

    left: function (number) {
        this.angle = this.angle - (360 - number);
        if (this.angle > 360) this.angle -= 360
        return this;
    },

    penWidth: function (number) {
        this.lineWidth = number
        return this
    },

    position: function (a, b) {
        this.x = a
        this.y = c.height - b
        return this
    }
};

turtle.ctx = c.getContext('2d');

//-----------------------------------------------------------------------------------

var ht = 200
var w = c.width - 100

function graph(number_1, number_2) {
    turtle.ctx.clearRect(0, 0, c.width, c.height);
    turtle.position(50, c.width / 2);

    if (number_1 > 1 && number_2 > 1) {
        turtle.penDown();
        turtle.forward(ht);
        turtle.backward(ht);
        for (let i = 0; i < number_2; i++) {
            for (let j = 0; j < number_1; j++) {

                if (j * w / (number_1 - 1) > i * w / (number_2 - 1)) {
                    distance = Math.sqrt(Math.pow(ht, 2) + Math.pow(j * w / (number_1 - 1) - i * w / (number_2 - 1), 2))
                    angle = Math.atan(j * w / (ht * (number_1 - 1)) - i * w / (ht * (number_2 - 1))) * 180 / Math.PI;
                    turtle.right(angle);
                    turtle.forward(distance);
                    turtle.backward(distance);
                    turtle.left(angle);
                }
                else {
                    distance = Math.sqrt(Math.pow(ht, 2) + Math.pow(-j * w / (number_1 - 1) + i * w / (number_2 - 1), 2))
                    angle = Math.atan(i * w / (ht * (number_2 - 1)) - j * w / (ht * (number_1 - 1))) * 180 / Math.PI;
                    turtle.left(angle);
                    turtle.forward(distance);
                    turtle.backward(distance);
                    turtle.right(angle);
                };
            }
            turtle.right(90);
            turtle.penUp();
            turtle.forward(w / (number_2 - 1));
            turtle.left(90);
            turtle.penDown();
        }
    }
    if (number_2 == 1 && number_1 > 1) {
        turtle.right(90);
        turtle.penUp();
        turtle.forward(w / 2);
        turtle.left(90);
        turtle.penDown();
        for (let i = 0; i < number_1; i++) {
            var pos = c.width / 2;
            if (i * w / (number_1 - 1) > pos) {
                distance = Math.sqrt(Math.pow(ht, 2) + Math.pow(i * w / (number_1 - 1) - pos, 2));
                angle = Math.atan(i * w / (ht * (number_1 - 1)) - pos / ht) * 180 / Math.PI;
                turtle.right(angle);
                turtle.forward(distance);
                turtle.backward(distance);
                turtle.left(angle);
            }
            else {
                distance = Math.sqrt(Math.pow(ht, 2) + Math.pow(pos - i * w / (number_1 - 1), 2));
                angle = Math.atan(pos / ht - i * w / (ht * (number_1 - 1))) * 180 / Math.PI;
                turtle.left(angle);
                turtle.forward(distance);
                turtle.backward(distance);
                turtle.right(angle);
            }

        }
    }
    if (number_1 == 1 && number_2 > 1) {
        turtle.right(90);
        turtle.penUp();
        turtle.forward(w / 2);
        turtle.left(90);
        turtle.forward(ht);
        turtle.right(180);
        turtle.penDown();
        for (let i = 0; i < number_2; i++) {
            var pos = c.width / 2;
            if (i * w / (number_2 - 1) > pos) {
                distance = Math.sqrt(Math.pow(ht, 2) + Math.pow(i * w / (number_2 - 1) - pos, 2));
                angle = Math.atan(i * w / (ht * (number_2 - 1)) - pos / ht) * 180 / Math.PI;
                turtle.right(angle);
                turtle.forward(distance);
                turtle.backward(distance);
                turtle.left(angle);
            }
            else {
                distance = Math.sqrt(Math.pow(ht, 2) + Math.pow(pos - i * w / (number_2 - 1), 2));
                angle = Math.atan(pos / ht - i * w / (ht * (number_2 - 1))) * 180 / Math.PI;
                turtle.left(angle);
                turtle.forward(distance);
                turtle.backward(distance);
                turtle.right(angle);
            }

        }
        turtle.right(180);
    }

    if (number_2 == 1 && number_1 == 1) {
        turtle.right(90);
        turtle.penUp();
        turtle.forward(w / 2);
        turtle.left(90);
        turtle.penDown();
        turtle.forward(ht);
    }
    if (number__1 < 1 || number_2 < 1) {
        document.getElementById('check').innerHTML = 'Enter a proper number';
    }
};


function kliknij() {
    var n_1 = document.getElementById('n_1').value;
    var n_2 = document.getElementById('n_2').value;
    graph(n_1, n_2);
};

