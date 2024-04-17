// Get elements from the DOM
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const buttons = document.querySelectorAll("button");

// Function to fetch a new quote from the API
function getQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteText.textContent = data.content; // Set the quote text
            quoteAuthor.textContent = `- ${data.author}`; // Set the author
        })
        .catch(error => {
            console.error('Error fetching data:', error); // Log error
            quoteText.textContent = 'An error occurred while fetching the quote.'; // Display error message
            quoteAuthor.textContent = '';
        });
}

// Add event listener to the new quote button to fetch a new quote
newQuoteBtn.addEventListener('click', getQuote);

// Initial quote fetch when the page loads
getQuote();

// Function to change the background image of an element
function changeB() {
    var element = document.getElementById("bd");
    if (element.style.backgroundImage.includes("misty_forest.jpg")) {
        element.style.backgroundImage = "linear-gradient(to bottom right, rgb(107, 32, 255), rgb(32, 255, 117))";
    } else {
        element.style.backgroundImage = "url(other/misty_forest.jpg)";
    }
}

// Add event listener to all buttons to remove focus after a delay
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        var currentButton = this;
        setTimeout(function() {
            currentButton.blur(); // Remove focus from the button after 0.75 seconds
        }, 750); // 750 milliseconds = 0.75 seconds
    });
});
