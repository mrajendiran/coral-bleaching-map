
// YEAR BUTTONS
var svgContainer = d3.select("body").append("svg")
  .attr ("class", "svgContainer")
  .attr("width", "100%")
  .attr("height", "40%");

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
.on("click", function(){bleachMap(1970);})
.on("mouseover", function(d) {d3.select(this).style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(this).style("fill", "#BED7E1");});
d3.selectAll(".textseventy")
.on("click", function(){bleachMap(1970);})
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
.on("click", function(){bleachMap(1980);})
.on("mouseover", function(d) {d3.select(this).style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(this).style("fill", "#BED7E1");});
d3.selectAll(".texteighty")
.on("click", function(){bleachMap(1980);})
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
.on("click", function(){bleachMap(1990);})
.on("mouseover", function(d) {d3.select(this).style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(this).style("fill", "#BED7E1");});
d3.selectAll(".textninety")
.on("click", function(){bleachMap(1990);})
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
.on("click", function(){bleachMap(2000);})
.on("mouseover", function(d) {d3.select(this).style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(this).style("fill", "#BED7E1");});
d3.selectAll(".textzero")
.on("click", function(){bleachMap(2000);})
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
.on("click", function(){bleachMap(2010);})
.on("mouseover", function(d) {d3.select(this).style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(this).style("fill", "#BED7E1");});
d3.selectAll(".textten")
.on("click", function(){bleachMap(2010);})
.on("mouseover", function(d) {d3.select(".buttonten").style("fill", "#8DA0A8");})
.on("mouseout", function(d) {d3.select(".buttonten").style("fill", "#BED7E1");});
