// Array of malverse-inspired phrases
const words = [
  "Click the links", "Click", "Don’t be afraid", "Links are safe", "You are a bot", 
  "Stuck in the malverse", "Obey", "Surrender", "Access granted", "Entering the mainframe",
  // Add other phrases as needed
];

// Array of image URLs for pop-up images
const images = [
  'https://i.ibb.co/4MJwQP2/23b4edb36eeffa915f96a7a906742a74.webp',
  'https://i.ibb.co/HKTw8kz/IMG-6504.jpg',
  'https://i.ibb.co/FYQVSGf/IMG-7167.jpg',
  // Add other URLs as needed
];

function showFlashText() {
  let textElement = document.getElementById("flash-text");
  if (!textElement) {
    textElement = document.createElement("div");
    textElement.id = "flash-text";
    textElement.classList.add("flash-text");
    document.body.appendChild(textElement);
  }
  textElement.textContent = words[Math.floor(Math.random() * words.length)];
  textElement.style.display = "block";
  setTimeout(() => {
    textElement.style.display = "none";
  }, 500);
}

function showFlashImage() {
  const imgElement = document.createElement("img");
  imgElement.classList.add("flash-image");
  imgElement.src = images[Math.floor(Math.random() * images.length)];
  imgElement.style.left = `${Math.random() * 80}vw`;
  imgElement.style.top = `${Math.random() * 80}vh`;
  document.getElementById("image-container").appendChild(imgElement);
  setTimeout(() => {
    imgElement.remove();
  }, 500);
}

setInterval(showFlashText, 1000);
setInterval(showFlashImage, 800);