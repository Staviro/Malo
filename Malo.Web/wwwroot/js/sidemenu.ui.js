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
    var sidemenu = document.querySelector(`.sidemenu-container`);
    var sidemenuContent = document.querySelector(`.sidemenu-content`);
    var display = getComputedStyle(sidemenu).display;
    if (display == "none" && !MALOHELPERS.isAnimating(sidemenu)) {
        malo.frame("show", 'fade', {
            el: sidemenu, dr: 100, dp: "flex", cb: function () {
                malo.frame("show", "float", { el: sidemenuContent, direction: "right" });
            }
        });
    } else {
        malo.frame("hide", 'float', {
            el: sidemenuContent, dr: 500, direction: "right", cb: function () {
                malo.frame("hide", "fade", { el: sidemenu, dr: 100 });
            }
        });
    }
}