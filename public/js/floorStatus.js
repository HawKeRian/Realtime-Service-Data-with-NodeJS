var time = document.getElementById('time')
setInterval(() => {
        var getTime = (new Date(Date.now()).toLocaleString()).split(',');
        time.innerHTML = getTime[0] + '<br>' + getTime[1]
}, 1000);

var floor_socket = io.connect('/');

    floor_socket.on('3rd_floor', function(data){
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
            for (let j = 0; j < data.data.length; j++) {
                if (data.data[j] !== undefined) {
                    var convertID = data.data[j].zone + data.data[j].name_id.toString().padStart(3, '0')
                    
                    if (('slot_' + convertID) == floor3_slot[i].id) {
                        floor3_slot[i].innerHTML = data.data[j].status

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
                    floor3_slot[i].innerHTML = '-'
                }
            }

        }

        for (let i = 0; i < overall_f3.length; i++) {
            var countSlot3 = 0;

            for (let j = 0; j < data.data.length; j++) {
                if (data.data[j] !== undefined) {
                    var convertZone = 'overall_' + data.data[j].zone
                    
                    if (convertZone == overall_f3[i].id) {
                        if (data.data[j].status == 0) {
                            countSlot3 += 1;
                        }
                    }
                    
                } else {
                    overall_f3[i].innerHTML = '-'
                }                
            }
            overall_f3[i].innerHTML = countSlot3 + ' คัน';            
        }
    })

    floor_socket.on('4th_floor', function(data){
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
            for (let j = 0; j < data.data.length; j++) {
                if (data.data[j] !== undefined) {
                    var convertID = data.data[j].zone + data.data[j].name_id.toString().padStart(3, '0')
                    
                    if (('slot_' + convertID) == floor4_slot[i].id) {
                        floor4_slot[i].innerHTML = data.data[j].status

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
                    floor4_slot[i].innerHTML = '-'
                }
            }
        }

        for (let i = 0; i < overall_f4.length; i++) {
            var countSlot4 = 0;

            for (let j = 0; j < data.data.length; j++) {
                if (data.data[j] !== undefined) {
                    var convertZone = 'overall_' + data.data[j].zone
                    
                    if (convertZone == overall_f4[i].id) {
                        if (data.data[j].status == 0) {
                            countSlot4 += 1;
                        }
                    }
                    
                } else {
                    overall_f4[i].innerHTML = '-'
                }                
            }
            overall_f4[i].innerHTML = countSlot4 + ' คัน';            
        }
    })

    floor_socket.on('5th_floor', function(data){
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
                    floor5_slot[i].innerHTML = '-'
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
    })