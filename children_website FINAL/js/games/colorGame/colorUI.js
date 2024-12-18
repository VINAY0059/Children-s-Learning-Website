document.addEventListener('DOMContentLoaded', () => {
    const colorDisplay = document.getElementById('color-display');
    const colorOptionsDiv = document.querySelector('.color-options');
    const resultElement = document.getElementById('color-result');

    function generateColorGame() {
        const shuffledColors = colorGame.generateNewRound();
        
        colorDisplay.textContent = `Find the ${colorGame.currentColor.name} color!`;
        colorOptionsDiv.innerHTML = '';
        
        shuffledColors.forEach(color => {
            const colorOption = document.createElement('div');
            colorOption.className = 'color-option';
            colorOption.style.backgroundColor = color.hex;
            colorOption.addEventListener('click', () => checkColorAnswer(color));
            colorOptionsDiv.appendChild(colorOption);
        });
        
        feedback.clear(resultElement);
    }

    function checkColorAnswer(selectedColor) {
        if (colorGame.checkAnswer(selectedColor)) {
            feedback.showSuccess(resultElement, 'Correct! You found the right color!');
            setTimeout(generateColorGame, 1500);
        } else {
            feedback.showError(resultElement, 'Try again!');
        }
    }

    generateColorGame();
});