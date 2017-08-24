---
layout : default
title: "Fietsdienstverleningen"
permalink: /home/fietsdienstverleningen/
---


<dl>
<div class="container">
<div class="row">
<div class="col-xs-12 block_top wrapper_3">
        <h3 class="text-center padding-block">{{ page.title }}</h3>
</div>
</div>



<section>
    <div class="row">
      <div class="col-xs-12" id="map">
      </div>
    </div>
</section>
<section>
    <div class="row row_background">
        <section class="page">
        </section>
    </div>
</section><!-- end container -->


<script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
    </script>

    <script>
        
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 51.054030204599, lng: 3.7240583331843}
        });

        setMarkers(map);
      }
      var parkeergarages = [
        ['F1 Fietspunt Sint-Pieters MaxMobiel', 51.034556139344, 3.7082800089006, 4],
        ['F2 StudentEnMobiliteit', 51.042647976043, 3.7234165533576, 5],
        ['F3 Fietsendepot', 51.059460736383,  3.7194977237648, 3],
        ['F4 Fietspunt Dampoort MaxMobiel', 51.056672478401, 3.7401784317038, 2],
        ['F5 Fietspunt Stadshal MaxMobiel', 51.054030204599, 3.7240583331843, 1],
      ];

      var labels = ['F1','F2','F3','F4','F5'];


      function setMarkers(map) {

        var shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly'
        };
        for (var i = 0; i < parkeergarages.length; i++) {
          var parking = parkeergarages[i];
          var marker = new google.maps.Marker({
            position: {lat: parking[1], lng: parking[2]},
            map: map,
            icon: {
              url: '../../content/icons/pin10.png',
              labelOrigin: new google.maps.Point(14,14),
            },
            
            shape: shape,
            title: parking[0],
            zIndex: parking[3],
            label: {
                    color: 'white',
                    text: labels[i % labels.length],
                    fontSize: '12px',
                    fontFamily: '"Nunito Sans", sans-serif',
                    fontWeight: '200'
                  },
          });
        }
      }
    </script>

    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC74LKdgxQR0gpx6A9iAnxYEo3B0D9AobU&callback=initMap"
    type="text/javascript"></script>

    <section>
    <div class="row">
    <div class="col-xs-12 block_bottom wrapper_2">
    </div>
    </div>
    </section>
</div>

</dl>