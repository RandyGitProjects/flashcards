const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/turn');
const Round = require('../src/Round');
const Deck = require('../src/Round');
const Card = require('../src/Card');
const Game = require('../src/Game');
const data = require('../src/data');

const prototypeQuestions = data.prototypeData

let game = new Game();
game.start(prototypeQuestions)


// As you may have noticed, your Game class has two methods fleshed out already: printMessage and printQuestion. We are going to abandon testing for these methods - as the techniques for this type of testing are beyond the scope of this project.

// Your Game class should meet these other requirements:
// Should keep track of the currentRound
// start: method that starts everything
// Creates Cards
// Puts Cards in a Deck
// Creates a new Round using the Deck
// invokes printMessage to display the message in the CLI
// invokes printQuestion to kick off our helper functions that allow interaction via the CLI
// Implementation Note: The helper functions are all fleshed out and fit to work with classes/methods that meet the requirements in the past iterations.

// Testing Tip: You’ll notice it difficult to test game.start. If you invoke it in your test file, it hangs the test suite by starting the game while running the tests. Sometimes as front end developers, we run into pieces of code that aren’t possible, or worth it, to test. In this case, instead of testing game.start, consider trying to extract what you can out of game.start and into a separate function, and test those functions on their own.

// Your game.start() method should be invoked to make the game playable in the console.
// Look at the file being run when we want to start the game. Think about where you need to invoke your Game.start method.
describe("Game", function() {
    it("Should keep track of the currentRound", function() {

    });
    
    it("should create cards when game starts", function() {
    
    });
});

