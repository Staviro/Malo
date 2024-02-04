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
        MALOHELPERS.display(sidemenu, "block");
        malo.frame("show", "float", { el: sidemenuContent, direction: "right" });
    } else {
        malo.frame("hide", "float", {
            el: sidemenuContent, dr: 1000, direction: "right",  cb: function () {
                MALOHELPERS.display(sidemenu, "none");
            }
        });
    }
}