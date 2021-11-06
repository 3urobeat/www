/* Made by 3urobeat: https://github.com/HerrEurobeat/website */

/* Fade in function for our three buttons */
var opacity = 0;

function fadeIn() {
    opacity += 0.1
    document.getElementById("div-buttons").style.opacity = opacity

    setTimeout(() => {
        if (opacity < 1) fadeIn();
    }, 20);
}

/* Let a cursor blink after finishing writing my name */
function blink() {
    document.querySelector('.text').innerHTML = str + "&nbsp&nbsp"

    setInterval(() => {
        document.querySelector('.text').innerHTML = str + "_"

        setTimeout(() => {
            document.querySelector('.text').innerHTML = str + "&nbsp&nbsp" //print two whitespaces to prevent text from moving
        }, 750);
    }, 1250);
}

/* Helper function to get a random char */
function randomChar() {
    return chars[Math.floor(Math.random() * chars.length)]
}


/* Make sure the hamburger menu is collapsed on page load */
document.getElementById("menu-checkbox").checked = false;

/* Collapse hamburger menu when user clicks outside drawer */
document.addEventListener('click', (event) => {
    if (!event.composedPath().includes(document.querySelector('#hamburger-menu'))) {
        document.getElementById("menu-checkbox").checked = false;
    }
})


/* Start scrambling animation */
var frames   = 6;
var interval = 50;
var chars    = "!<>-_—=+*^?#0123456789abcdefghijklmnopqrstuvwxyz";
var text     = "3urobeat";

var currentframe = 0
var i            = 0
var str          = ""

/* Display random chars frames times and then show a real character */
var frameinterval = setInterval(() => {
    document.querySelector('.text').innerHTML = str + randomChar();
    currentframe++

    if (currentframe >= frames) {
        str += text[i]
        currentframe = 0;
        i++;

        document.querySelector('.text').innerHTML = str
    }

    if (str.length == text.length) {
        clearInterval(frameinterval)

        blink(); //let cursor blink
        fadeIn(); //let buttons fade in
    }
}, interval);