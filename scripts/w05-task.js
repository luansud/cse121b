/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement("article");
        let name = document.createElement("h3");
        name.innerText = temple.templeName;

        let imageTemple = document.createElement("img");
        imageTemple.src = temple.imageUrl;
        imageTemple.alt = temple.location;

        article.appendChild(name);
        article.appendChild(imageTemple);

        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async() => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
  };

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    switch (document.querySelector("#sortBy").value) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
      
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
      
        case "older":
            displayTemples(temples.filter(temple => parseInt(temple.dedicated) < new Date(1950, 0, 1)));
            break;
      
        case "all":
            displayTemples(temples);
      }

};


getTemples();

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});