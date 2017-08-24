---
layout : default
title: "Stations"
permalink: /home/stations/
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
          zoom: 11,
          center: {lat: 51.047141444268, lng: 3.6557749635753}
        });

        setMarkers(map);
      }
      var parkeergarages = [
        ['S1 Station Evergem', 51.10717867966, 3.702198037946, 4],
        ['S2 Station Wondelgem', 51.002608763091, 3.7978791035356, 5],
        ['S3 Station Gent Dampoort', 50.996414044263,  3.649554715036, 3],
        ['S4 Station Gentbrugge', 51.06463049788, 3.5757253106664, 2],
        ['S5 Station Merelbeke', 51.089107501756, 3.7194657085605, 1],
        ['S6 Station Melle', 51.047141444268,  3.6557749635753, 1],
        ['S7 Station De Pinte', 51.019961209405,  3.7643164113837, 1],
        ['S8 Station Gent Sint Pieters', 51.038087620774,  3.7569866859764, 1],
        ['S9 Station Drongen', 51.036092064952,  3.710813047709, 1],
        ['S10 Station Landegem', 51.056226100879,  3.740276101992, 1]
      ];

      var labels = ['S1','S2','S3','S4','S5','S6','S7','S8','S9','S10'];


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