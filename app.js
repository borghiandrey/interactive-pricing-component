const slider = document.getElementById('rangeSlider');
const sliderOutput = document.getElementById('sliderOutput');
const pageViewOutput = document.getElementById('pageViewOutput');

sliderOutput.innerHTML = slider.value * 3;
pageViewOutput.innerHTML = slider.value * 25;

slider.oninput = function() {
  sliderOutput.innerHTML = this.value * 3;
  pageViewOutput.innerHTML = this.value * 25;
}

function change() {
  var decider = document.getElementById('switch');
  if(decider.checked){
    sliderOutput.innerHTML = slider.value * 3;
    pageViewOutput.innerHTML = slider.value * 25;
    
    slider.oninput = function() {
      sliderOutput.innerHTML = this.value * 3;
      pageViewOutput.innerHTML = this.value * 25;
    }
    
  } else {
    sliderOutput.innerHTML = slider.value * 4;
    pageViewOutput.innerHTML = slider.value * 25;
    
    slider.oninput = function() {
      sliderOutput.innerHTML = this.value * 4;
      pageViewOutput.innerHTML = this.value * 25;
    }
  }
}

slider.addEventListener("input", function(){
  var x = (slider.value * 25) - 25;
  var color = "linear-gradient(to right, rgb(121, 235, 222) " + x + "%, rgb(214,214,214) " + x + "%)";
  slider.style.background = color;
})