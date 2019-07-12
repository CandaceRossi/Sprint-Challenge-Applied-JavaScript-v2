// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.tabs')
console.log("woopee", topics)

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((data) => {
        //here is where we get results from server
        console.log('response', data)
        const tabs = data.data.topics
        console.log("woohoo", tabs)
        const element = createTab(tabs)
        console.log('yeehaw', element)
        topics.appendChild(element)
    })
    .catch((error) => {
        console.log('ERROR', error);
    })



function createTab(topicObject) {

    //create elements
    const tab1 = document.createElement('div')
    const tab2 = document.createElement('div')

    //set styles
    tab1.classList.add('tabs')
    tab2.classList.add('topics')
    tab2.classList.add('tab')
    tab2.classList.add('active-tab')

    //append to variables
    tab1.appendChild(tab2)

    //text to content
    tab2.textContent = `${topicObject.tab2}`

    return tab1
}