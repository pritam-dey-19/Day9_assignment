function changeColor() {
    var dropdown = document.getElementById("colorDropdown");
    var body = document.getElementById("body");

    var selectedColor = dropdown.value;
    body.style.backgroundColor = selectedColor;
  }