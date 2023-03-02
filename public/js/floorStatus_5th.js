var time = document.getElementById('time')
setInterval(() => {
        var getTime = (new Date(Date.now()).toLocaleString()).split(',');
        time.innerHTML = getTime[0] + '<br>' + getTime[1]
}, 1000);

setInterval(() => {
    fetch('/api/floor5')
    .then(response => response.json())
    .then(data => {
        fetchData5th(data)
    })
}, 3000);

function fetchData5th(data) {
    var floor5_slot = document.querySelectorAll('[id^=slot_5]')
    var floor5_slot = Array.prototype.slice.call(floor5_slot, 0);

    var overall_f5 = document.querySelectorAll('[id^=overall_5]')


    // Sort by Floor
    floor5_slot.sort(function(a, b) {
        if(a.id < b.id) { return -1; }
        if(a.id > b.id) { return 1; }
        return 0;
    });
    
    for (let i = 0; i < floor5_slot.length; i++) {
        for (let j = 0; j < data.data.length; j++) {
            if (data.data[j] !== undefined) {
                var convertID = data.data[j].zone + data.data[j].name_id.toString().padStart(3, '0')
                
                if (('slot_' + convertID) == floor5_slot[i].id) {
                    floor5_slot[i].innerHTML = data.data[j].status

                    if (floor5_slot[i].innerHTML == "0") {
                        floor5_slot[i].style = 'background-color: rgb(100,255,100); color: rgb(100,255,100);';
                    }else{
                        floor5_slot[i].style = 'background-color: rgb(255,75,75); color: rgb(255,75,75);';
                    }

                    floor5_slot[i].onmouseover = function () {
                        floor5_slot[i].title = this.id.slice(this.id.lastIndexOf('_')+1,this.id.length)
                    }
                }
            }else{
                floor5_slot[i].innerHTML = '0'
            }
        }
    }

    for (let i = 0; i < overall_f5.length; i++) {
        var countSlot5 = 0;

        for (let j = 0; j < data.data.length; j++) {
            if (data.data[j] !== undefined) {
                var convertZone = 'overall_' + data.data[j].zone
                
                if (convertZone == overall_f5[i].id) {
                    if (data.data[j].status == 0) {
                        countSlot5 += 1;
                    }
                }
                
            } else {
                overall_f5[i].innerHTML = '-'
            }                
        }
        overall_f5[i].innerHTML = countSlot5 + ' คัน';            
    }
}