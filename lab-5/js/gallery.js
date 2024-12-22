const images = [
    "https://cloud.mail.ru/public/MWvi/XNkA248TL",
    "https://cloud.mail.ru/public/sodb/6zNc4QBDK",
    "https://cloud.mail.ru/public/P1GH/gsLFhDijd"
];

let currentIndex = 0;

async function loadImage(index) {
    const imgElement = document.getElementById('image');
    imgElement.src = '';
    try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // artificial delay
        const img = new Image();
        img.src = images[index];
        img.onload = () => {
            imgElement.src = img.src;
        };
        img.onerror = (error) => {
            console.error('Error loading image:', error);
        };
    } catch (error) {
        console.error('Error loading image:', error);
    }
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    loadImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    loadImage(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    loadImage(currentIndex);
});
