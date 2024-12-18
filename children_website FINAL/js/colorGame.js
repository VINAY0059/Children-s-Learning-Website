const colors = [
    { name: 'Red', hex: '#ff6b6b' },
    { name: 'Blue', hex: '#4ecdc4' },
    { name: 'Green', hex: '#95e1d3' },
    { name: 'Yellow', hex: '#ffe66d' },
    { name: 'Purple', hex: '#a8a4ff' },
    { name: 'Orange', hex: '#ffa07a' }
];

let currentColor = null;

function generateColorGame() {
    const colorOptionsDiv = document.querySelector('.color-options');
    colorOptionsDiv.innerHTML = '';
    
    // Shuffle colors and pick first one as correct answer
    const shuffledColors = [...colors].sort(() => Math.random() - 0.5);
    currentColor = shuffledColors[0];
    
    document.getElementById('color-display').textContent = `Find the ${currentColor.name} color!`;
    
    // Create color options
    shuffledColors.forEach(color => {
        const colorOption = document.createElement('div');
        colorOption.className = 'color-option';
        colorOption.style.backgroundColor = color.hex;
        colorOption.addEventListener('click', () => checkColorAnswer(color));
        colorOptionsDiv.appendChild(colorOption);
    });
    
    document.getElementById('color-result').textContent = '';
}

function checkColorAnswer(selectedColor) {
    const resultDiv = document.getElementById('color-result');
    
    if (selectedColor.name === currentColor.name) {
        resultDiv.textContent = '🎉 Correct! You found the right color!';
        resultDiv.style.color = '#4ecdc4';
        setTimeout(generateColorGame, 1500);
    } else {
        resultDiv.textContent = '❌ Try again!';
        resultDiv.style.color = '#ff6b6b';
    }
}

document.addEventListener('DOMContentLoaded', generateColorGame);