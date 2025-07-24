// Get a reference to the button element using its ID
const button = document.getElementById('myButton');

// Add an event listener to the button for the 'click' event
button.addEventListener('click', function() {
  // When the button is clicked, display a JavaScript alert box
  alert('Installing malware...');
    // Note: This is a joke alert and should not be taken seriously.
  wait: 2000;  // Wait for 2 seconds before closing the alert
    setTimeout(function() {
        alert('Malware installed.'); // Display a follow-up message
    }, 2000); // 2000 milliseconds = 2 seconds
    setTimeout(function() {
        alert('jk bro'); // Display a follow-up message
    }, 2000); // 2000 milliseconds = 2 seconds
});