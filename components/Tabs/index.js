// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// const topics = document.querySelector('.tabs')
// console.log("woopee", topics)

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((data) => {
        //here is where we get results from server
        console.log('response', data)
        const tabs = data.data.topics
        console.log("spew", tabs)
        const element = createTab(data)
        console.log('narf', element)
        tabs.appendChild(element)
    })
    .catch((error) => {
        console.log('ERROR', error);
    })

function createTab(topicObject) {

    //create elements
    const tab1 = document.createElement('div')
    const tab2 = document.createElement('div')
    const tab3 = document.createElement('div')
    const tab4 = document.createElement('span')

    //set styles
    tab1.classList.add('tabs')
    tab2.classList.add('tab')
    tab3.classList.add('topics')
    tab4.classList.add('title')

    //append to variables
    tab1.appendChild(tab2)
    tab2.appendChild(tab3)
    tab3.appendChild(tab4)

    //text to content
    tab4.textContent = topicObject
        // tab3.textContent = tab3
        // tab4.textContent = tab4

    return tab1
}