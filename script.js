// This script creates an automatic image slider for the photo gallery.

let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-image');

// Initially, make sure only the first image is visible.
if (images.length > 0) {
    images[0].style.display = 'block';
    // Hide all other images
    for (let i = 1; i < images.length; i++) {
        images[i].style.display = 'none';
    }
}

// Function to transition to the next image
function showNextImage() {
    // Hide the current image
    if (images.length > 0) {
        images[currentImageIndex].style.display = 'none';

        // Increment the index and loop back to the start if needed
        currentImageIndex = (currentImageIndex + 1) % images.length;

        // Show the next image
        images[currentImageIndex].style.display = 'block';
    }
}

// Automatically show the next image every 3 seconds
setInterval(showNextImage, 3000);