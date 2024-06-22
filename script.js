// script.js

// Select all size buttons and add click event listeners
const sizeButtons = document.querySelectorAll('.size');
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        sizeButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');
    });
});

// Select all thumbnails and add click event listeners
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-product-image');

// Function to set the active thumbnail
const setActiveThumbnail = (thumbnail) => {
    // Remove active class from all thumbnails
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    // Add active class to the clicked thumbnail
    thumbnail.classList.add('active');
    // Update the main image source to the clicked thumbnail's image source
    mainImage.src = thumbnail.querySelector('img').src;
};

// Set the first thumbnail as the default active thumbnail and update the main image
setActiveThumbnail(thumbnails[0]);

// Add click event listeners to all thumbnails
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        setActiveThumbnail(thumbnail);
    });
});
