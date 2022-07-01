let x, y;
let ax, ay;
let bx, by;
let score;

function setup(){
    createCanvas(400,400);
    frameRate(60);
    x = 50;
    y = 50;
    ax = 200;
    ay = 200;
    bx = 350;
    by = 350;

    blueScore = 0;
    redScore  = 0;
 }
 
 function draw() {
    background(180);
    let c = color('blue')
    fill(c);
    circle(x, y, 20);

    c = color('yellow');
    fill(c);
    circle(ax, ay, 20);

    c = color('red');
    fill(c)
    circle(bx, by, 20)


    document.getElementById("RedScore").innerHTML = "Red Player Score:" + redScore;
    document.getElementById("BlueScore").innerHTML = "Blue Player Score:" + blueScore;

    if (x >= 0 && keyIsDown(65)) {
        x -= 10;
        //moves left
    }
    if (x <= 400 && keyIsDown(68)) {
        x += 10;
        //moves right
    }
    if (y >= 0 && keyIsDown(87)) {
        y -= 10;
        //moves up
    }
    if (y <= 400 && keyIsDown(83)) {
        y += 10;
        //moves down
    }
    if (bx >= 0 && keyIsDown(37)) {
        bx -= 10;
        //moves right
    }
    if (bx <= 400 && keyIsDown(39)) {
        bx += 10;
        //moves left
    }
    if (by >= 0 && keyIsDown(38)) {
        by -= 10;
        //moves up
    }
    if (by <= 400 && keyIsDown(40)) {
        by += 10;
        //moves down
    }


    if(x+20 > ax && x < ax+20) {
    
    if(y+20 > ay && y < ay+20) {
        ax = Math.floor(Math.random()*(330+30));
        ay = Math.floor(Math.random()*(330+30));
        blueScore += 1;
        
    }}
    if(bx+20 > ax && bx < ax+20) {
    
    if(by+20 > ay && by < ay+20) {
        ax = Math.floor(Math.random()*(330+20));
        ay = Math.floor(Math.random()*(330+20));
        redScore += 1;
    }

    }
}