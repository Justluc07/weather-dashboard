var lat=0;
var lon=0;

//date//
$("#currentDay").text(moment().format("L"));

function currentTime (){
  var hour = moment().hour();
} 
//savebtn//
$("#saveBtn").on("click", function() {
  var searchcity = $("#search-value").val()
  $("#search-value").val("")
  getweather(searchcity)
});




    // This is our API key
    var APIKey = "5a140a94a1fe95881d7ebcea090b0f80";
function getweather(searchcity){
    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?"+searchcity+"&appid="+APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);

        
        // Convert the temp to fahrenheit
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        // add temp content to html
        $(".temp").text("Temperature (K) " + response.main.temp);
        $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
lat=response.coord.lat
lon=response.coord.lon
        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + tempF);
      });
//uv call//
      $.ajax({
        url: "https://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+"&appid="+APIKey,
        method:"GET"
      })
      .then(function(response) {
        console.log(response)
      })
      fiveDay(searchcity)
    }
     function fiveDay(searchcity){
      $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchcity + "&appid="+APIKey,
        method: "GET"
      })
      .then(function(response){
        console.log(response)
      })
     }
    getweather()
    fiveDay()


