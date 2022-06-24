document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("newQuote");
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");

    const copy = document.getElementById("copy");
    const copyButton = document.getElementById("copyQuote");
    const result = document.getElementById("result");
  
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

        copy.textContent = "Copy quote to clipboard"
        document.getElementById("copyQuote").style.display= "block";

        copyButton.addEventListener("click", copyContnet);
        function copyContnet() {
            navigator.clipboard.writeText(data.content + " -" + data.author);
            result.textContent = "Quote copied to clipboard"
        }
    }  


    button.addEventListener("click", updateQuote);

});
  