const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
    x: undefined,
    y: undefined
};

addEventListener('mousemove', event=>{
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

//objects
function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = {
        x: Math.random() - 0.5,
        y: Math.random() - 0.5
    };
}

Circle.prototype.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
}

Object.prototype.update = function() {
    this.draw()

    this.x += this.velocity.x;
    this.y += this.velocity.y;
}

let circles = [];
function init() {
    for(let i =0; i < 800; i++){
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 5;
        const color = 'blue';
        circles.push(new Circle(x, y, radius, color))
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0, canvas.width, canvas.height);

    circles.forEach(circle => {
        circle.update();
    });
}

init();
animate();