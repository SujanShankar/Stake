document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.a1');
    const resetBtn = document.getElementById('reset-btn');
    let mineIndex; 
    let diamondIndexes = []; 

    function initializeGame() {
        buttons.forEach(button => button.textContent = '');
        mineIndex = Math.floor(Math.random() * 9);//It produce random no. till 9/
        diamondIndexes = [];

        while (diamondIndexes.length < 8) {
            let randomIndex = Math.floor(Math.random() * 9);
            if (randomIndex !== mineIndex && !diamondIndexes.includes(randomIndex)) {
                diamondIndexes.push(randomIndex);
            }
        }
    }
    function handleClick(event) {
        const clickedButton = event.target;
        const index = Array.from(buttons).indexOf(clickedButton);

        if (index === mineIndex) {
            clickedButton.textContent = '💣'; // Show the mine
            alert('You hit the mine! Game over.');
            disableAllButtons();
        } else {
            clickedButton.textContent = '💎'; // Mark as a safe but empty spot
        }
    }

    // Disable all buttons after a loss
    function disableAllButtons() {
        buttons.forEach(button => button.removeEventListener('click', handleClick));
    }

    // Add event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });

   
    // Reset button logic
    resetBtn.addEventListener('click', () => {
        initializeGame();
        buttons.forEach(button => {
            button.textContent = ''; // Clear all button content
            button.addEventListener('click', handleClick); // Re-enable button functionality
        });
        
    });
    initializeGame();
});
