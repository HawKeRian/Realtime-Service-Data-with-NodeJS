var time = document.getElementById('time')
fetchData4th(firstData);

setInterval(() => {
        var getTime = (new Date(Date.now()).toLocaleString()).split(',');
        time.innerHTML = getTime[0] + '<br>' + getTime[1]
}, 1000);

setInterval(() => {
    fetch('/api/floor4')
    .then(response => response.json())
    .then(data => {
        fetchData4th(data)
    })
}, 300000);

function fetchData4th(data) {
    var floor4_slot = document.querySelectorAll('[id^=slot_4]')
    var floor4_slot = Array.prototype.slice.call(floor4_slot, 0);

    var overall_f4 = document.querySelectorAll('[id^=overall_4]')

    // Sort by Floor
    floor4_slot.sort(function(a, b) {
        if(a.id < b.id) { return -1; }
        if(a.id > b.id) { return 1; }
        return 0;
    });
    
    for (let i = 0; i < floor4_slot.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[j] !== undefined) {
                var convertID = data[j].zone + data[j].name_id.toString().padStart(3, '0')
                
                if (('slot_' + convertID) == floor4_slot[i].id) {
                    floor4_slot[i].innerHTML = data[j].status

                    if (floor4_slot[i].innerHTML == "0") {
                        floor4_slot[i].style = 'background-color: rgb(100,255,100); color: rgb(100,255,100);';
                    }else{
                        floor4_slot[i].style = 'background-color: rgb(255,75,75); color: rgb(255,75,75);';
                    }

                    floor4_slot[i].onmouseover = function () {
                        floor4_slot[i].title = this.id.slice(this.id.lastIndexOf('_')+1,this.id.length)
                    }
                }
            }else{
                floor4_slot[i].innerHTML = '0'
            }
        }
    }

    for (let i = 0; i < overall_f4.length; i++) {
        var countSlot4 = 0;

        for (let j = 0; j < data.length; j++) {
            if (data[j] !== undefined) {
                var convertZone = 'overall_' + data[j].zone
                
                if (convertZone == overall_f4[i].id) {
                    if (data[j].status == 0) {
                        countSlot4 += 1;
                    }
                }
                
            } else {
                overall_f4[i].innerHTML = '0'
            }                
        }
        overall_f4[i].innerHTML = countSlot4 + ' คัน';            
    }
}