// Define an array of flag data (country names and flag URLs)
const flags = [
    { country: "USA", flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" },
    { country: "Canada", flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg" },
    { country: "United Kingdom", flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_Kingdom.svg" },
    { country: "Australia", flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg" },
    { country: "Germany", flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg" },
    { country: "France", flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" },
    { country: "Italy", flag: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg" },
    { country: "Spain", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" },
    { country: "Japan", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg" },
    { country: "Brazil", flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" },
    { country: "India", flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" },
    { country: "South Korea", flag: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_South_Korea.svg" },
    { country: "Mexico", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" },
    { country: "Russia", flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg" },
    { country: "China", flag: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_China.svg" },
    { country: "Argentina", flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" },
    { country: "South Africa", flag: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg" },
    { country: "New Zealand", flag: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_New_Zealand.svg" },
    { country: "Egypt", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" }
];

let currentFlagIndex = 0; //track the current flag displayed

const acceptableAnswers = {
    "USA": ["us", "usa", "america"],
    "Canada": ["canada", "ca"],
    "United Kingdom": ["uk", "united kingdom", "england"],
    "Australia": ["australia", "aus"],
    "Germany": ["germany", "de", "deutschland"],
    "France": ["france", "fr"],
    "Italy": ["italy", "it"],
    "Spain": ["spain", "es", "espana"],
    "Japan": ["japan", "jp"],
    "Brazil": ["brazil", "br"],
    "India": ["india", "in"],
    "South Korea": ["south korea", "kr", "rok"],
    "Mexico": ["mexico", "mx"],
    "Russia": ["russia", "ru"],
    "China": ["china", "cn"],
    "Argentina": ["argentina", "ar"],
    "South Africa": ["south africa", "za"],
    "New Zealand": ["new zealand", "nz"],
    "Egypt": ["egypt", "eg"]
};

document.getElementById("answer").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if (document.getElementById("guess-button").style.display !== "none") {
            checkAnswer();
        } else {
            displayFlag();
        }
    }
});

// Simulate .equalsIgnoreCase() using toLowerCase()
function equalsIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

// Function to check if the user's answer is correct (case-insensitive)
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim(); // User input
    const correctAnswer = flags[currentFlagIndex].country; // Correct country name

    const resultElement = document.getElementById("result");

    // Compare user input with acceptable answers (case-insensitive)
    if (acceptableAnswers[correctAnswer] && acceptableAnswers[correctAnswer].some(answer => equalsIgnoreCase(userAnswer, answer))) {
        resultElement.textContent = `Correct! It was ${flags[currentFlagIndex].country}.`;
    } else if (equalsIgnoreCase(userAnswer, correctAnswer)) {
        resultElement.textContent = `Correct! It was ${flags[currentFlagIndex].country}.`;
    } else {
        resultElement.textContent = `Incorrect. The correct answer was ${flags[currentFlagIndex].country}.`;
    }

    resultElement.style.display = "block";
    document.getElementById("next-flag").style.display = "block"; // Show next flag button
    document.getElementById("guess-button").style.display = "none"; // Hide guess button after answer
}

// Function to display the next flag
function displayFlag() {
    currentFlagIndex = (currentFlagIndex + 1) % flags.length; // Loop through the flags array

    // Reset the form for the next question
    document.getElementById("answer").value = "";
    document.getElementById("result").style.display = "none";
    document.getElementById("guess-button").style.display = "block";
    document.getElementById("next-flag").style.display = "none";

    // Get the flag data
    const flagData = flags[currentFlagIndex];

    // Set the flag image, and move to the next flag if image not found
    const flagImage = document.getElementById("flag-image");
    flagImage.src = flagData.flag;

    // Check if the image exists, if not, move to next flag
    flagImage.onload = () => {
        document.getElementById("question").textContent = `What's the name of this country?`;
    };
    
    flagImage.onerror = () => {
        displayFlag(); // Move to the next flag if image doesn't load
    };
}

// Initialize the first flag when the page loads
window.onload = displayFlag;
