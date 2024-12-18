const randomizer = {
    getRandomNumber: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    shuffleArray: (array) => {
        return [...array].sort(() => Math.random() - 0.5);
    }
};