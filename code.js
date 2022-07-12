const pId = document.getElementById("id");
const image = document.getElementById("image");
const pName = document.getElementById("name");
const button = document.getElementById("button");
const container = document.querySelector(".container");
const error = document.getElementById("error");

console.log(container);
button.addEventListener("click", () => {
  newPokemon();
});

const newPokemon = async () => {
  let randomNumber = Math.floor(Math.random() * 160) + 1;

  let request = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

  let data = await fetch(request);
  if (data.ok) {
    let response = await data.json();
    pId.innerText = `#${response.id}`;
    pName.innerText = response.name;
    image.src = response.sprites.front_default;
  } else {
    error.innerText = "Error :(";
    container.style.display = "none";
  }
};

newPokemon();
