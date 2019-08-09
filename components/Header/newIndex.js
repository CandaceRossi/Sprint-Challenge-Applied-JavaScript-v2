// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >

function Header() {
  //create dom variables
  const lambdaHeader = document.createElement("div");
  const date = document.createElement("span");
  const heading = document.createElement("h1");
  const temp = document.createElement("span");

  //set styles
  lambdaHeader.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");
  //text to content
  date.textContent = `SMARCH 28, 2019`;
  heading.textContent = `Lambda Times`;
  temp.textContent = `98°`;
  //append to variables

  return lambdaHeader;
}

// And add it to the DOM in the header-container component

const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());
