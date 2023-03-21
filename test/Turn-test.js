const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/turn');
const Card = require("../src/Card")

describe('turn', function() {
    it.skip("should be a function", function() {
        const turn = new Turn();

        expect(turn).to.be.a('function');
    })

    it.skip('should be an instance of turn', function() {
        const turn = new Turn();

        expect(turn).to.be.an.instanceof(Turn);
    });

    it.skip("should store a string", function() {
        const turn = new Turn("Random string to store");

        expect(turn.userGuess).to.equal("Random string to store");
    });

    it.skip("should store a card object", function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card)

        expect(turn.userGuess).to.equal("pug");
        expect(turn).to.deep.equal(card);
    })

    it.skip("should return a guess from the function", function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn("pug", card);

        var freshTurn = turn.returnGuess()

        expect(freshTurn).to.equal("pug")
    });

    it.skip("should return a card from the function", function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn("pug", card);

        var freshCard = turn.returnCard() //Created a method/function

        expect(freshCard).to.deep.equal(card);
    });

    it.skip("guess should have a default equal to false", function() {
        const turn = new Turn();

        expect(turn.guess).to.equal(false);
    });

    it.skip("should return true if the user guesses right", function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn("sea otter", card);
        
        const guess = turn.evaluateGuess();

        expect(guess).to.equal(true);
    });
    
    it.skip("should return a string if the user guesses right", function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn("sea otter", card);

        var feedBack = turn.giveFeedBack();

        expect(feedBack).to.equal("Correct!")
    });

    it.skip("should return a string if the user guesses wrong", function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn("capybara", card);

        var feedBack = turn.giveFeedBack();

        expect(feedBack).to.equal("Incorrect!")
    });
});