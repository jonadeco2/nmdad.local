---
layout : default
title: "Taxilocaties"
permalink: /home/taxilocaties/
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
</section>

   
    <script>
        
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 51.048087100376, lng: 3.7305114083734}
        });

        setMarkers(map);
      }
      var parkeergarages = [
        ['T1 Taxilocatie 1', 51.053990017924, 3.7216085170393, 4],
        ['T2 Taxilocatie 2', 51.048087100376, 3.7305114083734, 5],
        ['T3 Taxilocatie 3', 51.036168474463,  3.7115750574136, 3],
        ['T4 Taxilocatie 4', 51.056357161705, 3.7400863685371, 2],
        ['T5 Taxilocatie 5', 51.025415269708, 3.6921087940007, 1],
        ['T6 Taxilocatie 6', 51.050724685357,  3.7227812797699, 1],
        ['T7 Taxilocatie 7', 51.050722204274,  3.7223285027056, 1],
        ['T8 Taxilocatie 8', 51.050634512282,  3.7236881467039, 1],
      ];

      var labels = ['T1','T2','T3','T4','T5','T6','T7','T8'];


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
    </div><!-- end container -->
</dl>