songKey = "C";
transposedKey = "C";

function bout() {
    alert("transposer transposes songs from one key to another This function displays blank text if it is named about");
}

function help() {
    alert("simply enter your song in the left pane using the example to guide you");
}

function privacy() {
    alert("are you kidding me?");
}

function feedback() {
    alert("no mechanism is set up yet to get your feedback on this sofware");
}

function copyright() {
    alert("dawson w. tennant, 2020");
}

function about() {
    alert("")
}

function transpose() {
    document.getElementById("transposed-text").innerHTML =
    document.getElementById("original-text").value;
}

function setSongKey(key) {
    songKey = key;
    document.getElementById("status").innerHTML = "original song key of " + songKey +
    " and " + "transpose key of " + transposedKey + " selected";
}

function setTransposedKey(key) {
    transposedKey = key;
    document.getElementById("status").innerHTML = "original song key of " + songKey +
    " and " + "transpose key of " + transposedKey + " selected";
}