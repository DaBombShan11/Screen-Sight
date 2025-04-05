// Select the elements
const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");
const successMessage = document.getElementById("successMessage");

// When the form is submitted, show the popup
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevents the form from redirecting
  
  // Show the success popup
  popup.style.display = "flex"; 

  // Hide the popup after 5 seconds
  setTimeout(() => {
    popup.style.display = "none";
    // Show success message in red
    successMessage.style.display = "block";
    // After 3 seconds, refresh the page
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }, 5000);
});
