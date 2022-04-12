document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("newQuote");
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
  
    async function updateQuote() {
      // Fetch a random quote from the Quotable API
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      
      if (response.ok) {
        // Update DOM elements
        quote.textContent = data.content;
        author.textContent = data.author;
      } else {
        quote.textContent = "An error occured";
        console.log(data);
      }
    }
  
    // Attach an event listener to the `button`
    button.addEventListener("click", updateQuote);
    updateQuote();
  });
  