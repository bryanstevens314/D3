function start (){
    d3.selectAll("p").style("background-color", function() {
        return "hsl(" + Math.random() * 360 + ",100%,50%)";
      }).style("height", function() {
        const num = Math.random() * 360;
        return num + 'px';
      }).style("width", function() {
        const num = Math.random() * 360;
        return num + 'px';
      });
}
let interval = setInterval(start,'500');

