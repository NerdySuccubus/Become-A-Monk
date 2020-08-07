// HTML ELEMENTS TO WORK WITH

const background = document.getElementById("background")
const info = document.getElementsByClassName("info")[0]
const buttonLeft = document.getElementById("buttonLeft")
const buttonRight = document.getElementById("buttonRight")
const screenNumber = document.getElementsByClassName("screenNumber")[0]
const sliderLocation = document.getElementById("slider")
const hidden = document.getElementById("hidden")
const loading = document.getElementById("loading")
let phrase = document.getElementById("phrase")
let phraseContainer = document.getElementById("phraseContainer")
let contact = document.getElementById("contact")

// SCREEN SLIDE OFFSET 

let screen = 0;
const totalOffset = 565;
const endScreen = 10;
const screenOffset = 565 / endScreen;

// PRHASES TO BE RENDERED

const phrases = [
    "TALENT IS GIVEN<br/>TRUE SKILL IS<br/>EARNED",
    "BE FLEXIBLE TO<br/>CHANGE AND<br/>STURDY IN<br/>CONVICTION",
    "USE MANY SKILLS<br/>YET WORK AS ONE",
    "TO MASTER<br/>ANYTHING FIND<br/>INTEREST IN<br/>EVERYTHING",
    "INDIVIDUALS<br/>FLOURISH<br/>IF CULTURE<br/>AND WISDOM<br/>ARE SHARED",
    "TRAIN FOR<br/>PERFECTION BUT<br/>AIM FOR MORE",
    "TAKE PRIDE IN YOUR<br/>WORK BUT DO NOT<br/>SEEK PRAISE",
    "TEMPORARY<br/>SACRIFICE BRINGS<br/>LASTING RESULTS",
    "KEEP LEARNING<br/> AND OVERCOME"
];

// PRELOADER W/ TIMEOUT

setTimeout(function () {
    loading.style.display = "none";
    hidden.style.display = "block";
    showSlides()
}, 3000);



// SCREEN SLIDER 
function showSlides() {
    for (let i = 0; i < endScreen - 1; i++) {
        let outerBox = document.createElement("div");
        outerBox.id = "box";
        sliderLocation.appendChild(outerBox);
        let innerBox = document.createElement("div");
        innerBox.className = "innerBox";
        outerBox.appendChild(innerBox);
        let text = document.createElement("p");
        text.innerHTML = i + 1
        text.id = "slideID"
        innerBox.appendChild(text);
        outerBox.onclick = function goToScreen() {
            screen = i + 1
            moveSlide();
        }
    }
};



//PHRASE POSITION 
function phraseAssignation() {

    changeOpacity()

    phrase.innerHTML = "";
    for (let pos = 0; pos < phrases.length; pos++) {
        if ((pos + 1) == screen) {
            phrase.innerHTML = phrases[pos]
        }
    }
};

// PHRASE LOCATION ON SCREEN (Flex-start or end)

function phraseLocationOnScreen() {

    isThreeToFive(screen) ? flexLocation("flex-end") : flexLocation("flex-start")

};

function isThreeToFive(screen) {
    return screen >= 3 && screen <= 5
}

function flexLocation(flex) {
    phraseContainer.style.justifyContent = flex;
}


//PHRASE ANIMATIONS

function changeOpacity() {
    phrase.classList.remove('in');
    phrase.classList.add('out');
    setTimeout(() => {
        phrase.classList.remove('out');
        phrase.classList.add('in');
    }, 1);
}



// BUTTON VISIBILITY 

function buttonVisibility() {
    isNotFinalScreen(screen) ? buttonDisplay("block", "none") : buttonDisplay("none", "flex")
};

function isNotFinalScreen(screen) {
    return screen != endScreen
};

//CONTACT INFO/BECOME A MONK 

function buttonDisplay(placement, display) {
    buttonRight.style.display = placement;
    contact.style.display = display;
};

//RIGHT BUTTON 

function right() {
    screen++
    moveSlide()

};

//LEFT BUTTON 

function left() {
    screen--
    moveSlide()
};


// BACKGROUND ANIMATIONS 

function bgTransition() {
    background.style.left = "-" + screenOffset * screen + "%";
};


// SCREEN MOVEMENT

function moveSlide() {
    if (screen >= 1) {
        info.classList.remove("home")
        buttonLeft.style.display = "block";
    } else {
        info.classList.add("home")
        buttonLeft.style.display = "none";
    }

    // REQUIRED FUNCTIONS PER "SLIDE"

    bgTransition()
    buttonVisibility()
    phraseAssignation()
    phraseLocationOnScreen()
}

// GO TO HOME 

function resetSlide() {
    screen = 0;
    moveSlide()
};

//LAST SCREEN

function lastScreen() {
    screen = phrases.length + 1;
    moveSlide()
};


