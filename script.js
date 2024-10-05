const VERBS = [
    "sit on",
    "dusted",
    "break",
    "jack off",
    "get",
    "physics",
    "ax",
    "jiggle"
]

const ADJECTIVES = [
    "physical",
    "horny",
    "wet",
    "dry",
    "smart",
    "dumb",
    "sus", 
    "naughty", 
    "brownian", 
    "kinetic"
]

const NOUNS = [
    "air",
    "marks",
    "beaker",
    "lab coat",
    "mr davids cock",
    "textbook",
    "etch", 
    "question", 
    "impostor",
    "teory"
]

const PHRASES = [
    "I'm gonna {VERB} my {NOUN}",
    "Time to {VERB} my {NOUN}",
    "No! Dont {VERB} your {NOUN}, in a physical science lesson",
    "Done {VERB}... full {NOUN}",
    "Go get some fresh {NOUN} outside, or imma {VERB} you",
    "You look very {ADJ} today",
    "Why is your {NOUN} so {ADJ}? Did it {VERB}?",
    "I'm feeling {ADJ} ngl",
    "This is a {ADJ} science class",
    "Y'all must {VERB} yourselves one {NOUN}",
    "When the {NOUN} is {ADJ}",
    "Go to the {ADJ} table",
    "{ADJ} motion",
    "{ADJ} molecular teory",
    "{ADJ} molecular {NOUN}",
]

function getRandomElem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generate() {
    const phrase = getRandomElem(PHRASES);

    let output = "";

    let i = 0;
    while(i < phrase.length) {
        if(phrase[i] == '{') {
            i++; // Skip over the '{'
            
            const start = i;
            while(phrase[i] != '}') {
                i++; // Skip over the rest of the word until a second '}' is reached.
            }
            
            const partOfSpeech = phrase.slice(start, i).toLowerCase().trim()
            
            switch(partOfSpeech) {
                case "verb":
                    output += getRandomElem(VERBS);
                    break;

                case "adj":
                    output += getRandomElem(ADJECTIVES);
                    break;

                case "noun":
                    output += getRandomElem(NOUNS);
                    break;
            }
        }
        else {
            output += phrase[i];
        }

        i++;
    }

    document.getElementById("output").innerText = output;
}