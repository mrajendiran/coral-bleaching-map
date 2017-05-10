
// YEAR BUTTONS
var svgContainer = d3.select("body").append("svg")
  .attr ("class", "svgContainer")
  .attr("width", "100%")
  .attr("height", "40%");

//All button
var buttonall = svgContainer.append("circle")
  .attr ("class", "buttonall")
  .attr("cx", "8%")
  .attr("cy", "52%")
  .attr("r", "3%")
  .attr("fill", "#BED7E1")
  .attr("stroke", "#8f9393")
  .attr("stroke-width", 5);
  svgContainer.append("text")
    .attr ("class", "textall")
    .style("font-size", "30px")
    .style("fill", "#000")
    .style("font-family", "Wingdings3")
    .style("font-weight", 900)
    .attr("x", "7.5%")
    .attr("y", "54.5%")
    .text("u");
d3.selectAll(".buttonall")
.on("click", function(){
  d3.select(".textall").style("font-family", "Webdings").style("font-size", "35px").attr("x", "9.1%").attr("y", "54.5%").text(";");
})
.on("mouseover", function(d) {d3.select(this).style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(this).style("fill", "#BED7E1");});
d3.selectAll(".textall")
.on("click", function(){updateMap(2010);})
.on("mouseover", function(d) {d3.select(".buttonall").style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(".buttonall").style("fill", "#BED7E1");});

//1960 button
var buttonsixty = svgContainer.append("circle")
  .attr ("class", "buttonsixty")
  .attr("cx", "13%")
  .attr("cy", "52%")
  .attr("r", "3%")
  .attr("fill", "#BED7E1")
  .attr("stroke", "#8f9393")
  .attr("stroke-width", 5);
  svgContainer.append("text")
    .attr("class", "textsixty")
    .style("font-size", "25px")
    .style("fill", "#000")
    .style("font-family", "Open Sans")
    .style("font-weight", 900)
    .attr("x", "11.7%")
    .attr("y", "54.2%")
    .text("1960s");
d3.selectAll(".buttonsixty")
.on("click", function(){updateMap(1960);})
.on("mouseover", function(d) {d3.select(this).style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(this).style("fill", "#BED7E1");});
d3.selectAll(".textsixty")
.on("click", function(){updateMap(1960);})
.on("mouseover", function(d) {d3.select(".buttonsixty").style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(".buttonsixty").style("fill", "#BED7E1");});

//1970 button
var buttonseventy = svgContainer.append("circle")
  .attr ("class", "buttonseventy")
  .attr("cx", "18%")
  .attr("cy", "52%")
  .attr("r", "3%")
  .attr("fill", "#BED7E1")
  .attr("stroke", "#8f9393")
  .attr("stroke-width", 5);
  svgContainer.append("text")
    .attr ("class", "textseventy")
    .style("font-size", "25px")
    .style("fill", "#000")
    .style("font-family", "Open Sans")
    .style("font-weight", 900)
    .attr("x", "16.7%")
    .attr("y", "54.2%")
    .text("1970s");
d3.selectAll(".buttonseventy")
.on("click", function(){updateMap(1970);})
.on("mouseover", function(d) {d3.select(this).style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(this).style("fill", "#BED7E1");});
d3.selectAll(".textseventy")
.on("click", function(){updateMap(1970);})
.on("mouseover", function(d) {d3.select(".buttonseventy").style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(".buttonseventy").style("fill", "#BED7E1");});

//1980 button
var buttoneighty = svgContainer.append("circle")
  .attr ("class", "buttoneighty")
  .attr("cx", "23%")
  .attr("cy", "52%")
  .attr("r", "3%")
  .attr("fill", "#BED7E1")
  .attr("stroke", "#8f9393")
  .attr("stroke-width", 5);
  svgContainer.append("text")
    .attr ("class", "texteighty")
    .style("font-size", "25px")
    .style("fill", "#000")
    .style("font-family", "Open Sans")
    .style("font-weight", 900)
    .attr("x", "21.7%")
    .attr("y", "54.2%")
    .text("1980s");
d3.selectAll(".buttoneighty")
.on("click", function(){updateMap(1980);})
.on("mouseover", function(d) {d3.select(this).style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(this).style("fill", "#BED7E1");});
d3.selectAll(".texteighty")
.on("click", function(){updateMap(1980);})
.on("mouseover", function(d) {d3.select(".buttoneighty").style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(".buttoneighty").style("fill", "#BED7E1");});

//1990 button
var buttonninety = svgContainer.append("circle")
  .attr ("class", "buttonninety")
  .attr("cx", "28%")
  .attr("cy", "52%")
  .attr("r", "3%")
  .attr("fill", "#BED7E1")
  .attr("stroke", "#8f9393")
  .attr("stroke-width", 5);
  svgContainer.append("text")
    .attr ("class", "textninety")
    .style("font-size", "25px")
    .style("fill", "#000")
    .style("font-family", "Open Sans")
    .style("font-weight", 900)
    .attr("x", "26.7%")
    .attr("y", "54.2%")
    .text("1990s");
d3.selectAll(".buttonninety")
.on("click", function(){updateMap(1990);})
.on("mouseover", function(d) {d3.select(this).style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(this).style("fill", "#BED7E1");});
d3.selectAll(".textninety")
.on("click", function(){updateMap(1990);})
.on("mouseover", function(d) {d3.select(".buttonninety").style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(".buttonninety").style("fill", "#BED7E1");});

//2000s button
var buttonzeros = svgContainer.append("circle")
  .attr ("class", "buttonzeros")
  .attr("cx", "33%")
  .attr("cy", "52%")
  .attr("r", "3%")
  .attr("fill", "#BED7E1")
  .attr("stroke", "#8f9393")
  .attr("stroke-width", 5);
  svgContainer.append("text")
    .attr ("class", "textzero")
    .style("font-size", "25px")
    .style("fill", "#000")
    .style("font-family", "Open Sans")
    .style("font-weight", 900)
    .attr("x", "31.7%")
    .attr("y", "54.2%")
    .text("2000s");
d3.selectAll(".buttonzeros")
.on("click", function(){updateMap(2000);})
.on("mouseover", function(d) {d3.select(this).style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(this).style("fill", "#BED7E1");});
d3.selectAll(".textzero")
.on("click", function(){updateMap(2000);})
.on("mouseover", function(d) {d3.select(".buttonzeros").style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(".buttonzeros").style("fill", "#BED7E1");});

//2010s button
var buttonten = svgContainer.append("circle")
  .attr ("class", "buttonten")
  .attr("cx", "38%")
  .attr("cy", "52%")
  .attr("r", "3%")
  .attr("fill", "#BED7E1")
  .attr("stroke", "#8f9393")
  .attr("stroke-width", 5);
  svgContainer.append("text")
    .attr ("class", "textten")
    .style("font-size", "25px")
    .style("fill", "#000")
    .style("font-family", "Open Sans")
    .style("font-weight", 900)
    .attr("x", "36.7%")
    .attr("y", "54.2%")
    .text("2010s");
d3.selectAll(".buttonten")
.on("click", function(){updateMap(2010);})
.on("mouseover", function(d) {d3.select(this).style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(this).style("fill", "#BED7E1");});
d3.selectAll(".textten")
.on("click", function(){updateMap(2010);})
.on("mouseover", function(d) {d3.select(".buttonten").style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(".buttonten").style("fill", "#BED7E1");});

// SEVERITY BUTTONS
// HIGH button
var highbutton = svgContainer.append("circle")
  .attr ("class", "highbutton")
  .attr("cx", "18%")
  .attr("cy", "78%")
  .attr("r", "3%")
  .attr("fill", "#e1bebe")
  .attr("stroke", "#8f9393")
  .attr("stroke-width", 5);
  svgContainer.append("text")
    .attr ("class", "hightext")
    .style("font-size", "25px")
    .style("fill", "#000")
    .style("font-family", "Open Sans")
    .style("font-weight", 900)
    .attr("x", "17%")
    .attr("y", "80%")
    .text("High");
    d3.selectAll(".highbutton")
    .on("click", function(){updateMap(1);})
    .on("mouseover", function(d) {d3.select(".highbutton").style("fill", "#8DA0A8");})
    .on("mouseout", function(d) {d3.select(".highbutton").style("fill", "#e1bebe");});
    d3.selectAll(".hightext")
    .on("click", function(){updateMap(1);})
    .on("mouseover", function(d) {d3.select(".highbutton").style("fill", "#8DA0A8");})
    .on("mouseout", function(d) {d3.select(".highbutton").style("fill", "#e1bebe");});


// MEDIUM button
var medbutton = svgContainer.append("circle")
  .attr ("class", "medbutton")
  .attr("cx", "23%")
  .attr("cy", "78%")
  .attr("r", "3%")
  .attr("fill", "#e1cebe")
  .attr("stroke", "#8f9393")
  .attr("stroke-width", 5);
  svgContainer.append("text")
    .attr ("class", "medtext")
    .style("font-size", "25px")
    .style("fill", "#000")
    .style("font-family", "Open Sans")
    .style("font-weight", 900)
    .attr("x", "21.9%")
    .attr("y", "80%")
    .text("Med");
    d3.selectAll(".medbutton")
    .on("click", function(){updateMap(2);})
    .on("mouseover", function(d) {d3.select(".medbutton").style("fill", "#8DA0A8");})
    .on("mouseout", function(d) {d3.select(".medbutton").style("fill", "#e1cebe");});
    d3.selectAll(".medtext")
    .on("click", function(){updateMap(2);})
    .on("mouseover", function(d) {d3.select(".medbutton").style("fill", "#8DA0A8");})
    .on("mouseout", function(d) {d3.select(".medbutton").style("fill", "#e1cebe");});


// LOW button
var lowbutton = svgContainer.append("circle")
  .attr ("class", "lowbutton")
  .attr("cx", "28%")
  .attr("cy", "78%")
  .attr("r", "3%")
  .attr("fill", "#e1debe")
  .attr("stroke", "#8f9393")
  .attr("stroke-width", 5);
  svgContainer.append("text")
    .attr ("class", "lowtext")
    .style("font-size", "25px")
    .style("fill", "#000")
    .style("font-family", "Open Sans")
    .style("font-weight", 900)
    .attr("x", "27.2%")
    .attr("y", "80%")
    .text("Low");
    d3.selectAll(".lowbutton")
    .on("click", function(){updateMap(3);})
    .on("mouseover", function(d) {d3.select(".lowbutton").style("fill", "#8DA0A8");})
    .on("mouseout", function(d) {d3.select(".lowbutton").style("fill", "#e1debe");});
    d3.selectAll(".lowtext")
    .on("click", function(){updateMap(3);})
    .on("mouseover", function(d) {d3.select(".lowbutton").style("fill", "#8DA0A8");})
    .on("mouseout", function(d) {d3.select(".lowbutton").style("fill", "#e1debe");});

    // WEBSITE DESCRIPTION
svgContainer.append("text")
  .style("font-size", "40px")
  .style("fill", "#BED7E1")
  .style("font-family", "Open Sans")
  .style("font-weight", 900)
  .attr("x", "48%")
  .attr("y", "52%")
  .text("Worldwide Coral Bleaching Sites");
svgContainer.append("text")
  .style("font-size", "30px")
  .style("fill", "#BED7E1")
  .style("font-family", "Open Sans")
  .style("font-weight", 900)
  .attr("x", "48%")
  .attr("y", "65%")
  .text("Coral reefs are diverse ocean ecosystems home to one-third of all marine fish species.");
svgContainer.append("text")
  .style("font-size", "30px")
  .style("fill", "#BED7E1")
  .style("font-family", "Open Sans")
  .style("font-weight", 900)
  .attr("x", "48%")
  .attr("y", "74%")
  .text("Rising ocean temperatures cause these sensitive reef systems to bleach and die off.")
svgContainer.append("text")
  .style("font-size", "30px")
  .style("fill", "#BED7E1")
  .style("font-family", "Open Sans")
  .style("font-weight", 900)
  .attr("x", "48%")
  .attr("y", "83%")
  .text("This visual depicts the coral bleaching epidemic across decades and severity levels.");
