// 🎯 Countdown Timer
const birthday = new Date("2025-12-20T00:00:00");
const countdown = document.getElementById("countdown");

setInterval(() => {
  const now = new Date();
  const diff = birthday - now;

  if (diff <= 0) {
    countdown.innerHTML = "🎉 Happy Birthday! 🎉";
  } else {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    countdown.innerHTML = `${days} दिन ${hours} घंटे ${minutes} मिनट ${seconds} सेकंड`;
  }
}, 1000);

// 🖼️ Photo Slideshow
const photos = ["images/photo1.jpg", "images/photo2.jpg"];
let photoIndex = 0;
const photoElement = document.getElementById("photo");

setInterval(() => {
  photoIndex = (photoIndex + 1) % photos.length;
  photoElement.src = photos[photoIndex];
}, 5000); // हर 5 सेकंड में image बदले

// 🎨 Background Themes
const backgrounds = [
  "url('images/photo1.jpg')",
  "url('images/photo2.jpg')"
];
let bgIndex = 0;

setInterval(() => {
  document.body.style.backgroundImage = backgrounds[bgIndex];
  bgIndex = (bgIndex + 1) % backgrounds.length;
}, 10000); // हर 10 सेकंड में background बदलता है
