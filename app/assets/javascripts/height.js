const particles = document.getElementById("particles-js");

(function(){
  let columnsH = document.getElementById("columns-height").offsetHeight;
  let headH = document.getElementById('header').offsetHeight;
  let totalH = columnsH + headH + "px";
  let particles = document.getElementById("particles-js");
  particles.style.height = totalH;
}())

const particlesH = particles.offsetHeight;

function delayGet(openNumber){
  setTimeout(function(){
    let timelineH = document.getElementById("content-height-" + openNumber).offsetHeight;
    let totalH = timelineH + particlesH + "px";
    particles.style.height = totalH;
  }, 100)
}