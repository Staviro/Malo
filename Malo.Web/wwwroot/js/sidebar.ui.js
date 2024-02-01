function toggleSidebarBody(identifer) {
    var sidebarBody = document.querySelector(`.sidebar-item-body.${identifer}`);
    var sidebarHeader = document.querySelector(`.sidebar-item-header.${identifer}`);
    var display = getComputedStyle(sidebarBody).display;
    if (display == "none" && !MALOHELPERS.isAnimating(sidebarBody)) {
        sidebarHeader.querySelector('img').classList.add('opened');
        malo.frame("show", "slide", { el: sidebarBody, axis: "y", maxWidth: "280px" });
    } else {
        sidebarHeader.querySelector('img').classList.remove('opened');
        malo.frame("hide", "slide", { el: sidebarBody, axis: "y" });
    }
}