const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const button = document.querySelector('button');

const quotes = [
    {
        quote : "It is never too late to be what you might have been.",
        author : "George Eliot"
    },
    {
        quote : "Pain is inevitable. Suffering is optional.",
        author : "Haruki Murakami"
    },
    {
        quote : "But I am very poorly today & very stupid & I hate everybody & everything. One lives only to make blunders.",
        author : "Charles Darwin"
    },
    {
        quote : "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
        author : "Oscar Wilde"
    },
    {
        quote : "Everything is hard before it is easy",
        author : "Johann Wolfgang von Goethe"
    },
    {
        quote : "Greatest Battles are with closest people",
        author : "Trivikram"
    },
    {
        quote : "Success is not a destination , Success is a journey",
        author : "Vamsi Paidipally"
    },
    {
        quote : "Straight roads do not make skillful drivers.",
        author : "Paula Coelho"
    }
];

button.addEventListener('click',function(){

    let randomIndex = Math.floor(Math.random() * quotes.length);

    quote.innerText=quotes[randomIndex].quote;
    author.innerText = quotes[randomIndex].author;
})