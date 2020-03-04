var arrow = document.querySelector(".arrow");
var speed = document.querySelector(".speed-value");
navigator.geolocation.watchPosition(function (data) {
    console.log(data);
    if (data.coords.speed) {
        speed.textContent = data.coords.speed.toFixed(2);
    }
    else {
        speed.textContent = "0";
    }
    arrow.style.transform = "rotate(" + data.coords.heading + "deg)";
}, function () { return alert("We're gonna need those perms, buddy."); });
