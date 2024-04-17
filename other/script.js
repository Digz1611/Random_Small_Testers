const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');

function getQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteText.textContent = data.content;
            quoteAuthor.textContent = `- ${data.author}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            quoteText.textContent = 'An error occurred while fetching the quote.';
            quoteAuthor.textContent = '';
        });
}

newQuoteBtn.addEventListener('click', getQuote);

// Initial quote fetch
getQuote();

function changeB() {
    var element = document.getElementById("bd");
    if (element.style.backgroundImage.includes("misty_forest.jpg")) {
        element.style.backgroundImage = "linear-gradient(to bottom right, rgb(107, 32, 255), rgb(32, 255, 117))";
    } else {
        element.style.backgroundImage = "url(other/misty_forest.jpg)";
    }
}

