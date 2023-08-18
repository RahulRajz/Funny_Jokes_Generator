let jokes = document.getElementById("jokes");
let btn = document.getElementById("btn");

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";


let getjoke = ()=>{
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokes.textContent = `${item.joke}`;
    });
}

btn.addEventListener('click',getjoke);
