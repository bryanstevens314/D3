
function start (){
    d3.selectAll("p").style("background-color", function() {
        return "hsl(" + Math.random() * 360 + ",100%,50%)";
      }).style("height", function() {
        let num = Math.random() * 360;
        console.log(num + 'px');
        return num + 'px';
      }).style("width", function() {
        let num = Math.random() * 360;
        console.log(num + 'px');
        return num + 'px';
      });
}

let interval = setInterval(start,'500');

