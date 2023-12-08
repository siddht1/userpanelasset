   // Get the timer element
const timerElement = document.getElementById('timer');

// Initialize the timer variables
let hours = 0;
let minutes = 0;
let seconds = 0;

// Function to increment the timer
function incrementTimer() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    // Format the time as hh:mm:ss
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Update the timer element
    timerElement.textContent = formattedTime;
}

// Start the timer
setInterval(incrementTimer, 1000);
