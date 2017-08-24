;(function() {
  function ProfielApp (id, parentContainer) {
    this.API_URL = "../../data/profielen.json";
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

            for(i=0; i<4 ; i++){

            var image = data[i].image;
            var name = data[i].name;
            var about = data[i].about;

           tempStr +=   '<div class="col-md-3 col-lg-3 profile-padding">';
           tempStr +=       '<div class="background-profile">';
           tempStr +=           '<div id="profielGebruiker'+[i]+'">';
           tempStr +=           '<div class="modal-body">';
           tempStr +=               '<center>';
           tempStr +=                   '<img src="' + image + '" name="aboutme" width="110" height="110" border="0" class="img-circle">';
           tempStr +=                       '<h5 class="margin-name_profile newUser ">Nieuwe Gebruiker:</h5>';
           tempStr +=                       '<h4 class="margin-name_profile">' + name + '</h4>';
           tempStr +=               '</center>';
           tempStr +=                       '<hr>';
           tempStr +=                '<center>';
           tempStr +=                           '<p class="text-left about"><strong>About: </strong><br>' + about + '</p>';
           tempStr +=                           '<br>';
           tempStr +=                '</center>';
           tempStr +=                '<div class="row">';
           tempStr +=                           '<div class="col-xs-6 col-lg-6 text-center">';
           tempStr +=                               '<a class="buttonHeart" id="likeButton'+[i]+'" onclick="changeClass('+[i]+')" ><i class="fa fa-heart paddingButtonHeart" aria-hidden="true"></i></a>';
           tempStr +=                           '</div>';
           tempStr +=                           '<div class="col-xs-6 col-lg-6 text-center">';
           tempStr +=                               '<a class="buttonCross" onclick="deleteProfile('+[i]+')"><i class="fa fa-times paddingButtonCross" aria-hidden="true"></i></a>';
           tempStr +=                           '</div>';
           tempStr +=               '</div>';
           tempStr +=               '</div>';
           tempStr +=           '</div>';
           tempStr +=        '</div>';
           tempStr +=     '</div>';

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
    return `ProfielApp with id: ${this.id}`;
    };

    };

    var ww1 = new ProfielApp (1, document.querySelector('.page'));
    ww1.loadData();
    console.log(ww1.toString());

})();


function changeClass(id){
document.getElementById("likeButton"+id).classList.toggle("buttonHeart-select");
}

function deleteProfile(id){
    document.getElementById("profielGebruiker"+id).remove();
}