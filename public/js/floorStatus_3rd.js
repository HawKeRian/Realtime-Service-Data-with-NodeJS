var time = document.getElementById('time')
fetchData3rd(firstData);

setInterval(() => {
        var getTime = (new Date(Date.now()).toLocaleString()).split(',');
        time.innerHTML = getTime[0] + '<br>' + getTime[1]
}, 1000);

setInterval(() => {
    fetch('/api/floor3')
    .then(response => response.json())
    .then(data => {
        fetchData3rd(data)
    })
}, 10000);

function fetchData3rd(data) {
    var floor3_slot = document.querySelectorAll('[id^=slot_3]')
    var floor3_slot = Array.prototype.slice.call(floor3_slot, 0);

    var overall_f3 = document.querySelectorAll('[id^=overall_3]')
    
    // Sort by Floor
    floor3_slot.sort(function(a, b) {
        if(a.id < b.id) { return -1; }
        if(a.id > b.id) { return 1; }
        return 0;
    });
    
    for (let i = 0; i < floor3_slot.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[j] !== undefined) {
                var convertID = data[j].zone + data[j].name_id.toString().padStart(3, '0')
                
                if (('slot_' + convertID) == floor3_slot[i].id) {
                    floor3_slot[i].innerHTML = data[j].status

                    if (floor3_slot[i].innerHTML == "0") {
                        floor3_slot[i].style = 'background-color: rgb(100,255,100); color: rgb(100,255,100);';
                    }else{
                        floor3_slot[i].style = 'background-color: rgb(255,75,75); color: rgb(255,75,75);';
                    }

                    floor3_slot[i].onmouseover = function () {
                        floor3_slot[i].title = this.id.slice(this.id.lastIndexOf('_')+1,this.id.length)
                    }
                }
            }else{
                floor3_slot[i].innerHTML = '0'
            }
        }

    }

    for (let i = 0; i < overall_f3.length; i++) {
        var countSlot3 = 0;

        for (let j = 0; j < data.length; j++) {
            if (data[j] !== undefined) {
                var convertZone = 'overall_' + data[j].zone
                
                if (convertZone == overall_f3[i].id) {
                    if (data[j].status == 0) {
                        countSlot3 += 1;
                    }
                }
                
            } else {
                overall_f3[i].innerHTML = '0'
            }                
        }
        overall_f3[i].innerHTML = countSlot3 + ' คัน';            
    }
}