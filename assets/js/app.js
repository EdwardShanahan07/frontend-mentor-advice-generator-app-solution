const getData = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => generateDOMElements(data));

const generateDOMElements = (data) => {
  const quoteNumberElement = document.createElement("p");
  const quoteElement = document.createElement("p");
  const divElement = document.createElement("div");

  quoteNumberElement.classList.add("card__id");
  quoteElement.classList.add("card__quote");

  divElement.appendChild(quoteNumberElement);

  quoteNumberElement.textContent = data.slip.id;
  quoteElement.textContent = data.slip.adivce;

  divElement.appendChild(quoteElement);

  return divElement;
};

getData("https://api.adviceslip.com/advice");
