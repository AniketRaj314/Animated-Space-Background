let width, height, total, stars, speed, earth_show;

function preload() {
    earth_show = createImg('assets/earth.gif');
}

function setup() {
    width = innerWidth;
    height = innerHeight - 4;
    total = 150;
    stars = [];
    speed = 1;
    createCanvas(width, height);
    for(let i = 0; i < total; i++) {
        stars.push(new Star());
    }
}

function draw() {
    background(0);
    for(const star of stars) {
        star.update();
        star.show();
    }
    imageMode(CENTER);
    earth_show.position(width / 2 - 100, height / 2 - 100);
}

class Star {
    constructor() {
        this.x = floor(random(width));
        this.y = floor(random(height));
        this.size = floor(random(2, 5));
        this.xSpeed = random([-speed, 0, speed]);
        this.ySpeed = random([-speed, 0, speed]);
        this.opacity = random(0, 1.1);
        this.flg = random([0, 1]);
    }

    show() {
        noStroke();
        fill(`rgba(255, 255, 255, ${this.opacity})`);
        ellipse(this.x, this.y, this.size, this.size);
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.flg) {
            this.opacity += 0.01;
            
            if(this.opacity >= 1) {
                this.flg = !this.flg;
            }
        } else {
            this.opacity -= 0.01;
            
            if(this.opacity <= 0.2) {
                this.flg = !this.flg;
            }
        }

        if(this.x <= 0 || this.x > width) {
            this.xSpeed *= -1;
        }

        if(this.y <= 0 || this.y > height) {
            this.ySpeed *= -1;
        }
    }
}