const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(recursive = async () => {
  d3.selectAll("p")
    .style("background-color", () => `hsl(${Math.random() * 360},100%,50%)`)
    .style("height", () => `${Math.random() * 360}px`)
    .style("width", () => `${Math.random() * 360}px`);

  await sleep(500);
  recursive();
})(); // IIFE - Immediately Invoked Function Expression