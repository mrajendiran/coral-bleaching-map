function updateMap(year) {
  d3.csv("data/bleaching_data" + year + ".csv", function(error, data) {
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
          borderWidth: 0.5,
          borderOpacity: 1,
          borderColor: '#FFFFFF',
          popupOnHover: true, // True to show the popup while hovering
          radius: 15,
          fillKey: 'bubblecolor',
          fillOpacity: 0.2,
          animate: true,
          highlightOnHover: true,
          exitDelay: 100,
          exitDelay: 100, // Milliseconds
        }
        bubble_array.push(bubble);
        return bubble;
      }

      data.forEach(function(d) {
        getBubble(d.YEAR, d.COUNTRY, d.CODE, d.LAT, d.LON, d.BLEACHING_SEVERITY, d.REMARKS)
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
