$(document).ready(function() {

  $("#getMessage").on("click", function() {

    $.getJSON('http://ipinfo.io', function(data) {
      $(".message").html(data.city)
      var city = data.city
      $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APIID=id=524901&APPID=3344ee87c2f2d8715db39fafdbac5339&units=imperial', function(json) {
        var yo = Math.round(json.main.temp);
        $(".message").html(json.name + "<br>" + Math.round(json.main.temp) + "&#8457;" + "<br>" + json.weather[0].main);

        var weather = json.weather[0].main;

        if (weather == "Rain") {
          $("body").css({"background-image": "url(http://wearechange.org/wp-content/uploads/2015/03/1_See_It.jpg)", "background-size": "cover"}); }

        if (weather == "Drizzle") {$("body").css({"background-image": "url(http://jexh1kujdl2rjoqlfrvego6i.wpengine.netdna-cdn.com/wp-content/uploads/2015/10/rain-e1443988875399.jpg)", "background-size": "cover"});}
        if (weather == "Thunderstorm") {$("body").css({"background-image": "url(https://i.ytimg.com/vi/d2AyfHmbSQE/maxresdefault.jpg)", "background-size": "cover"});}
        if (weather == "Snow") {$("body").css({"background-image": "url(https://static.pexels.com/photos/6672/snow-forest-trees-winter.jpeg)", "background-size": "cover"});}
        if (weather == "Atmosphere") {$("body").css({"background-image": "url(http://dreamatico.com/data_images/fog/fog-2.jpg)", "background-size": "cover"});}
        if (weather == "Clear") {
          $("body").css({"background-image": "url(http://img14.deviantart.net/701f/i/2009/150/8/0/clear_sky___stock_by_stonekeeper.jpg)", "background-size": "cover"});
        }
        if (weather == "Clouds") {$("body").css({"background-image": "url(http://img04.deviantart.net/0206/i/2011/134/d/a/cloudy_sky_by_thy_darkest_hour-d3gcxm0.jpg)", "background-size": "cover"});}
        if (weather == "Extreme") {$("body").css({"background-image": "url(https://www.collegemag.net/img/articles/innline/caution1.jpg)", "background-size": "cover"});}



      })
    })

  })

  $("#getMessage2").on("click", function() {
    $.getJSON('http://ipinfo.io', function(data) {
      $(".message").html(data.city)
      var city = data.city
      $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APIID=id=524901&APPID=3344ee87c2f2d8715db39fafdbac5339&units=metric', function(json) {
        var yo = Math.round(json.main.temp);
        $(".message").html(json.name + "<br>" + Math.round(json.main.temp) + "&#8451;" + "<br>" + json.weather[0].main);

        var weather = json.weather[0].main;

        if (weather == "Rain") {
          $("body").css({"background-image": "url(http://wearechange.org/wp-content/uploads/2015/03/1_See_It.jpg)", "background-size": "cover"}); }

        if (weather == "Drizzle") {$("body").css({"background-image": "url(http://jexh1kujdl2rjoqlfrvego6i.wpengine.netdna-cdn.com/wp-content/uploads/2015/10/rain-e1443988875399.jpg)", "background-size": "cover"});}
        if (weather == "Thunderstorm") {$("body").css({"background-image": "url(https://i.ytimg.com/vi/d2AyfHmbSQE/maxresdefault.jpg)", "background-size": "cover"});}
        if (weather == "Snow") {$("body").css({"background-image": "url(https://static.pexels.com/photos/6672/snow-forest-trees-winter.jpeg)", "background-size": "cover"});}
        if (weather == "Atmosphere") {$("body").css({"background-image": "url(http://dreamatico.com/data_images/fog/fog-2.jpg)", "background-size": "cover"});}
        if (weather == "Clear") {
          $("body").css({"background-image": "url(http://img14.deviantart.net/701f/i/2009/150/8/0/clear_sky___stock_by_stonekeeper.jpg)", "background-size": "cover"});
        }
        if (weather == "Clouds") {$("body").css({"background-image": "url(http://img04.deviantart.net/0206/i/2011/134/d/a/cloudy_sky_by_thy_darkest_hour-d3gcxm0.jpg)", "background-size": "cover"});}
        if (weather == "Extreme") {$("body").css({"background-image": "url(https://www.collegemag.net/img/articles/innline/caution1.jpg)", "background-size": "cover"});}


      })
    })

  });

});
