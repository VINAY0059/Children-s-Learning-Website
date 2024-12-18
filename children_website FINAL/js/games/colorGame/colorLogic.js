class ColorGame {
    constructor(colors) {
        this.colors = colors;
        this.currentColor = null;
    }

    generateNewRound() {
        const shuffledColors = randomizer.shuffleArray(this.colors);
        this.currentColor = shuffledColors[0];
        return shuffledColors;
    }

    checkAnswer(selectedColor) {
        return selectedColor.name === this.currentColor.name;
    }
}

const colorGame = new ColorGame(colorData.colors);