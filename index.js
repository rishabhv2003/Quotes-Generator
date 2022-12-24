const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById('btn');
let number = 0;
// function to generate random numbers
const getNewQuotes = ()=>{
    let num = Math.floor(Math.random() * (1642 - 0) + 0);
    number = num;
    return num;
}
generator(); // calling the function here so that div won't load blank
btn.addEventListener("click", generator);
let realData = "";

async function generator() {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        quote.innerHTML = `" ${realData[getNewQuotes()].text} "`;
        author.innerHTML = `by : ${realData[number].author}`
    } catch (error) {
        alert("An error has occurred pls reload the page.")
    }
}