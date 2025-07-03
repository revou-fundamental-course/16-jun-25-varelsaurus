// Get the welcome message element
const welcomeMessage = document.getElementById('welcomeMessage');

// Show popup and get name
window.onload = function() {
    let name = prompt("Please enter your name:");
    if (name === null || name === "") {
        name = "Name";
    }
    welcomeMessage.textContent = `Hi ${name}`;
};