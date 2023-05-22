// For timer delay
const timer = ms => new Promise(res => setTimeout(res, ms))

let clrArry = ["green", "red", "yellow", "blue"];
let seQnce = [];
let plyrseQnce = [];
let i,
    cnt,
    dly,
    lngth,
    audio,
    getElm,
    mssg = "";

// Random number generator for color array
let getRandom = () => {
    return Math.floor(Math.random() * 4);
}

// Function for generating the game sequence
let getSeq = async () => {
    for (i = 0; i < lngth; i++) {
        getElm = clrArry[getRandom()];
        seQnce.push(getElm);
        $("#" + getElm).addClass("pressed");
        audio = new Audio("./sounds/" + getElm + ".mp3");
        audio.play();
        await timer(dly);
        $("#" + getElm).removeClass("pressed");
    }
    $("header").addClass("nne");
    $(".nv").removeClass("nne");
}

$(document).ready(() => {
    // Set up starting prompts
    $("header").addClass("appr");
    $("main").addClass("blrrd");

    // Hover sound effect
    $("div[type=button]").on("mouseover", (e) => {
        audio = new Audio("./sounds/select2.mp3");
        audio.volume = 0.3;
        audio.play();
    })

    $("div[type=button]").on("click", (e) => {
        audio = new Audio("./sounds/select.mp3");
        audio.volume = 0.3;
        audio.play();
    })

    // Event after the player chose a difficulty
    $(".dff").on("click", async (e) => {
        await timer(100);
        $(".nv").addClass("nne");
        $("main").removeClass("blrrd");
        msg = e.target.id;
        switch(msg) {
            case "esy":
                alert("You chose the EASY difficulty!");
                lngth = 4;
                dly = 1000;
                break;
            case "nrml":
                alert("You chose the NORMAL difficulty!");
                lngth = 6;
                dly = 750;
                break;
            case "hrd":
                alert("You chose the HARD difficulty!");
                lngth = 8;
                dly = 500;
                break;
        }

        // Setup counter then start the game
        cnt = 0;
        getSeq();
    })

    // Event for the color div-buttons
    $(".row div").on("click", (e) => {
        plyrseQnce.push(e.target.id);

        // cnt + 1 ; so that the player doesn't have to
        // click one more time to match the sqnce length
        if ((cnt + 1) == lngth) {
            alert("DONE PICKING!");
            for (i = 0; i < lngth; i++) {
                if (plyrseQnce[i] != seQnce[i]) {
                    alert("WRONG C-Quence!");
            
                    $("header").removeClass("nne");
                    $("header").addClass("appr");
                    $(".cntnr").addClass("nne");
                    $(".nv h1").html("GAME OVER! <p>(refresh to restart)</p>");
                    $("main").addClass("blrrd");

                    return false;
                }
            }
            alert("CORRECT C-Quence!");
            alert("TO THE NEXT ROUND!");

            // Reset everything for next round
            c = 0;
            cnt = 0;
            seQnce = [];
            plyrseQnce = [];
            
            $("header").removeClass("nne");
            $("header").addClass("appr");
            $(".nv h1").text("Difficulty for Next Round!");
            $("main").addClass("blrrd");
        } else {
            cnt += 1;
        }
    })
})