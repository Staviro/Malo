function togglesidemenuBody(identifer) {
    var sidemenuBody = document.querySelector(`.sidemenu-item-body.${identifer}`);
    var sidemenuHeader = document.querySelector(`.sidemenu-item-header.${identifer}`);
    var display = getComputedStyle(sidemenuBody).display;
    if (display == "none" && !MALOHELPERS.isAnimating(sidemenuBody)) {
        sidemenuHeader.querySelector('img').classList.add('opened');
        malo.frame("show", "slide", { el: sidemenuBody, axis: "y", maxWidth: "280px" });
    } else {
        sidemenuHeader.querySelector('img').classList.remove('opened');
        malo.frame("hide", "slide", { el: sidemenuBody, axis: "y" });
    }
}

function toggleSidemenu() {
    var sidemenu = document.querySelector(`.app-sidemenu`);
    var display = getComputedStyle(sidemenu).display;
    if (display == "none" && !MALOHELPERS.isAnimating(sidemenu)) {
        if (window.innerWidth < 1399) {
            malo.frame("show", "slide", { el: sidemenu, axis: "x", maxWidth: '25%' });
        } else {
            malo.frame("show", "slide", { el: sidemenu, axis: "x", maxWidth: '380px' });
        }
    } else {
        malo.frame("hide", "slide", { el: sidemenu, axis: "x" });
    }
}