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


//----------------------------------------------------------------------------

function koch(lengthSide, levels) {
    if (levels == 0) {
        turtle.forward(lengthSide)
        return this
    };
    lengthSide = lengthSide / 3;
    koch(lengthSide, levels - 1);
    turtle.left(60);
    koch(lengthSide, levels - 1);
    turtle.right(120);
    koch(lengthSide, levels - 1);
    turtle.left(60);
    koch(lengthSide, levels - 1);
}
var length = 600;
var curves = 5;

turtle.penDown();
turtle.right(90);

function addlength() {
    if (length < 1000) {
        length += 50
    }
    turtle.ctx.clearRect(0, 0, c.width, c.height);
    turtle.position(0, c.height / 2);
    koch(length, curves);
}
function lesslength() {
    if (length > 300) {
        length -= 50
    }
    turtle.ctx.clearRect(0, 0, c.width, c.height);
    turtle.position(0, c.height / 2);
    koch(length, curves);
}

function addcurves() {
    if (curves < 10) {
        curves += 1
    }
    turtle.ctx.clearRect(0, 0, c.width, c.height);
    turtle.position(0, c.height / 2);
    koch(length, curves);
}

function lesscurves() {
    if (curves > 1) {
        curves -= 1
    }
    turtle.ctx.clearRect(0, 0, c.width, c.height);
    turtle.position(0, c.height / 2);
    koch(length, curves);
}

koch(600, 5);