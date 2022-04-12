document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("newQuote");
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
    const more = document.getElementById("moreInfo");
    const info = document.getElementById("info");
  
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

        more.textContent = "More information about the author"
    }

    async function giveMoreInfo() {
        const response2 = await fetch();
        const data2 = await response2.json();
    }

    button.addEventListener("click", updateQuote);

    more.addEventListener("click", giveMoreInfo);
});
  