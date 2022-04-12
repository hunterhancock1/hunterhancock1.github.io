document.getElementById("newQuote").addEventListener("click",newQuote);

async function newQuote() {
    const response = await
    fetch("https://api.quotable.io/random");
    const quote = response.json()

    console.log(quote);

    document.getElementById("quote").innerHTML = quote.content;
    document.getElementById("author").innerHTML = quote.author;
}