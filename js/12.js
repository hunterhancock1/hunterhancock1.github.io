document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("newQuote");
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
  
    async function updateQuote() {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();

    if (response.ok) {
        quote.textContent = data.content;
        author.textContent = data.author;
    } else {
        quote.textContent = "An error occured";
        console.log(data);
    }
    }

    button.addEventListener("click", updateQuote);
    updateQuote();
});
  