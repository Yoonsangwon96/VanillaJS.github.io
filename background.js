const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
];

const chostImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chostImage}`;

document.body.appendChild(bgImage);