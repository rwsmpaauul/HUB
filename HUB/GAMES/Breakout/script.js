
/** @type {HTMLCanvasElement} */
var canvas = document.getElementById("canvas");
var cxt = document.getElementById("canvas").getContext('2d');

var gameWon = false

//#region  VAR bricks
var brick = {}
brick.columns = prompt("Anzahl Spalten");
brick.rows = prompt("Anzahl Reihen");

brick.xgap = 5;
brick.ygap = 5;

brick.xpadding = 5; //Anteilig von canvasgröße
brick.ypadding = 3;
brick.width = (canvas.width - brick.xgap - (brick.xpadding * brick.columns)) / brick.columns;
brick.height = brick.width / 2;
brick.bricks = [];
for (let c = 0; c < brick.columns; c++) {
    brick.bricks[c] = [];
    for (let r = 0; r < brick.rows; r++) {
        brick.bricks[c][r] = { x: 0, y: 0, hp: 3, status: 1 }
    }
}
brick.count = brick.columns * brick.rows
var zeroHpSum = 0
console.log(brick.bricks)
console.log(brick.count)
//#endregion Bricks




//#region VAR plank
var right = false
var left = false

plank = {}

plank.width = 100
plank.height = 10
plank.x = canvas.width / 2 - plank.width / 2
plank.y = canvas.height - plank.height - 5
plank.dx = 0
plank.xmid = plank.x + plank.width / 2
plank.ymid = plank.y + plank.height / 2

//#endregion plank





//#region VAR ball
var ball = {}
ball.x = canvas.width / 2
ball.y = canvas.height * 0.75
ball.r = 5
ball.dx = 0
ball.dy = 2
ball.a = 0
//#endregion VAR ball




//#region bricks
function drawBricks() {
    for (let c = 0; c < brick.columns; c++) {
        for (let r = 0; r < brick.rows; r++) {
            if (brick.bricks[c][r].hp === 3) {
                let x = (c * (brick.width + brick.xpadding)) + brick.xgap
                let y = (r * (brick.height + brick.ypadding)) + brick.ygap
                brick.bricks[c][r].x = x
                brick.bricks[c][r].y = y
                cxt.beginPath()
                cxt.rect(x, y, brick.width, brick.height)
                cxt.fillStyle = "green"
                cxt.fill()
                cxt.closePath()
                //  console.log(bricks)      
            }
            else if (brick.bricks[c][r].hp === 2) {
                let x = (c * (brick.width + brick.xpadding)) + brick.xgap
                let y = (r * (brick.height + brick.ypadding)) + brick.ygap
                brick.bricks[c][r].x = x
                brick.bricks[c][r].y = y
                cxt.beginPath()
                cxt.rect(x, y, brick.width, brick.height)
                cxt.fillStyle = "yellow"
                cxt.fill()
                cxt.closePath()
                //  console.log(bricks)      
            }
            if (brick.bricks[c][r].hp === 1) {
                let x = (c * (brick.width + brick.xpadding)) + brick.xgap
                let y = (r * (brick.height + brick.ypadding)) + brick.ygap
                brick.bricks[c][r].x = x
                brick.bricks[c][r].y = y
                cxt.beginPath()
                cxt.rect(x, y, brick.width, brick.height)
                cxt.fillStyle = "red"
                cxt.fill()
                cxt.closePath()
                //  console.log(bricks)      
            }

        }
    }

}
//#endregion Bricks




//#region ball

function drawBall() {
    cxt.beginPath()
    cxt.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI)
    cxt.fill()
    cxt.stroke()


}

function moveBall() {
    ball.x = ball.x + ball.dx
    ball.y = ball.y + ball.dy

}

function ballHitsWall() {
    if (ball.x - ball.r <= 0) {
        ball.dx = ball.dx * -1
    }
    if (ball.x + ball.r >= canvas.width) {
        ball.dx = ball.dx * -1
    }
    if (ball.y - ball.r <= 0) {
        ball.dy = ball.dy * -1
    }
    if (ball.y + ball.r >= canvas.height) {
        ball.dy = ball.dy * -1
        alert("GAME OVER!")
        location.reload()
    }
    // let angle = ball.a
    // console.log(angle)
}

function ballHitsBrick() {
    for (let c = 0; c < brick.columns; c++) {
        for (let r = 0; r < brick.rows; r++) {
            k = brick.bricks[c][r]
            if (k.hp === 3 || k.hp === 2 || k.hp === 1) {
                if (ball.x - ball.r > k.x - brick.xgap && ball.x + ball.r < k.x + brick.width + brick.xgap && ball.y + ball.r > k.y - brick.xgap && ball.y - ball.r < k.y + brick.height + brick.xgap) {
                    ball.dy = ball.dy * -1
                    k.hp -= 1
                }
            }

        }
    }
}

//#endregion ball



//#region plank
function drawPlank() {
    cxt.fillStyle = "blue"
    cxt.fillRect(plank.x, plank.y, plank.width, plank.height)

    // console.log("Test")


}

function movePlank() {
    if (left == true) {
        plank.x = plank.x - plank.dx;
        plank.dx += 0.02;
    }
    if (right == true) {
        plank.x = plank.x + plank.dx;
        plank.dx += 0.02;
    }
    if (left == false && right == false) {

        plank.dx = 3;
    }
}

function plankHitsWall() {
    if (plank.x <= 0) {
        plank.x = 0
    }
    if (plank.x + plank.width >= canvas.width) {
        plank.x = canvas.width - plank.width
    }
}

function ballHitsPlank() {

    if (ball.y + ball.r >= plank.y && ball.y + ball.r <= plank.y + plank.height && ball.x + ball.r >= plank.x && ball.x + ball.r <= plank.x + plank.width
        || ball.y + ball.r >= plank.y && ball.y + ball.r <= plank.y + plank.height && ball.x - ball.r >= plank.x && ball.x - ball.r <= plank.x + plank.width) {

        d = plank.xmid - ball.x
        ball.a = Math.abs(d) * 0.03

        ball.dy = ball.dy * (-1)
        ball.dx = ball.a + ball.dx

    }

}

//#region KEYPRESS
document.onkeydown = function (evt) {
    switch (evt.key) {
        case "ArrowLeft":
            left = true
            console.log("LINKS")
            break
        case "ArrowRight":
            console.log("RECHTS")
            right = true
    }
}
document.onkeyup = function (evt) {
    switch (evt.key) {
        case "ArrowLeft":
            left = false
            console.log("!LINKS")
            break
        case "ArrowRight":
            right = false
            console.log("!RECHTS")
            break
    }
}
//#endregion KEYPRESS

//#endregion plank





//#region game
// function level() {
//     let lvl = document.getElementById("lvl").value
//     var LVL = []
//     LVL[0] = { c: 5, r: 5 }
//     LVL[1] = { c: 10, r: 5 }
//     LVL[2] = { c: 10, r: 10 }
//     LVL[3] = { c: 15, r: 10 }
//     LVL[4] = { c: 15, r: 15 }
//     LVL[5] = { c: 20, r: 15 }
//     LVL[6] = { c: 20, r: 20 }
//     LVL[7] = { c: 25, r: 20 }
//     LVL[8] = { c: 25, r: 25 }
//     LVL[9] = { c: 30, r: 25 }
//     console.log("TEST")
//     for (let k = 0; k < LVL.length - 1; k++) {
//         if (lvl - 1 == k) {
//             columns = LVL[k].c
//             rows = LVL[k].r
//         }
//     }
//     console.log(LVL)
//     console.log(lvl)
//     brick.columns = columns
//     brick.rows = rows
//     draw()
// }
//#endregion game

function didWin() {
    if (gameWon) return; // Beende die Funktion, wenn das Spiel bereits gewonnen wurde

    let allBricksDestroyed = true;

    for (let c = 0; c < brick.columns; c++) {
        for (let r = 0; r < brick.rows; r++) {
            if (brick.bricks[c][r].hp > 0) {
                allBricksDestroyed = false;
                break;
            }
        }
        if (!allBricksDestroyed) {
            break;
        }
    }

    if (allBricksDestroyed) {
        gameWon = true; // Setze den Spielstatus auf gewonnen
        alert("YOU WIN!");
        setTimeout(() => { location.reload(); }, 500);
    }

}


//#region main
function draw() {
    cxt.clearRect(0, 0, canvas.width, canvas.height);


    drawBricks()
    drawPlank()
    movePlank()
    plankHitsWall()
    drawBall()
    moveBall()
    ballHitsWall()
    ballHitsPlank()
    ballHitsBrick()
    didWin()

    // brick.columns = columns;
    // brick.rows = rows;
    plank.xmid = plank.x + plank.width / 2
    plank.ymid = plank.y + plank.height / 2

    window.requestAnimationFrame(draw)

}
// level()
draw()
//#endregion main