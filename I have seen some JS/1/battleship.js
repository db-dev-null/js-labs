const randomLoc = Math.floor(Math.random() * 5);
const location1 = randomLoc;
const location2 = location1 + 1;
const location3 = location2 + 1;
const ship = [location1, location2, location3];
let hits = 0;
let guesses = 0;
let isSunk = false;
const check = (guess) => {
    guesses = guesses + 1;
    if (ship.includes(guess)) {
        alert("HIT!");
        hits = hits + 1;
        isSunk = hits === ship.length;
        if (isSunk) {
            alert("you sank my battleship!");
        }
        return;
    }
    alert("MISS");
};


while (!isSunk) {
    let guess = parseInt(prompt("Ready, aim, fire!(enter a number from 0-6):"));
    guess < 0 || guess > 6 ?
        alert("Please enter a valid cell number!")
        : check(guess)
}
const stats = "you took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3 / guesses);
alert(stats);
