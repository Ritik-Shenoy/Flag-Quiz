// Define an array of flag data (country names and flag URLs)
	const flags = 
		[
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
			{ country: "Egypt", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" },
			{ country: "Sweden", flag: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg" },
			{ country: "Norway", flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" },
			{ country: "Finland", flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg" },
			{ country: "Denmark", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg" },
			{ country: "Netherlands", flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" },
			{ country: "Belgium", flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg" },
			{ country: "Switzerland", flag: "https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland.svg" },
			{ country: "Austria", flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg" },
			{ country: "Portugal", flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg" },
			{ country: "Greece", flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg" },
			{ country: "Turkey", flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" },
			{ country: "Poland", flag: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg" },
			{ country: "Czech Republic", flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg" },
			{ country: "Hungary", flag: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg" },
			{ country: "Ireland", flag: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg" },
			{ country: "Iceland", flag: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg" },
			{ country: "Thailand", flag: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg" },
			{ country: "Vietnam", flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" },
			{ country: "Philippines", flag: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg" },
			{ country: "Malaysia", flag: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg" },
			{ country: "Singapore", flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg" },
			{ country: "Indonesia", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg" },
			{ country: "Pakistan", flag: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" },
			{ country: "Bangladesh", flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg" },
			{ country: "Saudi Arabia", flag: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" },
			{ country: "United Arab Emirates", flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg" },
			{ country: "Israel", flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg" },
			{ country: "Nigeria", flag: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg" },
			{ country: "Kenya", flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg" },
			{ country: "Morocco", flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg" }
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
    "Egypt": ["egypt", "eg"],
    "Norway": ["norway", "no"],
	"Finland": ["finland", "fi"],
	"Denmark": ["denmark", "dk"],
	"Netherlands": ["netherlands", "nl", "holland"],
	"Belgium": ["belgium", "be"],
	"Switzerland": ["switzerland", "ch"],
	"Austria": ["austria", "at"],
	"Portugal": ["portugal", "pt"],
	"Greece": ["greece", "gr"],
	"Turkey": ["turkey", "tr"],
	"Poland": ["poland", "pl"],
	"Czech Republic": ["czech republic", "cz", "czechia"],
	"Hungary": ["hungary", "hu"],
	"Ireland": ["ireland", "ie"],
	"Iceland": ["iceland", "is"],
	"Thailand": ["thailand", "th"],
	"Vietnam": ["vietnam", "vn"],
	"Philippines": ["philippines", "ph"],
	"Malaysia": ["malaysia", "my"],
	"Singapore": ["singapore", "sg"],
	"Indonesia": ["indonesia", "id"],
	"Pakistan": ["pakistan", "pk"],
	"Bangladesh": ["bangladesh", "bd"],
	"Saudi Arabia": ["saudi arabia", "sa", "ksa"],
	"United Arab Emirates": ["united arab emirates", "uae", "ae"],
	"Israel": ["israel", "il"],
	"Nigeria": ["nigeria", "ng"],
	"Kenya": ["kenya", "ke"],
	"Morocco": ["morocco", "ma"]
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
        resultElement.textContent = `Correct! It was ${correctAnswer}.`;
    } else if (equalsIgnoreCase(userAnswer, correctAnswer)) {
        resultElement.textContent = `Correct! It was ${correctAnswer}.`;
    } else {
        resultElement.textContent = `Incorrect. The correct answer was ${correctAnswer}.`;
    }

    resultElement.style.display = "block";
    document.getElementById("next-flag").style.display = "block"; // Show next flag button
    document.getElementById("guess-button").style.display = "none"; // Hide guess button after answer
}

// Function to get a random flag index
function getRandomFlagIndex() {
    return Math.floor(Math.random() * flags.length);
}

// Function to display the next flag
function displayFlag() {
    currentFlagIndex = getRandomFlagIndex(); // Pick a random flag

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
