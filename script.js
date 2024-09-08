let correctClicks = 0;

function startGame() {
    const container = document.getElementById('game-container');
    container.innerHTML = ''; // Clear existing tiles

    // Create a falling tile every second
    const interval = setInterval(() => {
        createTile(container);
    }, 1000);

    // Stop game after 2 correct clicks
    if (correctClicks >= 2) {
        clearInterval(interval);
        setTimeout(() => {
            window.location.href = 'success.html'; // Redirect to success page
        }, 1000);
    }
}

function createTile(container) {
    let tile = document.createElement('div');
    tile.className = 'tile';
    tile.style.left = Math.floor(Math.random() * 200) + 'px'; // Random position

    // Add the tile to the container
    container.appendChild(tile);

    // Make tile clickable and count correct clicks
    tile.onclick = function () {
        tile.style.backgroundColor = '#fff'; // Change tile color once clicked
        correctClicks++;

        if (correctClicks >= 2) {
            alert('You have clicked 2 tiles successfully!');
            window.location.href = 'success.html'; // Redirect to the success page
        }

        // Remove tile after click
        container.removeChild(tile);
    };

    // Remove tile after it falls off screen
    setTimeout(() => {
        if (container.contains(tile)) {
            container.removeChild(tile);
        }
    }, 2000); // Same as the fall animation duration
}

// Start the game when the page loads
window.onload = startGame;
