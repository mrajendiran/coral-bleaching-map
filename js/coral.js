function updateMap(year) {
  d3.csv("data/clean/bleaching_data" + year + ".csv", function(error, data) {
      data.forEach(function(d) {
        d.LAT  = +d.LAT;
        d.LON  = +d.LON;
        d.YEAR = +d.YEAR;
      });

      var bubble_array = [];

      function getBubble(year, country, code, lat, lon, severity, remarks){
        var bubble = {
          year: year,
          country: country,
          code: code,
          latitude: lat,
          longitude: lon,
          severity: severity,
          remarks: remarks,
          borderWidth: 0,
          borderOpacity: 1,
          borderColor: '#8f9393',
          popupOnHover: true, // True to show the popup while hovering
          radius: 7,
          fillKey: 'defaultFill',
          fillOpacity: 0.5,
          animate: true,
          highlightOnHover: true,
          exitDelay: 100,
          exitDelay: 100, // Milliseconds
        }
        if (bubble.severity == "HIGH"){
          bubble.fillKey = 'highseverity',
          bubble.fillOpacity = 0.3,
          bubble.radius = 15
        } else if (bubble.severity == "MEDIUM") {
          bubble.fillKey = 'medseverity',
          bubble.radius = 12
        } else if (bubble.severity == "LOW") {
          bubble.fillKey = 'lowseverity',
          bubble.radius = 10
        } else if (bubble.severity == "NONE") {
          bubble.fillKey = 'noseverity'
        } else {
          bubble.fillKey = 'unknown',
          bubble.fillOpacity = 0.5
        }
        bubble_array.push(bubble);
        return bubble;
      }

      data.forEach(function(d) {
        getBubble(d.YEAR, d.COUNTRY, d.CODE, d.LAT, d.LON, d.SEVERITY, d.REMARKS)
      });

      map.bubbles(bubble_array, {
        popupTemplate: function (geo, data) {
            return ['<div class="hoverinfo">' +
            '<b>Year:</b> ' + data.year,
            '<br/><b>Country:</b> ' +  data.country,
            '<br/><b>SEVERITY:</b> ' +  data.severity,
            '<br/><b>REMARKS:</b> ' + data.remarks + '',
            '</div>'].join('');
        }
      });
    });
}
