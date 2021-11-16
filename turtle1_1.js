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
        this.angle = this.angle - (360 - number);
        if (this.angle >360) this.angle -= 360
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

tasks = ['fw','bw','rt','lt','pu','pd','pc','pw','ps'];
function kliknij() {
    var todo = document.getElementById('task').value;
    var task = todo.slice(0,2);
    var number = document.getElementById('number').value;
    if (task != 'fw' && task != 'bw' && task != 'rt' && task != 'lt' && task != 'pu' && task != 'pd' && task != 'pc' && task != 'pw' && task != 'ps') 
        document.getElementById('check').innerHTML='the turtle does not understand the given task ';
    else document.getElementById('check').innerHTML='The turtle just did: ' + task + '(' + number + ')';
    if (task == 'fw') turtle.forward(number);
    if (task == 'bw') turtle.backward(number);
    if (task == 'rt') turtle.right(number);
    if (task == 'lt') turtle.left(number);
    if (task == 'pu') turtle.penUp();
    if (task == 'pd') turtle.penDown();
    if (task == 'pc') turtle.pencolor = number;
    if (task == 'pw') turtle.penWidth(number);
}

/*forward - fw
backward - bw
right - rt
left - lt
penup - pu
pendown - pd
pencolor - pc
penwidth = pw
*/