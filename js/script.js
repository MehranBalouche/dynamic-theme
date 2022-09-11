let $ = document;
function _log(value) {
  console.log(value);
}

function changeThem(event) {
  let selectedColor = event.target.dataset.color;
  document.documentElement.style.setProperty('--theme-color', selectedColor);
}

let btnColors = $.querySelectorAll('.btn');
btnColors.forEach(function (btncolor) {
  btncolor.addEventListener('click', changeThem);
});
