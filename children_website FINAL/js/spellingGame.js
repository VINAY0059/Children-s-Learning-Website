const words = [
    'cat', 'dog', 'sun', 'moon', 'star',
    'tree', 'book', 'fish', 'bird', 'house'
];

let currentWord = '';

function generateSpellingWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById('word-display').textContent = currentWord;
    setTimeout(() => {
        document.getElementById('word-display').textContent = '???';
    }, 2000);
    
    document.getElementById('spelling-answer').value = '';
    document.getElementById('spelling-result').textContent = '';
}

function checkSpellingAnswer() {
    const userAnswer = document.getElementById('spelling-answer').value.toLowerCase();
    const resultDiv = document.getElementById('spelling-result');

    if (userAnswer === currentWord) {
        resultDiv.textContent = '🎉 Perfect spelling!';
        resultDiv.style.color = '#4ecdc4';
        setTimeout(generateSpellingWord, 1500);
    } else {
        resultDiv.textContent = '❌ Try again!';
        resultDiv.style.color = '#ff6b6b';
    }
}

document.addEventListener('DOMContentLoaded', generateSpellingWord);