// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

// function Header() {

//     //create dom variables
//     const articleHeader = document.createElement('div')
//     const date = document.createElement('span')
//     const heading = document.createElement('h1')
//     const temp = document.createElement('span')

//     //attach to classes
//     articleHeader.classList.add('header')
//     date.classList.add('date')
//     temp.classList.add('temp')

//     //append to variables
//     articleHeader.appendChild(date)
//     articleHeader.appendChild(heading)
//     articleHeader.appendChild(temp)

//     //text to content
//     date.textContent = `SMARCH 28, 2019`
//     heading.textContent = `Lambda Times`
//     temp.textContent = `98°`

//     return articleHeader
// }
// const headerContainer = document.querySelector('.header-container')
// headerContainer.appendChild(Header())
