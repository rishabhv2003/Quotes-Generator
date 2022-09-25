const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById('btn');
fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(data => {
            quote.innerHTML = `" ${data.content}"`;
            author.innerHTML = `by : ${data.author}`;
        })
btn.addEventListener("click", generator);
function generator() {
    fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(data => {
            quote.innerHTML = `" ${data.content}"`;
            author.innerHTML = `by : ${data.author}`;
        })
}