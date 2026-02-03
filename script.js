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

// Track clicked images
var clickedCount = 0;
var totalImages = 9;

// 2) Pick 9 random images each load
function getRandomImages(count) {
  var shuffled = images.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// 3) Render grid on page load
function renderGrid() {
  var grid = document.getElementById("imageGrid");
  var selected = getRandomImages(totalImages);
  grid.innerHTML = "";
  selected.forEach(function(src) {
    var img = document.createElement("img");
    img.src = src;
    img.style.cursor = "pointer";
    img.style.transition = "opacity 0.3s";
    
    // Add click event to each image
    img.addEventListener("click", function() {
      if (!this.classList.contains("clicked")) {
        this.classList.add("clicked");
        this.style.opacity = "0.5";
        clickedCount++;
        
        // Enable YES button when all images are clicked
        if (clickedCount >= totalImages) {
          document.getElementById("yesBtn").disabled = false;
          document.getElementById("yesBtn").style.opacity = "1";
          document.getElementById("yesBtn").style.cursor = "pointer";
        }
      }
    });
    
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

// 5) Yes button click -> go to GIF page (disabled at start)
document.addEventListener("DOMContentLoaded", function() {
  renderGrid();
  
  var yesBtn = document.getElementById("yesBtn");
  yesBtn.disabled = true;
  yesBtn.style.opacity = "0.5";
  yesBtn.style.cursor = "not-allowed";
  
  yesBtn.addEventListener("click", function() {
    if (!this.disabled) {
      window.location.href = "gif.html";
    }
  });
});
