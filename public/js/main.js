var totalCar = document.querySelectorAll('[id^=totalCar]')
var time = document.getElementById('time')

setInterval(() => {
    time.innerHTML = new Date(Date.now()).toLocaleString();
}, 1000);
    

var mainSocket = io.connect('/');
    mainSocket.on('update', function(data){
        var output = data.data.rows[0];

        if (output) {
            totalCar[0].innerHTML = output.floor3 + " คัน"
            totalCar[1].innerHTML = output.floor4 + " คัน"
            totalCar[2].innerHTML = output.floor5 + " คัน"
        } else {
            totalCar[0].innerHTML = "-"
            totalCar[1].innerHTML = "-"
            totalCar[2].innerHTML = "-"
        }
    })

