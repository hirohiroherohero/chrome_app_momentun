const quotes = [
  {
    quote: "Life is unfair, get used to it.",
  },
  {
    quote: "Love what you do.",
  },
  {
    quote: "when in doubt, choose change.",
  },
  {
    quote: "if not now, then when?",
  },
  {
    quote: "He can do, she can do, why not me?",
  },
  {
    quote: "Live positive.",
  },
  {
    quote: "This is how life is.",
  },
  {
    quote: "Don't dream, Be it.",
  },
  {
    quote: "Love yourself.",
  },
  {
    quote: "Life is a journey",
  },
  {
    quote: "Time is flying never to return",
  },
  {
    quote: "Envy and wrath shorten life",
  },
];

const quote = document.getElementById("quotes");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
