// Javascript for game
// Questions: how to replace spaces with 


// Global variables

// foodItems is an object that holds the food and image
var foodItems = [
    {food: "olive_oil", image: ""},
    {food: "vegetable_oil", image: ""},
    {food: "balsamic_vinegar", image: ""},
    {food: "red_wine_vinegar", image: ""},
    {food: "rice", image: ""},
    // {food: "kosher_salt", image: ""},
    // {food: "pepper", image: ""},
    // {food: "canned_tuna", image: ""},
    // {food: "beans", image: ""},
    // {food: "quinoa", image: ""},
    // {food: "pasta", image: ""},
    // {food: "flour", image: ""},
    // {food: "granulated_sugar", image: ""},
    // {food: "garlic", image: ""},
    // {food: "onions", image: ""},
    // {food: "butter", image: ""},
    // {food: "milk", image: ""},
    // {food: "eggs", image: ""},
    // {food: "carrot", image: ""},
    // {food: "mustard", image: ""},
    // {food: "mayonnaise", image: ""},
    // {food: "lemon", image: ""},
    // {food: "nuts", image: ""},
    // {food: "bread", image: ""},
    // {food: "potato", image: ""},
    // {food: "thyme", image: ""},
    // {food: "bell_pepper", image: ""},
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

// array for incorrect letters
var letterWrong = [];

// FUNCTION renderWord Chooses and renders the word randomly
function renderWord() {

    random = Math.floor(Math.random() * foodItems.length);

    // Randomly selects food+image 
    foodSelection = foodItems[random];
    // Translates the food into underscores 
    for (i=0; i < foodSelection.food.length; i++){
        if (foodSelection.food[i] !== "_"){
         wordAnswer[i] = "_ ";
        }
        else {
            wordAnswer[i] = ("&nbsp; &nbsp; &nbsp;");
        }
    }
    // Adds the word into the html ID for visibility using the .join function to remove the commas
    document.querySelector("#word-selection").innerHTML = wordAnswer.join("");
};

// FUNCTION removeFood removes the randomly selected food index
function removeFood(){
    foodItems.splice(random, 1);
}

// Accepts userGuess input and determines if it's a letter in wordAnswer or letterWrong

document.onkeyup = function(event) {

    userGuess = event.key.toLowerCase();

    alert(userGuess);

    // Sets a loop to run through each foodSelection.food letter
    for (i=0; i < foodSelection.food.length; i++){
        
        // Determines if the food index letter to match the user guess.
        if (userGuess == foodSelection.food[i]) {

            // replaces the letter
            wordAnswer.splice(i, 1, userGuess);
            document.querySelector("#word-selection").innerHTML = wordAnswer.join("");
        }
    }
}




function test(){
    renderWord();
    console.log(foodSelection);
    console.log(random);
    removeFood();
    console.log(wordAnswer);
    console.log(foodItems);
}

test();
console.log(userGuess)