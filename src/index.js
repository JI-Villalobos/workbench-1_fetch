/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

//const { doc } = require("prettier");

const baseUrl = "https://platzi-avo.vercel.app"

const appNode = document.querySelector('#app')

//web api fetch
//conect with the server
window
    .fetch(`${baseUrl}/api/avo`)
//process the request and parse on JSON
    .then(response => response.json())
    //JSON --> data --> render data
    .then(responseJson => {
        const allItems = []

        responseJson.data.forEach((item) => {
            //image
            const image = document.createElement('img')
            image.src = `${baseUrl}${item.image}`

            //title
            const title = document.createElement('h2')
            title.textContent = item.name

            //price
            const price = document.createElement('div')
            price.textContent = item.price

            const container = document.createElement('div')
            container.append(image, title, price)

            allItems.push(container)
        });

        appNode.append(...allItems)
    })

    /*
    with async-await

//web api
async function fetchData() {
  const response = await fetch(url),
  data = await response.json(),
  allItems = [];

  data.data.forEach((item) => {
    // create image
    const image = document.createElement("img");
    // create title
    const title = document.createElement("h2");
    // create price
    const price = document.createElement("div");

    const container = document.createElement("div");
    container.append(image, title, price);

    allItems.push(container);
  });

  document.body.append(...allItems)
}

fetchData();
    */