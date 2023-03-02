var totalCar = document.querySelectorAll('[id^=totalCar]')
var time = document.getElementById('time')
const socket = io();

setInterval(() => {
    time.innerHTML = new Date(Date.now()).toLocaleString();
}, 1000);

setInterval( async () => {
    fetch('/api/overview')
    .then(response => response.json())
    .then(data => {
    
        if (data) {
            totalCar[0].innerHTML = data.floor3 + " ช่อง"
            totalCar[1].innerHTML = data.floor4 + " ช่อง"
            totalCar[2].innerHTML = data.floor5 + " ช่อง"
        } else {
            totalCar[0].innerHTML = "-"
            totalCar[1].innerHTML = "-"
            totalCar[2].innerHTML = "-"
        }
    })
}, 3000);
