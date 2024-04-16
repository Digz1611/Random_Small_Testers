// const quoteText = document.getElementById('quoteText');
// const quoteAuthor = document.getElementById('quoteAuthor');
// const newQuoteBtn = document.getElementById('newQuoteBtn');

// function getQuote() {
//     fetch('https://api.quotable.io/random')
//         .then(response => response.json())
//         .then(data => {
//             quoteText.textContent = data.content;
//             quoteAuthor.textContent = `- ${data.author}`;
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             quoteText.textContent = 'An error occurred while fetching the quote.';
//             quoteAuthor.textContent = '';
//         });
// }

// newQuoteBtn.addEventListener('click', getQuote);

// // Initial quote fetch
// getQuote();



const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const stickyButton = document.getElementById('stickyButton');
const container = document.querySelector('.container');

let isImageBackground = false;

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

stickyButton.addEventListener('click', function() {
    if (isImageBackground) {
        container.style.backgroundImage = 'none';
        container.style.backgroundColor = 'linear-gradient(to bottom right, rgb(107, 32, 255), rgb(32, 255, 117))';
    } else {
        container.style.backgroundImage = 'url(misty-forest.jpg)';

        container.style.backgroundColor = 'transparent';
    }
    isImageBackground = !isImageBackground;
});

// Initial quote fetch
getQuote();
