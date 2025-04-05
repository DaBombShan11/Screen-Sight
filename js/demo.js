// Function to open the prescription input popup
function openPrescriptionPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Function to close the prescription input popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Function to apply the blur effect based on the prescription
function applyBlurEffect() {
    var image = document.getElementById('blurred-image');
    
    // Get the prescription values for left and right eyes
    var leftEye = parseFloat(document.getElementById('left-eye').value);
    var rightEye = parseFloat(document.getElementById('right-eye').value);
    
    // Calculate the blur amount based on the prescription (average of both eyes)
    var blurAmount = (Math.abs(leftEye) + Math.abs(rightEye)) / 2; // Average blur value

    // Apply the blur effect based on the calculated blur amount
    image.style.filter = `blur(${blurAmount}px)`; // Apply the calculated blur

    // Close the popup after applying the blur
    closePopup();
}

// Function to remove the blur effect and unblur the image
function removeBlurEffect() {
    var image = document.getElementById('blurred-image');
    
    // Remove the blur effect
    image.style.filter = 'none';
    
    // Close the popup after unblurring the image
    closePopup();
}