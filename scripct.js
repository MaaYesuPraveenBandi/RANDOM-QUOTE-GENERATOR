  const quotes = [
      { text: "The best way to predict the future is to invent it.", author: "Ram Jakku" },
      { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Chintu" },
      { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Sindhu" },
      { text: "Be yourself; everyone else is already taken.", author: "Evado gottam gadu" },
      { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Tanmai" },
      { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Samanvitha" }
  ];


  const quoteText = document.getElementById("quote");
  const quoteAuthor = document.getElementById("author");
  const newQuoteButton = document.getElementById("new-quote");


  function generateQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      quoteText.textContent = `"${randomQuote.text}"`;
      quoteAuthor.textContent = `- ${randomQuote.author}`;
  }

  newQuoteButton.addEventListener("click", generateQuote);
