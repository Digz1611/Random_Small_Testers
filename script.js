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
