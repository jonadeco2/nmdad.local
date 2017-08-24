;(function() {
  function VerkeersmeldingenApp (id, parentContainer) {
    this.API_URL = "../../data/verkeersmeldingen.json";
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
            //var id = 0;
            var tempStr = '';

            for(i=0; i<10; i++){

            var result = data.result[i];
            var type = result.type;
            var transport = result.transport;
            var payload = result.payload;
            var message = payload.message;
            var sourcepayload = result.sourcePayload;
            var subtype = sourcepayload.subtype;
            var street = sourcepayload.street;
            var city = sourcepayload.city;

            
            tempStr +=  '<div class="col-lg-6 col-xs-12 row_custom">';
            tempStr +=      '<div class="col-xs-2 triangle_car text-center">';
            tempStr +=          '<i class="fa fa-exclamation-triangle icon-custom fa-3x" aria-hidden="true"></i>';
            tempStr +=      '</div>';
            tempStr +=      '<div class="col-xs-10">';
            tempStr +=          '<h5>' + message + '</h5>';
            tempStr +=          '<div class="row">';
            tempStr +=          '<div class="col-xs-8">';
            tempStr +=              '<h6><i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp' + street + '</h5>';
            tempStr +=          '</div>';
            tempStr +=          '<div class="col-xs-4">';
            tempStr +=              '<h6><i class="fa fa-car" aria-hidden="true"></i> &nbsp' + "Stad: &nbsp" + city + '</h5>';
            tempStr +=          '</div>';
            tempStr +=          '</div>';
            tempStr +=      '</div>';
            tempStr += '</div>';//end row

            }//end for loop

            that.parentContainer.innerHTML = tempStr;
            } else {
            console.log('Error 1');
            }
        }
        xhr.onerror = function() {
        console.log('Error 2');
        }
        xhr.send();
        };

    this.updateUI = function() {

    };

    this.toString = function() {
    return `VerkeersmeldingenApp with id: ${this.id}`;
    };

    };

    var ww1 = new VerkeersmeldingenApp (1, document.querySelector('.page'));
    ww1.loadData();
    console.log(ww1.toString());

})();
