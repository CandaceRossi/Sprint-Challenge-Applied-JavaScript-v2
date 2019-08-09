// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    //here is where we get results from server
    console.log("study", response.data);
    const articles = response.data.articles;
    for (topic in articles) {
      articles[topic].forEach(article => {
        cards.appendChild(createArticle(article));
      });
    }
  })

  .catch(error => {
    console.log("ERROR", error);
  });

function createArticle(articleObj) {
  console.log("comment", articleObj);
  //create dom variables
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorName = document.createElement("span");

  //attach to classes

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  //text to content
  headline.textContent = `${articleObj.headline}`;
  console.log("man o man", headline);
  author.textContent = `By ${articleObj.authorName}`;
  console.log("okaynow", author);
  img.src = `${articleObj.img}`;
  console.log("geez", img);

  //append to variables
  cards.appendChild(card);
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(authorName);

  return card;
}
