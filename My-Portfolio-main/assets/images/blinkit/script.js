const toggleButton = document.getElementById('toggleButton');
const colorChangeArea = document.getElementById('colorChangeArea');

toggleButton.addEventListener('change', function() {
  if (this.checked) {
    colorChangeArea.style.backgroundColor = 'lightgreen';
  } else {
    colorChangeArea.style.backgroundColor = 'transparent';
  }
});