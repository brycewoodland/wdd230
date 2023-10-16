const darkmode = document.querySelector('#dark-mode');
const bodyelt = document.querySelector('body');

darkmode.addEventListener('click', () => {
    if (darkmode.textContent == 'DARK') {
        document.documentElement.style.setProperty('--text-color', '#ECF0F1');
        document.documentElement.style.setProperty('--background-color', '#171A21');
        document.documentElement.style.setProperty('--paragraph-color', '#ECF0F1');
        document.documentElement.style.setProperty('--header-background', '#264348');
        document.documentElement.style.setProperty('--hover-color', 'yellow');
        darkmode.textContent = 'LIGHT';
    }
    else{
        document.documentElement.style.setProperty('--background-color', '#ECF0F1');
        document.documentElement.style.setProperty('--text-color', '#ECF0F1');
        document.documentElement.style.setProperty('--paragraph-color', '#171A21');
        document.documentElement.style.setProperty('--header-background', '#096B72');
        document.documentElement.style.setProperty('--hover-color', 'yellow');
        darkmode.textContent = 'DARK';
    }
})