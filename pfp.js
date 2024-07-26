var p = 0;
function Profile() {
    if (p == 0) {
        document.getElementById("PFP").src = "PFP.png";
        p = 1;
    } else if (p == 1) {
        document.getElementById("PFP").src = "https://avatars.githubusercontent.com/u/166549260";
        p = 0;
    }
}