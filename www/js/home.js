;(function() {

  function WeatherWidget(id, parentContainer) {
    this.API_URL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D12591774%20AND%20u%3D%22c%22&format=json&diagnostics=true&callback=';
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
          var query = data.query;
          var results = query.results;
          var channel = results.channel;
          var units = channel.units;
          var temperature = units.temperature;
          var item = channel.item;
          var conditionNow = item.condition;
          var forecast = item.forecast;
          //console.log(forecast);
          var tempStr = '<div class="weather_app">';
          tempStr += '<h1 class="text-center">' + conditionNow.temp + '°' + units.temperature + '</h1>';
          tempStr += '<h4 class="text-center">' + conditionNow.text + '</h4>';
          tempStr += '</div>';
          tempStr += '</div>';//end weather_condition
          
          tempStr += '<div class="weather_forecast white ">'
          for (i=0; i < 1; i++){
          tempStr += '<div class="weather_forecast_text font"><h5 class="text-center">' + forecast[i].high + "°" + units.temperature +  "&nbsp" + "/" +  "&nbsp" + forecast[i].low + "°" + units.temperature +  '</h5></div>';
          tempStr += '</div>'
          
          }
          that.parentContainer.innerHTML = tempStr;
        } else {
          console.log('ERROR');
        }
      }
      xhr.onerror = function() {
        console.log('ERROR');
      }
      xhr.send();
    };

    this.updateUI = function() {

    };

    this.toString = function() {
      return `Weather widget with id: ${this.id}`;
    };

  };

  var ww1 = new WeatherWidget(1, document.querySelector('.page'));
  ww1.loadData();
  console.log(ww1.toString());

})();
