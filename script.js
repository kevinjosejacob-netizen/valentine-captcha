// 1) List your images here (real photos)
var images = [
  "images/IMG_2750.jpg",
  "images/IMG_2752.jpg",
  "images/IMG_4894.jpg",
  "images/IMG_8590.jpg",
  "images/IMG_8591.jpg",
  "images/IMG_8595.jpg",
  "images/IMG_9190.jpg",
  "images/WhatsApp Image 2026-02-02 at 10.04.58 PM.jpeg",
  "images/WhatsApp Image 2026-02-02 at 10.22.56 PM (1).jpeg",
  "images/WhatsApp Image 2026-02-02 at 10.22.56 PM.jpeg",
  "images/353f128b-f719-4225-a3f3-22f7bb3be86b.jpg"
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

// 5) Yes button click -> go to GIF page
document.addEventListener("DOMContentLoaded", function() {
  renderGrid();
  var yesBtn = document.getElementById("yesBtn");
  yesBtn.addEventListener("click", function() {
    window.location.href = "gif.html";
  });
});
