const slider = document.getElementById('rangeSlider');
const sliderOutput = document.getElementById('sliderOutput');
const pageViewOutput = document.getElementById('pageViewOutput');

sliderOutput.innerHTML = 8 * 0.75;
pageViewOutput.innerHTML = 10 + "K";

slider.oninput = function() {
  if(slider.value == 1) {
    sliderOutput.innerHTML = 8 * 0.75;
    pageViewOutput.innerHTML = 10 + "K";
  }
  if(slider.value == 2) {
    sliderOutput.innerHTML = 12 * 0.75;
    pageViewOutput.innerHTML = 50 + "K";
  }
  if(slider.value == 3) {
    sliderOutput.innerHTML = 16 * 0.75;
    pageViewOutput.innerHTML = 100 + "K";
  }
  if(slider.value == 4) {
    sliderOutput.innerHTML = 24 * 0.75;
    pageViewOutput.innerHTML = 500 + "K";
  }
  if(slider.value == 5) {
    sliderOutput.innerHTML = 36 * 0.75;
    pageViewOutput.innerHTML = 1 + "M";
  }
}

function change() {
  var decider = document.getElementById('switch');
  if(decider.checked){
    if(slider.value == 1) {
      sliderOutput.innerHTML = 8 * 0.75;
      pageViewOutput.innerHTML = 10 + "K";
    }
    if(slider.value == 2) {
      sliderOutput.innerHTML = 12 * 0.75;
      pageViewOutput.innerHTML = 50 + "K";
    }
    if(slider.value == 3) {
      sliderOutput.innerHTML = 16 * 0.75;
      pageViewOutput.innerHTML = 100 + "K";
    }
    if(slider.value == 4) {
      sliderOutput.innerHTML = 24 * 0.75;
      pageViewOutput.innerHTML = 500 + "K";
    }
    if(slider.value == 5) {
      sliderOutput.innerHTML = 36 * 0.75;
      pageViewOutput.innerHTML = 1 + "M";
    }
    
    slider.oninput = function() {
      if(slider.value == 1) {
        sliderOutput.innerHTML = 8 * 0.75;
        pageViewOutput.innerHTML = 10 + "K";
      }
      if(slider.value == 2) {
        sliderOutput.innerHTML = 12 * 0.75;
        pageViewOutput.innerHTML = 50 + "K";
      }
      if(slider.value == 3) {
        sliderOutput.innerHTML = 16 * 0.75;
        pageViewOutput.innerHTML = 100 + "K";
      }
      if(slider.value == 4) {
        sliderOutput.innerHTML = 24 * 0.75;
        pageViewOutput.innerHTML = 500 + "K";
      }
      if(slider.value == 5) {
        sliderOutput.innerHTML = 36 * 0.75;
        pageViewOutput.innerHTML = 1 + "M";
      }
    }
    
  } else {
    if(slider.value == 1) {
      sliderOutput.innerHTML = 8;
      pageViewOutput.innerHTML = 10 + "K";
    }
    if(slider.value == 2) {
      sliderOutput.innerHTML = 12;
      pageViewOutput.innerHTML = 50 + "K";
    }
    if(slider.value == 3) {
      sliderOutput.innerHTML = 16;
      pageViewOutput.innerHTML = 100 + "K";
    }
    if(slider.value == 4) {
      sliderOutput.innerHTML = 24;
      pageViewOutput.innerHTML = 500 + "K";
    }
    if(slider.value == 5) {
      sliderOutput.innerHTML = 36;
      pageViewOutput.innerHTML = 1 + "M";
    }
    
    slider.oninput = function() {
      if(slider.value == 1) {
        sliderOutput.innerHTML = 8;
        pageViewOutput.innerHTML = 10 + "K";
      }
      if(slider.value == 2) {
        sliderOutput.innerHTML = 12;
        pageViewOutput.innerHTML = 50 + "K";
      }
      if(slider.value == 3) {
        sliderOutput.innerHTML = 16;
        pageViewOutput.innerHTML = 100 + "K";
      }
      if(slider.value == 4) {
        sliderOutput.innerHTML = 24;
        pageViewOutput.innerHTML = 500 + "K";
      }
      if(slider.value == 5) {
        sliderOutput.innerHTML = 36;
        pageViewOutput.innerHTML = 1 + "M";
      }
    }
  }
}

slider.addEventListener("input", function(){
  var x = (slider.value * 25) - 25;
  var color = "linear-gradient(to right, rgb(121, 235, 222) " + x + "%, rgb(214,214,214) " + x + "%)";
  slider.style.background = color;
})

document.onkeyup = function(e) {
  if(e.code === "Space") {
    try {
      document.activeElement.click();
    } catch (e) {
      console.log(event);
    }
  }
}