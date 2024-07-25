function SwicthTab(tab) {
    if (tab == 0) {
        document.getElementById("about").style.display = "block";
        document.getElementById("projects").style.display = "none";
        document.getElementById("contact").style.display = "none";
    } else if (tab == 1) {
        document.getElementById("about").style.display = "none";
        document.getElementById("projects").style.display = "block";
        document.getElementById("contact").style.display = "none";
    } else if (tab == 2) {
        document.getElementById("about").style.display = "none";
        document.getElementById("projects").style.display = "none";
        document.getElementById("contact").style.display = "block";
    }
}