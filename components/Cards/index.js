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

const article = document.querySelectorAll('.card')
console.log("woopee", article)
article.forEach(data => {
    article.appendChild(createArticle(data.card, data.headline, data.author, data.container, data.img, data.authName))
})

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((data) => {
        //here is where we get results from server
        console.log('study', data)
        const art = data.data.articles
        console.log("woohoostudy", art)
        const elements = createArticle(art)
        console.log('yeehawnyawn', elements)
        topics.appendChild(elements)

        const article = document.querySelectorAll('.card')
        console.log("woopee", article)
        for ([i] in article) {
            article[i](dat => {
                article.appendChild(createArticle(dat.card, dat.headline, dat.author, dat.container, dat.img, dat.authName))
            })
        }
    })

.catch((error) => {
    console.log('ERROR', error);
})

function createArticle(articleObj) {

    //create dom variables
    const articleCard = document.createElement('div')
    const articleCards = document.createElement('div')
    const articleHeadline = document.createElement('div')
    const articleAuthor = document.createElement('div')
    const articleContainer = document.createElement('div')
    const articleImg = document.createElement('img')
    const articleAuthName = document.createElement('span')

    //attach to classes

    articleCards.classList.add('cards-container')
    articleCard.classList.add('card')
    articleHeadline.classList.add('headline')
    articleAuthor.classList.add('author')
    articleContainer.classList.add('img-container')
    articleImg.classList.add('img')
    articleAuthName.classList.add('span')

    //append to variables
    articleCard.appendChild(articleCards)
    articleCards.appendChild(articleHeadline)
    articleCards.appendChild(articleAuthor)
    articleCards.appendChild(articleContainer)
    articleCards.appendChild(articleImg)
    articleCards.appendChild(articleAuthName)


    //text to content 
    articleHeadline = `${articleObj.articles[0].headline}`
    articleAuthor.textContent = `Author: ${articleObj.articles[0].authorName}`
    articleImg.src = `${articleObj.articles[0].authorPhoto}`
    articleAuthName.textContent = `Author Name ${articleObj.article[0].authorName}`

    return articleCards

}