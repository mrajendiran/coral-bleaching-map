  d3.csv("data/bleach_data.csv", function(error, data) {
    data.forEach(function(d) {
      d.LAT  = +d.LAT;
      d.LON  = +d.LON;
      d.YEAR = + d.YEAR;
    });
     //basic map config with custom fills, mercator projection
    var map = new Datamap({
      scope: 'world',
      element: document.getElementById('mapbody'),
      projection: 'mercator',
      fills: {
        defaultFill: '#004F57',
        bubblecolor: 'rgba(224,0,0,0.9)'
      },
      geographyConfig: {
        highlightFillColor: '#243840',
        hideAntarctica: true
      },
      data: {
        }

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
       radius: 7,
       fillKey: 'bubblecolor',
       fillOpacity: 0.2,
       animate: true,
       highlightOnHover: true,
       highlightFillColor: '#FC8D59',
       highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
       highlightBorderWidth: 2,
       highlightBorderOpacity: 1,
       highlightFillOpacity: 0.85,
       exitDelay: 100, // Milliseconds
   }
   bubble_array.push(bubble);
   return bubble;
  }

  data.forEach(function(d) {
    getBubble(d.YEAR, d.COUNTRY, d.CODE, d.LAT, d.LON, d.BLEACHING_SEVERITY, d.REMARKS)
  });

  console.log(bubble_array[1]);

     //bubbles, custom popup on hover template
   map.bubbles(bubble_array, {
     popupTemplate: function (geo, data) {
          return ['<div class="hoverinfo">' +
          '<b>Year:</b> ' + data.year,
          '<br/><b>Country:</b> ' +  data.country,
          '<br/><b>SEVERITY:</b> ' +  data.severity,
          '<br/><b>REMARKS:</b> ' + data.remarks + '',
          '</div>'].join('');
          console.log(data);
     }
   });

 });
