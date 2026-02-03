// 1) List your images here
var images = [
  "https://placehold.co/300x300/ffb6c1/333?text=Photo+1",
  "https://placehold.co/300x300/ffc0cb/333?text=Photo+2",
  "https://placehold.co/300x300/fddde6/333?text=Photo+3",
  "https://placehold.co/300x300/f9c5d5/333?text=Photo+4",
  "https://placehold.co/300x300/fce4ec/333?text=Photo+5",
  "https://placehold.co/300x300/ffe6f2/333?text=Photo+6",
  "https://placehold.co/300x300/f8bbd0/333?text=Photo+7",
  "https://placehold.co/300x300/f48fb1/333?text=Photo+8",
  'https://placehold.co/300x300/ff99cc/333?text=Photo+9'
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
