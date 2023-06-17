const vibeButton = document.querySelector("#vibe-button")

function generateVibe(){
    
    const generatedVibeDiv = document.querySelector("#generated-vibe")
    const vibeArray = ["Black", "White", "Black and White", "Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink", "Brown", "Grey", "Super Heroes", "Star Wars", "Anime", "Fantasy", "High School Superlatives", "Animal Friends", "Tough Guy", "Sports", "Food", "Samurai", "My Squad", "Robot", "Alien"]

    var randomVibe = vibeArray[Math.floor(Math.random() * vibeArray.length)];
    console.log(randomVibe)
    generatedVibeDiv.textContent = randomVibe
   
}


vibeButton.addEventListener("click", generateVibe)
