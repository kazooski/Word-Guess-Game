// Javascript for game
// Questions: how to replace spaces with 


// Global variables

// foodItems is an object that holds the food and image
var foodItems = [
    { food: "olive_oil", image: "" },
    { food: "vegetable_oil", image: "" },
    { food: "balsamic_vinegar", image: "" },
    { food: "red_wine_vinegar", image: "" },
    { food: "rice", image: "" },
    {food: "kosher_salt", image: ""},
    {food: "pepper", image: ""},
    {food: "canned_tuna", image: ""},
    {food: "beans", image: ""},
    {food: "quinoa", image: ""},
    {food: "pasta", image: ""},
    {food: "flour", image: ""},
    {food: "granulated_sugar", image: ""},
    {food: "garlic", image: ""},
]

// wins counter
var wins = 0;
// The number of allowed gueses per word
var userCount = 7;

// the random index k
var random;

// Selected food+image from foodItems
var foodSelection;

// array for underscores + correct letters
var wordAnswer = [];

// user letter guess
var userGuess;

// string for wrong Letters
var letterWrong = [];

//underscores in words
var underscoreCount = 0;
// letters in words
var letterCount;

// FUNCTION renderWord Chooses and renders the word randomly
function renderWord() {

    random = Math.floor(Math.random() * foodItems.length);

    // Randomly selects food+image 
    foodSelection = foodItems[random];
    // Translates the food into underscores 
    for (i = 0; i < foodSelection.food.length; i++) {
        if (foodSelection.food[i] !== "_") {
            wordAnswer[i] = "_ ";
        } else {
            wordAnswer[i] = ("&nbsp; &nbsp; &nbsp;");
            underscoreCount++;
        }
    }

    //Counts real letters
    letterCount = foodSelection.food.length - underscoreCount;
    // Adds the word into the html ID for visibility using the .join function to remove the commas
    document.querySelector("#word-selection").innerHTML = wordAnswer.join("");
};

// FUNCTION removeFood removes the randomly selected food index
function removeFood() {
    foodItems.splice(random, 1);
}

// Accepts userGuess input and determines if it's a letter in wordAnswer or letterWrong

document.onkeyup = function(event) {

    userGuess = event.key.toLowerCase();

    // Already selected letter
    if (wordAnswer.includes(userGuess) || letterWrong.includes(userGuess)) {
        alert('You already selected this!');
        return;
    }

    if (!foodSelection.food.includes(userGuess)) {
        letterWrong.push(userGuess);
        userCount--; // lose number of guesses
        document.querySelector("#user-guesses").innerHTML = "You have " + letterCount + " lives.";

        if (userCount === 0) {
            alert('You lost!');
        }

        return;
    }

    // replace letters if guess is right
    foodSelection.food.split('').forEach(function(letter, index) {
        // loop through each letter

        // replace every match
        if (userGuess === letter) {
            wordAnswer[index] = userGuess;
            letterCount--;
        }

        document.querySelector("#word-selection").innerHTML = wordAnswer.join("");
        document.querySelector("#letter-count").innerHTML = "You have " + letterCount + " more letters to solve the word.";
    });

    console.log('word answer', wordAnswer);
    console.log('letter wrong', letterWrong);


    if (letterCount == 0 || userCount == 0) {

        // reset variables
        wordAnswer = [];
        userCount = 7;
        letterWrong = [];
        letterCount = 0;
        underscoreCount = 0;


        renderWord();
        document.querySelector("#letter-count").innerHTML = letterCount; // reload dom
        //  removeFood();
    }

}




// function test(){
renderWord();
console.log(foodSelection);
console.log(random);
// removeFood();
console.log(wordAnswer);
console.log(foodItems);
console.log(letterCount);
// }