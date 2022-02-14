
function getCity(){}
$.ajax({
  url: "https://geolocation-db.com/jsonp",
  jsonpCallback: "callback",
  dataType: "jsonp",
  success: function(location) {
    console.log(location);
    var city= location.city;
    var country= location.country_name;
    var latitude = location.latitude;
    var longitude = location.longitude;
    var IPv4 = location.IPv4;
    let Url;
    if(city === null){
      Url="http://api.aladhan.com/v1/timingsByAddress?address="+latitude+","+longitude
      $.ajax({
        url: "https://geolocation-db.com/jsonp/"+IPv4,
        jsonpCallback: "callback",
        dataType: "jsonp",
        success: function(info) {
          city= info.city;
          $("#city").html(info.city);

            }
          });
    }else{
      $("#city").html(location.city);
      Url="https://api.aladhan.com/v1/timingsByCity?city="+city+"&country="+country+"&method=8"
      }
    $.getJSON(
      Url,

       function (data) {
         console.log(data);
        // data.data.meta.latitude = latitude;
        // data.data.meta.longitude= longitude;
         let date= data.data.date.hijri.date;
         let fajr= data.data.timings.Fajr;
         let sunrise= data.data.timings.Sunrise;
         let dhuhr= data.data.timings.Dhuhr;
         let asr= data.data.timings.Asr;
         let maghrib= data.data.timings.Maghrib;
         let isha= data.data.timings.Isha;
         let midnight= data.data.timings.Midnight;

         $(".date").append(date)
        $(".fajr").append(fajr);
        $(".sunrise").append(sunrise);
        $(".dhuhr").append(dhuhr);
        $(".asr").append(asr);
        $(".maghrib").append(maghrib);
        $(".isha").append(isha);
        $(".midnight").append(midnight);

      }
    );
  }

});
