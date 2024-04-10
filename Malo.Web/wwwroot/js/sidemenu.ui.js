function togglesidemenuBody(identifer) {
    var sidemenuBody = document.querySelector(`.sidemenu-item-body.${identifer}`);
    var sidemenuHeader = document.querySelector(`.sidemenu-item-header.${identifer}`);
    var display = getComputedStyle(sidemenuBody).display;

    if (display == "none" && !MALOHELPERS.isAnimating(sidemenuBody)) {
        sidemenuHeader.querySelector('img').classList.add('opened');
        malo.frame("show", "slide", { el: sidemenuBody, axis: "y" });
    } else {
        if (!MALOHELPERS.isAnimating(sidemenuBody)) {
            sidemenuHeader.querySelector('img').classList.remove('opened');
            malo.frame("hide", "slide", { el: sidemenuBody, axis: "y" });
        }
    }
}
function toggleSidemenu(isMenuButton = false, btn = null) {
    var sidemenu = document.querySelector(`.app-sidemenu`);
    var display = getComputedStyle(sidemenu).display;

    if (isMenuButton && display == 'block') {
        if (btn != null)
            malo.effect(malo.MALOCONSTANTS.EFFECTS.BOUNCE, { el: btn, itr: 1, dr: 1000 });
        return;
    }

    if (display == "none" && !MALOHELPERS.isAnimating(sidemenu)) {
        if (window.innerWidth > 1399) {
            malo.frame("show", "slide", { el: sidemenu, axis: "x", maxWidth: '450px' });

        } else if (window.innerWidth < 1399 && window.innerWidth > 991) {
            malo.frame("show", "slide", { el: sidemenu, axis: "x", maxWidth: '380px' });
        } else {
            malo.frame("show", "float", { el: sidemenu, direction: "right" });
        }
    } else {

        if (window.innerWidth < 992) {
            malo.frame("hide", "float", { el: sidemenu, direction: "right" });
        } else {
            malo.frame("hide", "slide", { el: sidemenu, axis: "x" });
        }
    }
}