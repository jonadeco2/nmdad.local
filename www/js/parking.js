;(function() {

  function ParkingApp(id, parentContainer) {
    this.API_URL = //'https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json';
    '../../data/parking.json';
    this.id = id;
    this.parentContainer = parentContainer;

    this.loadData = function() {
        var that = this;

        var xhr = new XMLHttpRequest();
        xhr.open('get', this.API_URL, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
        if(xhr.status == 200) {
            var data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response;
            var tempStr = '';
            var id = 0;
            for(i=0; i < data.length; i++){
            var name = data[i].name;
            var address = data[i].address;
            var parkingStatus = data[i].parkingStatus;
            var availableCapacity = parkingStatus.availableCapacity;
            var totalCapacity = parkingStatus.totalCapacity;
                       

            tempStr +=  '<div class="col-lg-6 col-xs-12 row_custom">';
            tempStr +=      '<div class="col-xs-6">';
            tempStr +=          '<h4>' + name + '</h4>';
            tempStr +=          '<h5><i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp' + address + '</h5>';
            tempStr +=      '</div>';
            tempStr +=      '<div class="col-xs-6 text-right">';
            tempStr +=          '<h5 class="value-right">' + availableCapacity + ' / ' + totalCapacity +  '</h5>';
            tempStr +=      '</div>';
            tempStr +=    '<hr>';
            tempStr +=  '</div>';
            tempStr += '</div>';//end row
            }//end for loop

            that.parentContainer.innerHTML = tempStr;
            } else {
            console.log('Error');
            }
        }
        xhr.onerror = function() {
        console.log('Error');
        }
        xhr.send();
        };

    this.updateUI = function() {

    };

    this.toString = function() {
    return `ParkingApp with id: ${this.id}`;
    };

};

    var ww1 = new ParkingApp(1, document.querySelector('.page'));
    ww1.loadData();
    console.log(ww1.toString());          

})();





