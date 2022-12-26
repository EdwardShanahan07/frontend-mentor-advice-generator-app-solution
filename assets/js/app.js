const generateDOMElements = (data) => {
  const quoteNumberElement = document.createElement("p");
  const quoteElement = document.createElement("p");
  const divElement = document.createElement("div");

  quoteNumberElement.classList.add("card__id");
  quoteElement.classList.add("card__quote");

  divElement.appendChild(quoteNumberElement);

  quoteNumberElement.textContent = data.slip.id;
  quoteElement.textContent = data.slip.advice;

  divElement.appendChild(quoteElement);

  return divElement;
};

const getData = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => generateDOMElements(data));
};

const renderApp = () => {
  getData("https://api.adviceslip.com/advice");

  document.querySelector(".card__results").innerHTML = generateDOMElements();
};

renderApp();
