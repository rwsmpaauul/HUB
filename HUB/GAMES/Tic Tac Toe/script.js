/** @type {HTMLCanvasElement} */
// var cxt[4] = canvas.getContext('2d');
var cxt = [];
cxt[0] = document.getElementById("canvas1").getContext('2d');
cxt[1] = document.getElementById("canvas2").getContext('2d');
cxt[2] = document.getElementById("canvas3").getContext('2d');
cxt[3] = document.getElementById("canvas4").getContext('2d');
cxt[4] = document.getElementById("canvas5").getContext('2d');
cxt[5] = document.getElementById("canvas6").getContext('2d');
cxt[6] = document.getElementById("canvas7").getContext('2d');
cxt[7] = document.getElementById("canvas8").getContext('2d');
cxt[8] = document.getElementById("canvas9").getContext('2d');

var player = true; //dient zur Überprüfung welcher Spieler am Zug ist (--> true = Spieler 1 und false = Spieler 2)
var j; // dient zur Überprüfung welches Feld angeklickt wurde
var name1 = prompt("Spieler 1 geben Sie Ihren Namen ein:"); //Speichert vorrübergehend den Namen von Spieler 1 (x)
var name2 = prompt("Spieler 2 geben Sie Ihren Namen ein:"); //Speichert vorrübergehend den Namen von Spieler 2 (o)
var name_x;
var name_o;

var win = false;
var felder_belegt = 0; //speichert wie viele Felder belegt sind


//dienen zur Überprüfung welcher Spieler gewinnt
var fieldp1 = [];
var fieldp2 = [];

Namen();
function Namen() {

    if (name1 == "/home" || name2 == "/home") {
        window.location.href = "../index.html"
    }
    if (name1 == null || name1 == "") {
        name_x = localStorage.getItem("name1");
    }
    else {
        name_x = name1;
        localStorage.setItem("name1", name1);
    }
    if (name2 == null || name1 == "") {
        name_o = localStorage.getItem("name2");
    }
    else {
        name_o = name2;
        localStorage.setItem("name2", name2);
    }
}

for (let i = 0; i < 9; i++) {
    fieldp1[i] = false;
    console.log("test")
}

for (let i = 0; i < 9; i++) {
    fieldp2[i] = false;
    console.log("test")
}




function f1() {
    j = 0;
    whichPlayer();
    // isCaptured()
}
function f2() {
    j = 1;
    whichPlayer();
}
function f3() {
    j = 2;
    whichPlayer();
}
function f4() {
    j = 3;
    whichPlayer();
}
function f5() {
    j = 4;
    whichPlayer();
}
function f6() {
    j = 5;
    whichPlayer();
}
function f7() {
    j = 6;
    whichPlayer();

}
function f8() {
    j = 7;
    whichPlayer()

}
function f9() {
    j = 8;

    whichPlayer();
    console.log("2");
}

function whichPlayer() {
    //true = Spieler1 false = Spieler2

    if (player == true) {
        spieler1();
    }
    else if (player == false) {
        spieler2();
    }
}





function spieler1() {
    // console.log(cxt[4]);

    for (let i = 0; i <= 5; i++) {
        cxt[j].beginPath();
        cxt[j].moveTo(120, 40);
        cxt[j].lineTo(180, 110);
        cxt[j].stroke();
        cxt[j].beginPath();
        cxt[j].moveTo(180, 40);
        cxt[j].lineTo(120, 110);
        cxt[j].stroke();
        console.log(cxt[j]);

    }
    fieldp1[j] = true;
    delete cxt[j];
    player = false;
    felder_belegt++;
    didWin();
}



function spieler2() {
    for (let i = 0; i <= 5; i++) {
        cxt[j].beginPath();

        cxt[j].arc(150, 76, 30, 0, 2 * Math.PI);
        cxt[j].stroke();
        console.log(cxt[j]);
    }
    fieldp2[j] = true;
    delete cxt[j];
    player = true;
    felder_belegt++;
    didWin();
}


function didWin() {
    //horizontal - Spieler 1
    if (fieldp1[0] == true && fieldp1[1] == true && fieldp1[2] == true) {
        alert(name_x + " gewinnt");
        console.log("Spieler 1 gewinnt");
        win = true;
        setTimeout(() => { location.reload(); }, 500);
    }
    if (fieldp1[3] == true && fieldp1[4] == true && fieldp1[5] == true) {
        alert(name_x + " gewinnt");
        console.log("Spieler 1 gewinnt");
        win = true;
        setTimeout(() => { location.reload(); }, 500);
    }
    if (fieldp1[6] == true && fieldp1[7] == true && fieldp1[8] == true) {
        alert(name_x + " gewinnt");
        console.log("Spieler 1 gewinnt");
        win = true;
        setTimeout(() => { location.reload(); }, 500);
    }

    //vertikal - Spieler 1
    if (fieldp1[0] == true && fieldp1[3] == true && fieldp1[6] == true) {
        alert(name_x + " gewinnt");
        console.log("Spieler 1 gewinnt");
        win = true;
        setTimeout(() => { location.reload(); }, 500);
    }
    if (fieldp1[1] == true && fieldp1[4] == true && fieldp1[7] == true) {
        alert(name_x + " gewinnt");
        console.log("Spieler 1 gewinnt");
        win = true;
        setTimeout(() => { location.reload(); }, 500);
    }
    if (fieldp1[2] == true && fieldp1[5] == true && fieldp1[8] == true) {
        alert(name_x + " gewinnt");
        console.log("Spieler 1 gewinnt");
        win = true;
        setTimeout(() => { location.reload(); }, 500);
    }

    //diagonal - Spieler 1
    if (fieldp1[0] == true && fieldp1[4] == true && fieldp1[8] == true) {
        alert(name_x + " gewinnt");
        console.log("Spieler 1 gewinnt");
        win = true;
        setTimeout(() => { location.reload(); }, 500);
    }
    if (fieldp1[2] == true && fieldp1[4] == true && fieldp1[6] == true) {
        alert(name_x + " gewinnt");
        console.log("Spieler 1 gewinnt");
        win = true;
        setTimeout(() => { location.reload(); }, 500);
    }

    //horizontal - Spieler 2
    if (fieldp2[0] == true && fieldp2[1] == true && fieldp2[2] == true) {
        alert(name_o + " gewinnt");
        console.log("Spieler 2 gewinnt");
        win = true;
        setTimeout(() => { location.reload(); }, 500);
    }
    if (fieldp2[3] == true && fieldp2[4] == true && fieldp2[5] == true) {
        alert(name_o + " gewinnt");
        console.log("Spieler 2 gewinnt");
        win = true;
        setTimeout(() => { location.reload(); }, 500);
    }
    if (fieldp2[6] == true && fieldp2[7] == true && fieldp2[8] == true) {
        alert(name_o + " gewinnt");
        console.log("Spieler 2 gewinnt");
        win = true;
        setTimeout(() => { location.reload(); }, 500);
    }

    //vertikal - Spieler 2
    if (fieldp2[0] == true && fieldp2[3] == true && fieldp2[6] == true) {
        alert(name_o + " gewinnt");
        console.log("Spieler 2 gewinnt");
        win = true;
        setTimeout(() => { location.reload(); }, 500);
    }
    if (fieldp1[2] == true && fieldp2[4] == true && fieldp2[7] == true) {
        alert(name_o + " gewinnt");
        console.log("Spieler 2 gewinnt");
        win = true;
        setTimeout(() => { location.reload(); }, 500);
    }
    if (fieldp2[2] == true && fieldp2[5] == true && fieldp2[8] == true) {
        alert(name_o + " gewinnt");
        console.log("Spieler 2 gewinnt");
        win = true;
        setTimeout(() => { location.reload(); }, 500);
    }

    //diagonal - Spieler 2
    if (fieldp2[0] == true && fieldp2[4] == true && fieldp2[8] == true) {
        alert(name_o + " gewinnt");
        console.log("Spieler 2 gewinnt");
        win = true;
        setTimeout(() => { location.reload(); }, 500);
    }
    if (fieldp2[2] == true && fieldp2[4] == true && fieldp2[6] == true) {
        alert(name_o + " gewinnt");
        console.log("Spieler 2 gewinnt");
        win = true;
        setTimeout(() => { location.reload(); }, 500);
    }

    //unentschieden
    if (felder_belegt >= 9 && win == false) {
        alert("unentschieden");
        console.log("unentschieden");
        setTimeout(() => { location.reload(); }, 500);

    }

}
/* 
1,2,3 --> 0,1,2
4,5,6 --> 3,4,5
7,8,9 --> 6,7,8

1,4,7 --> 0,3,6
2,5,8 --> 1,4,7
3,6,9 --> 2,5,8

1,5,9 --> 0,4,8
3,5,7 --> 2,4,6
*/