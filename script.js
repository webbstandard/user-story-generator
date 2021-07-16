const generateUserStory = () => {
    
    // arrays to contain the sentence components
    const personas = [
        'someone who went to college, I',
        'the proud owner of a Master\'s degree from an august institution of higher learning accredited by the state, I',
        'a single parent of three waiting in line at the DMV, I',
        'the constituent members of the Politburo Standing Committee (PSC), or, more officially, the Standing Committee of the Central Political Bureau of the Communist Party of China, we',
        'a free citizen of a modern democracy, the exact current configuration of which not necessarily being the Platonic ideal of its own thesis, but also being the real, material result of blood spilled by those who came before as they fought for what they thought was going to be a more perfect union, or at least what they understood as something worthing taking a stand about, unencumbered as I am by oaths to foreign princes, I',
        'an iOS user, swaddled in my cardigan woven from threads of cashmere, I',
        'an Android user, shrouded in my Hoodie of Darkness, I',
        'the executive committee of BlackRock, Inc., responsible to the shareholders for the profitable management of more than $9 trillion in assets, we',
        'an agent of the IRS, empowered by law to arrest people I find to have been naughty, I',
        'someone whom others refer to in certain subterranean contexts as "The Justice"'
    ];
    const helpingVerbPhrases = [
        'super duper need to be able to',
        'simply must have utter dominion of the means to',
        'cannot at this time be inconvenienced to suffer the absence of the ability to',
        'can\'t exactly be expected to just kind of wander around the submarine not having permission to',
        'won\'t be taking this kind of treatment from you, you cad, you knave, you rogue, you blackguard -- you had better grant the means to',
        'will soon -- very soon, now, pet -- be endowed with the godlike power to',
        'experience surprise at the sudden, urgent, throbbing onset of the craving to',
        'just want you to know that there\'s been a text from Daddy, and he can get kind of cranky before naptime (as you know), so it\'s really important right now that I have the ability to',
        'have been corrupted and must not, for the love of God, be granted leave by the Council to',
        'cannot overemphasize the vital importance of denying Mother the accumulation of enough time and personnel to'
    ];
    const intents = [
        'seduce, or partially seduce, Jeff Bezos',
        'seize the means of production',
        'deploy the Sentinels',
        'ascend the Iron Throne',
        'achieve mind-like-water through the orthodox deployment of the GTD methodology',
        'push to origin',
    ];
    const prepositionalPhrases = [
        'in order to',
        'enough to'
    ];
    const benefits = [
        'run around being so GODDAM fabulous'
    ];

    // the random index generator
    const randomIndex = array => {
        return Math.floor(Math.random() * array.length - 1)
    };

    // the returned string concatenation
    return `As ${personas[randomIndex]} ${helpingVerbPhrases[randomIndex]} ${intents[randomIndex]} ${prepositionalPhrases[randomIndex]} ${benefits[randomIndex]}.`

};

console.log(generateUserStory());