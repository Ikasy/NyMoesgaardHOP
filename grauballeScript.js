const imageWrapper = document.querySelector('.image-wrapper');
const hotspotContents = document.querySelectorAll('.hotspot-content');
const container = document.getElementById('container');
const hotspots = document.querySelectorAll('.hotspot');

let zoomAmount = 0.8; 
let rotationX = 0;
let rotationY = 0; 
let activeHotspotIndex = null;

// Håntere når man flytter på musen alt efter containerens størrelse
container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const mouseX = e.clientX - rect.left; 
  const mouseY = e.clientY - rect.top; 

  rotationX = ((rect.width / 2 - mouseX) / 25).toFixed(2);
  rotationY = ((rect.height / 2 - mouseY) / 25).toFixed(2);

  imageWrapper.style.transform = `rotateY(${rotationX}deg) rotateX(${rotationY}deg) scale(${zoomAmount})`;
});

// Håndtere zoom ved scroll
container.addEventListener('wheel', (e) => {
  if (!e.target.closest('.hotspot-content')) {
      zoomAmount += e.deltaY < 0 ? 0.1 : -0.1;
      zoomAmount = Math.min(Math.max(zoomAmount, 0.6), 1);
      imageWrapper.style.transform = `rotateY(${rotationX}deg) rotateX(${rotationY}deg) scale(${zoomAmount})`;
      e.preventDefault();
  }
});

// Hotspots klik til åbning og lukning hvis den har været åbnet
hotspots.forEach((hotspot, index) => {
  hotspot.addEventListener('click', () => {
    if (activeHotspotIndex === index) {
      closePopup(); 
    } else {
      closePopup();
      activeHotspotIndex = index;
      hotspots.forEach(spot => (spot.style.opacity = "1"));
      hotspot.style.opacity = "0.5";
      hotspotContents[index].style.display = 'block';
      imageWrapper.style.margin = "auto 0 auto auto"

    }
  });
});
// Lukke information igen
function closePopup() {
  if (activeHotspotIndex !== null) {
    hotspotContents[activeHotspotIndex].style.display = "none"; 
    hotspots[activeHotspotIndex].style.opacity = "1"; 
    activeHotspotIndex = null; 
    imageWrapper.style.margin = "auto"
  }
}
