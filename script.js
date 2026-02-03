// 1) List your images here
var images = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg",
  "images/photo6.jpg",
  "images/photo7.jpg",
  "images/photo8.jpg",
  "images/photo9.jpg",
  "images/photo10.jpg",
  "images/photo11.jpg",
  "images/photo12.jpg"
];

// 2) Pick 9 random images each load
function getRandomImages(count) {
  var shuffled = images.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// 3) Render grid on page load
function renderGrid() {
  var grid = document.getElementById("imageGrid");
  var selected = getRandomImages(9);
  grid.innerHTML = "";
  selected.forEach(function(src) {
    var img = document.createElement("img");
    img.src = src;
    grid.appendChild(img);
  });
}

// 4) Moving "No" button
function moveNo() {
  var btn = document.getElementById("noBtn");
  var offsetX = Math.random() * 200 - 100;
  var offsetY = Math.random() * 80 - 40;
  btn.style.transform = "translate(" + offsetX + "px," + offsetY + "px)";
}

// 5) Yes button click
document.addEventListener("DOMContentLoaded", function() {
  renderGrid();
  var yesBtn = document.getElementById("yesBtn");
  var result = document.getElementById("result");
  yesBtn.addEventListener("click", function() {
    result.textContent = "I knew you’d say yes ❤️";
  });
});
