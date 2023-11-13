import d3 from "d3"

d3.select("#chart")
    .selectAll("circle")
    .data([100])
    .enter()
    .append("circle")
    .attr("r", 10)
    .attr("cy", 100)
    .attr("cx", d => d)