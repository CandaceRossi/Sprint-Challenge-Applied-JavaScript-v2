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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((data) => {
        //here is where we get results from server
        console.log('study', data)
        const art = data.data.articles.bootstrap
        console.log("woohoostudy", art)
            // const elements = createArticle(data)
        console.log('yeehawnyawn', elements)
        articleCards.appendChild(elements)
        console.log("sayitaintso", articleCards.appendChild(elements))
            // const article = document.querySelectorAll('.card')
            // console.log("woopee", article)
            // for (elements in art) {
        art.forEach((data => {
                articleCards.appendChild(createArticle(data))
            }))
            // }

    })


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((data) => {
        //here is where we get results from server
        console.log('study', data)
        const art1 = data.data.articles.javascript
        console.log("hardyharhar2", art1)
        const elements1 = createArticle(data)
        console.log('sandytoes2', elements1)
        articleCards.appendChild(elements1)

    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((data) => {
        //here is where we get results from server
        console.log('study', data)
        const art2 = data.data.articles.jquery
        console.log("hardyharhar3", art2)
        const elements2 = createArticle(data)
        console.log('sandytoes3', elements2)
        articleCards.appendChild(elements2)

    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((data) => {
        //here is where we get results from server
        console.log('study', data)
        const art3 = data.data.articles.node
        console.log("hardyharhar4", art3)
        const elements3 = createArticle(data)
        console.log('sandytoes4', elements3)
        articleCards.appendChild(elements3)

    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((data) => {
        //here is where we get results from server
        console.log('study', data)
        const art4 = data.data.articles.technology
        console.log("hardyharhar5", art4)
        const elements4 = createArticle(data)
        console.log('sandytoes5', elements4)
        articleCards.appendChild(elements4)

    })

.catch((error) => {
    console.log('ERROR', error);
})

const articleCards = document.querySelector('cards-container')


function createArticle(articleObj) {

    //create dom variables
    const articleCard = document.createElement('div')
    const articleHeadline = document.createElement('div')
    const articleAuthor = document.createElement('div')
    const articleContainer = document.createElement('div')
    const articleImg = document.createElement('img')
    const articleAuthName = document.createElement('span')

    //attach to classes

    articleCard.classList.add('card')
    articleHeadline.classList.add('headline')
    articleAuthor.classList.add('author')
    articleContainer.classList.add('img-container')
    articleImg.classList.add('img')
    articleAuthName.classList.add('span')

    //append to variables
    articleCards.appendChild(articleCard)
    articleCard.appendChild(articleHeadline)
    articleCard.appendChild(articleAuthor)
    articleCard.appendChild(articleContainer)
    articleCard.appendChild(articleImg)
    articleCard.appendChild(articleAuthName)


    //text to content 
    articleHeadline.textContent = `${articleObj.headline}`
    console.log("man o man", articleHeadline)
    articleAuthor.textContent = `Author: ${articleObj.authorName}`
    console.log("okaynow", articleAuthor)
    articleImg.src = `${articleObj.authorPhoto}`
    console.log("geez", articleImg)
    articleAuthName.textContent = `Author Name ${articleObj.authorName}`
    console.log("somethinsomethin", articleAuthName)

    return articleCards

}