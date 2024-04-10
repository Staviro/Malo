function toggleShortcutModal() {
    var modal = document.querySelector('.shortcut-modal');
    var content = document.querySelector('.shortcut-modal-container');
    var display = getComputedStyle(modal).display;

    if (display == "none") {
        malo.frame("show", 'fade', { el: modal, dp: "flex" });
        malo.frame("show", "bounce", { el: content});
    } else {
        malo.frame("hide", 'bounce', { el: content });
        malo.frame("hide", "fade", { el: modal });
    }
}

function closeSideMenuOnMobile() {
    let sidemenu = document.querySelector('.app-sidemenu');
    let isMobile = false;
    if (sidemenu) {
        isMobile = sidemenu.style.display == "block" && getComputedStyle(sidemenu).position == "fixed";
    }
    if (isMobile) {
        malo.frame('hide', 'float', { direction: 'right', el: sidemenu });
    }
}