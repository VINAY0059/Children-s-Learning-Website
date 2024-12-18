class MathProblem {
    constructor() {
        this.operators = ['+', '-', 'x'];
        this.reset();
    }

    generate() {
        this.num1 = randomizer.getRandomNumber(1, 10);
        this.num2 = randomizer.getRandomNumber(1, 10);
        this.operator = this.operators[randomizer.getRandomNumber(0, 2)];
        this.calculateAnswer();
        return this;
    }

    calculateAnswer() {
        switch(this.operator) {
            case '+':
                this.answer = this.num1 + this.num2;
                break;
            case '-':
                this.answer = this.num1 - this.num2;
                break;
            case 'x':
                this.answer = this.num1 * this.num2;
                break;
        }
    }

    checkAnswer(userAnswer) {
        return parseInt(userAnswer) === this.answer;
    }

    reset() {
        this.num1 = 0;
        this.num2 = 0;
        this.operator = '+';
        this.answer = 0;
    }

    toString() {
        return `${this.num1} ${this.operator} ${this.num2} = ?`;
    }
}

const mathGame = new MathProblem();