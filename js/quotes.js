const quote = document.querySelector('#quotes span:first-child');
const author = document.querySelector('#quotes span:last-child');
console.log(author, quote);

const quoteFetch = async () => {
  const data = await fetch('https://type.fit/api/quotes');
  const dataJson = await data.json();
  const randomNum = Math.floor(Math.random() * dataJson.length);
  quote.innerHTML = `${dataJson[randomNum].text}`;
  author.innerHTML = `${dataJson[randomNum].author}`;
};

quoteFetch();
