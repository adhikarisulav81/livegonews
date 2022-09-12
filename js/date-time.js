// date
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
var date = today.getFullYear() + ' ' + month[today.getMonth()] + ' ' + today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date + ' ' + time;

document.getElementById("displayDate").innerHTML = date + ' , ' + daylist[day];
document.getElementById("displayDate1").innerHTML = date + ' , ' + daylist[day];