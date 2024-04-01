const malo = new Malo(500);
function toggleOrSetTheme(isDark = false) {
    if (isDark) {
        document.querySelector('html').classList.add('dark');
        document.getElementById('appMode').src = "/assets/icons/brightness-high.svg";
        localStorage.setItem('isDarkMode', true);
        return;
    }
    if (document.querySelector('html').classList.contains('dark')) {
        localStorage.setItem('isDarkMode', false);
        document.querySelector('html').classList.remove('dark');
    } else {
        localStorage.setItem('isDarkMode', true);
        document.querySelector('html').classList.add('dark');
    }
}

let html = document.querySelector('html');
if (localStorage['isDarkMode'] == 'true' || localStorage['isDarkMode'] == undefined) {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}