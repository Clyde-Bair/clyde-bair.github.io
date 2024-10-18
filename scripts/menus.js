const topText = document.querySelectorAll(".toptext");
const menu = document.querySelectorAll(".menus");
let menuPos = 0;
let dualPos = 0;
let inMenu = false;
const menuLabels = [
    ["Solo Websites", "Contributed Websites"],
    ["Solo Software", "Contributed Software"],
    ["Languages", "Frameworks"]
];



function generateMenu(t,l) {
    switch (t) {
        case 'L':
            menu[bladePos].innerHTML = "This is a test message."
        break;
        case 'D':
            const menuGUI = createDiv("menuGUI flex column");
            menu[bladePos].appendChild(menuGUI);
            const dualTab = createDiv("dualtab flex");
            menuGUI.appendChild(dualTab);
            for (let i = 0; i < 2; i++) {
                const dt = createDiv("dt flex f1");
                dt.setAttribute("onclick", "loadDualTabs(" + i + ")");
                dt.appendChild(injectTxt(menuLabels[l][i], "dualtext flex tl"));
                dualTab.appendChild(dt);
            };
            const dinterface = createDiv("interface flex");
            menuGUI.appendChild(dinterface);
            const menuSelection = createDiv("menuselection flex column f1");
            dinterface.appendChild(menuSelection);
            const menuSelect = createDiv("menuselect flex column center");
            menuSelection.appendChild(menuSelect);
            for (let i = 0; i < 8; i++) {
                const daLinky = createDiv("option o flex f1");
                const buttonicon = createDiv("optionicon");
                daLinky.appendChild(buttonicon);
                daLinky.appendChild(injectTxt("Placeholder","optiontext f1"));
                menuSelect.appendChild(daLinky);
            };
            const menuNav = createDiv("menunav flex");
            menuSelection.appendChild(menuNav);
            for (let i = 0; i < 3; i++) {
                const s = ["Exit Menu","Prev Page","Next Page"];
                const a = ["restoreBinbow()","",""];
                const mn = createDiv("mn flex f1");
                mn.appendChild(injectTxt(s[i], "menutext tc"));
                mn.setAttribute("onclick", a[i]);
                menuNav.appendChild(mn);
            };
            const menuPreview = createDiv("menupreview flex f1 mobile");
            dinterface.appendChild(menuPreview);
            const projectPreview = createDiv("projectpreview flex column center");
            menuPreview.appendChild(projectPreview);
            const prjPA = createDiv("prjA flex");
            projectPreview.appendChild(prjPA);
            const prjIcon = createDiv("prjicon");
            prjPA.appendChild(prjIcon);
            const prjScore = createDiv("prjscore f1");
            prjScore.appendChild(injectTxt("Coderscore","stattext"));
            prjPA.appendChild(prjScore);
            const prjScore2 = createDiv("prjscore f1");
            prjScore2.appendChild(injectTxt("???/???","stattext tr"));
            prjPA.appendChild(prjScore2);
            const prjPB = createDiv("prjB flex column");
            projectPreview.appendChild(prjPB);
            const prjLang = createDiv("prjlang flex f1");
            prjLang.appendChild(injectTxt("Languages/Frameworks","prjtext"));
            prjPB.appendChild(prjLang);
            const prjPC = createDiv("prjC flex column");
            projectPreview.appendChild(prjPC);
            for (let y = 0; y < 3; y++) {
                const prjRow = createDiv("prjrow flex f1");
                prjPC.appendChild(prjRow);
                for (let x = 0; x < 4; x++) {
                    const prjSlot = createDiv("prjslot flex column f1");
                    prjRow.appendChild(prjSlot);
                    const slot = createDiv("slot flex");
                    slot.setAttribute("id","slot"+y+x);
                    prjSlot.appendChild(slot);
                };
            };
            const prjPD = createDiv("prjD flex");
            projectPreview.appendChild(prjPD);
            const prjCount = createDiv("prjcount flex column f1");
            prjCount.appendChild(injectTxt("?? of ??","prjtext"));
            prjPD.appendChild(prjCount);
            loadDualPreview(0);
            loadDualTabs(0)
            loadDualSelections();
        break;
        case 'E':
            const EmenuGUI = createDiv("menuGUI flex column");
            menu[bladePos].appendChild(EmenuGUI);
            const EdualTab = createDiv("dualtab flex");
            EmenuGUI.appendChild(EdualTab);
            for (let i = 0; i < 2; i++) {
                const dt = createDiv("dt flex f1");
                dt.setAttribute("onclick", "loadDualTabs2(" + i + ")");
                dt.appendChild(injectTxt(menuLabels[l][i], "dualtext flex tl"));
                EdualTab.appendChild(dt);
            };
            const einterface = createDiv("interface flex");
            EmenuGUI.appendChild(einterface);
            const EmenuSelection = createDiv("menuselection flex column f1");
            einterface.appendChild(EmenuSelection);
            const EmenuSelect = createDiv("menuselect flex column center");
            EmenuSelection.appendChild(EmenuSelect);
            for (let i = 0; i < 8; i++) {
                const daLinky = createDiv("option o flex f1");
                const buttonicon = createDiv("optionicon");
                daLinky.appendChild(buttonicon);
                daLinky.appendChild(injectTxt("Placeholder","optiontext f1"));
                EmenuSelect.appendChild(daLinky);
            };
            const EmenuNav = createDiv("menunav flex");
            EmenuSelection.appendChild(EmenuNav);
            for (let i = 0; i < 3; i++) {
                const s = ["Exit Menu","Prev Page","Next Page"];
                const a = ["restoreBinbow()","",""];
                const mn = createDiv("mn flex f1");
                mn.appendChild(injectTxt(s[i], "menutext tc"));
                mn.setAttribute("onclick", a[i]);
                EmenuNav.appendChild(mn);
            };
            const EmenuPreview = createDiv("menupreview flex f1 mobile");
            einterface.appendChild(EmenuPreview);
            const EprojectPreview = createDiv("projectpreview flex column center");
            EmenuPreview.appendChild(EprojectPreview);
            const EprjPA = createDiv("prjA flex");
            EprojectPreview.appendChild(EprjPA);
            const EprjIcon = createDiv("prjicon");
            EprjPA.appendChild(EprjIcon);
            const EprjScore = createDiv("prjscore f1");
            EprjScore.appendChild(injectTxt("Brain IQ","stattext"));
            EprjPA.appendChild(EprjScore);
            const EprjScore2 = createDiv("prjscore f1");
            EprjScore2.appendChild(injectTxt("?/?","stattext tr"));
            EprjPA.appendChild(EprjScore2);
            const EprjPB = createDiv("prjB flex column");
            EprojectPreview.appendChild(EprjPB);
            const EprjLang = createDiv("prjlang flex f1");
            EprjLang.appendChild(injectTxt("Description","prjtext"));
            EprjPB.appendChild(EprjLang);
            const EprjPC = createDiv("prjE flex column");
            EprjPC.appendChild(injectTxt("DUMMY DESCRIPTION","statdesc"));
            EprojectPreview.appendChild(EprjPC);
            loadDualPreview2(0);
            loadDualTabs2(0)
            loadDualSelections2();
        break;
    };
};

function loadDualSelections2() {
    const icons = document.querySelectorAll(".optionicon");
    const selections = document.querySelectorAll(".optiontext");
    const options = document.querySelectorAll(".o");
    for (let i = 0; i < 8; i++) {
        if (i < userdata[bladePos][panelPos][dualPos].length) {
            options[i].setAttribute("class","option o flex f1");
            options[i].setAttribute("onmouseover","loadDualPreview2(" + i + ")");
            icons[i].style.backgroundImage = "url(" + userdata[bladePos][panelPos][dualPos][i].dataIcon + ")";
            icons[i].style.display = "block";
            selections[i].innerHTML = userdata[bladePos][panelPos][dualPos][i].dataTitle;
            selections[i].style.display = "block";
        } else {
            options[i].setAttribute("class","nooption o f1");
            options[i].setAttribute("onmouseover","");
            icons[i].style.backgroundImage = "none";
            icons[i].style.display = "none";
            selections[i].innerHTML = "";
            selections[i].style.display = "none";
        };
    };
};
function loadDualSelections() {
    const icons = document.querySelectorAll(".optionicon");
    const selections = document.querySelectorAll(".optiontext");
    const options = document.querySelectorAll(".o");
    for (let i = 0; i < 8; i++) {
        if (i < userdata[bladePos][panelPos][dualPos].length) {
            options[i].setAttribute("class","option o flex f1");
            options[i].setAttribute("onclick","location.href='" + userdata[bladePos][panelPos][dualPos][i].dataLink + "'");
            options[i].setAttribute("onmouseover","loadDualPreview(" + i + ")");
            icons[i].style.backgroundImage = "url(" + userdata[bladePos][panelPos][dualPos][i].dataIcon + ")";
            icons[i].style.display = "block";
            selections[i].innerHTML = userdata[bladePos][panelPos][dualPos][i].dataTitle;
            selections[i].style.display = "block";
        } else {
            options[i].setAttribute("class","nooption o f1");
            options[i].setAttribute("onclick","");
            options[i].setAttribute("onmouseover","");
            icons[i].style.backgroundImage = "none";
            icons[i].style.display = "none";
            selections[i].innerHTML = "";
            selections[i].style.display = "none";
        };
    };
};
function loadDualTabs2(e) {
    const dualTab = document.querySelectorAll(".dt");
    if (dualPos != e) {
        menuPos = 0;
        dualPos = e;
        for (let i = 0; i < 2; i++) {
            if (i == e) {
                dualTab[i].style.boxShadow = "var(--dualtab-selected)";
            } else {
                dualTab[i].style.boxShadow = "var(--dualtab)";
            };
        };
        loadDualSelections2();
    };
};
function loadDualTabs(e) {
    const dualTab = document.querySelectorAll(".dt");
    if (dualPos != e) {
        menuPos = 0;
        dualPos = e;
        for (let i = 0; i < 2; i++) {
            if (i == e) {
                dualTab[i].style.boxShadow = "var(--dualtab-selected)";
            } else {
                dualTab[i].style.boxShadow = "var(--dualtab)";
            };
        };
        loadDualSelections();
    };
};
function loadDualPreview2(e) {
    document.querySelector(".prjicon").style.backgroundImage = "url(" + userdata[bladePos][panelPos][dualPos][e].dataIcon + ")";
    document.querySelectorAll(".prjscore .stattext")[1].innerHTML = userdata[bladePos][panelPos][dualPos][e].brainIQ + "/" + userdata[bladePos][panelPos][dualPos][e].brainIQ;
    document.querySelector(".statdesc").innerHTML = userdata[bladePos][panelPos][dualPos][e].dataDesc;
};
function loadDualPreview(e) {
    let i = 0;
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 4; x++) {
            const dataCode = getDataCode(i,e);
            document.getElementById("slot"+y+x).style.backgroundImage = "url(" + getLanguageIcon(dataCode) + ")";
            i++;
        };
    };
    document.querySelector(".prjicon").style.backgroundImage = "url(" + userdata[bladePos][panelPos][dualPos][e].dataIcon + ")";
    document.querySelectorAll(".prjtext")[1].innerHTML = userdata[bladePos][panelPos][dualPos][e].dataCode + " of 12";
    document.querySelectorAll(".prjscore .stattext")[1].innerHTML = (userdata[bladePos][panelPos][dualPos][e].dataCode * 25) + "/300";
};
function getDataCode(i,e) {
    switch (i) {
        case 0: return userdata[bladePos][panelPos][dualPos][e].dataCode0;
        case 1: return userdata[bladePos][panelPos][dualPos][e].dataCode1;
        case 2: return userdata[bladePos][panelPos][dualPos][e].dataCode2;
        case 3: return userdata[bladePos][panelPos][dualPos][e].dataCode3;
        case 4: return userdata[bladePos][panelPos][dualPos][e].dataCode4;
        case 5: return userdata[bladePos][panelPos][dualPos][e].dataCode5;
        case 6: return userdata[bladePos][panelPos][dualPos][e].dataCode6;
        case 7: return userdata[bladePos][panelPos][dualPos][e].dataCode7;
        case 8: return userdata[bladePos][panelPos][dualPos][e].dataCode8;
        case 9: return userdata[bladePos][panelPos][dualPos][e].dataCode9;
        case 10: return userdata[bladePos][panelPos][dualPos][e].dataCode10;
        case 11: return userdata[bladePos][panelPos][dualPos][e].dataCode11;
    };
};
function getLanguageIcon(id) {
    switch (id) {
        case "HTML": return "./images/icons/languages/HTML.png";
        case "CSS": return "./images/icons/languages/CSS.png";
        case "JS": return "./images/icons/languages/JS.png";
        case "C#": return "./images/icons/languages/CS.png";
        case "JAVA": return "./images/icons/languages/JAVA.png";
        case "LUA": return "./images/icons/languages/LUA.png";
        case "C++": return "";
        case "C": return "";
        case "PYTHON": return "";
        case "BS": return "./images/icons/languages/frameworks/BS.png";
        case "MYSQL": return "./images/icons/languages/frameworks/MYSQL.png";
        default: return "";
    };
};
function loadMenu() {
    topText[bladePos].innerHTML = panelData[bladePos][panelPos][0];
    binbow[bladePos].style.display = "none";
    menu[bladePos].style.display = "flex";
    setTimeout(function(){
        bintop[bladePos].style.opacity = "100%";
        binbot[bladePos].style.opacity = "100%";
        menu[bladePos].style.opacity = "100%";
        css.style.setProperty("--transition", "all .15s linear");
        selectable = true;
    },100);
};