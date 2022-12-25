fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then((data) => console.log(data));
