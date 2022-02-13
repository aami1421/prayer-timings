

$.ajax({
  url: "https://geolocation-db.com/jsonp",
  jsonpCallback: "callback",
  dataType: "jsonp",
  success: function(location) {
    console.log(location);
    $("#city").html(location.city);
    var city= location.city;
    var country= location.country_name;

    $.getJSON(
      "https://api.aladhan.com/v1/timingsByCity?city="+city+"&country="+country+"&method=8",
     // "http://api.aladhan.com/v1/timingsByCity?"+city+"=Dhahran&"+country+"=saudi%20arabia&method=8",
       function (data) {
         console.log(data);
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
