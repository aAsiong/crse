
// Put all .mp3 filenames in an array
let flsNm = ["tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3",  "snare.mp3", "crash.mp3", "kick-bass.mp3"]

// Create audio variable
let audio;

//// My method
// let getCnt = document.querySelectorAll("button");
// for (let i = 0; i < getCnt.length; i++) {
//     getCnt[i].addEventListener("click", function () {
//         audio = new Audio('./sounds/' + flsNm[i]);
//         audio.play();
//     });
// }

//// Course method
var numOfBttns = document.querySelectorAll(".drum").length;

for (let i = 0; i < numOfBttns; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var bttnHTML = this.innerHTML;
        makeSound(bttnHTML);
        makeAnmtn(bttnHTML);
    })
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    makeAnmtn(event.key);
})

function makeAnmtn(key) {
    let getElm = document.querySelector("." + key);
    getElm.classList.add("pressed");
    setTimeout(() => {
        getElm.classList.remove("pressed");
    }, 100);
}

function makeSound(key) {
    switch (key) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            break;

        case "s":
            audio = new Audio("./sounds/tom-2.mp3");
            break;

        case "d":
            audio = new Audio("./sounds/tom-3.mp3");
            break;

        case "a":
            audio = new Audio("./sounds/tom-4.mp3");
            break;

        case "j":
            audio = new Audio("./sounds/snare.mp3");
            break;

        case "k":
            audio = new Audio("./sounds/crash.mp3");
            break;

        case "l":
            audio = new Audio("./sounds/kick-bass.mp3");
            break;

        default:
            audio = new Audio("./sounds/tom-1.mp3");
            console.log(". . .");
    }
    audio.play();
}