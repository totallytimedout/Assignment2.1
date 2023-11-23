const cardsData = {
    // Arrays of cards Objects that associate the Name of the card with the location of the cards svg, and the point value that each card is worth Each suit has one array of 13 cards for a total of 52 cards over 4 suits.
    cards: {
        spades: [
            [0],/* convenience index  so spades[1] = 1/Ace */
            { "ace": './cards/spades_ace.svg' },
            { "2": './cards/spades_2.svg' },
            { "3": './cards/spades_3.svg' },
            { "4": './cards/spades_4.svg' },
            { "5": './cards/spades_5.svg' },
            { "6": './cards/spades_6.svg' },
            { "6": './cards/spades_6.svg' },
            { "8": './cards/spades_8.svg' },
            { "9": './cards/spades_9.svg' },
            { "10": './cards/spades_10.svg' },
            { "jack": './cards/spades_jack.svg' },
            { "queen": './cards/spades_queen.svg' },
            { "king": './cards/spades_king.svg' }],
        hearts: [
            { "ace": './cards/hearts_ace.svg' },
            { "2": './cards/hearts_2.svg' },
            { "3": './cards/hearts_3.svg' },
            { "4": './cards/hearts_4.svg' },
            { "5": './cards/hearts_5.svg' },
            { "6": './cards/hearts_6.svg' },
            { "6": './cards/hearts_6.svg' },
            { "8": './cards/hearts_8.svg' },
            { "9": './cards/hearts_9.svg' },
            { "10": './cards/hearts_10.svg' },
            { "jack": './cards/hearts_jack.svg' },
            { "queen": './cards/hearts_queen.svg' },
            { "king": './cards/hearts_king.svg' }],
        diamonds: [
            { "ace": './cards/hearts_ace.svg' },
            { "2": './cards/hearts_2.svg' },
            { "3": './cards/hearts_3.svg' },
            { "4": './cards/hearts_4.svg' },
            { "5": './cards/hearts_5.svg' },
            { "6": './cards/hearts_6.svg' },
            { "6": './cards/hearts_6.svg' },
            { "8": './cards/hearts_8.svg' },
            { "9": './cards/hearts_9.svg' },
            { "10": './cards/hearts_10.svg' },
            { "jack": './cards/hearts_jack.svg' },
            { "queen": './cards/hearts_queen.svg' },
            { "king": './cards/hearts_king.svg' }],
        clubs: [
            { "ace": './cards/clubs_ace.svg' },
            { "2": './cards/clubs_2.svg' },
            { "3": './cards/clubs_3.svg' },
            { "4": './cards/clubs_4.svg' },
            { "5": './cards/clubs_5.svg' },
            { "6": './cards/clubs_6.svg' },
            { "6": './cards/clubs_6.svg' },
            { "8": './cards/clubs_8.svg' },
            { "9": './cards/clubs_9.svg' },
            { "10": './cards/clubs_10.svg' },
            { "jack": './cards/clubs_jack.svg' },
            { "queen": './cards/clubs_queen.svg' },
            { "king": './cards/clubs_king.svg' }]
    },
    count: 52,
    suits: ["hearts", "Clubs", "Diamonds", "Spades"],
    cardValues: [
        // ace can be either one point or 11; it is up to the player to decide.
        { "ace": [1, 11] },
        { "1": 1 },
        { "2": 2 },
        { "3": 3 },
        { "4": 4 },
        { "5": 5 },
        { "6": 6 },
        { "7": 7 },
        { "8": 8 },
        { "9": 9 },
        { "10": 10 },
        { "jack": 10 },
        { "queen": 10 },
        { "king": 10 }]
};
let clubs = cardsData.cards.clubs;
let hearts = cardsData.cards.hearts;
let diamonds = cardsData.cards.diamonds;
let spades = cardsData.cards.spades;
const deck = new Array().concat(clubs, hearts, diamonds, spades);
/**
 * this is JSDOC comments --- I like them cause they look nicer in my opinion
 * @constant playerData 
 * @description an Array that the Game pushes and updates different pieces of data such as tokens and Player Name 
 */

const playerData = [];

// playerName is the value of the text input after the input event call "blur" happens. "blur" is when the target element loses focus or the user clicks away from it.
let playerName = document.getElementById("playerName");
playerName.addEventListener("blur", (ev) => { updateName(ev.target) })

// startButton has an event listener looking for a mouse event called "click"
// upon clicking the button the function "hideNameInput is executed."
let startButton = document.getElementById("start");
startButton.addEventListener("click", hideNameInput);

//rules button uses the same kind of listener and hides or makes visible the rules of the game.
const rulesButton = document.getElementById("rules");
rulesButton.addEventListener("click", toggleRules)

/**
 * @function hideNameInput
 * @description hides the text input box and finalizes the players name.
 */

function hideNameInput() {
    // hides the input
    document.getElementById("playerData").classList.toggle("hidden");
    // find the element I want to unhide
    let display = document.getElementById("nameDisplay");
    // unhides the element 
    display.classList.toggle('hidden');

}

/** 
 * @function unhideNameInput unhides the name input to allow editing of the players name
 * returns a log to the console, stating that it was toggled.
 */
function unhideNameInput() {
    document.getElementById("nameDisplay").classList.toggle("hidden");
    document.getElementById("playerData").classList.toggle("hidden");
    return console.log("toggled");
}

/**
 * @function updateName 
 * @description gets the value of the name input and saves it to playerData
 * 
*/
function updateName(target) {
    // console.log(target.value);
    let player = target.value;
    playerData["player"] = player.toUpperCase();
    let display = document.getElementById("nameDisplay");
    display.innerHTML = `<p class="stat">${playerData.player}</p><small><button type="button" onclick="unhideNameInput()">edit</button></small>`;

}



const rulesDiv = document.getElementById("rules_");

let navButtons = document.getElementsByTagName("nav")[0].childNodes;
navButtons.forEach(btn => {
    btn.addEventListener("click", (ev) => { togglePush(ev.target) });00
});

function togglePush(a) {
    a.classList.toggle("push");

}
/**
 * @function spawnCards
 * @description displays all of the cards at the bottom of the rules tab
 * @todo  make it work lol
 */

function spawnCardsAtBottomOfRulesDisplay() {
    let cardslist = rulesDiv.getElementById('cardslist');

    rulesDiv.innerHTML = `<p>${deck.toString}</p>`;

}
spawnCardsAtBottomOfRulesDisplay();
function toggleRules() {

    rulesDiv.classList.toggle("hidden");

}

module.exports = [deck, cardsData];