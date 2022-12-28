const generateDOMElements = (data) => {
  const divElement = document.createElement("div");
  const idElement = document.createElement("p");
  const quoteElement = document.createElement("h1");

  idElement.textContent = `ADVICE #${data.slip.id}`;
  idElement.classList.add("card__id");
  quoteElement.textContent = `${data.slip.advice}`;
  quoteElement.classList.add("card__quote");

  divElement.appendChild(idElement);
  divElement.appendChild(quoteElement);

  document.querySelector(".card__results").innerHTML = "";

  document.querySelector(".card__results").appendChild(divElement);
};

const fetchData = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  generateDOMElements(data);
};

fetchData();

document.querySelector("button").addEventListener("click", fetchData);
