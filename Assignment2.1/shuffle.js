


const deck = new Array(52);
const pips = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const playersHand = [];
const dealersHand = [];
function deal() {
    Math.random()
}
function dealFirstHand() {
    for (let i = 0; i < 3; i++) {

        if (playersHand.length === 2 && i === 2) {
            dealFaceDownCard();
        }
    }
}
function dealFaceDownCard() { }

function play() {
    dealFirstHand();
}

play();