document.addEventListener('DOMContentLoaded', function() {
    const glitch = document.querySelector('.glitch');
    let count = 0;
    const maxGlitches = 5; // Control the number of glitches before stabilizing

    function performGlitch() {
        if (count >= maxGlitches) {
            clearInterval(glitchInterval);
            glitch.style.opacity = 1;
            glitch.style.textShadow = '0 0 20px #00ffea, 0 0 30px #004dff, 0 0 45px #004dff'; // Keep your color settings
        } else {
            glitch.style.opacity = Math.random(); // Randomize opacity to simulate glitch
            count++;
        }
    }

    const glitchInterval = setInterval(performGlitch, 600);
});

function startJourney() {
    // Hide the title screen
    document.getElementById('titleScreen').style.display = 'none';
    // Show the loading screen
    document.getElementById('loadingScreen').style.display = 'flex';

    // Start loading animation and redirect after completion
    setTimeout(() => {
        window.location.href = 'portfolio.html';
    }, 4000); // 3 seconds for loading animation + 1 second delay
}
