// set user-specified or system-preference-based default theme
(function () {
    var theme = localStorage.getItem('theme');
    if (!theme) {
        theme = 'light';
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme = 'dark';
        }
    }
    if (theme === 'light') {
        document.getElementById('darkModeToggleLink').innerText = '☪';
    }
    document.documentElement.setAttribute('data-theme', theme);    
})();