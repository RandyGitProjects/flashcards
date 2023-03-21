const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/turn');
const Card = require("../src/Card")

describe('Turn', function() {
    it("should be a function", function() {
        const turn = new Turn();

        expect(Turn).to.be.a('function');
    })

    it('should be an instance of turn', function() {
        const turn = new Turn();

        expect(turn).to.be.an.instanceof(Turn);
    });

    it("should return a guess from the function", function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn("pug", card);

        expect(turn.returnGuess()).to.equal("pug")
    });

    it("should return a card from the function", function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn("pug", card);

        expect(turn.returnCard()).to.deep.equal(card);
    });

    it("guess should return false if the user guesses wrong", function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn("pug", card);

        expect(turn.evaluateGuess()).to.equal(false);
    });

    it("should return true if the user guesses right", function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn("sea otter", card);
        
        const guess = turn.evaluateGuess();

        expect(turn.evaluateGuess()).to.equal(true);
    });
    
    it("should return a string if the user guesses right", function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn("sea otter", card);

        expect(turn.giveFeedBack()).to.equal("Correct!")
    });

    it("should return a string if the user guesses wrong", function() {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn("capybara", card);

        expect(turn.giveFeedBack()).to.equal("Incorrect!")
    });
});