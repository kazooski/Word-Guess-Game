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
    for (i=0; i < foodSelection.food.length; i++){
        if (foodSelection.food[i] !== "_"){
         wordAnswer[i] = "_ ";
        }
        else {
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
function removeFood(){
    foodItems.splice(random, 1);
}

// Accepts userGuess input and determines if it's a letter in wordAnswer or letterWrong

document.onkeyup = function(event) {

    userGuess = event.key.toLowerCase();

     

    // Sets a loop to run through each foodSelection.food letter
    for (i=0; i < foodSelection.food.length; i++){

        if (wordAnswer.includes(foodSelection.food[i])) {
            //letter has already been used
            alert("nah");
            return;
        }
        
        // Actions if the food index letter to match the user guess.
        if (userGuess == foodSelection.food[i]) {

            // replaces the letter
            wordAnswer.splice(i, 1, userGuess);
            document.querySelector("#word-selection").innerHTML = wordAnswer.join("");
            letterCount--;
            document.querySelector("#letter-count").innerHTML = letterCount;
        }


        // else {
        //     alert("nope");
        // }
    }

    if (letterCount == 0) {
        renderWord();
        removeFood();
    }

    // for (i=0; i < wordAnswer.length; i++){

    //     if (userGuess != wordAnswer[i]) {
    //         // adds the wrong letter to the letterWrong string
    //         alert("wrong");
    //         letterWrong.push(userGuess);
    //         // document.getElementByID("#user-guesses").innerHTML = letterWrong.join("");
    //     }
}


    //         // Actions if the food index letter does NOT match the user guess
    // if (userGuess) {
    //     // adds the wrong letter to the letterWrong string
    //     alert("wrong");
    //     letterWrong.push(userGuess);
    //     document.getElementByID("#user-guesses").innerHTML = letterWrong.join("");
    //     // break;
    // }




// function test(){
    renderWord();
    console.log(foodSelection);
    console.log(random);
    removeFood();
    console.log(wordAnswer);
    console.log(foodItems);
    console.log(letterCount);
// }