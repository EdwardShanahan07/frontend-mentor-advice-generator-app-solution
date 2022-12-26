const getData = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));

getData("https://api.adviceslip.com/advice");
