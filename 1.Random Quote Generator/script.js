const button = document.getElementById("button");
const quoteBox = document.getElementById("quote");
const author = document.getElementById("author");

//quotes for testing
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Do not watch the clock. Do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        text: "Don’t be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        text: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson"
    },
    {
        text: "Opportunities don't happen. You create them.",
        author: "Chris Grosser"
    },
    {
        text: "Try not to become a man of success. Rather become a man of value.",
        author: "Albert Einstein"
    }
];


button.addEventListener("click", () => {




    fetch('https://dummyjson.com/quotes')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        })
        .then(data => {
            const quotesArray = data.quotes; 
            const random = Math.floor(Math.random() * (quotesArray.length));

            quoteBox.innerHTML = quotesArray[random].quote;
            author.innerHTML = `~ ${quotesArray[random].author}`;
        })

})