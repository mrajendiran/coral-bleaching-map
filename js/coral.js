function bleachMap(year) {
  d3.csv("data/clean/bleach/bleaching_data" + year + ".csv", function(error, data) {
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
          borderColor: '#353738',
          popupOnHover: true, // True to show the popup while hovering
          radius: 15,
          fillKey: 'defaultFill',
          fillOpacity: 0.3,
          animate: true,
          highlightOnHover: true,
          exitDelay: 100,
          exitDelay: 100, // Milliseconds
        }
        if (bubble.severity == "HIGH"){
          bubble.fillKey = 'highseverity'
        } else if (bubble.severity == "MEDIUM") {
          bubble.fillKey = 'medseverity'
        } else if (bubble.severity == "LOW") {
          bubble.fillKey = 'lowseverity'
        } else if (bubble.severity == "Algae Disease") {
          bubble.fillKey = 'algae',
          bubble.radius = 30,
          bubble.fillOpacity = 0.3,
          bubble.borderWidth = 1
        } else if (bubble.severity == "Band Disease") {
          bubble.fillKey = 'band',
          bubble.radius = 30,
          bubble.fillOpacity = 0.1,
          bubble.borderWidth = 1
        }else if (bubble.severity == "Coral Tumors") {
          bubble.fillKey = 'tumor',
          bubble.radius = 30,
          bubble.fillOpacity = 0.3,
          bubble.borderWidth = 1
        }else if (bubble.severity == "Fungal/Bacterial Disease") {
          bubble.fillKey = 'fungal',
          bubble.radius = 30,
          bubble.fillOpacity = 0.1,
          bubble.borderWidth = 1
        }else if (bubble.severity == "Plague Disease") {
          bubble.fillKey = 'plague',
          bubble.radius = 30,
          bubble.fillOpacity = 0.1,
          bubble.borderWidth = 1
        }else if (bubble.severity == "Spot Disease") {
          bubble.fillKey = 'spot',
          bubble.radius = 30,
          bubble.fillOpacity = 0.1,
          bubble.borderWidth = 1
        }else if (bubble.severity == "Stress/Predation") {
          bubble.fillKey = 'stress',
          bubble.radius = 30,
          bubble.fillOpacity = 0.5,
          bubble.borderWidth = 1
        } else {
          bubble.fillKey = 'unknown'
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

function diseaseMap(year) {
  d3.csv("data/clean/diseases_data" + year + ".csv", function(error, data) {
      data.forEach(function(d) {
        d.LAT  = +d.LAT;
        d.LON  = +d.LON;
        d.YEAR = +d.YEAR;
      });

      var bubble_array = [];

      function getBubble(year, lat, lon, country, remarks, code, disease){
        var bubble = {
          year: year,
          country: country,
          code: code,
          latitude: lat,
          longitude: lon,
          disease: disease,
          remarks: remarks,
          borderWidth: 0,
          borderOpacity: 1,
          borderColor: '#8f9393',
          popupOnHover: true, // True to show the popup while hovering
          radius: 20,
          fillKey: 'disease',
          fillOpacity: 0.3,
          animate: true,
          highlightOnHover: true,
          exitDelay: 100,
          exitDelay: 100, // Milliseconds
        }
        if (bubble.disease == "Algae Disease"){
          bubble.fillKey = 'algae'
        } else if (bubble.disease == "Band Disease") {
          bubble.fillKey = 'band'
        } else if (bubble.disease == "Coral Tumors") {
          bubble.fillKey = 'tumor'
        } else if (bubble.disease == "Fungal/Bacterial Disease") {
          bubble.fillKey = 'fungal'
        } else if (bubble.disease == "Plague Disease") {
          bubble.fillKey = 'plague'
        } else if (bubble.disease == "Stress/Predation") {
          bubble.fillKey = 'stress'
        } else {
          bubble.fillKey = 'unknowndisease'
        }
        bubble_array.push(bubble);
        return bubble;
      }

      data.forEach(function(d) {
        getBubble(d.YEAR, d.LAT, d.LON, d.COUNTRY, d.REMARKS, d.CODE, d.DISEASE)
      });

      map.bubbles(bubble_array, {
        popupTemplate: function (geo, data) {
            return ['<div class="hoverinfo">' +
            '<b>Year:</b> ' + data.year,
            '<br/><b>Country:</b> ' +  data.country,
            '<br/><b>DISEASE:</b> ' +  data.disease,
            '<br/><b>REMARKS:</b> ' + data.remarks + '',
            '</div>'].join('');
        }
      });
    });
}
