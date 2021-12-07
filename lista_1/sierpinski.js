var c = document.getElementById('MyCanvas');

var turtle = {
    x: 0,
    y: c.height,
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

//-------------------------------------------------------------

function sierpinski(length, depth) {
    if (depth == 0) {
        for (i = 0; i < 3; i++) {
            turtle.forward(length);
            turtle.left(120);
        };
    }
    else {
        sierpinski(length / 2, depth - 1);
        turtle.forward(length / 2);
        sierpinski(length / 2, depth - 1);
        turtle.backward(length / 2);
        turtle.left(60);
        turtle.forward(length / 2);
        turtle.right(60);
        sierpinski(length / 2, depth - 1);
        turtle.left(60);
        turtle.backward(length / 2);
        turtle.right(60);
    }
}


var length = 450;
var depth = 5;

turtle.penDown();
turtle.right(90);

function addlength() {
    if (length < 600) {
        length += 50
    }
    turtle.ctx.clearRect(0, 0, c.width, c.height);
    turtle.position(0, 0);
    sierpinski(length, depth);
}
function lesslength() {
    if (length > 200) {
        length -= 50
    }
    turtle.ctx.clearRect(0, 0, c.width, c.height);
    turtle.position(0, 0);
    sierpinski(length, depth);
}

function addcurves() {
    if (depth < 10) {
        depth += 1
    }
    turtle.ctx.clearRect(0, 0, c.width, c.height);
    turtle.position(0, 0);
    sierpinski(length, depth);
}

function lesscurves() {
    if (depth > 1) {
        depth -= 1
    }
    turtle.ctx.clearRect(0, 0, c.width, c.height);
    turtle.position(0, 0);
    sierpinski(length, depth);
}

sierpinski(450, 5)