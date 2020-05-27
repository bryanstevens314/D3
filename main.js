const interval = setInterval(() =>
  d3.selectAll("p")
    .style("background-color", () => `hsl(${Math.random() * 360},100%,50%)`)
    .style("height", () => `${Math.random() * 360}px`)
    .style("width", () => `${Math.random() * 360}px`)
  , '350');

