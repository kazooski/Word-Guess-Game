// Javascript for game
// The splicing of a pantrySelection
        // while( array.length ) {
        //     var index = Math.floor( Math.random()*array.length );
        //     console.log( array[index] ); // Log the item
        //     array.splice( index, 1 ); // Remove the item from the array
        // }
// REMOVE THE COMMAS FROM ARRAY BEING PRINTED

// Global variables

// foodItems is an object that holds the food and image
var foodItems = [
    {food: "olive oil", image: ""},
    {food: "vegetable oil", image: ""},
    {food: "balsamic vinegar", image: ""},
    {food: "red wine vinegar", image: ""},
    {food: "kosher salt", image: ""},
    {food: "pepper", image: ""},
    {food: "canned tuna", image: ""},
    {food: "beans", image: ""},
    {food: "rice", image: ""},
    {food: "quinoa", image: ""},
    {food: "pasta", image: ""},
    {food: "flour", image: ""},
    {food: "granulated sugar", image: ""},
    {food: "garlic", image: ""},
    {food: "onions", image: ""},
    {food: "butter", image: ""},
    {food: "milk", image: ""},
    {food: "eggs", image: ""},
    {food: "carrot", image: ""},
    {food: "mustard", image: ""},
    {food: "mayonnaise", image: ""},
    {food: "lemon", image: ""},
    {food: "nuts", image: ""},
    {food: "bread", image: ""},
    {food: "potato", image: ""},
    {food: "thyme", image: ""},
    {food: "bell pepper", image: ""},
]

var wins = 0;
// The number of allowed gueses per word
var userCount = 7;
console.log(userCount);

var wordAnswer = [];


// Chooses and renders the word randomly
function renderWord() {

    // Randomly selects food+image 
    var foodSelection = foodItems[Math.floor(Math.random() * foodItems.length)];
    // Translates the food into underscores 
    for (i=0; i < foodSelection.food.length; i++){
         wordAnswer[i] = "_ ";
    }
    // Adds the word into the html ID for visibility
    document.querySelector("#word-selection").innerHTML = wordAnswer;
};

renderWord();
console.log(wordAnswer);
document.getElementById("#user-guesses") = userCount + "did it print??";

// Function for user input

// Removes foodSelection from array foodItems 
// remove = arr.splice(foodSelection,1);