const generateUserStory = () => {
    
    // arrays to contain the sentence components
    const personas = [
        'a college grad, I',
        'the proud owner of a Master\'s degree from an august institution of higher learning accredited by the state, I',
        'a single parent of three waiting in line at the DMV, I',
        'the constituent members of the Politburo Standing Committee (PSC), or, more officially, the Standing Committee of the Central Political Bureau of the Communist Party of China, we',
        'a free citizen of a modern democracy, the exact current composition of which not necessarily being the Platonic ideal of its thesis, but also being the real and material result of blood spilt by those who came before me as they fought for a more perfect union, unencumbered as I am by oaths or allegiances to foreign princes, I',
        'an iOS user, shrouded in my cardigan, I',
        'an Android user, shrouded in my hoodie, I',
        'the executive committee of BlackRock, Inc., we',
        'an agent of the IRS, empowered by law to arrest people I find to have been naughty, I',
        'Nobuo Uematsu, composer of the finest video game soundtracks known to exist, I'
    ];
    const helpingVerbPhrases = [];
    const intents = [];
    const prepositionalPhrases = [];
    const benefits = [];

    // the random index generator
    const randomIndex = array => {
        return Math.floor(Math.random() * array.length - 1)
    };

    // the returned string concatenation
    return `As ${personas[randomIndex]} ${helpingVerbPhrases[randomIndex]} ${intents[randomIndex]} ${prepositionalPhrases[randomIndex]} ${benefits[randomIndex]}.`

};

console.log(generateUserStory());