let currentMathProblem = {};

function generateMathProblem() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', 'x'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let answer;
    switch(operator) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case 'x':
            answer = num1 * num2;
            break;
    }

    currentMathProblem = { num1, num2, operator, answer };
    document.getElementById('math-question').textContent = `${num1} ${operator} ${num2} = ?`;
    document.getElementById('math-answer').value = '';
    document.getElementById('math-result').textContent = '';
}

function checkMathAnswer() {
    const userAnswer = parseInt(document.getElementById('math-answer').value);
    const resultDiv = document.getElementById('math-result');

    if (userAnswer === currentMathProblem.answer) {
        resultDiv.textContent = '🎉 Correct! Well done!';
        resultDiv.style.color = '#4ecdc4';
        setTimeout(generateMathProblem, 1500);
    } else {
        resultDiv.textContent = '❌ Try again!';
        resultDiv.style.color = '#ff6b6b';
    }
}

document.addEventListener('DOMContentLoaded', generateMathProblem);