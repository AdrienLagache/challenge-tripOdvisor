
const theme = {

    currentTheme : "theme-green",

    changeTheme : function() {
        const body = document.querySelector('body');

        if (body.classList.contains('theme-dark')) {
            body.classList.remove('theme-dark');
            localStorage.setItem("theme", "light");
        }
        else {
            body.classList.add('theme-dark');
            localStorage.setItem("theme", "dark")
        }
    },

    changeColorTheme : function(newColorTheme) {
        const body = document.querySelector('body');
        const logo = document.querySelector('.logo__image'); 

        body.classList.remove(theme.currentTheme);
        body.classList.add(newColorTheme);
        theme.currentTheme = newColorTheme;
        logo.removeAttribute("src");
        logo.setAttribute('src', `img/logo-${theme.currentTheme}.png`)
        localStorage.setItem('colorTheme', newColorTheme);      
    },

    handleThemeColorClick : function(event) {
        const themeColor = event.target.id;

        theme.changeColorTheme(themeColor);
    },

    initLocalStorageTheme : function() {
        const myTheme = localStorage.getItem("theme");

        if (myTheme === "dark") {
            document.body.classList.add('theme-dark');
        }
    },

    initMyColorTheme : function () {
        const localColorTheme = localStorage.getItem("colorTheme");

        if (localColorTheme) {
            theme.myColorTheme(localColorTheme);
        }
    },

    myColorTheme : function(myColorTheme) {
        const body = document.querySelector('body');
        const logo = document.querySelector('.logo__image');

        body.classList.remove(theme.currentTheme);
        body.classList.add(myColorTheme);
        theme.currentTheme = myColorTheme;
        logo.removeAttribute("src");
        logo.setAttribute('src', `img/logo-${theme.currentTheme}.png`);
    },

    init : function() {
        const darkModeSwitch = document.querySelector('#theme-switch');
        darkModeSwitch.addEventListener('click', theme.changeTheme);

        const colorSwitchs = document.querySelectorAll('.theme-button');
        for (const colorSwitch of colorSwitchs) {
            colorSwitch.addEventListener('click', this.handleThemeColorClick);
        };

        theme.initLocalStorageTheme();
        theme.initMyColorTheme();
    }
};




