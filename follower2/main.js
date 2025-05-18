// Keeps track of where your mouse is currently
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

// Each circle will be assigned a color
const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

// Adds x and y properties to each circle and assigns each circle a color
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

// Mouse movement listener
window.addEventListener("mousemove", function(dats){
  coords.x = dats.x;
  coords.y = dats.y;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    // Move x 30% closer to the next circle's position
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
// 60 frames per second, all circles are smoothly updating
  requestAnimationFrame(animateCircles);
}

// Calls itself continuously via requestAnimationFrame
animateCircles();
