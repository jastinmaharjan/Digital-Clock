let hrs = document.getElementById("hrs");
let mins = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();

    console.log("Hours: " + currentTime.getHours());
    console.log("Minutes: " + currentTime.getMinutes());
    console.log("Seconds: " + currentTime.getSeconds());

    hrs.innerHTML = currentTime.getHours() < 10 ? "0" + currentTime.getHours() : currentTime.getHours();
    mins.innerHTML = currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds() < 10 ? "0" + currentTime.getSeconds() : currentTime.getSeconds();
}, 1000);
