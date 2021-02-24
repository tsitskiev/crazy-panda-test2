const arrOfColorObjs = [
  { red: 0, green: 0, blue: 0 }, // black
  { red: 255, green: 0, blue: 0 }, // red
  { red: 255, green: 255, blue: 0 }, // yellow
  { red: 0, green: 255, blue: 0 }, // lime
  { red: 0, green: 255, blue: 255 }, // cyan
  { red: 0, green: 0, blue: 255 }, // blue
  { red: 255, green: 0, blue: 255 }, // magenta
  { red: 255, green: 255, blue: 255 }, // white
];

let sliderColor = '#777';
let backOrColor = '';

$(function () {
  $('#slider').slider({
    min: 0,
    max: 1785, // We have 7 rgb index points, so max value is 255 * 7
    value: 892,
    slide: getNewColor,
  });
});

function getNewColor(event, ui) {
  const sliderValue = ui.value;
  const index = Math.floor(sliderValue / 255); // index of current color object
  let red = arrOfColorObjs[index].red;
  let green = arrOfColorObjs[index].green;
  let blue = arrOfColorObjs[index].blue;
  switch (index) {
    case 0: {
      red = sliderValue;
      break;
    }
    case 1: {
      green = sliderValue - 255;
      break;
    }
    case 2: {
      red = red - sliderValue + 255 * 2;
      break;
    }
    case 3: {
      blue = blue + sliderValue - 255 * 3;
      break;
    }
    case 4: {
      green = green - sliderValue + 255 * 4;
      break;
    }
    case 5: {
      red = red + sliderValue - 255 * 5;
      break;
    }
    case 6: {
      green = green + sliderValue - 255 * 6;
      break;
    }
  }
  sliderColor = `rgb(${red}, ${green}, ${blue})`;
  $('.input-text').css(backOrColor, sliderColor);
  $('.ui-slider-handle').css('background-color', sliderColor);
}

function textColorClick() {
  $('#background-color').removeClass('ui-state-active');
  $('#text-color').addClass('ui-state-active');
  backOrColor = 'color';
}
function backColorClick() {
  $('#text-color').removeClass('ui-state-active');
  $('#background-color').addClass('ui-state-active');
  backOrColor = 'background-color';
}

function reset() {
  backOrColor = '';
  sliderColor = '#777';
  $('#slider').slider({ value: 892 });
  $('.ui-slider-handle').css('background-color', sliderColor);
  $('#text-color').removeClass('ui-state-active');
  $('#background-color').removeClass('ui-state-active');
  $('.input-text').css({ backgroundColor: '#fff', color: '#000' });
}

$('#reset').css('float', 'right').click(reset);
$('#text-color').click(textColorClick);
$('#background-color').click(backColorClick);
