// let toggleBtn = document.querySelector('#toggle-btn');
// let darkMode = localStorage.getItem('dark-mode');

// const enableDarkMode = () => {
//     toggleBtn.classList.replace('fa-sun', 'fa-moon');
//     body.classList.add('dark');
//     localStorage.setItem('dark-mode', 'enabled');
// }

// const disableDarkMode = () => {
//     toggleBtn.classList.replace('fa-moon', 'fa-sun');
//     body.classList.remove('dark');
//     localStorage.setItem('dark-mode', 'disabled');
// }


// if (darkMode === 'enabled') {
//     enableDarkMode();
// }

// toggleBtn.onclick = (e) => {
//     let darkMode = localStorage.getItem('dark-mode');
//     if (darkMode === 'disabled') {
//         enableDarkMode();
//     } else {
//         disableDarkMode();
//     }
// }






let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");

icon1.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {

        document.getElementById('icon1').src = 'img/icons/sun.png';
        icon1.title = "Click for Light Mode";
        localStorage.setItem('darkMode', 'enabled'); //store this data if dark mode is on

        // icon1.src = "img/icons/sun.png";
    } else {

        document.getElementById('icon1').src = 'img/icons/moon.png';
        icon1.title = "Click for Dark Mode";
        localStorage.setItem('darkMode', 'disabled'); //store this data if dark mode is off


        // icon1.src = "img/icons/moon.png";
    }
}

icon2.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {


        // icon2.src = "img/icons/sun.png";
        // document.getElementById('icon2').src = 'img/icons/sun.png';

        icon2.title = "Click for Light Mode";
        localStorage.setItem('darkMode', 'enabled'); //store this data if dark mode is on
    } else {

        // document.getElementById('icon2').src = 'img/icons/moon.png';

        // icon2.src = "img/icons/moon.png";
        icon2.title = "Click for Dark Mode";

        localStorage.setItem('darkMode', 'disabled'); //store this data if dark mode is off
    }
}


if (localStorage.getItem('darkMode') == 'enabled') {
    document.body.classList.toggle('dark-theme');
    icon1.classList.toggle('active');
    icon2.classList.toggle('dark-theme');
    icon1.src = "img/icons/sun.png";
    icon2.src = "img/icons/sun.png";

}
