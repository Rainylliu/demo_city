const buttonOne = document.getElementById('r1');
const buttonTwo = document.getElementById('r2');
const buttonThree = document.getElementById('r3');
const buttonFour = document.getElementById('r4');

const houseImage = document.getElementById('house');
const productImage = document.getElementById('product');
const bbqImage = document.getElementById('BBQ');
const smokeImage = document.getElementById('smoke');
const boatImage = document.getElementById('boat');
const vehicleImage = document.getElementById('vehicle');
const subwayImage = document.getElementById('subway');

// Add click event listeners to the buttons
buttonOne.addEventListener('click', () => {
    // Hide all images
    hideAllImages();
    // Show the "house" image
    houseImage.style.display = 'block';
});

buttonTwo.addEventListener('click', () => {
    hideAllImages();
    // Show the "product" and "BBQ" images
    productImage.style.display = 'block';
    bbqImage.style.display = 'block';
});
buttonThree.addEventListener('click', () => {
    hideAllImages();
    // Show the "smoke" image
    smokeImage.style.display = 'block';
});

buttonFour.addEventListener('click', () => {
    hideAllImages();
    // Show the "boat", "vehicle", and "subway" images
    boatImage.style.display = 'block';
    vehicleImage.style.display = 'block';
    subwayImage.style.display = 'block';
});

background.addEventListener('click', () => {
    // Hide all images
    hideAllImages();
});

function hideAllImages() {
    // Hide all images
    houseImage.style.display = 'none';
    productImage.style.display = 'none';
    bbqImage.style.display = 'none';
    smokeImage.style.display = 'none';
    boatImage.style.display = 'none';
    vehicleImage.style.display = 'none';
    subwayImage.style.display = 'none';
}
