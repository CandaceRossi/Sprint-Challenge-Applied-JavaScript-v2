// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector(".topics");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    //here is where we get results from server
    console.log("response", response);
    response.data.topics.forEach(lambdaTopic);
    topics.appendChild(newTab(lambdaTopic));
  })

  .catch(error => {
    console.log("ERROR", error);
  });

function newTab(item) {
  //create Elements
  const tab = document.createElement("div");
  //set Styles
  tab.classList.add("tab");

  //text to content
  tab.textContent = topicObject;

  //append to variables
  // tab.appendChild();

  return tab;
}
