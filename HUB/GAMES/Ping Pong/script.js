/** @type {HTMLCanvasElement} */
var canvas = document.getElementById("canvas");
var cxt = document.getElementById("canvas").getContext('2d');

var vy1 = 0;
var vy2 = 7.5;
var vy3 = 10;

//ball
var xB = 5;
var yB = 100;
var vxB = 3;
var vyB = 3;
var VZW = -1;
var rB = 5; // Radius Ball
//ball

//movement right plank
var upr = false;
var downr = false;
//movement right plank

//movement left plank
var upl = false;
var downl = false;
//movement left plank

//left plank
var xmpl;
var ympl; //YMCA
var xpl = 0;
var ypl = 400;
var vypl = 5;
var wpl = 10;//width left plank
var hpl = 100;//height left plank
//left plank

//right plank
var xmpr;
var ympr;
var xpr = 1700;
var ypr = 400;
var vypr = 5;
var wpr = -10; //width right plank
var hpr = 100; //height right plank
//right plank

//Game
var player1 = 0;
var player2 = 0;
//Game

document.onkeydown = function (evt) {
    console.log(evt.key);
    switch (evt.key) {
        case "ArrowUp":
            upr = true;
            break;
        case "ArrowDown":
            downr = true;
            break;
        case "Shift":
            upl = true;
            break;
        case "Control":
            downl = true;
            break;
    }
}

document.onkeyup = function (evt) {
    switch (evt.key) {
        case "ArrowUp":
            upr = false;
            break;
        case "ArrowDown":
            downr = false;
            break;
        case "Shift":
            upl = false;
            break;
        case "Control":
            downl = false;
            break;
    }
}
// y = Math.max(minv, Math.min(maxv, y));

function BHW() { //Ball Hits Wall

    if (xB + rB >= 1700 || xB - rB <= 0) {
        vxB = vxB * VZW;
        if (xB + rB >= 1700) { //rechte Wand
            player1 += 1;
        }
        if (xB - rB <= 0) { // linke Wand
            player2 += 1;
        }
    }
    if (yB + rB >= 900 || yB - rB <= 0) {
        vyB = vyB * VZW;
    }

}

function spielstand() {
    if (player1 == 10) {
        document.getElementById("winner").innerHTML = "Spieler 1 gewinnt mit " + player1 + " zu " + player2 + "!!!" + '<br>' + "Gut gespielt!";
        windows.stop();

        window.open('localhost:5500');
    }
    if (player2 == 10) {
        document.getElementById("winner").innerHTML = "Spieler 2 gewinnt mit " + player1 + " zu " + player2 + "!!!" + '<br>' + "Gut gespielt!";
        windows.stop();
        window.open('localhost:5500');
    }
}

function colision() {
    let vxB_old = 5;
    if (xB - rB <= xpl + wpl && yB - rB >= ypl && yB + rB <= ypl + hpl || xB + rB >= xpr + wpr && yB - rB >= ypr && yB + rB <= ypr + hpr) {
        if (yB >= ympr - 5 && yB <= ympr + 5) { vyB = vy1; }//rechts
        if (yB >= ympr - 20 && yB <= ympr - 5 || yB <= ympr + 20 && yB >= ympr + 5) { vyB = vy2; }
        if (yB >= ympr - 30 && yB <= ympr - 20 || yB <= ympr + 30 && yB >= ympr + 20) { vyB = vy3; }
        if (yB >= ympl - 5 && yB <= ympl + 5) { vyB = vy1; }//links
        if (yB >= ympl - 20 && yB <= ympl - 5 || yB <= ympl + 20 && yB >= ympl + 5) { vyB = vy2; }
        if (yB >= ympl - 30 && yB <= ympl - 20 || yB <= ympl + 30 && yB >= ympl + 20) { vyB = vy3; }

        vxB = vxB * VZW;
    }
}

function mB() { //move Ball
    xB = xB + vxB;
    yB = yB + vyB;
    cxt.beginPath();
    cxt.arc(xB, yB, rB, 0, 2 * Math.PI);
    cxt.stroke();
}

function aB() {//animate Ball
    cxt.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("Spielstand").innerHTML = player1 + " " + ":" + " " + player2
    mpr();
    mpl();
    colision();
    spielstand();
    mB();
    BHW();
    plankr(); //rechtes Brett
    plankl();//linkes Brett
    window.requestAnimationFrame(aB);
    // console.log(xB);
    // console.log(yB);
}

function plankr() {
    // dypr = Math.max(minypr, Math.min(maxypr, dypr))

    xmpr = xpr + 1 / 2 * wpr;
    ympr = ypr + 1 / 2 * hpr;
    cxt.fillStyle = "green"
    cxt.fillRect(xpr, ypr, wpr, hpr);

}

function plankl() {
    // dypl = Math.max(minypl, Math.min(maxypl, dypl))
    xmpl = xpl + 1 / 2 * wpl;
    ympl = ypl + 1 / 2 * hpl;
    cxt.fillStyle = "blue"
    cxt.fillRect(xpl, ypl, wpl, hpl);

}

function mpr() {

    if (ypl + 100 > 900 || ypl < 0) { //restrictions
        if (ypl + 100 > 900) {
            ypl = ypl - 1;
        }
        else if (ypl < 0) {
            ypl = ypl + 1;
        }
        vypl = 0;
    }

    if (upr == true) {
        ypr = ypr - vypr;
        vypr = 5;
        // console.log("hoch rechts")
    }
    if (downr == true) {
        ypr = ypr + vypr;
        vypr = 5;
        // console.log("runter rechts")
    }

}

function mpl() {

    if (ypr + 100 > 900 || ypr < 0) { //restrictions
        if (ypr + 100 > 900) {
            ypr = ypr - 1;
        }
        else if (ypr < 0) {
            ypr = ypr + 1;
        }
        vypr = 0;
    }

    if (upl == true) {
        ypl = ypl - vypl;
        vypl = 5;
        //console.log("hoch links")
    }
    if (downl == true) {
        ypl = ypl + vypl;
        vypl = 5;
        //console.log("runter links")
    }
}