var core = 0
var train;

function load(y) {
    train = y;
    console.log(train + " load()")
}

function done(x) {

    console.log(train + " done()")
    var element = document.getElementById(x)
    element.style.backgroundColor = "green"
    core = core + 1;
    if (core == 6 && train == "leg") {
        window.location.href = "./Bauch/index.html";
    }
}