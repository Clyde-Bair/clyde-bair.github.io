let delay = 200;
let lastClick = 0;

let dashPos = 0;
let bladePos = 0;
let windowPos = 0;
let menuPos = 0;

function openWindow() {
    for (let i = 0; i <= 4; i++) {
        document.getElementById("w" + i).style.backgroundColor = menuColorA(i);
        document.getElementById("w" + i).style.backgroundColor = menuColorA(i);
    }
    for (let i = 1; i <= 3; i++) {
        document.getElementById("statPRJ" + i).innerHTML = "7";
        document.getElementById("statCDS" + i).innerHTML = "1200";
        document.getElementById("statBIQ" + i).innerHTML = "3";
    }
    bladeMove();
    windowMove();
    menuMove();
}

function dashNavKey(cki) {
    if (lastClick >= (Date.now() - delay)) return;
    lastClick = Date.now();
    let input = cki.key;
    if (dashPos == 0) {
        if (input == 'a' || input == 'A' || input == 'ArrowLeft' || input == 'd' || input == 'D' || input == 'ArrowRight') {
            bladeNavKey(input);
        } else if (input == 'w' || input == 'W' || input == 'ArrowUp' || input == 's' || input == 'S' || input == 'ArrowDown') {
            windowNavKey(input)
        } else if (input == "Enter") {
            windowLink()
            menuOpen();
        } else {

        }
    } else {
        if (input == 'w' || input == 'W' || input == 'ArrowUp' || input == 's' || input == 'S' || input == 'ArrowDown') {
            menuNavKey(input)
        } else if (input == "Enter") {
            menuLink()
            menuClose();
        } else {

        }
    }
}

function bladeNavKey(input) {
    if (input == 'a' || input == 'A' || input == 'ArrowLeft') {
        bladePos--;
    } else if (input == 'd' || input == 'D' || input == 'ArrowRight') {
        bladePos++;
    } else {
        return;
    }
    if (bladePos < 0) {
        bladePos = 0;
        return;
    } else if (bladePos > 4) {
        bladePos = 4;
        return;
    }
    bladeMove(bladePos);
}
function bladeNavClick(clickedPos) {
    if (lastClick >= (Date.now() - delay)) return;
    lastClick = Date.now();
    if (clickedPos == bladePos) {
        return;
    }
    bladePos = clickedPos;
    bladeMove();
}

function bladeMove() {
    windowUnload();
    windowPos = 0;
    for (let i = 0; i <= 4; i++) {
        if (i == bladePos) {
            document.getElementById("w" + i).style.width = "75%";
            document.getElementById("b" + i).style.backgroundColor = bladeColor(bladePos);
            document.getElementById("l" + i).style.backgroundColor = bladeColor(bladePos);
            document.getElementById("lc" + i).style.backgroundColor = bladeColor(bladePos);
            document.getElementById("menuB").style.backgroundColor = menuColorA(bladePos);
            document.getElementById("menuA").style.backgroundColor = menuColorB(bladePos);
        } else {
            document.getElementById("w" + i).style.width = "0%";
            document.getElementById("b" + i).style.backgroundColor = bladeColor(5);
            document.getElementById("l" + i).style.backgroundColor = bladeColor(5);
            document.getElementById("lc" + i).style.backgroundColor = bladeColor(5);
        }
        if (i <= bladePos) {
            document.getElementById("m" + i).style.marginLeft = "0%";
            document.getElementById("m" + i).style.marginRight = "20%";
            document.getElementById("l" + i).style.marginLeft = "20%";
            document.getElementById("l" + i).style.marginRight = "0%";
            document.getElementById("lc" + i).style.borderRadius = "0% 0% 0% 100%";
            document.getElementById("lc" + i).style.marginLeft = "20%";
            document.getElementById("lc" + i).style.marginRight = "0%";
        } else {
            document.getElementById("m" + i).style.marginLeft = "20%";
            document.getElementById("m" + i).style.marginRight = "0%";
            document.getElementById("l" + i).style.marginLeft = "0%";
            document.getElementById("l" + i).style.marginRight = "20%";
            document.getElementById("lc" + i).style.borderRadius = "0% 0% 100% 0%";
            document.getElementById("lc" + i).style.marginLeft = "0%";
            document.getElementById("lc" + i).style.marginRight = "20%";
        }
        let labelPos = (bladePos - i);
        document.getElementById("l" + i).style.marginTop = labelHeight(labelPos);
        setTimeout(function() {windowLoad();}, 200);
    }
}
function bladeColor(colorPick) {
    switch (colorPick) {
        case 0: return "#a13413";
        case 1: return "#b06e2c";
        case 2: return "#357130";
        case 3: return "#2a5d90";
        case 4: return "#72529d";
        default: return "#888";
    }
}
function menuColorA(colorPick) {
    switch (colorPick) {
        case 0: return "#ea863b";
        case 1: return "#f2a554";
        case 2: return "#5eb252";
        case 3: return "#387dc0";
        case 4: return "#896ac2";
        default: return "#888";
    }
}
function menuColorB(colorPick) {
    switch (colorPick) {
        case 0: return "#a13413";
        case 1: return "#b06e2c";
        case 2: return "#357130";
        case 3: return "#2a5d90";
        case 4: return "#72529d";
        default: return "#888";
    }
}
function labelHeight(labelPos) {
    if (labelPos == "0") {
        return "10vh";
    } else if (labelPos == "1" || labelPos == "-1") {
        return "12vh";
    } else if (labelPos == "2" || labelPos == "-2") {
        return "14vh";
    } else if (labelPos == "3" || labelPos == "-3") {
        return "16vh";
    }  else if (labelPos == "4" || labelPos == "-4") {
        return "18vh";
    }
}
function windowUnload() {
    for (let i = 0; i <= 4; i++) {
        document.getElementById("s" + i).style.opacity = "0%";
        document.getElementById("sc" + i).style.opacity = "0%";
        document.getElementById("wui" + i).style.display = "none";
        document.getElementById("w" + i).style.backgroundColor = menuColorA(i);
        document.getElementById("w" + i).style.transition = "all .125s linear";
        document.getElementById("b" + i).style.transition = "all .125s linear";
        document.getElementById("l" + i).style.transition = "all .125s linear";
        document.getElementById("lc" + i).style.transition = "all .125s linear";
    }
}
function windowLoad() {
    document.getElementById("s" + bladePos).style.opacity = "100%";
    document.getElementById("sc" + bladePos).style.opacity = "100%";
    document.getElementById("wui" + bladePos).style.display = "flex";
    document.getElementById("w" + bladePos).style.backgroundColor = "transparent";
    document.getElementById("w" + bladePos).style.transition = "all .2s linear";
    document.getElementById("b" + bladePos).style.transition = "all .2s linear";
    document.getElementById("l" + bladePos).style.transition = "all .2s linear";
    document.getElementById("lc" + bladePos).style.transition = "all .2s linear";
    windowMove();
}

function windowNavKey(input) {
    let buttonCount = document.getElementsByClassName("win" + bladePos).length;
    if (input == 'w' || input == 'W' || input == 'ArrowUp') {
        windowPos--;
    } else if (input == 's' || input == 'S' || input == 'ArrowDown') {
        windowPos++;
    } else {
        return;
    }
    if (windowPos < 0) {
        windowPos = 0;
        return;
    } else if (windowPos >= buttonCount) {
        windowPos = buttonCount - 1;
        return;
    }
    windowMove()
}
function windowNavHover(hoveredPos) {
    if (hoveredPos == windowPos) {
        return;
    }
    windowPos = hoveredPos;
    windowMove();
}
function windowMove() {
    let buttonCount = document.getElementsByClassName("win" + bladePos).length;
    for (let i = 0; i <= buttonCount - 1; i++) {
        if (i == windowPos) {
            document.getElementById("b" + bladePos + "w" + i).style.borderRight = "none";
            document.getElementById("b" + bladePos + "w" + i).style.boxShadow = "0px .25vh inset rgba(0,0,0,.5), 0px -.25vh inset rgba(0,0,0,.5), 0px 1vh .5vh inset rgba(255,255,255,.5), 0px -1vh .5vh inset rgba(255,255,255,.5)";
            document.getElementById("b" + bladePos + "w" + i).style.backgroundImage = "-moz-linear-gradient(right, transparent, rgba(255,255,255,.25), transparent)";
        } else {
            document.getElementById("b" + bladePos + "w" + i).style.borderRight = ".5vh solid rgba(0,0,0,.5)";
            document.getElementById("b" + bladePos + "w" + i).style.boxShadow = "0px .25vh inset rgba(0,0,0,.5), 0px -.25vh inset rgba(0,0,0,.5)";
            document.getElementById("b" + bladePos + "w" + i).style.backgroundImage = "none";
        }
    }
}

function menuOpen() {
    dashPos = 1;
    menuPos = 0;
    document.getElementById("w" + bladePos).style.width = "100%";
    document.getElementById("wui" + bladePos).style.opacity = "0%";
    document.getElementById("mui" + bladePos + "w" + windowPos).style.opacity = "0%";
    document.getElementById("w" + bladePos).style.transition = "all .5s linear";
    for (let i = 0; i <= 4; i++) {
        document.getElementById("b" + i).style.width = "0%";
        document.getElementById("h1_" + i).style.fontSize = "0vw";
        document.getElementById("b" + i).style.transition = "all .5s linear";
        document.getElementById("h1_" + i).style.transition = "all .5s linear";
    }
    setTimeout(function() {
        document.getElementById("mui" + bladePos + "w" + windowPos).style.display = "flex";
    }, 500);
    setTimeout(function() {
        document.getElementById("wui" + bladePos).style.display = "none";
        document.getElementById("mui" + bladePos + "w" + windowPos).style.opacity = "100%";
    }, 600);
    menuMove();
}
function menuClose() {
    dashPos = 0;
    menuPos = 0;
    document.getElementById("mui" + bladePos + "w" + windowPos).style.opacity = "0%";
    for (let i = 0; i <= 4; i++) {
        document.getElementById("b" + i).style.width = "5%";
        document.getElementById("h1_" + i).style.fontSize = "2vw";
    }
    setTimeout(function() {
        document.getElementById("wui" + bladePos).style.display = "flex";
        document.getElementById("mui" + bladePos + "w" + windowPos).style.display = "none";
    }, 500);
    setTimeout(function() {
        document.getElementById("w" + bladePos).style.width = "75%";
        document.getElementById("wui" + bladePos).style.opacity = "100%";
        for (let i = 0; i <= 4; i++) {
            document.getElementById("b" + i).style.transition = "all .2s linear";
            document.getElementById("h1_" + i).style.transition = "all .2s linear";
        }
        document.getElementById("w" + bladePos).style.transition = "all .2s linear";
    }, 600);
}
function menuNavKey(input) {
    let buttonCount = document.getElementsByClassName("min" + bladePos + "w" + windowPos).length;
    if (input == 'w' || input == 'W' || input == 'ArrowUp') {
        menuPos--;
    } else if (input == 's' || input == 'S' || input == 'ArrowDown') {
        menuPos++;
    } else {
        return;
    }
    if (menuPos < 0) {
        menuPos = 0;
        return;
    } else if (menuPos >= buttonCount) {
        menuPos = buttonCount - 1;
        return;
    }
    menuMove()
}
function menuNavHover(hoveredPos) {
    if (hoveredPos == menuPos) {
        return;
    }
    menuPos = hoveredPos;
    menuMove();
}
function menuMove() {
    let buttonCount = document.getElementsByClassName("min" + bladePos + "w" + windowPos).length;
    for (let i = 0; i <= buttonCount - 1; i++) {
        if (i == menuPos) {
            document.getElementById("b" + bladePos + "w" + windowPos + "m" + i).style.borderRight = "none";
            document.getElementById("b" + bladePos + "w" + windowPos + "m" + i).style.boxShadow = "0px .25vh inset rgba(0,0,0,.5), 0px -.25vh inset rgba(0,0,0,.5), 0px 1vh .5vh inset rgba(255,255,255,.5), 0px -1vh .5vh inset rgba(255,255,255,.5)";
            document.getElementById("b" + bladePos + "w" + windowPos + "m" + i).style.backgroundImage = "-moz-linear-gradient(right, transparent, rgba(255,255,255,.25), transparent)";
        } else {
            document.getElementById("b" + bladePos + "w" + windowPos + "m" + i).style.borderRight = ".5vh solid rgba(0,0,0,.5)";
            document.getElementById("b" + bladePos + "w" + windowPos + "m" + i).style.boxShadow = "0px .25vh inset rgba(0,0,0,.5), 0px -.25vh inset rgba(0,0,0,.5)";
            document.getElementById("b" + bladePos + "w" + windowPos + "m" + i).style.backgroundImage = "none";
        }
    }
}
function windowLink() {
    var url = document.getElementById("b" + bladePos + "w" + windowPos).getAttribute(url);
    if (url != "none") {
        window.open(url, "_blank");
    }

}
function menuLink() {
    var url = document.getElementById("b" + bladePos + "w" + windowPos + "m" + menuPos).getAttribute(url);
    if (url != "none") {
        window.open(url, "_blank");
    }

}