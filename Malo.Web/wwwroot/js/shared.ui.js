function toggleShortcutModal() {
    var modal = document.querySelector('.shortcut-modal');
    var content = document.querySelector('.shortcut-modal-content');
    var display = getComputedStyle(modal).display;

    if (display == "none") {
        malo.frame("show", 'fade',  {
            el: modal, dr: 200, dp: "flex", cb: function () {
                malo.frame("show", "float", { el: content, direction: "right" });
            }
        });
    } else {
        malo.frame("hide", 'float',  {
            el: content, dr: 500, direction: "right", cb: function () {
                malo.frame("hide", "fade", { el: modal, dr: 200  });
            }
        });
    }
}