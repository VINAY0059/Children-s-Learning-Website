document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('math-question');
    const answerInput = document.getElementById('math-answer');
    const resultElement = document.getElementById('math-result');

    function generateNewProblem() {
        mathGame.generate();
        questionElement.textContent = mathGame.toString();
        answerInput.value = '';
        feedback.clear(resultElement);
    }

    window.checkMathAnswer = () => {
        const userAnswer = answerInput.value;
        
        if (mathGame.checkAnswer(userAnswer)) {
            feedback.showSuccess(resultElement, 'Correct! Well done!');
            setTimeout(generateNewProblem, 1500);
        } else {
            feedback.showError(resultElement, 'Try again!');
        }
    };

    generateNewProblem();
});