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
      console.log(data);
      socket.emit('update', { data: data[0] });
    })
}, 3000);
    

// var mainSocket = io.connect('/');
//     mainSocket.on('update', function(data){
//         var output = data.data[0];

//         if (output) {
//             totalCar[0].innerHTML = output.floor3 + " ช่อง"
//             totalCar[1].innerHTML = output.floor4 + " ช่อง"
//             totalCar[2].innerHTML = output.floor5 + " ช่อง"
//         } else {
//             totalCar[0].innerHTML = "-"
//             totalCar[1].innerHTML = "-"
//             totalCar[2].innerHTML = "-"
//         }
//     })

socket.on('update', function(data){
    var output = data.data[0];

    if (output) {
        totalCar[0].innerHTML = output.floor3 + " ช่อง"
        totalCar[1].innerHTML = output.floor4 + " ช่อง"
        totalCar[2].innerHTML = output.floor5 + " ช่อง"
    } else {
        totalCar[0].innerHTML = "-"
        totalCar[1].innerHTML = "-"
        totalCar[2].innerHTML = "-"
    }
})

