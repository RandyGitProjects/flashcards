const Turn = require("./turn")

class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = this.deck.cards[0];
        this.turns = 0;
        this.incorrectGuesses = []
    }
    
    returnCurrentCard() {
        return this.currentCard;
    }
    
    takeTurn(userGuess) {
        let turn = new Turn(userGuess, this.currentCard);
        let feedback = turn.giveFeedBack()
        this.turns ++;
        if (feedback === "Incorrect!") {
            this.incorrectGuesses.push(this.currentCard.id)
        }
        this.currentCard = this.deck.cards[this.turns];
        return feedback
    }

    calculatePercentCorrect() {
        let numCorrect = this.turns - this.incorrectGuesses.length
        return Math.round(100 *(numCorrect / this.turns))
    }

    endRound() {
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
}

module.exports = Round;