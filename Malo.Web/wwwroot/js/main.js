var hideDocModalWith = {};
const themeHandler = {
    switch() {
        const value = localStorage.getItem(appKeys.theme);
        let set = "";
        if (value != null && value == "") set = "dark";
        else set = "";
        document.querySelector("html").className = set;
        localStorage.setItem(appKeys.theme, set);
    }
}

const docModal = {
    setHideWith(props) {
        hideDocModalWith = props;
    },
    hideWith() {
        malo.animate(hideDocModalWith);
    }
}

const mobileNav = {
    show() {
        malo.animate({ element: ".mobile-nav", display: "flex", animation: "fade-in" });
        malo.animate({ element: ".mobile-nav-content", animation: "float-in", direction: "left" });
    },
    hide() {
        malo.animate({ element: ".mobile-nav-content", animation: "float-out", direction: "left" });
        malo.animate({ element: ".mobile-nav", animation: "fade-out" });
    }
}