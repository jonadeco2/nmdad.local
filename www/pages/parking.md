---
layout : default
title: "Parking"
permalink: /home/parking/
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


    <script>

      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 51.05367, lng: 3.7186}
        });

        setMarkers(map);
      }
      var parkeergarages = [
        ['P07 Sint-Michiels', 51.05367, 3.7186, 4],
        ['P10 Sint-Pietersplein', 51.04171, 3.72557, 5],
        ['P01 Vrijdagmarkt', 51.05652, 3.72595, 3],
        ['P04 Savaanstraat', 51.04862, 3.72225, 2],
        ['P08 Ramen', 51.05532, 3.71653, 1],
        ['P02 Reep', 51.05207,  3.72981, 1]
      ];

      var labels = ['P7','P10','P1','P4','P8','P2'];


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
