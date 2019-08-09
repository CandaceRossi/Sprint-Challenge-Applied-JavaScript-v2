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
    response.data.topics.forEach(articleTopic => {
      topics.appendChild(createTab(articleTopic));
    });
  })
  .catch(error => {
    console.log("ERROR", error);
  });

function createTab(topicObject) {
  //create elements
  const tab = document.createElement("div");

  //set styles
  tab.classList.add("tab");

  //append to variables
  tab.appendChild(topics);

  //text to content
  tab.textContent = topicObject;

  return tab;
}
