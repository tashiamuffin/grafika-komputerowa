var c = document.getElementById('MyCanvas');

var turtle = {
    x: c.width/2,
    y: c.height,
    angle: 180,
    pencolor: '#000000',
    pen: false,
    lineWidth: 3,

    penDown: function() {
        this.pen = true
    },
    penUp: function() {
        this.pen = false
    },

    forward: function (steps) {
        var a = this.x;
        var b = this.y;
        this.x = a + steps * Math.sin(this.angle* 2 * Math.PI / 360);
        this.y = b + steps * Math.cos(this.angle* 2 * Math.PI / 360);
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
        this.angle += number;
        return this;
    },

    penWidth: function (number) {
        this.lineWidth = number
        return this
    },

    position: function(a,b) {
        this.x = a
        this.y = c.height - b
        return this
    }
};

turtle.ctx = c.getContext('2d');



turtle.penDown();
turtle.forward(120);
turtle.left(240);
turtle.forward(120);
turtle.right(120);
turtle.forward(120);


turtle.position(200,350);
turtle.pencolor = "#FF00FF";
turtle.penWidth(10)
turtle.left(60);
turtle.forward(150);
turtle.left(90);
turtle.forward(150);
turtle.left(90);
turtle.forward(150);
turtle.left(90);
turtle.forward(150);

turtle.penUp();
turtle.backward(300);
turtle.pencolor = "#0F00FF";
turtle.penWidth(5);
turtle.penDown();
for (let i = 0; i<10; i++) {
    turtle.forward(50);
    turtle.left(36);
}

turtle.penUp();
turtle.forward(400);
turtle.right(90);
turtle.forward(50);
turtle.penDown();
turtle.pencolor = "#E9BE0D";

for (let i = 0; i<30; i++) {
    turtle.forward(150);
    turtle.left(156);
}

turtle.penUp();
turtle.pencolor = "#0DE9DC";
turtle.position(350,500);
turtle.penWidth(1);
turtle.penDown();
for (let i = 0; i<15; i++) {
    turtle.forward(30);
    turtle.right(24);
}