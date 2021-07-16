const generateUserStory = () => {
    
    // arrays to contain the sentence components
    const personas = [];
    const helpingVerbPhrases = [];
    const intents = [];
    const prepositionalPhrases = [];
    const benefits = [];

    const randomIndex = array => {
        return Math.floor(Math.random() * array.length - 1)
    };

    return `${personas[randomIndex]} ${helpingVerbPhrases[randomIndex]} ${intents[randomIndex]} ${prepositionalPhrases[randomIndex]} ${benefits[randomIndex]}.`

};

console.log(generateUserStory());