var c = document.getElementById('MyCanvas');

var turtle = {
    x: 50,
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

//---------------------------------------------------------------------

function graph(n, l) {
    turtle.penDown();
    var angle = 360 / n;
    for (let i = 0; i < n; i++) {
        turtle.forward(l);
        turtle.right(180 / n);
        for (let j = 0; j < n - 1; j++) {
            turtle.right((180 - 360 / n) / (n - 2));
            var distance = l * Math.sin((j + 1) * Math.PI / n) / Math.sin(Math.PI / n);
            turtle.forward(distance);
            turtle.backward(distance);
        };
        turtle.left(180 - angle);
    };
};

var tips = 9;
var length = 150;

function addlength() {
    if (length < 300) {
        length += 50;
    }
    turtle.ctx.clearRect(0, 0, c.width, c.height);
    turtle.position(50, c.height / 2);
    graph(tips, length);
}
function lesslength() {
    if (length > 100) {
        length -= 50;
    }
    turtle.ctx.clearRect(0, 0, c.width, c.height);
    turtle.position(50, c.height / 2);
    graph(tips, length);
}

function addtips() {
    if (tips < 15) {
        tips += 1;
    }
    turtle.ctx.clearRect(0, 0, c.width, c.height);
    turtle.position(50, c.height / 2);
    graph(tips, length);
}

function lesstips() {
    if (tips > 3) {
        tips -= 1;
    }
    turtle.ctx.clearRect(0, 0, c.width, c.height);
    turtle.position(50, c.height / 2);
    graph(tips, length);
}


graph(9, 150);
