// Caleb  Hess

// display toggle the rules display
function displayRules() {
    //get a reference to the element from the DOM and toggle the hidden attribute
    document.getElementById("rules").classList.toggle("hidden");
}
//define init()
function init() {

    //get a reference to the controls and add corresponding event listeneres
    document.getElementById("draw").addEventListener("click", draw);
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stand").addEventListener("click", stand);
    //array to store the drawn cards
    let drawn = [];
    let drawnValues = [];



    const deck = makeDeck();

    function resetHand() {
        for (let i = 0; i < drawnValues.length - 1; i++) {
            drawnValues.pop()
        }
        for (let i = 0; i < drawn.length - 1; i++) {
            drawn.pop()
        }
        document.getElementById("card1").innerHTML = `<img src="./cards/back_of_card.svg" alt="cardSlot" />`;
        document.getElementById("card2").innerHTML = `<img src="./cards/back_of_card.svg" alt="cardSlot" />`;

    }

    function makeDeck() {
        function makeSuit(suitName) {
            let suit = [];
            let ranksOfSuit = [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
            ];/* length 13 cards */
            // a for loop that iterates the same number of times as there is cards in the suit
            for (let i = 0; i <= ranksOfSuit.length - 1; i++) {
                /*set the index that is equal to the iteration count assign the value that matches the naming convention "suit_rank.svg" using a template literal  this matches the value of the card image for that card to allow the display to change*/
                suit[i] = `${suitName}_${ranksOfSuit[i]}.svg`;
            }
            /* returns the array */
            return suit;
        }
        // make spades array
        const spades = makeSuit("spades");

        // make hearts array
        const hearts = makeSuit("hearts");

        // make diamonds array
        const diamonds = makeSuit("diamonds");

        // make clubs array
        const clubs = makeSuit("clubs");

        // combines the returned Arrays for each suit and flattens them into one level of the array
        return [spades, hearts, diamonds, clubs].flat(1);
    }

    var numberOfCardsDealt = 0;

    function generateNumber() {

        // generate random number between 51 and 0;
        let randomNumber = Math.floor(Math.random() * (52 - 1)); /* max - min*/

        // each time  a number is generated with this function inccrease the card drawn count by 1;
        numberOfCardsDealt++;

        return randomNumber;
        //allows the result to be assignable to a variable by initiating the variable equal to generateNumber();

    }
    /**
     * 
     * @param {drawn} card 
     * @param {*} aceEleven 
     * @returns 
     */
    function getCardValue(card) {


        // get the value of the card from the name 
        const extractedCardName = Number(card.toString().match(/[\d][\d]?/i))
        // console.warn(extractedCardName[0]); used this to see the name
        if (!extractedCardName) {
            return 0;
        } /* if the name of card doesn't match for some reason return the value zero for the card */

        // the rank is eqaul to the extracted name
        let rank = extractedCardName; /* convenience variable */

        if (rank === 11 || rank === 12 || rank === 13) { rank = 10 } else if (rank === 1) { rank = 11 };
        drawnValues.push(rank)
    }



    var aceSumOne = 0; aceSumEleven = 0;
    function checkPoints() {
        let total = 0;
        drawn.forEach(card => {
            getCardValue(card);
        });

        drawnValues.forEach(value => { total = Number(total) + Number(value) })
        drawnValues.length = 0;
        console.log(total)

        if (total > 21) {
            bust();
        }
        else if (total === 21) {
            blackjack();
        }
        else if (total < 21) {
            //do nothing
        }
        return {
            total
        }

    }




    function draw() {
        resetHand();
        // let cardvalues = [(11, 1), 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        let a = generateNumber();
        let b = generateNumber();
        drawn[0] = `./cards/${deck[a]}`;
        drawn[1] = `./cards/${deck[b]}`;
        document.getElementById(
            "card1"
        ).innerHTML = `<img src="./cards/${deck[a]}" alt = "card" /> `;
        document.getElementById(
            "card2"
        ).innerHTML = `<img src="./cards/${deck[b]}" alt="card"/> `;


        checkPoints();

    }
    function bust() {

        alert("bust");
        resetHand();

    }
    function blackjack() {
        alert("blackjack!");
        resetHand()
    }
    function hit() {
        let c = deck[generateNumber()];
        drawn.push(`./cards/${c}`);
        console.log(`./cards/${c}`);
        let hand = document.getElementById("card2");
        let addedCard = document.createElement("img");
        addedCard.src = `./cards/${c} `;
        addedCard.alt = "card";
        hand.appendChild(addedCard);
        checkPoints();

    }
    function finalizeResult() {
        checkPoints();
        // reload when done

    }
    function stand() {
        finalizeResult();
        setTimeout(() => { resetHand() }, 1100);
    }

}
init();
