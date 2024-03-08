window.malo = new Malo(500, false);
function toggleOrSetTheme(isDark = false) {
    if (isDark) {
        document.querySelector('html').classList.add('dark');
        document.getElementById('appMode').src = "/icons/brightness-high.svg";
        localStorage.setItem('isDarkMode', true);
        return;
    }
    if (document.querySelector('html').classList.contains('dark')) {
        localStorage.setItem('isDarkMode', false);
        document.querySelector('html').classList.remove('dark');
        document.getElementById('appMode').src = "/icons/brightness-low.svg";
    } else {
        document.querySelector('html').classList.add('dark');
        document.getElementById('appMode').src = "/icons/brightness-high.svg";
        localStorage.setItem('isDarkMode', true);
    }
}

window.onload = function () {
    if (localStorage['isDarkMode'] == 'true') {
        document.querySelector('html').classList.add('dark');
        document.getElementById('appMode').src = "/icons/brightness-high.svg";
    }
    app.onDocumentationPage();
}