const slider = document.getElementById('rangeSlider');
const sliderOutput = document.getElementById('sliderOutput');
const pageViewOutput = document.getElementById('pageViewOutput');
const monthOrYear = document.getElementById('moyOutput');

monthOrYear.innerHTML = " year";
sliderOutput.innerHTML = (slider.value * 3) * 12;
pageViewOutput.innerHTML = slider.value * 25;

slider.oninput = function() {
  sliderOutput.innerHTML = (this.value * 3) * 12;
  pageViewOutput.innerHTML = this.value * 25;
}

function change() {
  var decider = document.getElementById('switch');
  if(decider.checked){
    monthOrYear.innerHTML = " year";
    sliderOutput.innerHTML = (slider.value * 3) * 12;
    pageViewOutput.innerHTML = slider.value * 25;
    
    slider.oninput = function() {
      sliderOutput.innerHTML = this.value * 3;
      pageViewOutput.innerHTML = this.value * 25;
    }
    
  } else {
    monthOrYear.innerHTML = " month";
    sliderOutput.innerHTML = slider.value * 4;
    pageViewOutput.innerHTML = slider.value * 25;
    
    slider.oninput = function() {
      sliderOutput.innerHTML = this.value * 4;
      pageViewOutput.innerHTML = this.value * 25;
    }
    
  }
}

slider.addEventListener("input", function(){
  var x = (slider.value * 20) - 20;
  var color = "linear-gradient(to right, rgb(121, 235, 222) " + x + "%, rgb(214,214,214) " + x + "%)";
  slider.style.background = color;
})