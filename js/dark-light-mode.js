
var icon1 = document.getElementById("icon1");
icon1.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon1.src = "img/icons/sun.png";
        icon1.title = "Click for Light Mode";
    } else {
        icon1.src = "img/icons/moon.png";
        icon1.title = "Click for Dark Mode";
    }
}
var icon2 = document.getElementById("icon2");
icon2.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon2.src = "img/icons/sun.png";
        icon2.title = "Click for Light Mode";
    } else {
        icon2.src = "img/icons/moon.png";
        icon2.title = "Click for Dark Mode";
    }
}
