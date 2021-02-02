function toggleNav() {
    //find the navlist class
    let x = document.getElementById("navlist");
    if (x.className === "navlist") {
        //add responsive class to the navlist
        x.className += " responsive";
    } else {
        x.className = "navlist";
    }
}